import { create } from 'zustand'
import { CMS_ORIGIN, cmsAxios } from '@/lib/cms-axios'

export type ContentType = 'text' | 'image' | 'gallery'

export interface ContentItem {
  type: ContentType
  valueVi?: string
  valueEn?: string
  imageUrl?: string
  images?: string[]
  updatedAt?: string
}

interface ContentState {
  content: Record<string, ContentItem>
  loaded: boolean
  fetchContent: () => Promise<void>
  setItem: (key: string, item: ContentItem) => void
  addGalleryImage: (key: string, url: string) => void
  removeGalleryImage: (key: string, index: number) => void
}

function resolveUrl(url: string): string {
  return url.startsWith('http') ? url : `${CMS_ORIGIN}${url}`
}

function resolveItem(item: ContentItem): ContentItem {
  if (item.type === 'gallery') {
    return item.images ? { ...item, images: item.images.map(resolveUrl) } : item
  }
  if (item.type !== 'image' || !item.imageUrl || item.imageUrl.startsWith('http')) return item
  return { ...item, imageUrl: resolveUrl(item.imageUrl) }
}

export const useContentStore = create<ContentState>((set) => ({
  content: {},
  loaded: false,
  fetchContent: async () => {
    try {
      const { data } = await cmsAxios.get<Record<string, ContentItem>>('/content')
      const content = Object.fromEntries(
        Object.entries(data).map(([key, item]) => [key, resolveItem(item)])
      )
      set({ content, loaded: true })
    } catch {
      // Backend unreachable — site still renders with hardcoded fallbacks.
      set({ loaded: true })
    }
  },
  setItem: (key, item) => set(state => ({
    content: { ...state.content, [key]: resolveItem(item) },
  })),
  addGalleryImage: (key, url) => set(state => {
    const existing = state.content[key]
    const images = [...(existing?.images ?? []), resolveUrl(url)]
    return { content: { ...state.content, [key]: { type: 'gallery', images } } }
  }),
  removeGalleryImage: (key, index) => set(state => {
    const existing = state.content[key]
    if (!existing?.images) return {}
    const images = existing.images.filter((_, i) => i !== index)
    return { content: { ...state.content, [key]: { ...existing, images } } }
  }),
}))
