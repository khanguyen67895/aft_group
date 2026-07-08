import { create } from 'zustand'
import { CMS_ORIGIN, cmsAxios } from '@/lib/cms-axios'

export type ContentType = 'text' | 'image'

export interface ContentItem {
  type: ContentType
  valueVi?: string
  valueEn?: string
  imageUrl?: string
  updatedAt?: string
}

interface ContentState {
  content: Record<string, ContentItem>
  loaded: boolean
  fetchContent: () => Promise<void>
  setItem: (key: string, item: ContentItem) => void
}

function resolveItem(item: ContentItem): ContentItem {
  if (item.type !== 'image' || !item.imageUrl || item.imageUrl.startsWith('http')) return item
  return { ...item, imageUrl: `${CMS_ORIGIN}${item.imageUrl}` }
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
}))
