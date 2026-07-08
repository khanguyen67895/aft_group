import { useRef, useState, type ChangeEvent } from 'react'
import { IconCamera } from '@tabler/icons-react'
import { cmsAxios } from '@/lib/cms-axios'
import { cn } from '@/lib/utils'
import { useAdminAuthStore } from '@/stores/adminAuth.store'
import { useContentStore } from '@/stores/content.store'

interface EditableImageProps {
  /** Unique content key, e.g. "home.hero.img.badge" */
  id: string
  fallbackSrc: string
  alt: string
  className?: string
}

export function EditableImage({ id, fallbackSrc, alt, className }: EditableImageProps) {
  const inputRef = useRef<HTMLInputElement>(null)
  const [uploading, setUploading] = useState(false)
  const item = useContentStore(state => state.content[id])
  const setItem = useContentStore(state => state.setItem)
  const isAuthenticated = useAdminAuthStore(state => state.isAuthenticated)
  const isEditMode = useAdminAuthStore(state => state.isEditMode)

  const src = item?.imageUrl ?? fallbackSrc
  const showEditButton = isAuthenticated && isEditMode

  async function handleFileChange(e: ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0]
    e.target.value = ''
    if (!file) return

    const formData = new FormData()
    formData.append('image', file)

    setUploading(true)
    try {
      const { data } = await cmsAxios.post<{ imageUrl: string }>(
        `/content/${encodeURIComponent(id)}/image`,
        formData,
        { headers: { 'Content-Type': 'multipart/form-data' } }
      )
      setItem(id, { type: 'image', imageUrl: data.imageUrl })
    } finally {
      setUploading(false)
    }
  }

  return (
    <span className="relative" style={{ display: showEditButton ? 'inline-block' : 'contents' }}>
      <img src={src} alt={alt} className={className} />

      {showEditButton && (
        <>
          <button
            type="button"
            aria-label="Đổi ảnh"
            disabled={uploading}
            onMouseDown={(e) => e.stopPropagation()}
            onClick={(e) => { e.preventDefault(); e.stopPropagation(); inputRef.current?.click() }}
            className={cn(
              'absolute bottom-1 right-1 z-50 flex items-center justify-center size-7 rounded-full bg-primary text-bg shadow-md transition-transform hover:scale-110',
              uploading && 'opacity-60 animate-pulse'
            )}
          >
            <IconCamera size={14} stroke={2.5} />
          </button>
          <input
            ref={inputRef}
            type="file"
            accept="image/png,image/jpeg,image/webp,image/gif,image/svg+xml"
            className="hidden"
            onChange={handleFileChange}
          />
        </>
      )}
    </span>
  )
}
