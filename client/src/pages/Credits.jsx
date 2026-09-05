import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { toast } from "react-toastify";
import { handleBuyPlan, handleBuyPro } from "../services/paymentService";


import {
  Zap,
  CalendarDays,
  CreditCard,
  FileText,
  Mic,
  BarChart3,
  Mail,
  Check,
  ArrowUpRight,
  Clock,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const Credits = () => {

  const navigate = useNavigate();
  const auth = useSelector((state) => state.auth);

  const [paymentHistory, setPaymentHistory] = useState([]);
  const [loadingPayments, setLoadingPayments] = useState(false);

  const dispatch = useDispatch();

  // =========================
  // PAYMENT HISTORY
  // =========================

  const loadPaymentHistory = async () => {
    try {
      setLoadingPayments(true);

      const { data } = await axios.get(
        "http://localhost:5000/api/v1/payment/history",
        {
          withCredentials: true,
        }
      );

      setPaymentHistory(data.payments || []);
    } catch (error) {
      console.error(
        "Payment history error:",
        error.response?.data || error
      );

      toast.error(
        error.response?.data?.message ||
          "Unable to load payment history."
      );
    } finally {
      setLoadingPayments(false);
    }
  };

  useEffect(() => {
    loadPaymentHistory();
  }, []);

  // =========================
  // HELPERS
  // =========================

  const formatDate = (date) => {
    if (!date) return "N/A";

    return new Date(date).toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  };

  const planName =
    auth.user?.plan === "starter"
      ? "Starter"
      : auth.user?.plan === "pro"
      ? "Pro"
      : "Free";

  const isPro = auth.user?.plan === "pro";

  // =========================
  // CREDIT FEATURES
  // =========================

  const creditFeatures = [
    {
      icon: FileText,
      title: "Resume Analysis",
      description: "Analyze and improve your resume",
      credits: 50,
    },
    {
      icon: Mic,
      title: "Mock Interview",
      description: "Practice an AI-powered interview",
      credits: 30,
    },
    {
      icon: BarChart3,
      title: "ATS Analysis",
      description: "Check your resume ATS score",
      credits: 20,
    },
    {
      icon: Mail,
      title: "Cover Letter",
      description: "Generate a tailored cover letter",
      credits: 10,
    },
  ];

  return (
    <div className="min-h-screen bg-[#F7F9FC] px-4 py-6 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">

        {/* ================================================= */}
        {/* HEADER */}
        {/* ================================================= */}

        <div className="mb-8">
        

          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
            Credits & Billing
          </h1>

          <p className="mt-2 text-sm sm:text-base text-gray-500">
            Manage your AI credits, subscription and payments.
          </p>
        </div>

        {/* ================================================= */}
        {/* CREDIT OVERVIEW */}
        {/* ================================================= */}

        <div className="grid lg:grid-cols-[1.5fr_1fr] gap-5">

          {/* CREDIT BALANCE */}

          <div className="relative overflow-hidden bg-[#0A66C2] rounded-3xl p-6 sm:p-8 text-white">

            {/* Background decoration */}

            <div className="absolute -right-16 -top-16 w-48 h-48 rounded-full bg-white/10" />
            <div className="absolute -right-8 -bottom-20 w-56 h-56 rounded-full bg-white/5" />

            <div className="relative z-10">

              <div className="flex items-center justify-between">

                <div className="flex items-center gap-2 text-blue-100">
                  <Zap size={18} />
                  <span className="text-sm font-medium">
                    Available Credits
                  </span>
                </div>

                <span className="px-3 py-1 rounded-full bg-white/15 text-xs font-semibold">
                  {planName} Plan
                </span>

              </div>

              <div className="mt-6">

                <div className="flex items-end gap-3">

                  <span className="text-5xl sm:text-6xl font-bold tracking-tight">
                    {auth.user?.credits ?? 0}
                  </span>

                  <span className="text-blue-100 mb-2">
                    credits
                  </span>

                </div>

                <p className="text-sm text-blue-100 mt-2">
                  Credits available for AI features
                </p>

              </div>

              <div className="mt-8 flex flex-col sm:flex-row gap-3">

                <button
                   onClick={() =>
    handleBuyPlan({
      plan: "starter",
      dispatch,
      currentToken: auth.token,

      onSuccess: () => {
        toast.success(
          "Payment successful! 300 credits added 🎉"
        );
      },

      onError: (message) => {
        toast.error(message);
      },
    })
  }
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white text-[#0A66C2] font-semibold hover:bg-blue-50 transition"
                >
                  Buy More Credits
                  <ArrowUpRight size={17} />
                </button>

                <button
                  onClick={() => {
                    document
                      .getElementById("plans")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="inline-flex items-center justify-center px-5 py-3 rounded-xl bg-white/10 border border-white/20 text-white font-medium hover:bg-white/15 transition"
                >
                  View Plans
                </button>

              </div>

            </div>
          </div>

          {/* PLAN INFO */}

          <div className="bg-white border border-gray-200 rounded-3xl p-6 sm:p-8">

            <div className="flex items-center gap-3">

              <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-[#0A66C2]">
                <CreditCard size={20} />
              </div>

              <div>
                <p className="text-xs text-gray-500">
                  Current subscription
                </p>

                <h2 className="font-bold text-gray-900">
                  {planName} Plan
                </h2>
              </div>

            </div>

            <div className="mt-7 space-y-5">

              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">
                  Plan status
                </span>

                <span className="px-2.5 py-1 rounded-full bg-green-50 text-green-700 text-xs font-semibold">
                  Active
                </span>
              </div>

              <div className="h-px bg-gray-100" />

              <div className="flex items-center justify-between">

                <div className="flex items-center gap-2 text-gray-500">
                  <CalendarDays size={16} />
                  <span className="text-sm">
                    Valid until
                  </span>
                </div>

                <span className="text-sm font-semibold text-gray-900">
                  {auth.user?.creditExpiry
                    ? formatDate(auth.user.creditExpiry)
                    : "No expiry"}
                </span>

              </div>

              <div className="h-px bg-gray-100" />

              <div className="flex items-center justify-between">

                <span className="text-sm text-gray-500">
                  AI usage
                </span>

                <span className="text-sm font-semibold text-gray-900">
                  {isPro ? "Unlimited" : "Credit based"}
                </span>

              </div>

            </div>

          </div>

        </div>

        {/* ================================================= */}
        {/* CREDIT USAGE */}
        {/* ================================================= */}

        <section className="mt-10">

          <div className="mb-5">

            <h2 className="text-xl font-bold text-gray-900">
              Credit Usage
            </h2>

            <p className="text-sm text-gray-500 mt-1">
              See how many credits each AI feature requires.
            </p>

          </div>

          <div className="bg-white border border-gray-200 rounded-3xl overflow-hidden">

            {creditFeatures.map((feature, index) => {

              const Icon = feature.icon;

              return (
                <div
                  key={feature.title}
                  className={`p-5 sm:p-6 flex items-center justify-between gap-4 ${
                    index !== creditFeatures.length - 1
                      ? "border-b border-gray-100"
                      : ""
                  }`}
                >

                  <div className="flex items-center gap-4 min-w-0">

                    <div className="w-11 h-11 shrink-0 rounded-xl bg-blue-50 text-[#0A66C2] flex items-center justify-center">
                      <Icon size={20} />
                    </div>

                    <div className="min-w-0">

                      <h3 className="font-semibold text-gray-900">
                        {feature.title}
                      </h3>

                      <p className="text-sm text-gray-500 mt-0.5 truncate">
                        {feature.description}
                      </p>

                    </div>

                  </div>

                  <div className="shrink-0 text-right">

                    <p className="font-bold text-gray-900">
                      {feature.credits}
                    </p>

                    <p className="text-xs text-gray-500">
                      credits
                    </p>

                  </div>

                </div>
              );
            })}

          </div>

        </section>

        {/* ================================================= */}
        {/* PLANS */}
        {/* ================================================= */}

        <section id="plans" className="mt-10">

          <div className="mb-5">

            <h2 className="text-xl font-bold text-gray-900">
              Choose a Plan
            </h2>

            <p className="text-sm text-gray-500 mt-1">
              Get more credits and unlock more AI usage.
            </p>

          </div>

          <div className="grid md:grid-cols-2 gap-5">

            {/* STARTER */}

            <div className="relative bg-white border-2 border-[#0A66C2] rounded-3xl p-6 sm:p-7">

              <div className="absolute top-5 right-5">
                <span className="px-3 py-1 rounded-full bg-blue-50 text-[#0A66C2] text-xs font-bold">
                  Popular
                </span>
              </div>

              <p className="text-sm font-semibold text-[#0A66C2]">
                Starter
              </p>

              <div className="flex items-baseline gap-1 mt-2">

                <span className="text-4xl font-bold text-gray-900">
                  ₹99
                </span>

                <span className="text-sm text-gray-500">
                  one-time
                </span>

              </div>

              <p className="text-sm text-gray-500 mt-2">
                Perfect for trying PrepMind AI.
              </p>

              <div className="mt-6 space-y-3">

                <div className="flex gap-2 text-sm text-gray-700">
                  <Check size={17} className="text-green-600 shrink-0" />
                  300 AI credits
                </div>

                <div className="flex gap-2 text-sm text-gray-700">
                  <Check size={17} className="text-green-600 shrink-0" />
                  Credits valid for 60 days
                </div>

                <div className="flex gap-2 text-sm text-gray-700">
                  <Check size={17} className="text-green-600 shrink-0" />
                  Access to AI features
                </div>

              </div>

              
              <button
  onClick={() =>
    handleBuyPlan({
      plan: "starter",
      dispatch,
      currentToken: auth.token,

      onSuccess: () => {
        toast.success(
          "Payment successful! 300 credits added 🎉"
        );
      },

      onError: (message) => {
        toast.error(message);
      },
    })
  }
  className="w-full mt-7 py-3 rounded-xl bg-[#0A66C2] text-white font-semibold hover:bg-[#004182] transition"
>
  Buy Starter
</button>


            </div>

            {/* PRO */}

            <div className="bg-[#111827] text-white rounded-3xl p-6 sm:p-7">

              <p className="text-sm font-semibold text-blue-300">
                Pro
              </p>

              <div className="flex items-baseline gap-1 mt-2">

                <span className="text-4xl font-bold">
                  ₹199
                </span>

                <span className="text-sm text-gray-400">
                  / month
                </span>

              </div>

              <p className="text-sm text-gray-400 mt-2">
                For users who need frequent AI assistance.
              </p>

              <div className="mt-6 space-y-3">

                <div className="flex gap-2 text-sm text-gray-300">
                  <Check size={17} className="text-green-400 shrink-0" />
                  Unlimited AI usage
                </div>

                <div className="flex gap-2 text-sm text-gray-300">
                  <Check size={17} className="text-green-400 shrink-0" />
                  Priority AI features
                </div>

                <div className="flex gap-2 text-sm text-gray-300">
                  <Check size={17} className="text-green-400 shrink-0" />
                  Monthly subscription
                </div>

              </div>

              <button
  onClick={() =>
    handleBuyPro({
      onSuccess: () => {
        toast.success("Pro subscription started 🎉");
      },

      onError: (message) => {
        toast.error(message);
      },
    })
  }
  className="w-full mt-7 py-3 rounded-xl bg-white text-gray-900 font-semibold hover:bg-gray-100 transition"
>
  Upgrade to Pro
</button>

            </div>

          </div>

        </section>

       {/* ================================================= */}
{/* PAYMENT HISTORY */}
{/* ================================================= */}

<section className="mt-10 pb-12">

  <div className="mb-5 flex items-center justify-between">

    <div>
      <h2 className="text-xl font-bold text-gray-900">
        Payment History
      </h2>

      <p className="text-sm text-gray-500 mt-1">
        Your recent purchases and transactions.
      </p>
    </div>

    {/* VIEW ALL */}

    {paymentHistory.length > 2 && (
      <button
        onClick={() => navigate("/payment-history")}
        className="
          inline-flex
          items-center
          gap-1.5
          text-sm
          font-semibold
          text-[#0A66C2]
          hover:text-blue-800
          transition
        "
      >
        View All
        <ArrowUpRight size={16} />
      </button>
    )}

  </div>

  <div className="bg-white border border-gray-200 rounded-3xl overflow-hidden">

    {loadingPayments ? (

      <div className="p-10 text-center text-gray-500">
        Loading payment history...
      </div>

    ) : paymentHistory.length === 0 ? (

      <div className="p-10 text-center">

        <CreditCard
          size={28}
          className="mx-auto text-gray-400"
        />

        <p className="mt-3 font-medium text-gray-900">
          No payments yet
        </p>

        <p className="text-sm text-gray-500 mt-1">
          Your purchases will appear here.
        </p>

      </div>

    ) : (

      <>
        {/* ========================= */}
        {/* DESKTOP */}
        {/* ========================= */}

        <div className="hidden md:block overflow-x-auto">

          <table className="w-full">

            <thead className="bg-gray-50 border-b border-gray-200">

              <tr>

                <th className="text-left px-6 py-4 text-xs font-semibold text-gray-500 uppercase">
                  Plan
                </th>

                <th className="text-left px-6 py-4 text-xs font-semibold text-gray-500 uppercase">
                  Date
                </th>

                <th className="text-left px-6 py-4 text-xs font-semibold text-gray-500 uppercase">
                  Credits
                </th>

                <th className="text-left px-6 py-4 text-xs font-semibold text-gray-500 uppercase">
                  Amount
                </th>

                <th className="text-left px-6 py-4 text-xs font-semibold text-gray-500 uppercase">
                  Status
                </th>

              </tr>

            </thead>

            <tbody>

              {paymentHistory
                .slice(0, 2)
                .map((payment) => (

                  <tr
                    key={payment._id}
                    className="
                      border-b
                      last:border-b-0
                      border-gray-100
                    "
                  >

                    {/* PLAN */}

                    <td className="px-6 py-5">

                      <p className="font-semibold text-gray-900">
                        {payment.plan === "starter"
                          ? "Starter Plan"
                          : payment.plan === "pro"
                          ? "Pro Plan"
                          : payment.plan}
                      </p>

                      <p className="text-xs text-gray-500 mt-1">
                        {payment.paymentType === "subscription"
                          ? "Subscription"
                          : "One-time purchase"}
                      </p>

                    </td>

                    {/* DATE */}

                    <td className="px-6 py-5 text-sm text-gray-600">
                      {formatDate(payment.createdAt)}
                    </td>

                    {/* CREDITS */}

                    <td className="px-6 py-5">

                      <span className="font-semibold text-[#0A66C2]">
                        {payment.creditsAdded > 0
                          ? `+${payment.creditsAdded}`
                          : "Unlimited"}
                      </span>

                    </td>

                    {/* AMOUNT */}

                    <td className="px-6 py-5 font-semibold text-gray-900">
                      ₹{payment.amount}
                    </td>

                    {/* STATUS */}

                    <td className="px-6 py-5">

                      <span
                        className={`
                          inline-flex
                          px-2.5
                          py-1
                          rounded-full
                          text-xs
                          font-semibold
                          ${
                            payment.status === "success"
                              ? "bg-green-50 text-green-700"
                              : "bg-red-50 text-red-700"
                          }
                        `}
                      >
                        {payment.status}
                      </span>

                    </td>

                  </tr>

                ))}

            </tbody>

          </table>

        </div>

        {/* ========================= */}
        {/* MOBILE */}
        {/* ========================= */}

        <div className="md:hidden divide-y divide-gray-100">

          {paymentHistory
            .slice(0, 2)
            .map((payment) => (

              <div
                key={payment._id}
                className="p-5"
              >

                <div className="flex items-start justify-between gap-4">

                  <div>

                    <p className="font-semibold text-gray-900">
                      {payment.plan === "starter"
                        ? "Starter Plan"
                        : payment.plan === "pro"
                        ? "Pro Plan"
                        : payment.plan}
                    </p>

                    <div className="
                      flex
                      items-center
                      gap-1.5
                      mt-1
                      text-xs
                      text-gray-500
                    ">
                      <Clock size={13} />

                      {formatDate(payment.createdAt)}
                    </div>

                  </div>

                  <span
                    className={`
                      px-2.5
                      py-1
                      rounded-full
                      text-xs
                      font-semibold
                      ${
                        payment.status === "success"
                          ? "bg-green-50 text-green-700"
                          : "bg-red-50 text-red-700"
                      }
                    `}
                  >
                    {payment.status}
                  </span>

                </div>

                <div className="grid grid-cols-2 gap-4 mt-5">

                  <div>

                    <p className="text-xs text-gray-500">
                      Amount
                    </p>

                    <p className="font-bold text-gray-900 mt-1">
                      ₹{payment.amount}
                    </p>

                  </div>

                  <div>

                    <p className="text-xs text-gray-500">
                      Credits
                    </p>

                    <p className="font-bold text-[#0A66C2] mt-1">
                      {payment.creditsAdded > 0
                        ? `+${payment.creditsAdded}`
                        : "Unlimited"}
                    </p>

                  </div>

                </div>

              </div>

            ))}

        </div>

        {/* ========================= */}
        {/* VIEW ALL BUTTON */}
        {/* ========================= */}

        {paymentHistory.length > 2 && (
          <div className="border-t border-gray-100 p-4">

            <button
              onClick={() => navigate("/payment-history")}
              className="
                w-full
                py-3
                rounded-xl
                bg-gray-50
                text-[#0A66C2]
                text-sm
                font-semibold
                hover:bg-blue-50
                transition
              "
            >
              View All Payment History
            </button>

          </div>
        )}

      </>

    )}

  </div>

</section>
      </div>
    </div>
  );
};

export default Credits;