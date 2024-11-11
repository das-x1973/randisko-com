// src/configs/appConfig.ts

interface AppConfig {
  region: string
  language: string
}

const appConfig: AppConfig = {
  region: 'UK', // Default region
  language: 'en' // Default language
}

export default appConfig
