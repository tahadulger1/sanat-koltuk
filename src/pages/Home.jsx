import { Helmet } from 'react-helmet-async'
import Hero from '../components/Hero'
import QuickQuote from '../components/QuickQuote'
import Services from '../components/Services'
import LocalSEOSection from '../components/LocalSEOSection'
import BeforeAfter from '../components/BeforeAfter'
import WhyChooseUs from '../components/WhyChooseUs'
import Process from '../components/Process'
import Testimonials from '../components/Testimonials'
import Contact from '../components/Contact'

export default function Home() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Sanat Koltuk",
    "image": "https://sanatkoltuk.com/img/analogo.webp",
    "@id": "https://sanatkoltuk.com",
    "url": "https://sanatkoltuk.com",
    "telephone": "+905054387744",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Esenevler Mah. İsmet İnönü Bulvarı No: 64/A",
      "addressLocality": "Atakum",
      "addressRegion": "Samsun",
      "postalCode": "55200",
      "addressCountry": "TR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 41.3411083,
      "longitude": 36.2922709
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday"
        ],
        "opens": "09:00",
        "closes": "18:30"
      }
    ],
    "sameAs": [
      "https://www.instagram.com/sanatkoltuk",
      "https://www.facebook.com/sanat.koltuk55"
    ]
  };

  return (
    <>
      <Helmet>
        <title>Samsun Koltuk Döşeme & Kanepe Tamiri | Sanat Koltuk</title>
        <meta name="description" content="Samsun Atakum'da koltuk döşeme, kanepe yüz değişimi, berjer ve sandalye yenileme hizmetleri. Ücretsiz nakliye ve usta işçilik ile mobilyalarınızı yenileyin." />
        <link rel="canonical" href="https://sanatkoltuk.com/" />
        <script type="application/ld+json">
          {JSON.stringify(localBusinessSchema)}
        </script>
      </Helmet>
      
      <Hero />
      <QuickQuote />
      <Services />
      <LocalSEOSection />
      <BeforeAfter />
      <WhyChooseUs />
      <Process />
      <Testimonials />
      <Contact />
    </>
  )
}
