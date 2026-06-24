export interface UserProfile {
  id: string
  email: string
  fullName: string
  avatar?: string
  bio?: string
  enrolledCourses: string[]
  createdAt: string
}
