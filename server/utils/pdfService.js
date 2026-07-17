import puppeteer from "puppeteer";
import path from "path";
import fs from "fs";

/**
 * Generate PDF from HTML string
 * @param {string} html - Resume HTML Template
 * @returns {string} filePath - Generated PDF path
 */
export const generatePdfFromHtml = async (html) => {
  try {
    // Create temp folder if not exists
    const tempDir = path.join(process.cwd(), "temp");

    if (!fs.existsSync(tempDir)) {
      fs.mkdirSync(tempDir);
    }

    // Launch browser
    const browser = await puppeteer.launch({
      headless: true,
      args: ["--no-sandbox", "--disable-setuid-sandbox"], // For production
    });

    // Open new tab
    const page = await browser.newPage();

    // Load HTML
    await page.setContent(html, {
      waitUntil: "networkidle0",
    });

    // Generate unique file name
    const fileName = `resume-${Date.now()}.pdf`;

    const filePath = path.join(tempDir, fileName);

    // Create PDF
    await page.pdf({
      path: filePath,
      format: "A4",
      printBackground: true,
      margin: {
        top: "20px",
        bottom: "20px",
        left: "20px",
        right: "20px",
      },
    });

    // Close browser
    await browser.close();

    return filePath;
  } catch (error) {
    console.error("PDF Generation Error:", error);
    throw new Error("Failed to generate PDF");
  }
};