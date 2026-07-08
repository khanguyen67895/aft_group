import { useState, type CSSProperties } from 'react'
import { IconPencil } from '@tabler/icons-react'
import { EditTextModal } from './EditTextModal'
import { useAdminAuthStore } from '@/stores/adminAuth.store'
import { useContentStore } from '@/stores/content.store'
import { useLanguageStore } from '@/stores/language.store'

type Tag = 'span' | 'div' | 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'strong'

interface EditableTextProps {
  /** Unique content key, e.g. "home.hero.title1" */
  id: string
  fallbackVi: string
  /** Defaults to fallbackVi when the site has no English copy for this string yet. */
  fallbackEn?: string
  as?: Tag
  className?: string
  /** Passed straight through to the rendered tag — needed when the original text node carried computed inline styles (animation opacity/transform, gradient text-clip, etc). */
  style?: CSSProperties
}

export function EditableText({ id, fallbackVi, fallbackEn, as: Tag = 'span', className, style }: EditableTextProps) {
  const [modalOpen, setModalOpen] = useState(false)
  const item = useContentStore(state => state.content[id])
  const lang = useLanguageStore(state => state.lang)
  const isAuthenticated = useAdminAuthStore(state => state.isAuthenticated)
  const isEditMode = useAdminAuthStore(state => state.isEditMode)

  const vi = item?.valueVi ?? fallbackVi
  const en = item?.valueEn ?? fallbackEn ?? fallbackVi
  const text = lang === 'en' ? en : vi
  const showEditButton = isAuthenticated && isEditMode

  return (
    <span className="relative" style={{ display: showEditButton ? 'inline-block' : 'contents' }}>
      <Tag className={className} style={style}>{text}</Tag>

      {showEditButton && (
        <button
          type="button"
          aria-label="Chỉnh sửa nội dung"
          onMouseDown={(e) => e.stopPropagation()}
          onClick={(e) => { e.preventDefault(); e.stopPropagation(); setModalOpen(true) }}
          className="absolute -top-2 -right-2 z-50 flex items-center justify-center size-5 rounded-full bg-primary text-bg shadow-md hover:scale-110 transition-transform"
        >
          <IconPencil size={12} stroke={2.5} />
        </button>
      )}

      {modalOpen && (
        <EditTextModal
          contentKey={id}
          initialVi={vi}
          initialEn={item?.valueEn ?? ''}
          onClose={() => setModalOpen(false)}
        />
      )}
    </span>
  )
}
