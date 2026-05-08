import { motion } from 'framer-motion'
import { Camera, Palette, CheckCircle, ArrowRight } from 'lucide-react'
import { SectionWrapper, AnimatedItem } from './SectionWrapper'
import WhatsAppIcon from './icons/WhatsAppIcon'

const WHATSAPP_URL = 'https://wa.me/905054387744?text=Merhaba%2C%20koltuk%20foto%C4%9Fraf%C4%B1%20g%C3%B6ndermek%20istiyorum.'

const steps = [
  {
    icon: Camera,
    number: '01',
    title: 'Fotoğraf Gönderin',
    description: 'Koltuğunuzun fotoğrafını WhatsApp üzerinden bize gönderin.',
  },
  {
    icon: Palette,
    number: '02',
    title: 'İhtiyacı Belirleyelim',
    description: 'Kumaş, model ve işlem ihtiyacını birlikte belirleyelim.',
  },
  {
    icon: CheckCircle,
    number: '03',
    title: 'Fiyat & Teslim',
    description: 'Size net fiyat ve teslim süreci sunalım.',
  },
]

export default function QuickQuote() {
  return (
    <SectionWrapper id="fiyat-al" bg="bg-gradient-to-b from-cream-50 to-cream-100">
      <AnimatedItem>
        <div className="relative rounded-3xl overflow-hidden premium-gradient p-8 md:p-12 lg:p-16">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />
          
          <div className="relative z-10">
            <div className="text-center mb-10 md:mb-14">
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-cream-50 mb-4">
                Fiyat Almak Çok Kolay
              </h2>
              <p className="text-cream-200/80 text-base md:text-lg max-w-xl mx-auto">
                Sadece 3 adımda koltuk yenileme fiyatınızı öğrenin
              </p>
              <div className="mt-4 h-1 w-16 rounded-full mx-auto bg-gold-400/60" />
            </div>

            <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-10 md:mb-14">
              {steps.map((step, i) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15, duration: 0.5 }}
                  className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/10 hover:bg-white/15 transition-all duration-300 group"
                >
                  <div className="flex items-start gap-4">
                    <div className="shrink-0 w-12 h-12 rounded-xl bg-gold-400/20 flex items-center justify-center group-hover:bg-gold-400/30 transition-colors">
                      <step.icon className="w-6 h-6 text-gold-400" />
                    </div>
                    <div>
                      <div className="text-gold-400/60 text-xs font-bold mb-1 tracking-wider">{step.number}</div>
                      <h3 className="text-cream-50 font-semibold text-lg mb-2">{step.title}</h3>
                      <p className="text-cream-200/70 text-sm leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                  
                  {/* Connector arrow (hidden on last) */}
                  {i < steps.length - 1 && (
                    <div className="hidden md:flex absolute -right-4 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-walnut-600 items-center justify-center">
                      <ArrowRight className="w-4 h-4 text-gold-400" />
                    </div>
                  )}
                </motion.div>
              ))}
            </div>

            <div className="text-center">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-whatsapp hover:bg-whatsapp-dark text-white font-bold rounded-full transition-all duration-300 shadow-lg shadow-black/20 hover:shadow-black/30 hover:scale-105 text-base md:text-lg"
              >
                <WhatsAppIcon className="w-6 h-6" />
                WhatsApp ile Fotoğraf Gönder
              </a>
            </div>
          </div>
        </div>
      </AnimatedItem>
    </SectionWrapper>
  )
}
