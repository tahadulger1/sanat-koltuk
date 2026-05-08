import { motion } from 'framer-motion'
import { ArrowDown, MapPin, Eye, Palette, Wrench } from 'lucide-react'
import WhatsAppIcon from './icons/WhatsAppIcon'

const WHATSAPP_URL = 'https://wa.me/905054387744?text=Merhabalar%2C%20fiyat%20bilgisi%20almak%20istiyorum.'

const trustBadges = [
  { icon: MapPin, label: 'Atakum / Samsun' },
  { icon: Eye, label: 'Yerinde İnceleme' },
  { icon: Palette, label: 'Kumaş & Model Seçenekleri' },
  { icon: Wrench, label: 'Usta İşçilik' },
]

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-texture">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-gradient-radial from-gold-400/8 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-radial from-walnut-200/10 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <div className="flex flex-col gap-3 mb-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-walnut-50 rounded-full text-walnut-500 text-sm font-medium border border-walnut-100 self-start">
                <span className="w-2 h-2 bg-gold-400 rounded-full animate-pulse" />
                Samsun Atakum'da Hizmetinizdeyiz
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-cream-100/80 rounded-lg text-walnut-600 text-xs font-semibold border border-walnut-200/50">
                  💳 Tüm Kredi Kartlarına Taksit
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-cream-100/80 rounded-lg text-walnut-600 text-xs font-semibold border border-walnut-200/50">
                  🛠️ Tüm Markalara Özel Servis
                </span>
              </div>
            </div>

            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-walnut-900 leading-[1.1] mb-6">
              Koltuklarınızı{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-walnut-500 to-gold-500">
                Yenileyin
              </span>
              , Evinizin Havasını Değiştirin
            </h1>

            <p className="text-lg md:text-xl text-walnut-400 leading-relaxed mb-8 max-w-xl">
              Samsun Atakum'da koltuk döşeme, yüz değişimi, model yenileme, iskelet bakımı ve kumaş değişimi hizmetleri.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-whatsapp hover:bg-whatsapp-dark text-white font-semibold rounded-full transition-all duration-300 shadow-lg shadow-whatsapp/25 hover:shadow-whatsapp/40 hover:scale-105 text-base"
              >
                <WhatsAppIcon className="w-5 h-5" />
                WhatsApp'tan Fotoğraf Gönder
              </a>
              <a
                href="#hizmetler"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-cream-100 hover:bg-cream-200 text-walnut-700 font-semibold rounded-full transition-all duration-300 border border-walnut-100 hover:border-walnut-200 text-base"
              >
                <ArrowDown className="w-5 h-5" />
                Hizmetleri İncele
              </a>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {trustBadges.map((badge, i) => (
                <motion.div
                  key={badge.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + i * 0.15, duration: 0.5 }}
                  className="flex items-center gap-2 px-3 py-2.5 bg-white/60 rounded-xl border border-walnut-100/50 shadow-sm"
                >
                  <badge.icon className="w-4 h-4 text-gold-500 shrink-0" />
                  <span className="text-xs font-medium text-walnut-600 leading-tight">{badge.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right - Visual Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-walnut-900/15 aspect-[4/5] md:aspect-[3/4] lg:aspect-[4/5]">
              {/* Placeholder image - elegant gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-walnut-200 via-cream-300 to-walnut-300" />
              
              {/* Decorative furniture illustration overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <svg className="w-12 h-12 text-walnut-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12V7a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v5" />
                      <path d="M3 12h18v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4z" />
                      <path d="M5 18v2" />
                      <path d="M19 18v2" />
                      <path d="M3 12a2 2 0 0 1-2 2" />
                      <path d="M23 12a2 2 0 0 0-2 2" />
                    </svg>
                  </div>
                  <p className="text-walnut-700/80 font-heading text-xl font-semibold">
                    Gerçek atölye fotoğrafları<br />yakında eklenecektir
                  </p>
                  <p className="text-walnut-600/60 text-sm mt-2">
                    Bu alan işletme fotoğrafları ile güncellenecektir
                  </p>
                </div>
              </div>

              {/* Floating badge */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md rounded-2xl p-4 shadow-lg"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full premium-gradient flex items-center justify-center">
                    <Wrench className="w-5 h-5 text-cream-50" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-walnut-800">Usta İşçilik</p>
                    <p className="text-xs text-walnut-400">Köklü hizmet anlayışıyla</p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Decorative corner accent */}
            <div className="absolute -top-4 -right-4 w-24 h-24 border-2 border-gold-400/20 rounded-3xl" />
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gold-400/10 rounded-2xl" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
