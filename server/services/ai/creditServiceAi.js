import User from "../../models/userModel.js";

const AI_CREDIT_COSTS = {
  generateQuestions: 20,
  evaluateAnswer: 10,
  generateFollowUp: 5,
  generateReport: 20,
};                                    

export const getAICreditCost = (operation) => {
  const cost = AI_CREDIT_COSTS[operation];
                      
  if (!cost) {
    throw new Error(`Unknown AI operation: ${operation}`);
  }

  return cost;
};  


export const checkAICredits = async (userId, operation) => {
  const user = await User.findById(userId);

  if (!user) {
    throw new Error("User not found");
  }

  // Pro users don't need credits
  if (
    user.plan === "pro" &&
    user.subscriptionStatus === "active"
  ) {
    return {
      user,
      isPro: true,
      cost: 0,
    };
  }

  const cost = getAICreditCost(operation);

  if (user.credits < cost) {
    const error = new Error(
      `Insufficient credits. ${cost} credits required.`
    );

    error.statusCode = 402;

    throw error;
  }

  return {
    user,
    isPro: false,
    cost,
  };
};


export const deductAICredits = async (userId, operation) => {
  const { user, isPro, cost } =
    await checkAICredits(userId, operation);

  if (!isPro) {
    user.credits -= cost;
    await user.save();
  }

  return {
    remainingCredits: user.credits,
  };
};