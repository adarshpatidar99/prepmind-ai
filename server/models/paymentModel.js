import mongoose from "mongoose";

const paymentSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    plan: {
      type: String,
      enum: ["starter", "pro"], 
      required: true,
    },

    paymentType: {
      type: String,
      enum: ["one-time", "subscription"],
      required: true,
    },

    amount: {
      type: Number,
      required: true,
    },

    currency: {
      type: String,
      default: "INR",
    },

    creditsAdded: {
      type: Number,
      default: 0,
    },

    razorpayOrderId: {
      type: String,
      default: null,
    },

    razorpayPaymentId: {
      type: String,
      default: null,
    },

    razorpaySubscriptionId: {
      type: String,
      default: null,
    },

    status: {
      type: String,
      enum: [
        "created",
        "pending",
        "success",
        "failed",
        "cancelled",
      ],
      default: "created",
    },
  },
  {
    timestamps: true,
  }
);

paymentSchema.index({
   user: 1,
   createdAt: -1,                             
});;


paymentSchema.index({
   razorpayOrderId: 1
});


paymentSchema.index({
   razorpayPaymentId: 1,
});


paymentSchema.index({
   razorSubscriptionId: 1,
});


const Payment = mongoose.model("Payment", paymentSchema);

export default Payment;