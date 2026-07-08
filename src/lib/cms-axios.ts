import axios from 'axios'
import { useAdminAuthStore } from '@/stores/adminAuth.store'

const BASE_URL = import.meta.env.VITE_CMS_API_URL ?? 'http://localhost:4000/api'

export const CMS_ORIGIN = BASE_URL.replace(/\/api\/?$/, '')

export const cmsAxios = axios.create({
  baseURL: BASE_URL,
  timeout: 15000,
})

cmsAxios.interceptors.request.use((config) => {
  const token = useAdminAuthStore.getState().token
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})
