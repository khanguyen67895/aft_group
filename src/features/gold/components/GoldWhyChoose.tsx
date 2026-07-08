import { motion } from 'framer-motion'
import { fadeUp, staggerContainer, staggerItem, viewport } from '@/lib/motion'
import { SurveyIcon, TargetIcon, BlueprintIcon, ReportIcon, HandshakeIcon } from '@/features/derivatives/components/DerivativesProcess'
import { EditableText } from '@/components/cms'

const REASONS = [
  { Icon: SurveyIcon,    title: 'Kỷ luật và minh bạch',                 desc: 'Quy trình chuẩn quốc tế, báo cáo minh bạch, cam kết đạo đức.' },
  { Icon: TargetIcon,    title: 'Năng lực thị trường quốc tế',          desc: 'Kết nối sâu rộng với các thị trường, tổ chức và đối tác toàn cầu.' },
  { Icon: BlueprintIcon, title: 'Hệ sinh thái tài sản – công nghệ',     desc: 'Kết hợp tài chính, công nghệ và dữ liệu tạo lợi thế bền vững.' },
  { Icon: ReportIcon,    title: 'Quản trị rủi ro nhiều lớp',            desc: 'Hệ thống quản trị rủi ro chặt chẽ, bảo vệ vốn và danh tiếng.' },
  { Icon: HandshakeIcon, title: 'Tầm nhìn dài hạn từ Aurum đến Assets', desc: 'Kiến tạo giá trị lâu dài từ vàng – tài sản – thịnh vượng bền vững.' },
]

export function GoldWhyChoose() {
  return (
    <section className="pb-24 relative z-10 overflow-hidden">
      {/* Top fade — blends into the bg-secondary section above */}
      <div
        className="absolute top-0 inset-x-0 h-64 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, var(--color-secondary) 0%, transparent 100%)' }}
      />
      <div className="container mx-auto px-0 md:px-8">
        <motion.div
          className="relative overflow-hidden p-6 md:p-10"
          variants={staggerContainer(0.1)} initial="hidden" whileInView="show" viewport={viewport}
        >
          <motion.div className="text-center mb-14" variants={staggerContainer(0.1)}>
            <motion.h2 variants={fadeUp} className="font-[Playfair_Display] font-bold text-2xl md:text-[32px] text-text-primary uppercase">
              <EditableText id="gold.whychoose.title" fallbackVi="Vì sao chọn AFT trong lĩnh vực vàng" />
            </motion.h2>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-5 gap-4"
            variants={staggerContainer(0.08)}
          >
            {REASONS.map(({ Icon, title, desc }, i) => (
              <motion.div
                key={title}
                variants={staggerItem}
                className="w-full flex flex-row md:flex-col gap-3 px-4 py-5 items-center"
                style={{
                  borderRadius: '16px',
                  border: '1px solid rgba(246, 247, 249, 0.15)',
                  background: 'rgba(246, 247, 249, 0.02)',
                }}
              >
                <div className="text-primary shrink-0 [&>svg]:w-13.5 [&>svg]:h-13.5">
                  <Icon />
                </div>
                <div className='flex flex-col md:flex-row'>
                  <EditableText id={`gold.whychoose.item.${i}.title`} fallbackVi={title} as="div" className="text-xl text-left md:text-center font-bold text-text-primary font-[Playfair Display] leading-snug" />
                  <EditableText id={`gold.whychoose.item.${i}.desc`} fallbackVi={desc} as="div" className="text-base text-left md:text-center text-text-secondary font-[Manrope] leading-relaxed" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
