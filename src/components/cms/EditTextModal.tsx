import { useState } from 'react'
import { createPortal } from 'react-dom'
import { IconX } from '@tabler/icons-react'
import { Button } from '@/components/ui'
import { cmsAxios } from '@/lib/cms-axios'
import { useContentStore } from '@/stores/content.store'

interface EditTextModalProps {
  contentKey: string
  initialVi: string
  initialEn: string
  onClose: () => void
}

export function EditTextModal({ contentKey, initialVi, initialEn, onClose }: EditTextModalProps) {
  const setItem = useContentStore(state => state.setItem)
  const [valueVi, setValueVi] = useState(initialVi)
  const [valueEn, setValueEn] = useState(initialEn)
  const [error, setError] = useState<string | null>(null)
  const [saving, setSaving] = useState(false)

  async function handleSave() {
    if (!valueVi.trim() || !valueEn.trim()) {
      setError('Vui lòng nhập cả tiếng Việt và tiếng Anh.')
      return
    }
    setSaving(true)
    setError(null)
    try {
      const { data } = await cmsAxios.put<{ valueVi: string; valueEn: string }>(
        `/content/${encodeURIComponent(contentKey)}`,
        { valueVi: valueVi.trim(), valueEn: valueEn.trim() }
      )
      setItem(contentKey, { type: 'text', valueVi: data.valueVi, valueEn: data.valueEn })
      onClose()
    } catch {
      setError('Lưu thất bại. Vui lòng thử lại.')
    } finally {
      setSaving(false)
    }
  }

  return createPortal(
    <div
      className="fixed inset-0 z-1100 flex items-center justify-center bg-black/60 p-4"
      onMouseDown={(e) => { if (e.target === e.currentTarget) onClose() }}
    >
      <div
        className="w-full max-w-lg rounded-2xl bg-bg-card border border-divider p-6 shadow-2xl"
        onMouseDown={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-bold text-text-primary font-[Manrope]">Chỉnh sửa nội dung</h3>
          <button type="button" onClick={onClose} aria-label="Đóng" className="text-text-secondary hover:text-text-primary">
            <IconX size={20} />
          </button>
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-1.5">
            <label className="text-body-sm font-semibold text-text-secondary">Tiếng Việt</label>
            <textarea
              value={valueVi}
              onChange={(e) => setValueVi(e.target.value)}
              rows={3}
              autoFocus
              className="w-full rounded-lg px-4 py-2.5 text-body-md bg-bg text-text-primary border border-divider outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary resize-y"
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-body-sm font-semibold text-text-secondary">English</label>
            <textarea
              value={valueEn}
              onChange={(e) => setValueEn(e.target.value)}
              rows={3}
              className="w-full rounded-lg px-4 py-2.5 text-body-md bg-bg text-text-primary border border-divider outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary resize-y"
            />
          </div>
          {error && <p className="text-caption text-red-400">{error}</p>}
        </div>

        <div className="flex justify-end gap-3 mt-6">
          <Button type="button" variant="ghost" size="sm" onClick={onClose} disabled={saving}>Hủy</Button>
          <Button type="button" variant="gold" size="sm" onClick={handleSave} isLoading={saving}>Lưu</Button>
        </div>
      </div>
    </div>,
    document.body
  )
}
