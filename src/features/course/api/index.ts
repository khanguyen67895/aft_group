import { axiosInstance } from '@/lib/axios'
import type { ApiResponse, PaginatedResponse } from '@/types'
import type { Course } from '../types'

export const courseApi = {
  getAll: (params?: { page?: number; limit?: number; category?: string }) =>
    axiosInstance.get<PaginatedResponse<Course>>('/courses', { params }).then(r => r.data),

  getById: (id: string) =>
    axiosInstance.get<ApiResponse<Course>>(`/courses/${id}`).then(r => r.data),

  enroll: (id: string) =>
    axiosInstance.post(`/courses/${id}/enroll`).then(r => r.data),
}
