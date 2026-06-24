export const ROUTES = {
  HOME: '/',
  ECOSYSTEM: '/he-sinh-thai',
  SECTORS: '/linh-vuc',
  FUND: '/quy-dau-tu',
  ABOUT: '/ve-chung-toi',
  COURSES: '/courses',
  COURSE_DETAIL: '/courses/:id',
} as const

export const QUERY_KEYS = {
  USER: {
    LIST: ['users'],
    DETAIL: (id: string) => ['users', id],
  },
  COURSE: {
    LIST: ['courses'],
    DETAIL: (id: string) => ['courses', id],
  },
} as const
