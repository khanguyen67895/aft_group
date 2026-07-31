import { useRef, useState, type ChangeEvent } from 'react'
import { IconPlus } from '@tabler/icons-react'
import { cmsAxios } from '@/lib/cms-axios'
import { cn } from '@/lib/utils'
import { useAdminAuthStore } from '@/stores/adminAuth.store'
import { useContentStore } from '@/stores/content.store'

interface AddGalleryImageButtonProps {
  /** Gallery content key, e.g. "about.hero.slides.extra" */
  id: string
  className?: string
}

export function AddGalleryImageButton({ id, className }: AddGalleryImageButtonProps) {
  const inputRef = useRef<HTMLInputElement>(null)
  const [uploading, setUploading] = useState(false)
  const addGalleryImage = useContentStore(state => state.addGalleryImage)
  const isAuthenticated = useAdminAuthStore(state => state.isAuthenticated)
  const isEditMode = useAdminAuthStore(state => state.isEditMode)

  if (!isAuthenticated || !isEditMode) return null

  async function handleFileChange(e: ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0]
    e.target.value = ''
    if (!file) return

    const formData = new FormData()
    formData.append('image', file)

    setUploading(true)
    try {
      const { data } = await cmsAxios.post<{ images: string[] }>(
        `/content/${encodeURIComponent(id)}/gallery/image`,
        formData,
        { headers: { 'Content-Type': 'multipart/form-data' } }
      )
      addGalleryImage(id, data.images[data.images.length - 1])
    } finally {
      setUploading(false)
    }
  }

  return (
    <>
      <button
        type="button"
        aria-label="Thêm ảnh mới"
        disabled={uploading}
        onClick={() => inputRef.current?.click()}
        className={cn(
          'flex items-center justify-center size-10 rounded-full bg-primary text-bg shadow-md transition-transform hover:scale-110',
          uploading && 'opacity-60 animate-pulse',
          className
        )}
      >
        <IconPlus size={20} stroke={2.5} />
      </button>
      <input
        ref={inputRef}
        type="file"
        accept="image/png,image/jpeg,image/webp,image/gif,image/svg+xml"
        className="hidden"
        onChange={handleFileChange}
      />
    </>
  )
}
