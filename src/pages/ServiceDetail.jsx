import { Helmet } from 'react-helmet-async'
import { SectionWrapper, SectionTitle, AnimatedItem } from '../components/SectionWrapper'
import WhatsAppIcon from '../components/icons/WhatsAppIcon'
import { servicesData } from '../data/services'
import { Navigate } from 'react-router-dom'

const WHATSAPP_URL = 'https://wa.me/905054387744?text=Merhaba%2C%20bilgi%20almak%20istiyorum.'

export default function ServiceDetail({ serviceId }) {
  const data = servicesData[serviceId]

  if (!data) {
    return <Navigate to="/hizmetler" replace />
  }

  // Generate Schemas
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Ana Sayfa", "item": "https://sanatkoltuk.com/" },
      { "@type": "ListItem", "position": 2, "name": "Hizmetlerimiz", "item": "https://sanatkoltuk.com/hizmetler" },
      { "@type": "ListItem", "position": 3, "name": data.h1, "item": `https://sanatkoltuk.com/${serviceId}` }
    ]
  }

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": data.h1,
    "provider": {
      "@type": "LocalBusiness",
      "name": "Sanat Koltuk",
      "image": "https://sanatkoltuk.com/img/analogo.webp",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Esenevler Mah. İsmet İnönü Bulvarı No: 64/A",
        "addressLocality": "Atakum",
        "addressRegion": "Samsun",
        "addressCountry": "TR"
      },
      "telephone": "+905054387744"
    },
    "areaServed": {
      "@type": "City",
      "name": "Samsun"
    },
    "description": data.description
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": data.faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  }

  return (
    <div className="pt-24 min-h-screen">
      <Helmet>
        <title>{data.title}</title>
        <meta name="description" content={data.description} />
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <SectionWrapper bg="bg-white">
        <SectionTitle
          title={data.h1}
          subtitle={data.description}
          as="h1"
        />

        <div className="grid lg:grid-cols-2 gap-12 items-start mt-12">
          {/* Content Area */}
          <AnimatedItem>
            <div className="prose prose-walnut max-w-none">
              {data.content.map((paragraph, idx) => (
                <p key={idx} className="text-walnut-600 mb-4 leading-relaxed text-lg">
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="mt-8 p-6 bg-cream-50 rounded-2xl border border-walnut-100">
              <h2 className="text-2xl font-heading font-bold text-walnut-800 mb-4">Sıkça Sorulan Sorular</h2>
              <div className="space-y-4">
                {data.faqs.map((faq, idx) => (
                  <div key={idx} className="bg-white p-4 rounded-xl shadow-sm border border-walnut-50">
                    <h3 className="font-semibold text-walnut-900 mb-2">{faq.question}</h3>
                    <p className="text-walnut-600 text-sm leading-relaxed">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-whatsapp hover:bg-whatsapp-dark text-white font-semibold rounded-full transition-all duration-300 shadow-lg shadow-whatsapp/25 hover:shadow-whatsapp/40 hover:scale-105"
              >
                <WhatsAppIcon className="w-6 h-6" />
                Hemen Fiyat Alın
              </a>
            </div>
          </AnimatedItem>

          {/* Image/Visual Area */}
          <AnimatedItem className="relative">
            <div className="sticky top-28 rounded-3xl overflow-hidden shadow-2xl shadow-walnut-900/10 aspect-[4/3] bg-gradient-to-br from-walnut-100 to-cream-200 flex flex-col items-center justify-center p-8 text-center border-2 border-walnut-100/50">
               <div className="w-20 h-20 bg-white/40 rounded-full flex items-center justify-center mb-4 backdrop-blur-sm">
                 <svg className="w-10 h-10 text-walnut-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                 </svg>
               </div>
               <p className="font-heading text-xl font-bold text-walnut-700 mb-2">Öncesi / Sonrası Görseli</p>
               <p className="text-walnut-500 text-sm">Gerçek müşteri işlerimize ait <br/> ({data.imageAlt}) fotoğrafları buraya eklenecektir.</p>
            </div>
          </AnimatedItem>
        </div>
      </SectionWrapper>
    </div>
  )
}
