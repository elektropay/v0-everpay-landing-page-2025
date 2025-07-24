export type Dictionary = {
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

export type Locale = keyof typeof import("./dictionaries").dictionaryLoaders
