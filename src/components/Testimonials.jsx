import { motion } from 'framer-motion'
import { SectionWrapper, SectionTitle, AnimatedItem } from './SectionWrapper'
import { Star, Quote, Info } from 'lucide-react'

const testimonials = [
  {
    name: 'Meltem K.',
    role: 'Müşteri',
    text: '20 yıl öncede koltuk takımı kaplatmıştım 20 yıl sonra da salon sandalyelerimi yıllar geçsede değişmeyen tek şey yaptığı işleri ciddiyeti ve titizliği gözünüzü kapatıp teslim edin gerisini düşünmeyin 🙏',
    rating: 5,
  },
  {
    name: 'Ersin E.',
    role: 'Müşteri',
    text: 'Evimizin koltuk takımını adeta baştan yarattılar 👏 İşçilik, kalite ve teslim süreci gerçekten mükemmeldi. Sanat Koltuk Kanepe Hastanesi ekibine gönül rahatlığıyla teşekkür eder, herkese tavsiye ederim.',
    rating: 4,
  },
  {
    name: 'Perihan Z.',
    role: 'Müşteri',
    text: 'Sandalyelerimi kaplattım ve tamiri yapıldı. İşçilik kesinlikle orjinal halinden iyi oldu. Emekleri için teşekkür ediyorum.',
    rating: 5,
  },
  {
    name: 'Mehmet R. S.',
    role: 'Müşteri',
    text: 'Masa takımı sandalyelerimi aynı gün evden alıp kumaşını döşedikten sonra akşam olmadan teslim ettiler. İşçilik, zamanlama, iletişim ve verilen değer harika. Kesinlikle tavsiye ederim.',
    rating: 5,
  },
]

export default function Testimonials() {
  return (
    <SectionWrapper id="referanslar" bg="bg-cream-50">
      <SectionTitle
        title="Müşterilerimizden Yorumlar"
        subtitle="Hizmetlerimizi deneyimleyen müşterilerimizin görüşleri."
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6 mb-8">
        {testimonials.map((t, i) => (
          <AnimatedItem key={t.name}>
            <motion.div
              whileHover={{ y: -4 }}
              className="bg-white rounded-2xl p-6 border border-walnut-100/50 shadow-sm hover:shadow-lg transition-all duration-300 h-full flex flex-col"
            >
              {/* Quote icon */}
              <div className="mb-4">
                <Quote className="w-8 h-8 text-gold-400/30" />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-3">
                {[...Array(t.rating)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-gold-400 text-gold-400" />
                ))}
              </div>

              {/* Text */}
              <p className="text-sm text-walnut-600 leading-relaxed flex-1 mb-4 italic">
                "{t.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-walnut-100/50">
                <div className="w-10 h-10 rounded-full premium-gradient flex items-center justify-center text-cream-50 font-bold text-sm">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold text-sm text-walnut-800">{t.name}</div>
                  <div className="text-xs text-walnut-400">{t.role}</div>
                </div>
              </div>
            </motion.div>
          </AnimatedItem>
        ))}
      </div>

    </SectionWrapper>
  )
}
