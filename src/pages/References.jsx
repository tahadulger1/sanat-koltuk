import { Helmet } from 'react-helmet-async'
import { SectionWrapper, SectionTitle, AnimatedItem } from '../components/SectionWrapper'

const references = [
  'Medikal Park Samsun',
  'Medikal Park Ordu',
  'Snow Kuaför',
  'Moda Kuyumculuk',
  'Nene Hatun Anaokulu',
  'Kalyoncu Denizcilik',
  'M.E.B Vakıf İlköğretim Anaokulu',
  'Doğanoğlu İnşaat',
  'Doğa Otomotiv',
  'Amerikan Kültür Derneği',
  'BOTAŞ',
  'Samteks Mühendislik',
  'Afacan Tur',
  'Minik Adımlar Kreş',
  'Sheraton Otel Samsun',
]

// To make them look nicer without images yet, we can display them as a grid of elegant cards
export default function References() {
  return (
    <div className="pt-24 min-h-screen">
      <Helmet>
        <title>Referanslarımız | Samsun Sanat Koltuk</title>
        <meta name="description" content="Samsun Atakum'da hizmet verdiğimiz kurumsal firmalar, oteller, hastaneler ve referanslarımız." />
      </Helmet>

      <SectionWrapper id="referanslar" bg="bg-cream-50">
        <SectionTitle
          title="Referanslarımız"
          subtitle="Bize güvenen ve birlikte çalıştığımız değerli kurumlar."
          as="h1"
        />

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {references.map((ref) => (
            <AnimatedItem key={ref}>
              <div className="bg-white rounded-2xl p-6 border border-walnut-100/50 shadow-sm hover:shadow-md transition-all duration-300 h-full flex flex-col items-center justify-center text-center group relative overflow-hidden">
                <span className="font-heading font-semibold text-walnut-700 transition-transform duration-300 group-hover:-translate-y-2">{ref}</span>
                <span className="text-xs text-walnut-400 opacity-0 group-hover:opacity-100 transition-all duration-300 absolute bottom-3 translate-y-4 group-hover:translate-y-0">
                  Görseller yakında eklenecektir
                </span>
              </div>
            </AnimatedItem>
          ))}
        </div>
      </SectionWrapper>
    </div>
  )
}
