import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId, useCdn } from '../env'

export const client = createClient({
  apiVersion:"2023-07-19",
  dataset:"production",
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  useCdn:process.env.NODE_ENV==='production',
  token:process.env.SANITY_ACCESS_TOKEN,
})
