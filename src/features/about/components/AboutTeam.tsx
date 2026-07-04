import { motion } from 'framer-motion'
import { fadeUp, staggerContainer, staggerItem, viewport } from '@/lib/motion'

import icAvatar1   from '@/assets/image/ic_avatar1.png'
import icAvatar1x2 from '@/assets/image/ic_avatar1@2x.png'
import icAvatar1x3 from '@/assets/image/ic_avatar1@3x.png'
import icAvatar2   from '@/assets/image/ic_avatar2.png'
import icAvatar2x2 from '@/assets/image/ic_avatar2@2x.png'
import icAvatar2x3 from '@/assets/image/ic_avatar2@3x.png'
import icAvatar3   from '@/assets/image/ic_avatar3.png'
import icAvatar3x2 from '@/assets/image/ic_avatar3@2x.png'
import icAvatar3x3 from '@/assets/image/ic_avatar3@3x.png'
import icAvatar4   from '@/assets/image/ic_avatar4.png'
import icAvatar4x2 from '@/assets/image/ic_avatar4@2x.png'
import icAvatar4x3 from '@/assets/image/ic_avatar4@3x.png'
import icAvatar5   from '@/assets/image/ic_avatar5.png'
import icAvatar5x2 from '@/assets/image/ic_avatar5@2x.png'
import icAvatar5x3 from '@/assets/image/ic_avatar5@3x.png'
import icAvatar6   from '@/assets/image/ic_avatar6.png'
import icAvatar6x2 from '@/assets/image/ic_avatar6@2x.png'
import icAvatar6x3 from '@/assets/image/ic_avatar6@3x.png'

import icDesTeam   from '@/assets/image/ic_des_team.png'
import icDesTeam2x from '@/assets/image/ic_des_team@2x.png'
import icDesTeam3x from '@/assets/image/ic_des_team@3x.png'

const TEAM = [
  { name: 'Nguyễn Đình Cương', role: 'Chairman/CEO', dept: '(Chủ tịch kiêm điều hành)', src: icAvatar6, src2x: icAvatar6x2, src3x: icAvatar6x3 },
  { name: 'Nguyễn Văn Nghuyện', role: 'COO',          dept: '(Vận hành)',                 src: icAvatar4, src2x: icAvatar4x2, src3x: icAvatar4x3 },
  { name: 'Nguyễn Hải Sơn',     role: 'CFO',          dept: '(Tài chính)',                src: icAvatar3, src2x: icAvatar3x2, src3x: icAvatar3x3 },
  { name: 'Nguyễn Quang Việt',  role: 'CDO',          dept: '(Chuyển đổi số, Công nghệ và Marketing)', src: icAvatar1, src2x: icAvatar1x2, src3x: icAvatar1x3 },
  { name: 'Nguyễn Anh Tuấn',    role: 'CLO',          dept: '(Pháp chế)',                 src: icAvatar2, src2x: icAvatar2x2, src3x: icAvatar2x3 },
  { name: 'Trần Đại Nghĩa',     role: 'CSO',          dept: '(Chiến lược)',               src: icAvatar5, src2x: icAvatar5x2, src3x: icAvatar5x3 },
]

export function AboutTeam() {
  return (
    <section className="py-16 bg-secondary">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          className="text-center mb-12"
          variants={staggerContainer(0.1)} initial="hidden" whileInView="show" viewport={viewport}
        >
          <motion.h2 variants={fadeUp} className="font-[Playfair_Display] font-bold text-2xl md:text-[32px] text-text-primary uppercase">
            Đội ngũ chuyên gia
          </motion.h2>
          <motion.p variants={fadeUp} className="mt-3 text-base md:text-xl text-text-secondary max-w-180 mx-auto">
            Sáu con người, một lời thề - đặt tổ chức lên trên cái tôi, đặt niềm tin trước lợi nhuận.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6"
          variants={staggerContainer(0.08)} initial="hidden" whileInView="show" viewport={viewport}
        >
          {TEAM.map(({ name, role, dept, src, src2x, src3x }) => (
            <motion.div key={name} variants={staggerItem} className="relative rounded-2xl overflow-hidden aspect-3/4"
              style={{ background: 'linear-gradient(180deg, rgba(198,161,91,0.10) 0%, rgba(198,161,91,0.55) 100%)' }}
            >
              <img
                src={src}
                srcSet={`${src} 1x, ${src2x} 2x, ${src3x} 3x`}
                alt={name}
                className="absolute inset-0 w-full h-full object-cover object-top"
              />
              <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-black/90 via-black/50 to-transparent pt-14 pb-4 px-3 text-center">
                <div className="font-bold text-text-primary font-[Manrope] text-xs md:text-xl tracking-wide uppercase leading-tight">
                  {name}
                </div>
                <div className="text-[14px] md:text-[14px] text-text-secondary font-[Manrope] tracking-widest uppercase mt-1">
                  {role}
                </div>
                <div className="text-[14px] md:text-[14px] text-text-secondary font-[Manrope] uppercase mt-0.5 leading-snug">
                  {dept}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.img
          src={icDesTeam}
          srcSet={`${icDesTeam} 1x, ${icDesTeam2x} 2x, ${icDesTeam3x} 3x`}
          alt="Lời thề sáu nhà sáng lập AFT"
          className="mt-10 md:mt-14 max-w-220 mx-auto w-full h-auto"
          variants={fadeUp} initial="hidden" whileInView="show" viewport={viewport}
        />
      </div>
    </section>
  )
}
