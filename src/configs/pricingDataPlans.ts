// src/configs/pricingData.ts

export const pricingData = {
  plans: [
    {
      planId: 'free',
      title: 'Free',
      imgSrc: '/images/illustrations/objects/pricing-basic.png',
      subtitle: 'Best for new users',
      imgWidth: 50,
      imgHeight: 50,
      currentPlan: false,
      popularPlan: false,
      monthlyPrice: 0,
      yearlyPlan: { monthly: 0, annually: 0 },
      speedDatingPrice: 10,
      planBenefits: [
        'Founding Member badge for early adopters',
        'Access to speed dating',

        // 'Limited chat',
      ]
    },
    {
      planId: 'basic',
      title: 'Basic',
      imgSrc: '/images/illustrations/objects/pricing-standard.png',
      subtitle: 'Ideal for frequent users',
      imgWidth: 50,
      imgHeight: 50,
      currentPlan: false,
      popularPlan: true,
      monthlyPrice: 5,
      yearlyPlan: { monthly: 4.5, annually: 54 },
      speedDatingPrice: 5,
      planBenefits: [
        'Founding Member badge for early adopters',
        'Access to speed dating',
        'Reduced speed dating cost',
        'Unlimited chat (limited for Free plan)',
        'Ads free',
        'Limited profile boosts',
      ]
    },
    {
      planId: 'premium',
      title: 'Premium',
      imgSrc: '/images/illustrations/objects/pricing-enterprise.png',
      subtitle: 'All features for power users',
      imgWidth: 50,
      imgHeight: 50,
      currentPlan: true,
      popularPlan: false,
      monthlyPrice: 10,
      yearlyPlan: { monthly: 9, annually: 108 },
      speedDatingPrice: 5,
      planBenefits: [
        'Founding Member badge for early adopters',
        'Access to speed dating',
        'Reduced speed dating cost',
        'Unlimited chat (limited for Free plan)',
        'Ads free',
        'Limited profile boosts',
        'Premium badge',
        'Advanced filters (e.g., interests, activities, relationship goals)',
        'Priority access to all exclusive events',
        'Interest-based group chats and community activities',
      ]
    }
  ],
  faq: [
    {
      id: "1",
      question: "What is included in the Free plan?",
      answer: "The Free plan offers limited chat (think of it as a gentle nudge to upgrade), access to speed dating for £10, and the exclusive Founding Member badge. It’s all about getting a taste before diving in!"
    },
    {
      id: "2",
      question: "Can I cancel anytime?",
      answer: "Absolutely! We believe in love, not entrapment. You can cancel your subscription whenever you want, no strings attached."
    },
    {
      id: "3",
      question: "What are the benefits of the Basic plan?",
      answer: "The Basic plan gives you access to unlimited chat (bye-bye limits), no ads (because we know you’re here for people, not pop-ups), reduced speed dating costs, and some exclusive perks like profile boosts and priority event access. It’s the sweet spot for frequent daters."
    },
    {
      id: "4",
      question: "What additional features does the Premium plan provide?",
      answer: "The Premium plan is the full experience. It includes unlimited chat, no ads, premium badge, advanced filters to find exactly who you want, access to all exclusive events, and even priority access to events. Plus, you’ll get profile boosts to always stand out!"
    },
    {
      id: "5",
      question: "How limited is the chat in the Free plan?",
      answer: "Think of it like an old-fashioned walkie-talkie - you can chat, but not too much. We like to keep it cozy and under control."
    },
    {
      id: "6",
      question: "What is the Founding Member badge?",
      answer: "It's our way of saying 'You were here before it was cool!' Wear it with pride and let others know you are an early adopter."
    },
    {
      id: "7",
      question: "What do you mean by 'Access to speed dating'?",
      answer: "Speed dating isn't just for the brave - it's for anyone with £10 (or £5 if you're Basic or Premium). Meet more people, faster. Just don’t mix it up with your real date's name!"
    },
    {
      id: "8",
      question: "Are ads really gone in the Basic and Premium plans?",
      answer: "Absolutely! No interruptions, no pop-ups. You're here for the dates, not the ads about cat food (unless you love cats, then we're really sorry)."
    },
    {
      id: "9",
      question: "What are profile boosts, and why are they limited?",
      answer: "Think of a profile boost like giving your profile a double-shot espresso. It pushes you to the top! In the Basic plan, they are limited, because we don’t want everyone at the top, right?"
    },
    {
      id: "10",
      question: "What's so special about Premium access to exclusive events?",
      answer: "Imagine parties filled with other power users who want the best - just like you. Exclusive means VIP, and you know what that means: velvet ropes and the good snacks."
    }
  ]
}
