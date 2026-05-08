import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { SectionWrapper, SectionTitle, AnimatedItem } from './SectionWrapper'
import { 
  Armchair, Sofa, LayoutGrid, Lamp, 
  GalleryVerticalEnd, Box, Hammer, Paintbrush, 
  SwatchBook, Repeat, ArrowRight
} from 'lucide-react'

const services = [
  {
    id: 'koltuk-doseme',
    icon: Armchair,
    title: 'Koltuk Döşeme',
    description: 'Her türlü koltuk için profesyonel döşeme ve kumaş kaplama hizmeti.',
  },
  {
    id: 'kanepe-yuz-degisimi',
    icon: Sofa,
    title: 'Kanepe Yüz Değişimi',
    description: 'Kanepelerinizin yüzünü tamamen yenileyerek modern bir görünüm kazandırıyoruz.',
  },
  {
    id: 'kose-takimi-yenileme',
    icon: LayoutGrid,
    title: 'Köşe Takımı Yenileme',
    description: 'Köşe takımlarınızı komple veya parça yenileme seçenekleriyle sunuyoruz.',
  },
  {
    id: 'berjer-doseme',
    icon: Lamp,
    title: 'Berjer Döşeme',
    description: 'Berjer koltuklarınızı özenle döşeleyip estetik bir görünüm sağlıyoruz.',
  },
  {
    id: 'sandalye-doseme',
    icon: GalleryVerticalEnd,
    title: 'Sandalye Döşeme',
    description: 'Yemek sandalyelerinden ofis sandalyelerine kadar geniş döşeme hizmeti.',
  },
  {
    id: 'koltuk-tamiri',
    icon: Hammer,
    title: 'İskelet Tamiri',
    description: 'Koltuk iskeletlerinde kırık, çatlak ve yapısal sorunları onarıyoruz.',
  },
  {
    id: 'puf-yenileme',
    icon: Box,
    title: 'Puf Yenileme',
    description: 'Puf ve oturaklarınızı istediğiniz kumaş ve renk ile yeniliyoruz.',
  },
  {
    icon: SwatchBook,
    title: 'Kumaş Seçenekleri',
    description: 'Geniş kumaş koleksiyonumuzdan dilediğiniz renk ve deseni seçebilirsiniz.',
  },
  {
    icon: Paintbrush,
    title: 'Ahşap Bakımı',
    description: 'Ahşap koltuk ayakları ve detayları için cila ve bakım hizmetleri.',
  },
  {
    icon: Repeat,
    title: 'Model Yenileme',
    description: 'Mevcut koltuğunuzun modelini yenileyerek modern bir tasarım oluşturuyoruz.',
  },
]

export default function Services() {
  return (
    <SectionWrapper id="hizmetler" bg="bg-cream-50">
      <SectionTitle
        title="Hizmetlerimiz"
        subtitle="Koltuklarınız için ihtiyaç duyduğunuz her türlü yenileme ve bakım hizmetini sunuyoruz."
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 md:gap-5">
        {services.map((service, i) => (
          <AnimatedItem key={service.title}>
            {service.id ? (
              <Link to={`/${service.id}`}>
                <motion.div
                  whileHover={{ y: -6, scale: 1.02 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  className="group relative bg-white rounded-2xl p-5 md:p-6 border border-walnut-100/50 shadow-sm hover:shadow-xl hover:shadow-walnut-900/8 transition-all duration-300 h-full cursor-pointer"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cream-100 to-cream-200 flex items-center justify-center mb-4 group-hover:from-walnut-100 group-hover:to-walnut-200 transition-all duration-300">
                    <service.icon className="w-6 h-6 text-walnut-500 group-hover:text-walnut-700 transition-colors" />
                  </div>
                  <h3 className="font-heading text-base font-bold text-walnut-800 mb-2 flex items-center justify-between">
                    {service.title}
                    <ArrowRight className="w-4 h-4 text-gold-400 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                  </h3>
                  <p className="text-sm text-walnut-400 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="absolute bottom-0 left-4 right-4 h-0.5 bg-gold-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />
                </motion.div>
              </Link>
            ) : (
              <div
                className="group relative bg-white rounded-2xl p-5 md:p-6 border border-walnut-100/50 shadow-sm transition-all duration-300 h-full"
              >
                <div className="w-12 h-12 rounded-xl bg-cream-50 flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-walnut-400" />
                </div>
                <h3 className="font-heading text-base font-bold text-walnut-800 mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-walnut-400 leading-relaxed">
                  {service.description}
                </p>
              </div>
            )}
          </AnimatedItem>
        ))}
      </div>
    </SectionWrapper>
  )
}
