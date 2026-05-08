import { Helmet } from 'react-helmet-async'
import { SectionWrapper, SectionTitle, AnimatedItem } from '../components/SectionWrapper'
import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react'
import WhatsAppIcon from '../components/icons/WhatsAppIcon'

const WHATSAPP_URL = 'https://wa.me/905054387744?text=Merhaba%2C%20konum%20ve%20bilgi%20almak%20istiyorum.'

export default function Contact() {
  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Sanat Koltuk",
    "image": "https://sanatkoltuk.com/img/analogo.webp",
    "telephone": "+905054387744",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Esenevler Mah. İsmet İnönü Bulvarı No: 64/A",
      "addressLocality": "Atakum",
      "addressRegion": "Samsun",
      "postalCode": "55200",
      "addressCountry": "TR"
    }
  };

  return (
    <div className="pt-24 min-h-screen">
      <Helmet>
        <title>İletişim | Samsun Atakum Sanat Koltuk</title>
        <meta name="description" content="Sanat Koltuk Samsun Atakum iletişim bilgileri. Adres, telefon ve WhatsApp üzerinden bize ulaşın, koltuk döşeme fiyatı alın." />
        <script type="application/ld+json">
          {JSON.stringify(contactSchema)}
        </script>
      </Helmet>

      <SectionWrapper id="iletisim-sayfasi">
        <SectionTitle
          title="İletişim"
          subtitle="Sorularınız için bizimle iletişime geçebilir veya atölyemizi ziyaret edebilirsiniz."
          as="h1"
        />

        <div className="grid lg:grid-cols-2 gap-12 mt-12">
          {/* Contact Info */}
          <AnimatedItem>
            <div className="bg-white rounded-3xl p-8 shadow-xl shadow-walnut-900/5 border border-walnut-100">
              <h2 className="text-2xl font-heading font-bold text-walnut-800 mb-8">Bize Ulaşın</h2>
              
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-walnut-50 flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 text-walnut-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-walnut-900">Adres</h3>
                    <p className="text-walnut-600 leading-relaxed">
                      Esenevler Mah. İsmet İnönü Bulvarı No: 64/A Atakum / Samsun
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-walnut-50 flex items-center justify-center shrink-0">
                    <Phone className="w-6 h-6 text-walnut-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-walnut-900">Telefon</h3>
                    <div className="space-y-1">
                      <a href="tel:+903624387744" className="block text-walnut-600 hover:text-walnut-800 transition-colors">
                        0362 438 77 44
                      </a>
                      <a href="tel:+905054387744" className="block text-walnut-600 hover:text-walnut-800 transition-colors">
                        0505 438 77 44 (WhatsApp)
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-walnut-50 flex items-center justify-center shrink-0">
                    <Clock className="w-6 h-6 text-walnut-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-walnut-900">Çalışma Saatleri</h3>
                    <p className="text-walnut-600">
                      Pazartesi - Cumartesi: 09:00 - 18:30 <br/>
                      Pazar: Kapalı
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-10">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 w-full py-4 bg-whatsapp hover:bg-whatsapp-dark text-white font-bold rounded-2xl transition-all duration-300 shadow-lg shadow-whatsapp/25"
                >
                  <WhatsAppIcon className="w-6 h-6" />
                  WhatsApp'tan Hemen Yazın
                </a>
              </div>
            </div>
          </AnimatedItem>

          {/* Map Area */}
          <AnimatedItem>
            <div className="h-full min-h-[400px] rounded-3xl overflow-hidden shadow-xl border border-walnut-100">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3000.722956247348!2d36.2922709!3d41.3411083!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40887964b3df2a5d%3A0x6b6d5162a843e9cd!2sSanat%20Koltuk%20D%C3%B6%C5%9Feme!5e0!3m2!1str!2str!4v1709123456789!5m2!1str!2str" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Sanat Koltuk Harita"
              />
            </div>
          </AnimatedItem>
        </div>
      </SectionWrapper>
    </div>
  )
}
