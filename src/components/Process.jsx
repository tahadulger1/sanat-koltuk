import { motion } from 'framer-motion'
import { SectionWrapper, SectionTitle, AnimatedItem } from './SectionWrapper'
import { Search, Palette, Hammer, Truck } from 'lucide-react'

const steps = [
  {
    icon: Search,
    title: 'Keşif & Fotoğraf İnceleme',
    description: 'Koltuğunuzun mevcut durumunu değerlendirir, ihtiyaçları belirleriz.',
  },
  {
    icon: Palette,
    title: 'Kumaş / Renk / Model Seçimi',
    description: 'Geniş kumaş koleksiyonumuzdan size uygun seçenekleri sunarız.',
  },
  {
    icon: Hammer,
    title: 'Usta İşçilikle Yenileme',
    description: 'Deneyimli ekibimiz koltuğunuzu özenle yeniler.',
  },
  {
    icon: Truck,
    title: 'Teslim & Kullanım Önerileri',
    description: 'Koltuğunuzu teslim eder, bakım ve kullanım önerileri sunarız.',
  },
]

export default function Process() {
  return (
    <SectionWrapper id="nasil-calisiyoruz" bg="bg-cream-100/50">
      <SectionTitle
        title="Nasıl Çalışıyoruz?"
        subtitle="4 basit adımda koltuklarınızı yeniliyoruz."
      />

      {/* Desktop - Horizontal Timeline */}
      <div className="hidden md:block">
        <AnimatedItem>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute top-12 left-0 right-0 h-0.5 bg-gradient-to-r from-walnut-200 via-gold-400 to-walnut-200" />

            <div className="grid grid-cols-4 gap-6">
              {steps.map((step, i) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2, duration: 0.5 }}
                  className="relative text-center"
                >
                  {/* Circle node */}
                  <div className="relative z-10 w-24 h-24 mx-auto mb-6">
                    <div className="absolute inset-0 bg-cream-50 rounded-full" />
                    <div className="absolute inset-1 bg-white rounded-full shadow-lg flex items-center justify-center group">
                      <step.icon className="w-8 h-8 text-walnut-500" />
                    </div>
                    {/* Step number */}
                    <div className="absolute -top-2 -right-2 w-7 h-7 premium-gradient rounded-full flex items-center justify-center shadow-md">
                      <span className="text-cream-50 text-xs font-bold">{i + 1}</span>
                    </div>
                  </div>

                  <h3 className="font-heading text-lg font-bold text-walnut-800 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-walnut-400 leading-relaxed max-w-[200px] mx-auto">
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedItem>
      </div>

      {/* Mobile - Vertical Timeline */}
      <div className="md:hidden space-y-0">
        {steps.map((step, i) => (
          <AnimatedItem key={step.title}>
            <div className="flex gap-4">
              {/* Left - Timeline */}
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center border-2 border-gold-400/30 shrink-0">
                  <step.icon className="w-5 h-5 text-walnut-500" />
                </div>
                {i < steps.length - 1 && (
                  <div className="w-0.5 flex-1 bg-gradient-to-b from-gold-400/30 to-walnut-200/30 my-1" />
                )}
              </div>

              {/* Right - Content */}
              <div className={`pb-8 ${i === steps.length - 1 ? 'pb-0' : ''}`}>
                <div className="text-xs font-bold text-gold-500 mb-1">ADIM {i + 1}</div>
                <h3 className="font-heading text-base font-bold text-walnut-800 mb-1">
                  {step.title}
                </h3>
                <p className="text-sm text-walnut-400 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          </AnimatedItem>
        ))}
      </div>
    </SectionWrapper>
  )
}
