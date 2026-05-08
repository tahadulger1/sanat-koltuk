import { motion } from 'framer-motion'
import { SectionWrapper, SectionTitle, AnimatedItem } from './SectionWrapper'
import { ArrowRight, Info } from 'lucide-react'

const showcaseItems = [
  {
    title: 'Klasik Koltuk Takımı',
    description: 'Yıpranmış kumaş değişimi ve iskelet güçlendirme',
    type: 'Koltuk Döşeme',
  },
  {
    title: 'Köşe Kanepe Yenileme',
    description: 'Model değişikliği ile modern görünüm',
    type: 'Model Değişimi',
  },
  {
    title: 'Berjer Restorasyon',
    description: 'Kumaş ve sünger yenileme, ahşap cila',
    type: 'Berjer Döşeme',
  },
  {
    title: 'Antika Sandalye',
    description: 'Ahşap bakım ve döşeme yenileme',
    type: 'Sandalye Döşeme',
  },
  {
    title: 'Ofis Koltuk Takımı',
    description: 'Deri kaplama ve renk değişimi',
    type: 'Kumaş Değişimi',
  },
  {
    title: 'Cafe Mobilyaları',
    description: 'Toplu koltuk ve sandalye yenileme',
    type: 'Kurumsal Hizmet',
  },
]

// Generate placeholder gradient colors for before/after
const gradients = [
  ['from-walnut-300 to-walnut-400', 'from-cream-200 to-gold-400'],
  ['from-walnut-400 to-walnut-500', 'from-cream-100 to-walnut-200'],
  ['from-walnut-200 to-walnut-300', 'from-cream-200 to-cream-300'],
  ['from-walnut-500 to-walnut-600', 'from-gold-400 to-cream-200'],
  ['from-walnut-300 to-walnut-500', 'from-cream-100 to-gold-400'],
  ['from-walnut-400 to-walnut-600', 'from-cream-200 to-walnut-100'],
]

export default function BeforeAfter() {
  return (
    <SectionWrapper id="oncesi-sonrasi" bg="bg-cream-100/50">
      <SectionTitle
        title="Eskiyen Koltuklar Yeni Gibi Olur"
        subtitle="Ustalıkla yenilediğimiz koltukların dönüşümlerine göz atın."
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 mb-8">
        {showcaseItems.map((item, i) => (
          <AnimatedItem key={item.title}>
            <motion.div
              whileHover={{ y: -4 }}
              className="group bg-white rounded-2xl overflow-hidden border border-walnut-100/50 shadow-sm hover:shadow-xl hover:shadow-walnut-900/8 transition-all duration-300"
            >
              {/* Before/After Images */}
              <div className="relative h-56 md:h-64 flex">
                {/* Before */}
                <div className="w-1/2 relative overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${gradients[i][0]}`} />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-12 h-12 mx-auto mb-2 rounded-full bg-black/20 flex items-center justify-center">
                        <span className="text-white/80 text-xl">⟵</span>
                      </div>
                      <span className="text-white/80 text-xs font-medium bg-black/20 px-3 py-1 rounded-full">
                        Öncesi
                      </span>
                    </div>
                  </div>
                </div>

                {/* Divider */}
                <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-white z-10 -translate-x-1/2" />
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center">
                  <ArrowRight className="w-4 h-4 text-walnut-500" />
                </div>

                {/* After */}
                <div className="w-1/2 relative overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${gradients[i][1]} group-hover:scale-110 transition-transform duration-500`} />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-12 h-12 mx-auto mb-2 rounded-full bg-walnut-700/20 flex items-center justify-center">
                        <span className="text-walnut-700/80 text-xl">✓</span>
                      </div>
                      <span className="text-walnut-700/80 text-xs font-medium bg-white/40 px-3 py-1 rounded-full">
                        Sonrası
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Info */}
              <div className="p-5">
                <div className="text-xs font-semibold text-gold-500 mb-1 tracking-wide uppercase">
                  {item.type}
                </div>
                <h3 className="font-heading text-lg font-bold text-walnut-800 mb-1">
                  {item.title}
                </h3>
                <p className="text-sm text-walnut-400">
                  {item.description}
                </p>
              </div>
            </motion.div>
          </AnimatedItem>
        ))}
      </div>

      {/* Note */}
      <AnimatedItem>
        <div className="flex items-start gap-3 p-4 bg-cream-200/50 rounded-xl border border-walnut-100/30 max-w-2xl mx-auto">
          <Info className="w-5 h-5 text-walnut-400 shrink-0 mt-0.5" />
          <p className="text-sm text-walnut-400 leading-relaxed">
            Gerçek iş fotoğrafları eklendiğinde bu bölüm portföy olarak kullanılacaktır. Yukarıdaki görseller yer tutucu olarak tasarlanmıştır.
          </p>
        </div>
      </AnimatedItem>
    </SectionWrapper>
  )
}
