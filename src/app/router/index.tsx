import { createBrowserRouter, Navigate } from 'react-router-dom'
import { MainLayout } from '@/components/layouts'
import { ROUTES } from '@/constants'

export const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        path: ROUTES.HOME,
        lazy: () => import('@/features/home/pages/HomePage').then(m => ({ Component: m.HomePage })),
      },
      {
        path: ROUTES.ECOSYSTEM,
        lazy: () => import('@/features/ecosystem/pages/EcosystemPage').then(m => ({ Component: m.EcosystemPage })),
      },
      {
        path: ROUTES.SECTORS,
        lazy: () => import('@/features/sectors/pages/SectorsPage').then(m => ({ Component: m.SectorsPage })),
      },
      {
        path: ROUTES.FUND,
        lazy: () => import('@/features/home/pages/HomePage').then(m => ({ Component: m.HomePage })),
      },
      {
        path: ROUTES.ABOUT,
        lazy: () => import('@/features/home/pages/HomePage').then(m => ({ Component: m.HomePage })),
      },
      {
        path: ROUTES.COURSES,
        lazy: () => import('@/features/course/pages/CoursesPage').then(m => ({ Component: m.CoursesPage })),
      },
      {
        path: '*',
        element: <Navigate to={ROUTES.HOME} replace />,
      },
    ],
  },
])
