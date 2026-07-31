import { IconX } from '@tabler/icons-react'
import { cmsAxios } from '@/lib/cms-axios'
import { useAdminAuthStore } from '@/stores/adminAuth.store'
import { useContentStore } from '@/stores/content.store'

interface EditableGalleryImageProps {
  /** Gallery content key, e.g. "about.hero.slides.extra" */
  id: string
  /** Index of this image within the gallery's images array */
  index: number
  src: string
  alt: string
  className?: string
}

export function EditableGalleryImage({ id, index, src, alt, className }: EditableGalleryImageProps) {
  const removeGalleryImage = useContentStore(state => state.removeGalleryImage)
  const isAuthenticated = useAdminAuthStore(state => state.isAuthenticated)
  const isEditMode = useAdminAuthStore(state => state.isEditMode)
  const showEditButton = isAuthenticated && isEditMode

  async function handleRemove() {
    await cmsAxios.delete(`/content/${encodeURIComponent(id)}/gallery/image/${index}`)
    removeGalleryImage(id, index)
  }

  return (
    <span className="relative" style={{ display: showEditButton ? 'inline-block' : 'contents' }}>
      <img src={src} alt={alt} className={className} />

      {showEditButton && (
        <button
          type="button"
          aria-label="Xoá ảnh"
          onMouseDown={(e) => e.stopPropagation()}
          onClick={(e) => { e.preventDefault(); e.stopPropagation(); handleRemove() }}
          className="absolute top-1 right-1 z-50 flex items-center justify-center size-7 rounded-full bg-red-600 text-white shadow-md transition-transform hover:scale-110"
        >
          <IconX size={14} stroke={2.5} />
        </button>
      )}
    </span>
  )
}
