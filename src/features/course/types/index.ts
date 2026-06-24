export interface Course {
  id: string
  title: string
  description: string
  thumbnail?: string
  price: number
  instructor: string
  category: string
  level: 'beginner' | 'intermediate' | 'advanced'
  duration: number
  enrolledCount: number
  rating: number
  createdAt: string
}
