import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { courseApi } from '../api'
import { QUERY_KEYS } from '@/constants'

export function useCourses(params?: { page?: number; limit?: number; category?: string }) {
  return useQuery({
    queryKey: [...QUERY_KEYS.COURSE.LIST, params],
    queryFn: () => courseApi.getAll(params),
  })
}

export function useCourse(id: string) {
  return useQuery({
    queryKey: QUERY_KEYS.COURSE.DETAIL(id),
    queryFn: () => courseApi.getById(id),
    enabled: !!id,
  })
}

export function useEnrollCourse() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: (id: string) => courseApi.enroll(id),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: QUERY_KEYS.COURSE.LIST }),
  })
}
