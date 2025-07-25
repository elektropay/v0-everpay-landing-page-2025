import type en from "./dictionaries/en.json"

export type Dictionary = {
  common: {
    home: string
    payments: string
    solutions: string
    partners: string
    developers: string
    company: string
    login: string
    getStarted: string
    // Add other common keys as needed
  }
  header: {
    solutions: string
    products: string
    resources: string
    company: string
    signIn: string
    signUp: string
  }
  contactPage: {
    title: string
    description: string
    form: {
      name: string
      email: string
      message: string
      submit: string
    }
  }
  footer: {
    solutions: {
      title: string
      achPayments: string
      creditCardProcessing: string
      digitalWallets: string
      recurringBilling: string
      highRiskProcessing: string
      ecommerce: string
      retail: string
      healthcare: string
    }
    products: {
      title: string
      payments: string
      onlinePayments: string
      commerce: string
      fraudPrevention: string
      cardAcquiring: string
      paymentGateway: string
    }
    resources: {
      title: string
      blog: string
      documentation: string
      apiReference: string
      helpCenter: string
      caseStudies: string
      guides: string
    }
    company: {
      title: string
      aboutUs: string
      careers: string
      contact: string
      partners: string
      press: string
      investors: string
    }
    description: string
    copyright: string
    cookieSettings: string
    privacyPolicy: string
    termsOfService: string
    security: string
    bankingDisclaimer: string
    cookiePolicy: string
  }
  home: {
    heroTitle: string
    heroDescription: string
    getStarted: string
    contactSales: string
    featuresTitle: string
    feature1Title: string
    feature1Description: string
    feature2Title: string
    feature2Description: string
    feature3Title: string
    feature3Description: string
    ctaTitle: string
    ctaDescription: string
    ctaButton: string
  }
  payments: {
    title: string
    overviewTab: string
    featuresTab: string
    pricingTab: string
    overviewContent: {
      title: string
      description: string
      keyBenefits: string
      benefit1: string
      benefit2: string
      benefit3: string
      benefit4: string
      benefit5: string
      cta: string
    }
    featuresContent: {
      title: string
      description: string
      feature1Title: string
      feature1Description: string
      feature2Title: string
      feature2Description: string
      feature3Title: string
      feature3Description: string
      feature4Title: string
      feature4Description: string
      feature5Title: string
      feature5Description: string
    }
    pricingContent: {
      title: string
      description: string
      standardPricing: string
      transactionFee: string
      achFee: string
      internationalFee: string
      customPricing: string
      customPricingDescription: string
      contactSalesButton: string
    }
  }
  onlinePayments: {
    title: string
    heroTitle: string
    heroDescription: string
    featuresTitle: string
    feature1Title: string
    feature1Description: string
    feature2Title: string
    feature2Description: string
    feature3Title: string
    feature3Description: string
    feature4Title: string
    feature4Description: string
    ctaTitle: string
    ctaDescription: string
    ctaButton: string
  }
  commerce: {
    title: string
    heroTitle: string
    heroDescription: string
    featuresTitle: string
    feature1Title: string
    feature1Description: string
    feature2Title: string
    feature2Description: string
    feature3Title: string
    feature3Description: string
    feature4Title: string
    feature4Description: string
    ctaTitle: string
    ctaDescription: string
    ctaButton: string
  }
  fraudPrevention: {
    title: string
    heroTitle: string
    heroDescription: string
    featuresTitle: string
    feature1Title: string
    feature1Description: string
    feature2Title: string
    feature2Description: string
    feature3Title: string
    feature3Description: string
    feature4Title: string
    feature4Description: string
    ctaTitle: string
    ctaDescription: string
    ctaButton: string
  }
  cardIssuing: {
    title: string
    heroTitle: string
    heroDescription: string
    featuresTitle: string
    feature1Title: string
    feature1Description: string
    feature2Title: string
    feature2Description: string
    feature3Title: string
    feature3Description: string
    feature4Title: string
    feature4Description: string
    ctaTitle?: string // Optional, as it's missing in some dictionaries
    ctaDescription?: string // Optional
    ctaButton?: string // Optional
  }
  posSystems: {
    title: string
    heroTitle: string
    heroDescription: string
    featuresTitle: string
    feature1Title: string
    feature1Description: string
    feature2Title: string
    feature2Description: string
    feature3Title: string
    feature3Description: string
    feature4Title: string
    feature4Description: string
    ctaTitle?: string // Optional
    ctaDescription?: string // Optional
    ctaButton?: string // Optional
  }
  documentation: {
    title: string
    heroTitle: string
    heroDescription: string
    sections: Array<{
      title: string
      description: string
      link: string
    }>
  }
  helpCenter: {
    title: string
    heroTitle: string
    heroDescription: string
    searchPlaceholder: string
    categories: Array<{
      title: string
      description: string
      link: string
    }>
    contactSupport: string
    contactButton: string
  }
  aboutUs: {
    title: string
    heroTitle: string
    heroDescription: string
    ourStoryTitle: string
    ourStoryDescription: string
    valuesTitle: string
    value1Title: string
    value1Description: string
    value2Title: string
    value2Description: string
    value3Title: string
    value3Description: string
    value4Title: string
    value4Description: string
    teamTitle: string
    teamDescription: string
    ctaTitle: string
    ctaDescription: string
    ctaButton: string
  }
  careers: {
    title: string
    heroTitle: string
    heroDescription: string
    whyJoinTitle: string
    reason1Title: string
    reason1Description: string
    reason2Title: string
    reason2Description: string
    reason3Title: string
    reason3Description: string
    reason4Title: string
    reason4Description: string
    openPositionsTitle: string
    openPositionsDescription: string
    departments: Array<{
      name: string
      count: number
    }>
    viewAllJobs: string
    ctaTitle: string
    ctaDescription: string
    ctaButton: string
  }
  contact: {
    title: string
    heroTitle: string
    heroDescription: string
    contactOptionsTitle: string
    salesTitle: string
    salesDescription: string
    salesEmail: string
    salesPhone: string
    supportTitle: string
    supportDescription: string
    supportEmail: string
    supportPhone: string
    generalInquiriesTitle: string
    generalInquiriesDescription: string
    generalEmail: string
    formTitle: string
    nameLabel: string
    emailLabel: string
    subjectLabel: string
    messageLabel: string
    submitButton: string
    addressTitle: string
    addressLine1: string
    addressLine2: string
    addressLine3: string
  }
  partners: {
    title: string
    heroTitle: string
    heroDescription: string
    whyPartnerTitle: string
    reason1Title: string
    reason1Description: string
    reason2Title: string
    reason2Description: string
    reason3Title: string
    reason3Description: string
    reason4Title: string
    reason4Description: string
    partnerTypesTitle: string
    type1Title: string
    type1Description: string
    type2Title: string
    type2Description: string
    type3Title: string
    type3Description: string
    ctaTitle: string
    ctaDescription: string
    ctaButton: string
  }
  privacyPolicy: {
    title: string
    heroTitle: string
    heroDescription: string
    sections: Array<{
      title: string
      content: string
    }>
  }
  termsOfService: {
    title: string
    heroTitle: string
    heroDescription: string
    sections: Array<{
      title: string
      content: string
    }>
  }
  cookiePolicy: {
    title: string
    heroTitle: string
    heroDescription: string
    sections: Array<{
      title: string
      content: string
    }>
  }
  solutions: {
    business: {
      title: string
      heroTitle: string
      heroDescription: string
      featuresTitle: string
      feature1Title: string
      feature1Description: string
      feature2Title: string
      feature2Description: string
      feature3Title: string
      feature3Description: string
      feature4Title: string
      feature4Description: string
      ctaTitle: string
      ctaDescription: string
      ctaButton: string
    }
    ecommerce: {
      title: string
      heroTitle: string
      heroDescription: string
      featuresTitle: string
      feature1Title: string
      feature1Description: string
      feature2Title: string
      feature2Description: string
      feature3Title: string
      feature3Description: string
      feature4Title: string
      feature4Description: string
      ctaTitle: string
      ctaDescription: string
      ctaButton: string
    }
    marketplace: {
      title: string
      heroTitle: string
      heroDescription: string
      featuresTitle: string
      feature1Title: string
      feature1Description: string
      feature2Title: string
      feature2Description: string
      feature3Title: string
      feature3Description: string
      feature4Title: string
      feature4Description: string
      ctaTitle: string
      ctaDescription: string
      ctaButton: string
    }
    retail: {
      title: string
      heroTitle: string
      heroDescription: string
      featuresTitle: string
      feature1Title: string
      feature1Description: string
      feature2Title: string
      feature2Description: string
      feature3Title: string
      feature3Description: string
      feature4Title: string
      feature4Description: string
      ctaTitle: string
      ctaDescription: string
      ctaButton: string
    }
  }
}

export type Locale = "en" | "es" | "fr" | "de" | "zh"

export type Messages = typeof en
