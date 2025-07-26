export type Locale = "en" | "es" | "fr" | "de" | "zh"

export interface Dictionary {
  nav: {
    home: string
    solutions: string
    business: string
    ecommerce: string
    marketplace: string
    retail: string
    products: string
    payments: string
    gateway: string
    pos: string
    issuing: string
    onlinePayments: string
    developers: string
    docs: string
    api: string
    resources: string
    help: string
    blog: string
    partners: string
    about: string
    careers: string
    contact: string
    commerce: string
    security: string
    fraudPrevention: string
  }
  hero: {
    title: string
    subtitle: string
    cta: string
    learnMore: string
  }
  features: {
    title: string
    subtitle: string
    feature1: {
      title: string
      description: string
    }
    feature2: {
      title: string
      description: string
    }
    feature3: {
      title: string
      description: string
    }
  }
  stats: {
    title: string
    subtitle: string
    stat1: {
      value: string
      label: string
    }
    stat2: {
      value: string
      label: string
    }
    stat3: {
      value: string
      label: string
    }
    stat4: {
      value: string
      label: string
    }
  }
  paymentPartners: {
    title: string
    subtitle: string
  }
  checkoutProtection: {
    title: string
    subtitle: string
    feature1: {
      title: string
      description: string
    }
    feature2: {
      title: string
      description: string
    }
    feature3: {
      title: string
      description: string
    }
  }
  businessTypes: {
    title: string
    subtitle: string
    type1: {
      title: string
      description: string
    }
    type2: {
      title: string
      description: string
    }
    type3: {
      title: string
      description: string
    }
    type4: {
      title: string
      description: string
    }
  }
  cta: {
    title: string
    subtitle: string
    button: string
  }
  footer: {
    company: string
    solutions: string
    business: string
    ecommerce: string
    marketplace: string
    retail: string
    products: string
    payments: string
    gateway: string
    pos: string
    issuing: string
    onlinePayments: string
    developers: string
    docs: string
    api: string
    resources: string
    help: string
    blog: string
    partners: string
    about: string
    careers: string
    contact: string
    commerce: string
    security: string
    fraudPrevention: string
    legal: string
    privacy: string
    terms: string
    cookies: string
    copyright: string
  }
  contact: {
    title: string
    subtitle: string
    form: {
      name: string
      email: string
      company: string
      subject: string
      message: string
      submit: string
    }
    info: {
      title: string
      address: string
      phone: string
      email: string
      hours: string
    }
  }
}
