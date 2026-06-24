import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ROUTES } from '@/constants'
import { fadeUp, staggerContainer, staggerItem, viewport } from '@/lib/motion'
import icLogo    from '@/assets/image/ic_logo.png'
import icLogo2x  from '@/assets/image/ic_logo@2x.png'
import icLogo3x  from '@/assets/image/ic_logo@3x.png'

const MENU_LINKS = [
  { label: 'Giới thiệu',    to: ROUTES.ABOUT },
  { label: 'Về chúng tôi',  to: ROUTES.ABOUT },
  { label: 'Tầm nhìn 2035', to: ROUTES.ABOUT },
  { label: 'Tin tức',       to: ROUTES.HOME },
]

const SECTOR_LINKS = [
  { label: 'Khai thác vàng',           to: ROUTES.SECTORS },
  { label: 'Đầu tư vàng bạc',           to: ROUTES.SECTORS },
  { label: 'Copy trade vàng',           to: ROUTES.SECTORS },
  { label: 'Truyền thông data quốc tế', to: ROUTES.SECTORS },
]

const SOCIALS = [
  { label: 'Messenger', icon: <MessengerIcon />, href: '#', bg: 'bg-[#006AFF]' },
  { label: 'YouTube',   icon: <YoutubeIcon />,   href: '#', bg: 'bg-[#FF0000]' },
  { label: 'TikTok',    icon: <TiktokIcon />,    href: '#', bg: 'bg-[#010101]' },
  { label: 'Facebook',  icon: <FacebookIcon />,  href: '#', bg: 'bg-[#1877F2]' },
]

const colVariants = {
  hidden: { opacity: 0, y: 28 },
  show:   { opacity: 1, y: 0 },
}

export function Footer() {
  return (
    <footer className="bg-secondary border-t border-divider">
      {/* ── Main columns ─────────────────────────────────── */}
      <motion.div
        className="container mx-auto px-4 md:px-8 py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10"
        variants={staggerContainer(0.1, 0.05)} initial="hidden" whileInView="show" viewport={viewport}
      >
        {/* Brand col */}
        <motion.div variants={colVariants} transition={{ duration: 0.55, ease: [0.25,0.1,0.25,1] }} className="flex flex-col gap-5">
          <div className="flex items-center gap-2.5">
            <img
              src={icLogo}
              srcSet={`${icLogo} 1x, ${icLogo2x} 2x, ${icLogo3x} 3x`}
              alt="AFT Group logo"
              className="h-8 w-auto shrink-0"
            />
            <div className="flex flex-col leading-none gap-0.5">
              <span className="text-[13px] font-extrabold tracking-[0.14em] font-[Manrope] text-text-primary">
                AFT <span className="text-primary">GROUP</span>
              </span>
              <span className="text-[6.5px] tracking-[0.1em] text-text-disable font-[Manrope] uppercase">
                Accelerating Finance Through Trust
              </span>
            </div>
          </div>
          <p className="text-body-sm text-text-secondary leading-relaxed max-w-55">
            Khai thác giá trị thật, kết nối cơ hội vàng, lan tỏa thịnh vượng bền vững.
          </p>
          <div className="flex items-center gap-2.5 mt-1">
            {SOCIALS.map(({ label, icon, href, bg }, i) => (
              <motion.a
                key={label} href={href} aria-label={label}
                className={`size-9 rounded-full ${bg} flex items-center justify-center transition-opacity`}
                whileHover={{ scale: 1.12, opacity: 0.9 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, scale: 0.7 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 + i * 0.07, duration: 0.35 }}
                viewport={{ once: true }}
              >
                {icon}
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Menu col */}
        <motion.div variants={colVariants} transition={{ duration: 0.55, ease: [0.25,0.1,0.25,1], delay: 0.05 }}>
          <h4 className="text-sm font-bold tracking-wider font-[Manrope] text-text-primary mb-5">Menu</h4>
          <motion.ul
            className="flex flex-col gap-3"
            variants={staggerContainer(0.06)} initial="hidden" whileInView="show" viewport={viewport}
          >
            {MENU_LINKS.map(({ label, to }) => (
              <motion.li key={label} variants={staggerItem}>
                <Link to={to} className="text-body-sm text-text-secondary hover:text-primary transition-colors">
                  {label}
                </Link>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>

        {/* Sectors col */}
        <motion.div variants={colVariants} transition={{ duration: 0.55, ease: [0.25,0.1,0.25,1], delay: 0.1 }}>
          <h4 className="text-sm font-bold tracking-wider font-[Manrope] text-text-primary mb-5">Lĩnh vực</h4>
          <motion.ul
            className="flex flex-col gap-3"
            variants={staggerContainer(0.06)} initial="hidden" whileInView="show" viewport={viewport}
          >
            {SECTOR_LINKS.map(({ label, to }) => (
              <motion.li key={label} variants={staggerItem}>
                <Link to={to} className="text-body-sm text-text-secondary hover:text-primary transition-colors">
                  {label}
                </Link>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>

        {/* Contact col */}
        <motion.div variants={colVariants} transition={{ duration: 0.55, ease: [0.25,0.1,0.25,1], delay: 0.15 }}>
          <h4 className="text-sm font-bold tracking-wider font-[Manrope] text-text-primary mb-5">Liên hệ</h4>
          <ul className="flex flex-col gap-3">
            <li className="flex items-start gap-2.5">
              <PhoneIcon />
              <span className="text-body-sm text-text-secondary">42 Nguyễn Phước Lan, Hòa Xuân, TP Đà Nẵng</span>
            </li>
            <li className="flex items-center gap-2.5">
              <MapIcon />
              <span className="text-body-sm text-text-secondary">+84 123456789</span>
            </li>
            <li className="flex items-center gap-2.5">
              <MailIcon />
              <a href="mailto:contactaft@gmail.com" className="text-body-sm text-text-secondary hover:text-primary transition-colors">
                contactaft@gmail.com
              </a>
            </li>
          </ul>
        </motion.div>
      </motion.div>

      {/* ── Bottom bar ────────────────────────────────────── */}
      <motion.div
        className="border-t border-divider py-6"
        variants={fadeUp} initial="hidden" whileInView="show" viewport={viewport}
      >
        <div className="container mx-auto px-4 md:px-8 flex flex-col items-center gap-3">
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none" opacity="0.5">
            <path d="M14 3L24 21H4L14 3Z" fill="url(#ft-grad)"/>
            <defs>
              <linearGradient id="ft-grad" x1="14" y1="3" x2="14" y2="21" gradientUnits="userSpaceOnUse">
                <stop stopColor="#F8EBC0"/>
                <stop offset="1" stopColor="#C09857"/>
              </linearGradient>
            </defs>
          </svg>
          <p className="text-caption text-text-disable">
            © 2026 AFT GROUP all rights reserved.
          </p>
        </div>
      </motion.div>
    </footer>
  )
}

/* ── Tiny icon set ─────────────────────────────────────────────────── */

function MessengerIcon() {
  return <svg width="16" height="16" viewBox="0 0 24 24" fill="white"><path d="M12 2C6.477 2 2 6.145 2 11.243c0 2.906 1.306 5.499 3.37 7.282V22l3.057-1.679A11.023 11.023 0 0012 20.486c5.523 0 10-4.145 10-9.243C22 6.145 17.523 2 12 2zm1.019 12.445l-2.548-2.714-4.973 2.714 5.472-5.807 2.611 2.714 4.91-2.714-5.472 5.807z"/></svg>
}

function YoutubeIcon() {
  return <svg width="16" height="16" viewBox="0 0 24 24" fill="white"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
}

function TiktokIcon() {
  return <svg width="14" height="14" viewBox="0 0 24 24" fill="white"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.17 8.17 0 004.79 1.54V6.79a4.86 4.86 0 01-1.02-.1z"/></svg>
}

function FacebookIcon() {
  return <svg width="14" height="14" viewBox="0 0 24 24" fill="white"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
}

function PhoneIcon() {
  return <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#C6A15B" strokeWidth="1.8" className="shrink-0 mt-0.5"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.82 9.87a19.79 19.79 0 01-3.07-8.67A2 2 0 012.73 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 9.91a16 16 0 006.18 6.18l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
}

function MapIcon() {
  return <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#C6A15B" strokeWidth="1.8" className="shrink-0"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
}

function MailIcon() {
  return <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#C6A15B" strokeWidth="1.8" className="shrink-0"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
}
