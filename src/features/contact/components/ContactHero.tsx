import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui'
import { EditableText, EditableImage } from '@/components/cms'
import { fadeUp, fadeLeft, fadeRight, staggerContainer, staggerItem, viewport } from '@/lib/motion'

import icBgField   from '@/assets/image/ic_bg_field.png'

function PhoneIcon() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="48" height="48" rx="12" fill="#C6A15B"/>
      <path d="M15.8333 20.4999C15.8333 16.6501 15.8333 14.7252 17.0292 13.5292C18.2252 12.3333 20.1501 12.3333 23.9999 12.3333C27.8497 12.3333 29.7746 12.3333 30.9706 13.5292C32.1666 14.7252 32.1666 16.6501 32.1666 20.4999V27.4999C32.1666 31.3497 32.1666 33.2746 30.9706 34.4706C29.7746 35.6666 27.8497 35.6666 23.9999 35.6666C20.1501 35.6666 18.2252 35.6666 17.0292 34.4706C15.8333 33.2746 15.8333 31.3497 15.8333 27.4999V20.4999Z" stroke="#F6F7F9" stroke-width="1.75" stroke-linecap="round"/>
      <path d="M22.8333 32.1665H25.1666" stroke="#F6F7F9" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M20.5 12.3333L20.6038 12.9563C20.8289 14.3064 20.9414 14.9815 21.4044 15.3923C21.8874 15.8208 22.5722 15.8333 24 15.8333C25.4278 15.8333 26.1126 15.8208 26.5956 15.3923C27.0586 14.9815 27.1711 14.3064 27.3962 12.9563L27.5 12.3333" stroke="#F6F7F9" stroke-width="1.75" stroke-linejoin="round"/>
    </svg>
  )
}
function MailIcon() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="48" height="48" rx="12" fill="#C6A15B"/>
      <path d="M12.3333 15.8333L20.3984 20.412C23.3451 22.0848 24.6548 22.0848 27.6014 20.412L35.6666 15.8333" stroke="#F6F7F9" stroke-width="1.75" stroke-linejoin="round"/>
      <path d="M22.2499 32.7501C21.7059 32.743 21.1612 32.7326 20.6152 32.7188C16.942 32.6265 15.1053 32.5803 13.7857 31.2549C12.4661 29.9294 12.4279 28.1402 12.3517 24.5617C12.3271 23.411 12.3271 22.2672 12.3516 21.1166C12.4279 17.5381 12.466 15.7488 13.7857 14.4234C15.1053 13.0979 16.942 13.0518 20.6152 12.9594C22.8791 12.9025 25.1207 12.9025 27.3847 12.9594C31.0579 13.0518 32.8945 13.098 34.2141 14.4234C35.5338 15.7488 35.572 17.5381 35.6482 21.1166C35.6595 21.6463 35.6655 21.896 35.6665 22.2501" stroke="#F6F7F9" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M32.1667 29.8333C32.1667 30.7997 31.3832 31.5833 30.4167 31.5833C29.4503 31.5833 28.6667 30.7997 28.6667 29.8333C28.6667 28.8668 29.4503 28.0833 30.4167 28.0833C31.3832 28.0833 32.1667 28.8668 32.1667 29.8333ZM32.1667 29.8333V30.4166C32.1667 31.3831 32.9503 32.1666 33.9167 32.1666C34.8832 32.1666 35.6667 31.3831 35.6667 30.4166V29.8333C35.6667 26.9337 33.3163 24.5833 30.4167 24.5833C27.5172 24.5833 25.1667 26.9337 25.1667 29.8333C25.1667 32.7328 27.5172 35.0833 30.4167 35.0833" stroke="#F6F7F9" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  )
}
function LocationIcon() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="48" height="48" rx="12" fill="#C6A15B"/>
      <path d="M35.6666 21.6666V20.7537C35.6666 18.4908 35.6666 17.3593 34.9832 16.6563C34.2998 15.9534 33.1998 15.9534 30.9999 15.9534H28.5748C27.5045 15.9534 27.4958 15.9513 26.5333 15.4696L22.6464 13.5246C21.0236 12.7125 20.2121 12.3064 19.3477 12.3346C18.4833 12.3628 17.6985 12.821 16.1289 13.7373L14.6964 14.5737C13.5435 15.2468 12.9671 15.5833 12.6502 16.1432C12.3333 16.703 12.3333 17.3848 12.3333 18.7484V28.3349C12.3333 30.1266 12.3333 31.0224 12.7326 31.521C12.9983 31.8528 13.3706 32.0758 13.7823 32.1497C14.4009 32.2609 15.1583 31.8187 16.6731 30.9343C17.7017 30.3337 18.6917 29.71 19.9223 29.8792C20.9534 30.0209 21.9116 30.6715 22.8333 31.1327" stroke="#F6F7F9" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M19.3333 12.3333L19.3333 29.8333" stroke="#F6F7F9" stroke-width="1.75" stroke-linejoin="round"/>
      <path d="M27.5 15.8333V21.0833" stroke="#F6F7F9" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M31.3596 35.2974C31.1066 35.5343 30.7685 35.6667 30.4166 35.6667C30.0647 35.6667 29.7266 35.5343 29.4737 35.2974C27.1572 33.1152 24.0529 30.6774 25.5668 27.1381C26.3853 25.2245 28.3502 24 30.4166 24C32.483 24 34.4479 25.2245 35.2665 27.1381C36.7784 30.6729 33.6817 33.1227 31.3596 35.2974Z" stroke="#F6F7F9" stroke-width="1.75"/>
      <path d="M30.4165 29.25H30.427" stroke="#F6F7F9" stroke-width="2.33333" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>

  )
}

const CONTACT_INFO = [
  { Icon: PhoneIcon,    label: '/ Điện thoại',    value: '0335 456 789' },
  { Icon: MailIcon,     label: '/ Email',         value: 'hello@aftgroup.com' },
  { Icon: LocationIcon, label: '/ Trụ sở chính',  value: '42 Nguyễn Phước Lan, P. Hòa Xuân, TP. Đà Nẵng' },
]

export function ContactHero() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', desc: '' })

  return (
    <section className="relative overflow-hidden bg-transparent pt-28 pb-16 md:pb-24">
      {/* Mobile: ambient glow background */}
      <EditableImage
        id="contact.hero.img.bg"
        fallbackSrc={icBgField}
        alt=""
        className="absolute bottom-80 w-full h-full object-cover object-top opacity-35 pointer-events-none"
      />

      <div className="relative z-10 container mx-auto px-4 md:px-8">
        {/* Title */}
        <motion.div
          className="text-center mb-12"
          variants={staggerContainer(0.1)} initial="hidden" animate="show"
        >
          <motion.h1 variants={fadeUp} className="relative z-999 font-[Playfair_Display] font-bold text-text-primary leading-tight uppercase text-3xl md:text-[48px]">
            <EditableText id="contact.hero.title" fallbackVi="Kết nối hợp tác" />
          </motion.h1>
          <motion.p variants={fadeUp} className="relative z-999 mt-4 text-base md:text-xl text-text-primary">
            <EditableText id="contact.hero.subtitle" fallbackVi="Giải pháp Tài chính - Tài sản - Công nghệ cho doanh nghiệp và đối tác chiến lược." />
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Left: intro + contact info */}
          <motion.div variants={fadeLeft} initial="hidden" whileInView="show" viewport={viewport}>
            <EditableText
              id="contact.hero.intro"
              fallbackVi="Chúng tôi sẵn sàng lắng nghe và cùng bạn trao đổi những cơ hội hợp tác hiệu quả."
              as="p"
              className="text-base md:text-xl max-w-160 text-text-secondary leading-relaxed"
            />

            <motion.div variants={staggerContainer(0.08)} className="mt-6 flex flex-col gap-4">
              {CONTACT_INFO.map(({ Icon, label, value }, i) => (
                <motion.div
                  key={label}
                  variants={staggerItem}
                  className="flex items-center gap-4 p-6"
                  style={{
                    borderRadius: '14px',
                    border: '1px solid rgba(246,247,249,0.10)',
                    background: 'rgba(11,31,58,0.35)',
                    backdropFilter: 'blur(7px)',
                  }}
                >
                  <div
                    className="shrink-0 flex items-center justify-center size-11 rounded-xl"
                    style={{ background: 'radial-gradient(50% 50% at 50% 50%, #F8E8C0 0%, #C09857 100%)' }}
                  >
                    <Icon />
                  </div>
                  <div>
                    <div className="text-[12px] text-text-secondary font-[Manrope] uppercase tracking-widest">
                      <EditableText id={`contact.hero.contactinfo.${i}.label`} fallbackVi={label} />
                    </div>
                    <div className="text-base md:text-xl font-bold text-text-primary font-[Manrope]">
                      <EditableText id={`contact.hero.contactinfo.${i}.value`} fallbackVi={value} />
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: pitch form */}
          <motion.div variants={fadeRight} initial="hidden" whileInView="show" viewport={viewport}>
            <div className="relative z-999 rounded-2xl border border-divider p-7 h-full"
              style={{ background: 'rgba(11,31,58,0.30)', boxShadow: '0 1px 20px 0 rgba(39,148,219,0.16)' }}>
              <EditableText
                id="contact.hero.form.heading"
                fallbackVi="Gửi yêu cầu hợp tác"
                as="h3"
                className="text-2xl font-[Playfair_Display] text-text-primary mb-6 tracking-wide uppercase"
              />

              <form className="flex flex-col gap-4" onSubmit={e => e.preventDefault()}>
                <div>
                  <label className="block text-base text-text-secondary mb-1.5 font-[Manrope]">
                    <EditableText id="contact.hero.form.nameLabel" fallbackVi="Họ và tên" />
                  </label>
                  <input
                    type="text"
                    placeholder="Nhập họ và tên"
                    value={form.name}
                    onChange={e => setForm(p => ({ ...p, name: e.target.value }))}
                    className="w-full h-11 px-4 rounded-xl border border-divider text-text-primary text-base font-[Manrope] placeholder:text-text-disable focus:outline-none focus:border-primary/50 transition-colors"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-base text-text-secondary mb-1.5 font-[Manrope]">
                      <EditableText id="contact.hero.form.phoneLabel" fallbackVi="Số điện thoại" />
                    </label>
                    <input
                      type="tel"
                      placeholder="09xx xxx xxx"
                      value={form.phone}
                      onChange={e => setForm(p => ({ ...p, phone: e.target.value }))}
                      className="w-full h-11 px-4 rounded-xl border border-divider text-text-primary text-base font-[Manrope] placeholder:text-text-disable focus:outline-none focus:border-primary/50 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-base text-text-secondary mb-1.5 font-[Manrope]">
                      <EditableText id="contact.hero.form.emailLabel" fallbackVi="Email" />
                    </label>
                    <input
                      type="email"
                      placeholder="Nhập email"
                      value={form.email}
                      onChange={e => setForm(p => ({ ...p, email: e.target.value }))}
                      className="w-full h-11 px-4 rounded-xl border border-divider text-text-primary text-sm font-[Manrope] placeholder:text-text-disable focus:outline-none focus:border-primary/50 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-body-base text-text-secondary mb-1.5 font-[Manrope]">
                    <EditableText id="contact.hero.form.descLabel" fallbackVi="Mô tả dự án" />
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Mô tả ngắn về mô hình và mong muốn hợp tác"
                    value={form.desc}
                    onChange={e => setForm(p => ({ ...p, desc: e.target.value }))}
                    className="w-full px-4 py-3 rounded-xl border border-divider text-text-primary text-sm font-[Manrope] placeholder:text-text-disable focus:outline-none focus:border-primary/50 transition-colors resize-none"
                  />
                </div>

                <div className="pt-1">
                  <Button variant="gold" size="md" icon={true} fullWidth>
                    <EditableText id="contact.hero.form.submit" fallbackVi="Gửi yêu cầu ngay" />
                  </Button>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
