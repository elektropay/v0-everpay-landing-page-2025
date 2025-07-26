export type Locale = "en" | "es" | "fr" | "de" | "zh"

export interface Dictionary {
  nav: {
    home: string
    about: string
    contact: string
    solutions: string
    business: string
    ecommerce: string
    marketplace: string
    retail: string
    products: string
    payments: string
    onlinePayments: string
    pos: string
    issuing: string
    gateway: string
    resources: string
    docs: string
    api: string
    help: string
    blog: string
    partners: string
    careers: string
    security: string
    fraudPrevention: string
  }
  hero: {
    title: string
    subtitle: string
    cta: string
    learnMore: string
  }
  stats: {
    transactions: string
    countries: string
    uptime: string
    customers: string
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
  partners: {
    title: string
    subtitle: string
  }
  protection: {
    title: string
    subtitle: string
    feature1: string
    feature2: string
    feature3: string
  }
  business: {
    title: string
    subtitle: string
    type1: string
    type2: string
    type3: string
    type4: string
  }
  cta: {
    title: string
    subtitle: string
    button: string
  }
  footer: {
    company: string
    solutions: string
    resources: string
    legal: string
    description: string
    rights: string
    terms: string
    privacy: string
    cookies: string
  }
}
