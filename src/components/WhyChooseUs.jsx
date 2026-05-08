import { motion } from 'framer-motion'
import { SectionWrapper, SectionTitle, AnimatedItem } from './SectionWrapper'
import { 
  Wrench, SwatchBook, RefreshCw, Building2, 
  MapPin, PiggyBank, Calendar, MessageCircle, 
  Armchair, Zap 
} from 'lucide-react'

const points = [
  { icon: Wrench, title: 'Usta İşçilik', description: 'Deneyimli ustalarımızla kaliteli ve titiz işçilik garantisi.' },
  { icon: SwatchBook, title: 'Geniş Kumaş Seçeneği', description: 'Yüzlerce kumaş, renk ve desen arasından seçim yapabilirsiniz.' },
  { icon: RefreshCw, title: 'Güçlü Dönüşüm', description: 'Model ve yüz değişiminde beklentilerinizi aşan sonuçlar.' },
  { icon: Building2, title: 'Kurumsal Hizmet', description: 'Ev, iş yeri, otel, cafe ve kurumlara özel çözümler.' },
  { icon: MapPin, title: 'Kolay Ulaşım', description: 'Samsun Atakum\'da merkezi ve ulaşılabilir konumdayız.' },
  { icon: PiggyBank, title: 'Yenileme Ekonomisi', description: 'Yeni mobilya almak yerine mevcut koltuklarınızı yenileyin.' },
]

const stats = [
  { icon: Calendar, value: 'Köklü Hizmet', label: '1978\'den beri hizmet anlayışı' },
  { icon: MapPin, value: 'Atakum', label: 'Samsun merkezli hizmet' },
  { icon: Armchair, value: 'Geniş Hizmet', label: 'Koltuk, kanepe, berjer, sandalye' },
  { icon: Zap, value: 'Hızlı Teklif', label: 'WhatsApp ile anında fiyat' },
]

export default function WhyChooseUs() {
  return (
    <SectionWrapper id="hakkimizda" bg="bg-cream-50">
      <SectionTitle
        title="Neden Sanat Koltuk & Kanepe Hastanesi?"
        subtitle="Köklü deneyim, kaliteli malzeme ve müşteri memnuniyeti odaklı hizmet anlayışımız."
      />

      {/* Points Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 mb-14 md:mb-20">
        {points.map((point) => (
          <AnimatedItem key={point.title}>
            <div className="flex gap-4 p-5 bg-white rounded-2xl border border-walnut-100/50 shadow-sm hover:shadow-md transition-shadow duration-300 h-full">
              <div className="shrink-0 w-11 h-11 rounded-xl bg-gradient-to-br from-cream-100 to-cream-200 flex items-center justify-center">
                <point.icon className="w-5 h-5 text-walnut-500" />
              </div>
              <div>
                <h3 className="font-heading text-base font-bold text-walnut-800 mb-1">{point.title}</h3>
                <p className="text-sm text-walnut-400 leading-relaxed">{point.description}</p>
              </div>
            </div>
          </AnimatedItem>
        ))}
      </div>

      {/* Stats Cards */}
      <AnimatedItem>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.value}
              whileHover={{ y: -4, scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className="relative overflow-hidden bg-gradient-to-br from-walnut-500 to-walnut-700 rounded-2xl p-5 md:p-6 text-center group"
            >
              {/* Decorative circle */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-white/5 rounded-full" />
              
              <div className="relative z-10">
                <div className="w-10 h-10 rounded-full bg-gold-400/20 flex items-center justify-center mx-auto mb-3">
                  <stat.icon className="w-5 h-5 text-gold-400" />
                </div>
                <div className="font-heading text-lg md:text-xl font-bold text-cream-50 mb-1">
                  {stat.value}
                </div>
                <p className="text-xs md:text-sm text-cream-200/70">
                  {stat.label}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </AnimatedItem>
    </SectionWrapper>
  )
}
