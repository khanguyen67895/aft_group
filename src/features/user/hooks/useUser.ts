import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { userApi } from '../api'
import { QUERY_KEYS } from '@/constants'
import type { UserProfile } from '../types'

export function useUserProfile(id: string) {
  return useQuery({
    queryKey: QUERY_KEYS.USER.DETAIL(id),
    queryFn: () => userApi.getProfile(id),
    enabled: !!id,
  })
}

export function useUpdateProfile(id: string) {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: (payload: Partial<UserProfile>) => userApi.updateProfile(id, payload),
    onSuccess: data => queryClient.setQueryData(QUERY_KEYS.USER.DETAIL(id), data),
  })
}
