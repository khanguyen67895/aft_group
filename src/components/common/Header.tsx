import { useState } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui'
import { ROUTES } from '@/constants'
import { staggerContainer, staggerItem } from '@/lib/motion'
import icLogo from '@/assets/image/ic_logo.png'

interface NavChild {
  to: string | null
  label: string
}
interface NavItem {
  to?: string
  label: string
  children?: NavChild[]
}

const NAV: NavItem[] = [
  { to: ROUTES.HOME,      label: 'Trang chủ' },
  { to: ROUTES.ECOSYSTEM, label: 'Hệ sinh thái' },
  {
    label: 'Lĩnh vực',
    children: [
      { to: ROUTES.SECTORS, label: 'Bất động sản' },
      { to: null,            label: 'Hàng hóa phái sinh' },
      { to: null,            label: 'Vàng - Khai thác và giao dịch' },
    ],
  },
  { to: ROUTES.FUND,  label: 'Quỹ đầu tư' },
  { to: ROUTES.ABOUT, label: 'Về chúng tôi' },
]

const linkClass = 'relative pb-1 text-base font-bold tracking-[0.12em] font-[Manrope] uppercase whitespace-nowrap transition-colors'

function ActiveIndicator() {
  return (
    <span className="absolute left-1/2 -translate-x-1/2 -bottom-3 pointer-events-none">
      <span className="relative block w-20 h-1.75">
        <span className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-px bg-linear-to-r from-transparent via-primary to-transparent" />
        <span className="absolute left-1/2 -translate-x-1/2 top-0">
          <svg xmlns="http://www.w3.org/2000/svg" width="23" height="7" viewBox="0 0 23 7" fill="none">
            <g filter="url(#nf)">
              <path d="M2 3.23989L11.6016 2L11.589 5L2 3.23989Z" fill="url(#nl)"/>
              <path d="M21 3.23989L11.3984 2L11.411 5L21 3.23989Z" fill="url(#nr)"/>
            </g>
            <defs>
              <filter id="nf" x="0" y="0" width="23" height="7" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                <feGaussianBlur stdDeviation="1" result="effect1_foregroundBlur"/>
              </filter>
              <radialGradient id="nl" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(11.5 3.5) rotate(90) scale(1.5 9.5)">
                <stop stopColor="#F8E8C0"/><stop offset="1" stopColor="#C09857"/>
              </radialGradient>
              <radialGradient id="nr" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(11.5 3.5) rotate(90) scale(1.5 9.5)">
                <stop stopColor="#F8E8C0"/><stop offset="1" stopColor="#C09857"/>
              </radialGradient>
            </defs>
          </svg>
        </span>
      </span>
    </span>
  )
}

function ChevronDown({ open }: { open?: boolean }) {
  return (
    <svg
      width="10" height="10" viewBox="0 0 10 10" fill="none"
      className={cn('inline-block ml-1 transition-transform duration-200', open && 'rotate-180')}
    >
      <path d="M2.5 4L5 6.5L7.5 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

export function Header() {
  const [open, setOpen] = useState(false)
  const [mobileDropOpen, setMobileDropOpen] = useState(false)
  const location = useLocation()

  const sectorsActive = NAV.find(n => n.children)
    ?.children?.some(c => c.to && location.pathname.startsWith(c.to)) ?? false

  return (
    <motion.header
      className="fixed inset-x-0 top-0 z-1000 bg-[rgba(0,12,29,0.16)] backdrop-blur-sm"
      initial={{ y: -64, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1], delay: 0.1 }}
    >
      <div className="container mx-auto px-4 md:px-8 h-16.5 flex items-center justify-between gap-8">

        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.45, ease: [0.25, 0.1, 0.25, 1], delay: 0.3 }}
        >
          <Link to={ROUTES.HOME} className="flex items-center gap-2.5 shrink-0">
            <img src={icLogo} srcSet={icLogo} alt="AFT Group logo" className="h-12 w-auto shrink-0" />
          </Link>
        </motion.div>

        {/* Desktop nav */}
        <motion.nav
          className="hidden lg:flex items-center gap-7"
          variants={staggerContainer(0.06, 0.35)}
          initial="hidden"
          animate="show"
        >
          {NAV.map((item) => (
            <motion.div key={item.label} variants={staggerItem}>
              {item.children ? (
                /* Dropdown item */
                <div className="relative group">
                  <button
                    className={cn(linkClass, sectorsActive ? 'text-primary' : 'text-text-secondary hover:text-text-primary')}
                  >
                    {item.label}
                    {sectorsActive && <ActiveIndicator />}
                  </button>

                  {/* Dropdown panel */}
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    <div
                      className="min-w-56 rounded-2xl overflow-hidden py-1"
                      style={{
                        background: 'rgba(11,31,58,0.92)',
                        border: '1px solid rgba(246,247,249,0.10)',
                        backdropFilter: 'blur(16px)',
                      }}
                    >
                      {item.children.map((child) =>
                        child.to ? (
                          <NavLink
                            key={child.label}
                            to={child.to}
                            className={({ isActive }) => cn(
                              'block px-4 py-3 text-sm font-[Manrope] font-semibold tracking-wide transition-colors',
                              isActive
                                ? 'text-primary bg-primary/8'
                                : 'text-text-secondary hover:text-text-primary hover:bg-white/5'
                            )}
                          >
                            {child.label}
                          </NavLink>
                        ) : (
                          <span
                            key={child.label}
                            className="flex items-center justify-between px-4 py-3 text-sm font-[Manrope] font-semibold tracking-wide text-text-secondary/40 cursor-not-allowed"
                          >
                            {child.label}
                            <span className="text-[10px] font-normal text-primary/60 ml-3 shrink-0">Sắp ra mắt</span>
                          </span>
                        )
                      )}
                    </div>
                  </div>
                </div>
              ) : (
                /* Regular link */
                <NavLink to={item.to!} end={item.to === ROUTES.HOME}>
                  {({ isActive }) => (
                    <span className={cn(linkClass, isActive ? 'text-primary' : 'text-text-secondary hover:text-text-primary')}>
                      {item.label}
                      {isActive && <ActiveIndicator />}
                    </span>
                  )}
                </NavLink>
              )}
            </motion.div>
          ))}
        </motion.nav>

        {/* Right controls */}
        <motion.div
          className="hidden lg:flex items-center gap-4 shrink-0"
          initial={{ opacity: 0, x: 16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.45, ease: [0.25, 0.1, 0.25, 1], delay: 0.55 }}
        >
          <LangToggle />
          <Button variant="gold" size="sm">Kết nối hợp tác</Button>
        </motion.div>

        {/* Mobile hamburger */}
        <button className="lg:hidden p-1 text-text-secondary hover:text-text-primary transition-colors"
          onClick={() => setOpen(v => !v)} aria-label="Menu">
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
            {open
              ? <><path d="M4 4l14 14"/><path d="M18 4L4 18"/></>
              : <><line x1="3" y1="6" x2="19" y2="6"/><line x1="3" y1="11" x2="19" y2="11"/><line x1="3" y1="16" x2="19" y2="16"/></>}
          </svg>
        </button>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="lg:hidden border-t border-divider overflow-hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <div className="bg-bg/98 backdrop-blur-md">
              <nav className="container mx-auto px-4 py-4 flex flex-col gap-1">
                {NAV.map((item) =>
                  item.children ? (
                    <div key={item.label}>
                      <button
                        onClick={() => setMobileDropOpen(v => !v)}
                        className={cn(
                          'w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-bold tracking-wider font-[Manrope] uppercase transition-colors',
                          sectorsActive ? 'text-primary bg-primary/8' : 'text-text-secondary hover:text-text-primary'
                        )}
                      >
                        {item.label}
                        <ChevronDown open={mobileDropOpen} />
                      </button>

                      <AnimatePresence>
                        {mobileDropOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden pl-3"
                          >
                            {item.children.map((child) =>
                              child.to ? (
                                <NavLink
                                  key={child.label}
                                  to={child.to}
                                  onClick={() => setOpen(false)}
                                  className={({ isActive }) => cn(
                                    'flex items-center px-3 py-2 rounded-lg text-sm font-[Manrope] font-semibold transition-colors',
                                    isActive ? 'text-primary bg-primary/8' : 'text-text-secondary hover:text-text-primary'
                                  )}
                                >
                                  {child.label}
                                </NavLink>
                              ) : (
                                <span
                                  key={child.label}
                                  className="flex items-center justify-between px-3 py-2 text-sm font-[Manrope] font-semibold text-text-secondary/40"
                                >
                                  {child.label}
                                  <span className="text-[10px] text-primary/60 ml-2">Sắp ra mắt</span>
                                </span>
                              )
                            )}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <NavLink key={item.to} to={item.to!} end={item.to === ROUTES.HOME}
                      onClick={() => setOpen(false)}
                      className={({ isActive }) => cn(
                        'px-3 py-2.5 rounded-lg text-sm font-bold tracking-wider font-[Manrope] uppercase transition-colors',
                        isActive ? 'text-primary bg-primary/8' : 'text-text-secondary hover:text-text-primary'
                      )}>
                      {item.label}
                    </NavLink>
                  )
                )}
                <div className="pt-3 border-t border-divider mt-2">
                  <Button variant="gold" size="sm" fullWidth>Kết nối hợp tác</Button>
                </div>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

function LangToggle() {
  return (
    <button className="flex items-center gap-1 text-base font-bold tracking-widest font-[Manrope] text-text-secondary hover:text-text-primary transition-colors">
      VN
      <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
        <path d="M2.5 4L5 6.5L7.5 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </button>
  )
}
