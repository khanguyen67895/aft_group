import { motion } from 'framer-motion'
import { fadeUp, staggerContainer, staggerItem, viewport } from '@/lib/motion'

export function SurveyIcon() {
  return (
    <svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="22.5" cy="22.5" r="15.75" stroke="#C6A15B" stroke-width="3.375" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M47.25 47.25L33.75 33.75" stroke="#C6A15B" stroke-width="3.375" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>

  )
}
export function TargetIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="54" height="54" viewBox="0 0 54 54" fill="none">
      <circle cx="27" cy="15.75" r="9" stroke="#C6A15B" stroke-width="3.375" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M13.5 47.25V42.75C13.5 37.7794 17.5294 33.75 22.5 33.75H31.5C36.4706 33.75 40.5 37.7794 40.5 42.75V47.25" stroke="#C6A15B" stroke-width="3.375" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  )
}
export function BlueprintIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="54" height="54" viewBox="0 0 54 54" fill="none">
      <rect x="6.75" y="27" width="13.5" height="18" rx="2.25" stroke="#C6A15B" stroke-width="3.375" stroke-linecap="round" stroke-linejoin="round"/>
      <rect x="20.25" y="18" width="13.5" height="27" rx="2.25" stroke="#C6A15B" stroke-width="3.375" stroke-linecap="round" stroke-linejoin="round"/>
      <rect x="33.75" y="9" width="13.5" height="36" rx="2.25" stroke="#C6A15B" stroke-width="3.375" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M9 45H40.5" stroke="#C6A15B" stroke-width="3.375" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  )
}
export function DocumentIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="54" height="54" viewBox="0 0 54 54" fill="none">
      <rect x="12" y="6.75" width="30" height="40.5" rx="2.25" stroke="#C6A15B" stroke-width="3.375" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M18 18h18M18 27h18M18 36h10.5" stroke="#C6A15B" stroke-width="3.375" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  )
}
export function ReportIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="54" height="54" viewBox="0 0 54 54" fill="none">
      <path d="M31.5 6.75V15.75C31.5 16.9926 32.5074 18 33.75 18H42.75" stroke="#C6A15B" stroke-width="3.375" stroke-linecap="round" stroke-linejoin="round"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M38.25 47.25H15.75C13.2647 47.25 11.25 45.2353 11.25 42.75V11.25C11.25 8.76472 13.2647 6.75 15.75 6.75H31.5L42.75 18V42.75C42.75 45.2353 40.7353 47.25 38.25 47.25Z" stroke="#C6A15B" stroke-width="3.375" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M20.25 38.25V27" stroke="#C6A15B" stroke-width="3.375" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M27 38.25V36" stroke="#C6A15B" stroke-width="3.375" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M33.75 38.25V31.5" stroke="#C6A15B" stroke-width="3.375" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  )
}
export function HandshakeIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="54" height="54" viewBox="0 0 54 54" fill="none">
      <path d="M33.75 22.5L24.75 31.5L38.25 45L47.25 9L6.75 24.75L15.75 29.25L20.25 42.75L27 33.75" stroke="#C6A15B" stroke-width="3.375" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  )
}

const STEPS = [
  { Icon: SurveyIcon,    title: 'Khảo sát nhu cầu',                desc: 'Lắng nghe được mục tiêu và hiện trạng của khách hàng để xác định nhu cầu mới.' },
  { Icon: TargetIcon,    title: 'Xác định khẩu vị rủi ro',         desc: 'Đánh giá năng lực tài chính, mức chịu rủi ro và mục tiêu đầu tư phù hợp.' },
  { Icon: BlueprintIcon, title: 'Thiết kế chiến lược',             desc: 'Xây dựng chiến lược giao dịch theo từng nhóm hàng hóa, khung thời gian và mức rủi ro.' },
  { Icon: DocumentIcon,  title: 'Thiết lập công cụ & theo dõi',    desc: 'Cài đặt hệ thống theo dõi, cảnh báo thị trường và báo cáo biến động danh mục.' },
  { Icon: ReportIcon,    title: 'Báo cáo – tối ưu – kỷ luật',      desc: 'Đánh giá hiệu quả định kỳ, tối ưu chiến lược và duy trì nguyên tắc giao dịch.' },
  { Icon: HandshakeIcon, title: 'Đồng hành mở rộng danh mục',      desc: 'Hỗ trợ mở rộng sản phẩm, tìm kiếm cơ hội mới và tối ưu hiệu suất dài hạn.' },
]

export function DerivativesProcess() {
  return ( 
    <section className="pb-12 relative z-10 overflow-hidden">
      {/* Top fade — blends into the bg-secondary section above */}
      <div
        className="absolute top-0 inset-x-0 h-52 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, var(--color-secondary) 0%, transparent 100%)' }}
      />
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          className="relative overflow-hidden p-6 md:p-10"
          variants={staggerContainer(0.1)} initial="hidden" whileInView="show" viewport={viewport}
        >
          <motion.div
            className="text-left lg:text-center mb-14"
            variants={staggerContainer(0.1)}
          >
            <motion.h2 variants={fadeUp} className="font-[Playfair_Display] font-bold text-2xl md:text-[32px] text-text-primary uppercase">
              Quy trình triển khai tại AFT
            </motion.h2>
          </motion.div>

          {/* Mobile/tablet: vertical timeline — same line + dot pattern as FundSection's O.R.E.B.R list */}
          <motion.div className="lg:hidden relative" variants={staggerContainer(0.08)}>
            <div className="absolute left-1.25 top-3 bottom-3 w-0.5 bg-linear-to-b from-transparent via-primary to-transparent" />
            <div className="flex flex-col gap-4">
              {STEPS.map(({ Icon, title, desc }) => (
                <motion.div key={title} variants={staggerItem} className="flex items-center gap-5">
                  {/* Dot */}
                  <div className="relative z-10 size-3 rounded-full shrink-0 bg-primary shadow-[0_0_10px_3px_rgba(212,175,55,0.45)]" />

                  {/* Card — icon framed above title + description */}
                  <div className="flex items-center gap-3 p-4" style={{ borderRadius: '16px', border: '1px solid rgba(246,247,249,0.10)', background: 'rgba(11,31,58,0.35)' }}>
                    <div className="text-primary [&>svg]:w-7 [&>svg]:h-7 mb-2">
                      <Icon />
                    </div>
                    <div className='flex flex-col'>
                      <div className="font-[Playfair_Display] font-bold text-text-primary text-lg leading-snug">{title}</div>
                      <div className="mt-1.5 text-sm text-text-secondary font-[Manrope] leading-relaxed">{desc}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Dot timeline — desktop only, sits above the cards */}
          <div className="hidden lg:grid grid-cols-6 relative mb-8">
            <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-px"
              style={{ background: 'linear-gradient(90deg, transparent 0%, rgba(198,161,91,0.6) 20%, rgba(198,161,91,0.6) 80%, transparent 100%)' }} />
            {STEPS.map((_, i) => (
              <div key={i} className="relative z-10 flex justify-center">
                <span className="size-2.5 rounded-full shrink-0"
                  style={{
                    background: 'radial-gradient(50% 50% at 50% 50%, #F8E8C0 0%, #C09857 100%)',
                    boxShadow: '0 0 8px 2px rgba(198,161,91,0.7), 0 0 16px 6px rgba(198,161,91,0.35)',
                  }} />
              </div>
            ))}
          </div>

          <motion.div
            className="hidden lg:grid lg:grid-cols-6 gap-4"
            variants={staggerContainer(0.08)}
          >
            {STEPS.map(({ Icon, title, desc }) => (
              <motion.div
                key={title}
                variants={staggerItem}
                className="flex flex-col items-center text-center gap-3 p-5"
                style={{
                  borderRadius: '16px',
                  border: '1px solid rgba(246, 247, 249, 0.15)',
                  background: 'rgba(246, 247, 249, 0.02)',
                }}
              >
                <div className="text-primary [&>svg]:w-9 [&>svg]:h-9">
                  <Icon />
                </div>
                <div>
                  <div className="text-xl font-bold text-text-primary font-[Manrope] leading-snug">{title}</div>
                  <div className="mt-1 text-base text-text-secondary font-[Manrope] leading-relaxed">{desc}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
