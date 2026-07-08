import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { cmsAxios } from '@/lib/cms-axios'

interface AdminAuthState {
  token: string | null
  email: string | null
  isAuthenticated: boolean
  isEditMode: boolean
  login: (email: string, password: string) => Promise<void>
  logout: () => void
  toggleEditMode: () => void
}

export const useAdminAuthStore = create<AdminAuthState>()(
  persist(
    (set) => ({
      token: null,
      email: null,
      isAuthenticated: false,
      isEditMode: false,
      login: async (email, password) => {
        const { data } = await cmsAxios.post<{ token: string; email: string }>('/auth/login', { email, password })
        set({ token: data.token, email: data.email, isAuthenticated: true, isEditMode: true })
      },
      logout: () => set({ token: null, email: null, isAuthenticated: false, isEditMode: false }),
      toggleEditMode: () => set(state => ({ isEditMode: !state.isEditMode })),
    }),
    { name: 'aft-admin-auth' }
  )
)
