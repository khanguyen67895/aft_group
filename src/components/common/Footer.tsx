import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ROUTES } from '@/constants'
import { fadeUp, staggerContainer, staggerItem, viewport } from '@/lib/motion'
import icLogo         from '@/assets/image/ic_logo.png'
import icLogo2x       from '@/assets/image/ic_logo@2x.png'
import icLogo3x       from '@/assets/image/ic_logo@3x.png'
import icLogoFooter   from '@/assets/image/ic_logo_footer.png'
import icLogoFooter2x from '@/assets/image/ic_logo_footer@2x.png'
import icLogoFooter3x from '@/assets/image/ic_logo_footer@3x.png'
import icMes    from '@/assets/image/ic_mes.png'
import icMes2x  from '@/assets/image/ic_mes@2x.png'
import icMes3x  from '@/assets/image/ic_mes@3x.png'
import icYou    from '@/assets/image/ic_you.png'
import icYou2x  from '@/assets/image/ic_you@2x.png'
import icYou3x  from '@/assets/image/ic_you@3x.png'
import icTik    from '@/assets/image/ic_tik.png'
import icTik2x  from '@/assets/image/ic_tik@2x.png'
import icTik3x  from '@/assets/image/ic_tik@3x.png'
import icFace   from '@/assets/image/ic_face.png'
import icFace2x from '@/assets/image/ic_face@2x.png'
import icFace3x from '@/assets/image/ic_face@3x.png'

const MENU_LINKS = [
  { label: 'Hệ sinh thái', to: ROUTES.ABOUT },
  { label: 'Quỹ đầu tư',   to: ROUTES.ABOUT },
  { label: 'Về chúng tôi', to: ROUTES.ABOUT },
  { label: 'Liên hệ',      to: ROUTES.HOME },
]

const SECTOR_LINKS = [
  { label: 'Khai thác vàng',           to: ROUTES.SECTORS },
  { label: 'Đầu tư vàng bạc',           to: ROUTES.SECTORS },
  { label: 'Copy trade vàng',           to: ROUTES.SECTORS },
  { label: 'Truyền thông data quốc tế', to: ROUTES.SECTORS },
]

const SOCIALS = [
  { label: 'Messenger', src: icMes,  src2x: icMes2x,  src3x: icMes3x,  href: '#' },
  { label: 'YouTube',   src: icYou,  src2x: icYou2x,  src3x: icYou3x,  href: '#' },
  { label: 'TikTok',    src: icTik,  src2x: icTik2x,  src3x: icTik3x,  href: '#' },
  { label: 'Facebook',  src: icFace, src2x: icFace2x, src3x: icFace3x, href: '#' },
]

const colVariants = {
  hidden: { opacity: 0, y: 28 },
  show:   { opacity: 1, y: 0 },
}

export function Footer() {
  return (
    <footer style={{ background: 'rgba(11, 31, 58, 0.30)', backdropFilter: 'blur(20px)' }}>
      {/* ── Main columns ─────────────────────────────────── */}
      <motion.div
        className="container mx-auto px-4 py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2"
        variants={staggerContainer(0.1, 0.05)} initial="hidden" whileInView="show" viewport={viewport}
      >
        {/* Brand col */}
        <motion.div variants={colVariants} transition={{ duration: 0.55, ease: [0.25,0.1,0.25,1] }} className="flex flex-col gap-5">
          <div className="flex items-center gap-2.5">
            <img
              src={icLogo}
              srcSet={`${icLogo} 1x, ${icLogo2x} 2x, ${icLogo3x} 3x`}
              alt="AFT Group logo"
              className="h-12 w-auto shrink-0"
            />
          </div>
          <p className="leading-relaxed max-w-80" style={{ color: '#DBDBDB', fontSize: '16px' }}>
            Khai thác giá trị thật, kết nối cơ hội vàng, lan tỏa thịnh vượng bền vững.
          </p>
          <div className="flex items-center gap-2.5 mt-1">
            {SOCIALS.map(({ label, src, src2x, src3x, href }, i) => (
              <motion.a
                key={label} href={href} aria-label={label}
                className="size-9 rounded-full overflow-hidden shrink-0 transition-opacity"
                whileHover={{ scale: 1.12, opacity: 0.9 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, scale: 0.7 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 + i * 0.07, duration: 0.35 }}
                viewport={{ once: true }}
              >
                <img src={src} srcSet={`${src} 1x, ${src2x} 2x, ${src3x} 3x`}
                  alt={label} className="size-full object-cover" />
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Menu col */}
        <motion.div variants={colVariants} transition={{ duration: 0.55, ease: [0.25,0.1,0.25,1], delay: 0.05 }}>
          <h4 className="font-bold tracking-wider font-[Manrope] mb-5" style={{ color: '#FFF', fontSize: '20px' }}>Menu</h4>
          <motion.ul
            className="flex flex-col gap-3"
            variants={staggerContainer(0.06)} initial="hidden" whileInView="show" viewport={viewport}
          >
            {MENU_LINKS.map(({ label, to }) => (
              <motion.li key={label} variants={staggerItem}>
                <Link to={to} className="hover:text-primary transition-colors" style={{ color: '#DBDBDB', fontSize: '16px' }}>
                  {label}
                </Link>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>

        {/* Sectors col */}
        <motion.div variants={colVariants} transition={{ duration: 0.55, ease: [0.25,0.1,0.25,1], delay: 0.1 }}>
          <h4 className="font-bold tracking-wider font-[Manrope] mb-5" style={{ color: '#FFF', fontSize: '20px' }}>Lĩnh vực</h4>
          <motion.ul
            className="flex flex-col gap-3"
            variants={staggerContainer(0.06)} initial="hidden" whileInView="show" viewport={viewport}
          >
            {SECTOR_LINKS.map(({ label, to }) => (
              <motion.li key={label} variants={staggerItem}>
                <Link to={to} className="hover:text-primary transition-colors" style={{ color: '#DBDBDB', fontSize: '16px' }}>
                  {label}
                </Link>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>

        {/* Contact col */}
        <motion.div variants={colVariants} transition={{ duration: 0.55, ease: [0.25,0.1,0.25,1], delay: 0.15 }}>
          <h4 className="font-bold tracking-wider font-[Manrope] mb-5" style={{ color: '#FFF', fontSize: '20px' }}>Liên hệ</h4>
          <ul className="flex flex-col gap-3">
            <li className="flex items-start gap-2.5">
              <PhoneIcon />
              <span style={{ color: '#DBDBDB', fontSize: '16px' }}>42 Nguyễn Phước Lan, Hòa Xuân, TP Đà Nẵng</span>
            </li>
            <li className="flex items-center gap-2.5">
              <MapIcon />
              <span style={{ color: '#DBDBDB', fontSize: '16px' }}>+84 123456789</span>
            </li>
            <li className="flex items-center gap-2.5">
              <MailIcon />
              <a href="mailto:contactaft@gmail.com" className="hover:text-primary transition-colors" style={{ color: '#DBDBDB', fontSize: '16px' }}>
                contactaft@gmail.com
              </a>
            </li>
          </ul>
        </motion.div>
      </motion.div>

      {/* ── Bottom bar ────────────────────────────────────── */}
      <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={viewport}>
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 1440 27" fill="none" preserveAspectRatio="none">
          <path d="M0 26H360H540H630H649.543C651.749 26 653.857 25.0892 655.369 23.4829L674.631 3.01708C676.143 1.41079 678.251 0.5 680.457 0.5H721H759.592C761.769 0.5 763.853 1.38738 765.361 2.95739L785.139 23.5426C786.647 25.1126 788.731 26 790.908 26H810H900H1080H1440" stroke="#F6F7F9" strokeOpacity="0.1"/>
        </svg>
        <div className="container mx-auto px-4 md:px-8 flex flex-col items-center gap-3 pb-6 -mt-4">
          <img
            src={icLogoFooter}
            srcSet={`${icLogoFooter} 1x, ${icLogoFooter2x} 2x, ${icLogoFooter3x} 3x`}
            alt="AFT Group"
            className="h-auto w-auto"
          />
          <p className="text-caption" style={{ color: '#DBDBDB' }}>
            © 2026 AFT GROUP all rights reserved.
          </p>
        </div>
      </motion.div>
    </footer>
  )
}

/* ── Contact icons ────────────────────────────────────────────────── */

function PhoneIcon() {
  return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M5 4H9L11 9L8.5 10.5C9.57096 12.6715 11.3285 14.429 13.5 15.5L15 13L20 15V19C20 20.1046 19.1046 21 18 21C9.92765 20.5094 3.49056 14.0724 3 6C3 4.89543 3.89543 4 5 4" stroke="#C7CCD1" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M15 7C16.1046 7 17 7.89543 17 9" stroke="#C7CCD1" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M15 3C18.3137 3 21 5.68629 21 9" stroke="#C7CCD1" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
}

function MapIcon() {
  return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <circle cx="12" cy="11" r="3" stroke="#C7CCD1" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M17.657 16.6567L13.414 20.8997C12.6331 21.6798 11.3679 21.6798 10.587 20.8997L6.343 16.6567C3.21892 13.5325 3.21901 8.46723 6.34319 5.3431C9.46738 2.21897 14.5326 2.21897 17.6568 5.3431C20.781 8.46723 20.7811 13.5325 17.657 16.6567V16.6567Z" stroke="#C7CCD1" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
}

function MailIcon() {
  return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <rect x="3" y="5" width="18" height="14" rx="2" stroke="#C7CCD1" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M3 7L12 13L21 7" stroke="#C7CCD1" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
}
