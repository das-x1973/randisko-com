// src/configs/pricingData.ts


export const pricingData = {
  plans: [
    {
      planId: 'free',
      title: 'Starter',
      imgSrc: 'starter-plan.png',
      subtitle: 'Best for new users',
      imgWidth: 50,
      imgHeight: 50,
      currentPlan: false,
      popularPlan: false,
      monthlyPrice: 0,
      yearlyPlan: { monthly: 0, annually: 0 },
      speedDatingPrice: 10,
      adFree: false,
      planBenefits: [
        'Limited chat',
        'Access to speed dating',
        'Ads included'
      ]
    },
    {
      planId: 'basic',
      title: 'Pro',
      imgSrc: 'pro-plan.png',
      subtitle: 'Ideal for frequent users',
      imgWidth: 50,
      imgHeight: 50,
      currentPlan: false,
      popularPlan: true,
      monthlyPrice: 5,
      yearlyPlan: { monthly: 4.5, annually: 54 },
      speedDatingPrice: 5,
      adFree: true,
      planBenefits: [
        'Unlimited chat',
        'Reduced speed dating cost',
        'No ads'
      ]
    },
    {
      planId: 'premium',
      title: 'Enterprise',
      imgSrc: 'enterprise-plan.png',
      subtitle: 'All features for power users',
      imgWidth: 50,
      imgHeight: 50,
      currentPlan: true,
      popularPlan: false,
      monthlyPrice: 10,
      yearlyPlan: { monthly: 9, annually: 108 },
      speedDatingPrice: 5,
      adFree: true,
      planBenefits: [
        'Unlimited chat',
        'Reduced speed dating cost',
        'No ads',
        'Priority support'
      ]
    }
  ],
  faq: [
    {
      id: '1',
      question: 'What is included in the Starter plan?',
      answer: 'The Starter plan offers limited chat, access to speed dating for £10, and includes ads.'
    },
    {
      id: '2',
      question: 'Can I cancel anytime?',
      answer: 'Yes, you can cancel your subscription at any time without any penalties.'
    },
    
    // Add more FAQs as needed
  ]
}

