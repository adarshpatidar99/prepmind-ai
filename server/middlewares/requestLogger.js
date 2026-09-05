import logger from "../utils/logger.js";

const requestLogger = (req, res, next) => {

  const startTime = Date.now();

  res.on("finish", () => {

    const duration =
      Date.now() - startTime;

    logger.info("HTTP Request", {
      method: req.method,
      url: req.originalUrl,
      statusCode: res.statusCode,
      duration: `${duration}ms`,
      userId: req.user?._id?.toString(),
    });

  });

  next();
};

export default requestLogger;