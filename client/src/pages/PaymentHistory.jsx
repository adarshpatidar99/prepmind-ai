import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import {
  CreditCard,
  ArrowLeft,
  Clock,
  CheckCircle2,
  XCircle,
} from "lucide-react";
import { Link } from "react-router-dom";

const PaymentHistory = () => {
  const [paymentHistory, setPaymentHistory] = useState([]);
  const [loading, setLoading] = useState(true);

  // =========================
  // LOAD PAYMENT HISTORY
  // =========================

  useEffect(() => {
    const loadPaymentHistory = async () => {
      try {
        setLoading(true);

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
        setLoading(false);
      }
    };

    loadPaymentHistory();
  }, []);

  // =========================
  // FORMAT DATE
  // =========================

  const formatDate = (date) => {
    if (!date) return "N/A";

    return new Date(date).toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  };

  // =========================
  // FORMAT PAYMENT TYPE
  // =========================

  const getPaymentType = (payment) => {
    if (payment.plan === "pro") {
      return "Monthly subscription";
    }

    return "One-time purchase";
  };

  // =========================
  // PLAN NAME
  // =========================

  const getPlanName = (plan) => {
    if (plan === "starter") {
      return "Starter Plan";
    }

    if (plan === "pro") {
      return "Pro Plan";
    }

    return plan || "Unknown Plan";
  };

  return (
    <div className="min-h-screen bg-[#F7F9FC] px-4 py-6 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">

        {/* =========================
            HEADER
        ========================= */}

        <div className="mb-8">

          <Link
            to="/credits"
            className="
              inline-flex
              items-center
              gap-2
              text-sm
              text-gray-600
              hover:text-[#0A66C2]
              transition
              mb-5
            "
          >
            <ArrowLeft size={17} />
            Back to Credits
          </Link>

          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
            Payment History
          </h1>

          <p className="mt-2 text-sm sm:text-base text-gray-500">
            View all your purchases, subscriptions and payment
            transactions.
          </p>

        </div>

        {/* =========================
            PAYMENT CARD
        ========================= */}

        <div className="bg-white border border-gray-200 rounded-3xl overflow-hidden">

          {loading ? (

            /* LOADING */

            <div className="p-12 text-center">

              <div className="w-10 h-10 mx-auto border-4 border-blue-100 border-t-[#0A66C2] rounded-full animate-spin" />

              <p className="mt-4 text-sm text-gray-500">
                Loading payment history...
              </p>

            </div>

          ) : paymentHistory.length === 0 ? (

            /* NO PAYMENTS */

            <div className="p-12 text-center">

              <CreditCard
                size={32}
                className="mx-auto text-gray-400"
              />

              <h2 className="mt-4 font-semibold text-gray-900">
                No payments yet
              </h2>

              <p className="mt-1 text-sm text-gray-500">
                Your purchases and subscriptions will appear here.
              </p>

              <Link
                to="/credits"
                className="
                  inline-flex
                  mt-6
                  px-5
                  py-2.5
                  rounded-xl
                  bg-[#0A66C2]
                  text-white
                  text-sm
                  font-semibold
                  hover:bg-[#004182]
                  transition
                "
              >
                View Plans
              </Link>

            </div>

          ) : (

            <>

              {/* =========================
                  DESKTOP TABLE
              ========================= */}

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
                        Type
                      </th>

                      <th className="text-left px-6 py-4 text-xs font-semibold text-gray-500 uppercase">
                        Amount
                      </th>

                      <th className="text-left px-6 py-4 text-xs font-semibold text-gray-500 uppercase">
                        Credits
                      </th>

                      <th className="text-left px-6 py-4 text-xs font-semibold text-gray-500 uppercase">
                        Status
                      </th>

                    </tr>

                  </thead>

                  <tbody>

                    {paymentHistory.map((payment) => (

                      <tr
                        key={payment._id}
                        className="border-b last:border-b-0 border-gray-100 hover:bg-gray-50 transition"
                      >

                        {/* PLAN */}

                        <td className="px-6 py-5">

                          <p className="font-semibold text-gray-900">
                            {getPlanName(payment.plan)}
                          </p>

                          <p className="text-xs text-gray-500 mt-1">
                            {payment.plan === "pro"
                              ? "Recurring subscription"
                              : "Credit purchase"}
                          </p>

                        </td>

                        {/* DATE */}

                        <td className="px-6 py-5">

                          <div className="flex items-center gap-2 text-sm text-gray-600">

                            <Clock size={14} />

                            {formatDate(payment.createdAt)}

                          </div>

                        </td>

                        {/* TYPE */}

                        <td className="px-6 py-5 text-sm text-gray-600">
                          {getPaymentType(payment)}
                        </td>

                        {/* AMOUNT */}

                        <td className="px-6 py-5">

                          <span className="font-semibold text-gray-900">
                            ₹{payment.amount}
                          </span>

                        </td>

                        {/* CREDITS */}

                        <td className="px-6 py-5">

                          {payment.creditsAdded > 0 ? (

                            <span className="font-semibold text-[#0A66C2]">
                              +{payment.creditsAdded}
                            </span>

                          ) : (

                            <span className="text-gray-400">
                              —
                            </span>

                          )}

                        </td>

                        {/* STATUS */}

                        <td className="px-6 py-5">

                          {payment.status === "success" ? (

                            <span className="
                              inline-flex
                              items-center
                              gap-1.5
                              px-2.5
                              py-1
                              rounded-full
                              bg-green-50
                              text-green-700
                              text-xs
                              font-semibold
                            ">
                              <CheckCircle2 size={13} />
                              Success
                            </span>

                          ) : (

                            <span className="
                              inline-flex
                              items-center
                              gap-1.5
                              px-2.5
                              py-1
                              rounded-full
                              bg-red-50
                              text-red-700
                              text-xs
                              font-semibold
                            ">
                              <XCircle size={13} />
                              {payment.status}
                            </span>

                          )}

                        </td>

                      </tr>

                    ))}

                  </tbody>

                </table>

              </div>

              {/* =========================
                  MOBILE
              ========================= */}

              <div className="md:hidden divide-y divide-gray-100">

                {paymentHistory.map((payment) => (

                  <div
                    key={payment._id}
                    className="p-5"
                  >

                    <div className="flex items-start justify-between gap-4">

                      <div>

                        <h3 className="font-semibold text-gray-900">
                          {getPlanName(payment.plan)}
                        </h3>

                        <div className="flex items-center gap-1.5 mt-1 text-xs text-gray-500">

                          <Clock size={13} />

                          {formatDate(payment.createdAt)}

                        </div>

                      </div>

                      {payment.status === "success" ? (

                        <span className="
                          px-2.5
                          py-1
                          rounded-full
                          bg-green-50
                          text-green-700
                          text-xs
                          font-semibold
                        ">
                          Success
                        </span>

                      ) : (

                        <span className="
                          px-2.5
                          py-1
                          rounded-full
                          bg-red-50
                          text-red-700
                          text-xs
                          font-semibold
                        ">
                          {payment.status}
                        </span>

                      )}

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
                            : "—"}

                        </p>

                      </div>

                    </div>

                    <div className="mt-4">

                      <p className="text-xs text-gray-500">
                        Payment Type
                      </p>

                      <p className="text-sm font-medium text-gray-700 mt-1">
                        {getPaymentType(payment)}
                      </p>

                    </div>

                  </div>

                ))}

              </div>

            </>

          )}

        </div>

      </div>
    </div>
  );
};

export default PaymentHistory;