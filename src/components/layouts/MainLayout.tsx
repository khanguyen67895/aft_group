import { Outlet } from 'react-router-dom'
import { AdminToolbar } from '@/components/common/AdminToolbar'
import { Header } from '@/components/common/Header'
import { Footer } from '@/components/common/Footer'
import { ScrollToTop } from '@/components/common/ScrollToTop'

export function MainLayout() {
  return (
    <div className="min-h-screen bg-bg flex flex-col">
      <ScrollToTop />
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <AdminToolbar />
    </div>
  )
}
