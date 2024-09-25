import { createClient } from 'microcms-js-sdk'

export const client = createClient({
  serviceDomain: process.env.MICRO_CMS_DOMAIN || 'defaultServiceDomain',
  apiKey: process.env.MICRO_CMS_API_KEY || 'defaultApiKey',
})
