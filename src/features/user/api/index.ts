import { axiosInstance } from '@/lib/axios'
import type { ApiResponse } from '@/types'
import type { UserProfile } from '../types'

export const userApi = {
  getProfile: (id: string) =>
    axiosInstance.get<ApiResponse<UserProfile>>(`/users/${id}`).then(r => r.data),

  updateProfile: (id: string, payload: Partial<UserProfile>) =>
    axiosInstance.put<ApiResponse<UserProfile>>(`/users/${id}`, payload).then(r => r.data),
}
