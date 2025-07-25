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
    copyright: string
    cookieSettings: string
    privacyPolicy: string
    termsOfService: string
    security: string
    bankingDisclaimer: string
  }
}

export type Locale = "en" | "es" | "fr" | "de" | "zh"
