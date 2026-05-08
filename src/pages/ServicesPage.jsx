import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { SectionWrapper, SectionTitle, AnimatedItem } from '../components/SectionWrapper'
import { ArrowRight } from 'lucide-react'

const servicesList = [
  { id: 'koltuk-doseme', title: 'Koltuk Döşeme' },
  { id: 'kanepe-yuz-degisimi', title: 'Kanepe Yüz Değişimi' },
  { id: 'berjer-doseme', title: 'Berjer Döşeme' },
  { id: 'sandalye-doseme', title: 'Sandalye Döşeme' },
  { id: 'koltuk-tamiri', title: 'Koltuk Tamiri' },
  { id: 'kose-takimi-yenileme', title: 'Köşe Takımı Yenileme' },
]

export default function ServicesPage() {
  return (
    <div className="pt-24 min-h-screen">
      <Helmet>
        <title>Hizmetlerimiz | Samsun Sanat Koltuk</title>
        <meta name="description" content="Samsun Atakum'da sunduğumuz profesyonel koltuk döşeme, kanepe tamiri, berjer ve sandalye yenileme hizmetlerimizi inceleyin." />
      </Helmet>
      
      <SectionWrapper id="hizmetlerimiz" bg="bg-cream-50">
        <SectionTitle
          title="Hizmetlerimiz"
          subtitle="Özenle sunduğumuz profesyonel tamir, döşeme ve yenileme hizmetlerimiz."
          as="h1"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesList.map((service) => (
            <AnimatedItem key={service.id}>
              <Link to={`/${service.id}`} className="block group">
                <div className="bg-white rounded-2xl overflow-hidden border border-walnut-100/50 shadow-sm hover:shadow-xl hover:shadow-walnut-900/8 transition-all duration-300">
                  <div className="relative h-64 bg-gradient-to-br from-walnut-200 to-cream-300 flex items-center justify-center">
                    <div className="text-center p-6 bg-white/20 backdrop-blur-sm rounded-xl m-4">
                      <p className="text-walnut-800 font-heading text-lg font-semibold">İncele</p>
                      <p className="text-walnut-700/80 text-sm mt-2">Detaylı bilgi için tıklayın.</p>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-heading text-xl font-bold text-walnut-800 flex items-center justify-between">
                      {service.title}
                      <ArrowRight className="w-5 h-5 text-gold-500 opacity-60 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                    </h3>
                  </div>
                </div>
              </Link>
            </AnimatedItem>
          ))}
        </div>
      </SectionWrapper>
    </div>
  )
}
