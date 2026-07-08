import { IconEdit, IconLogout } from '@tabler/icons-react'
import { cn } from '@/lib/utils'
import { useAdminAuthStore } from '@/stores/adminAuth.store'

export function AdminToolbar() {
  const isAuthenticated = useAdminAuthStore(state => state.isAuthenticated)
  const isEditMode = useAdminAuthStore(state => state.isEditMode)
  const toggleEditMode = useAdminAuthStore(state => state.toggleEditMode)
  const logout = useAdminAuthStore(state => state.logout)

  if (!isAuthenticated) return null

  return (
    <div className="fixed bottom-4 left-4 z-1200 flex items-center gap-2 rounded-full border border-divider bg-bg-card/95 backdrop-blur px-3 py-2 shadow-2xl">
      <button
        type="button"
        onClick={toggleEditMode}
        className={cn(
          'flex items-center gap-2 rounded-full px-3 py-1.5 text-sm font-semibold font-[Manrope] transition-colors',
          isEditMode ? 'bg-primary text-bg' : 'bg-transparent text-text-secondary hover:text-text-primary'
        )}
      >
        <IconEdit size={16} />
        {isEditMode ? 'Đang chỉnh sửa' : 'Bật chỉnh sửa'}
      </button>

      <button
        type="button"
        onClick={logout}
        aria-label="Đăng xuất"
        className="flex items-center gap-1 rounded-full px-3 py-1.5 text-sm font-semibold text-text-secondary hover:text-text-primary transition-colors"
      >
        <IconLogout size={16} />
      </button>
    </div>
  )
}
