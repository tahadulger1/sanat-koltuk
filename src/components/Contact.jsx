import { motion } from 'framer-motion'
import { SectionWrapper, SectionTitle, AnimatedItem } from './SectionWrapper'
import { Phone, MapPin, Navigation, Clock, Mail } from 'lucide-react'
import WhatsAppIcon from './icons/WhatsAppIcon'

const WHATSAPP_URL = 'https://wa.me/905054387744?text=Merhaba%2C%20bilgi%20almak%20istiyorum.'
const PHONE_1 = 'tel:+903624387744'
const PHONE_2 = 'tel:+905054387744'
const MAPS_URL = 'https://www.google.com/maps/search/Esenevler+Mah.+%C4%B0smet+%C4%B0n%C3%B6n%C3%BC+Bulvar%C4%B1+No:+64/A+Atakum+Samsun'

export default function Contact() {
  return (
    <SectionWrapper id="iletisim" bg="bg-cream-100/50">
      <SectionTitle
        title="Samsun Atakum'da Hizmetinizdeyiz"
        subtitle="Bize ulaşmak için aşağıdaki kanallardan herhangi birini kullanabilirsiniz."
      />

      <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
        {/* Left - Contact Info */}
        <AnimatedItem>
          <div className="space-y-6">
            {/* Address Card */}
            <div className="bg-white rounded-2xl p-6 border border-walnut-100/50 shadow-sm">
              <div className="flex gap-4 mb-4">
                <div className="shrink-0 w-12 h-12 rounded-xl premium-gradient flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-cream-50" />
                </div>
                <div>
                  <h3 className="font-heading text-lg font-bold text-walnut-800 mb-1">Adres</h3>
                  <p className="text-sm text-walnut-500 leading-relaxed">
                    Esenevler Mah. İsmet İnönü Bulvarı<br />
                    No: 64/A Atakum / Samsun
                  </p>
                </div>
              </div>
            </div>

            {/* Phone Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white rounded-2xl p-5 border border-walnut-100/50 shadow-sm">
                <div className="flex items-center gap-3 mb-2">
                  <Phone className="w-5 h-5 text-walnut-500" />
                  <span className="text-sm text-walnut-400">Sabit Hat</span>
                </div>
                <a href={PHONE_1} className="text-lg font-bold text-walnut-800 hover:text-walnut-600 transition-colors">
                  0362 438 77 44
                </a>
              </div>
              <div className="bg-white rounded-2xl p-5 border border-walnut-100/50 shadow-sm">
                <div className="flex items-center gap-3 mb-2">
                  <Phone className="w-5 h-5 text-whatsapp" />
                  <span className="text-sm text-walnut-400">GSM / WhatsApp</span>
                </div>
                <a href={PHONE_2} className="text-lg font-bold text-walnut-800 hover:text-walnut-600 transition-colors">
                  0505 438 77 44
                </a>
              </div>
            </div>

            {/* Working Hours */}
            <div className="bg-white rounded-2xl p-5 border border-walnut-100/50 shadow-sm">
              <div className="flex items-center gap-3 mb-2">
                <Clock className="w-5 h-5 text-walnut-500" />
                <span className="font-heading text-base font-bold text-walnut-800">Çalışma Saatleri</span>
              </div>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div className="text-walnut-500">Pazartesi - Cumartesi</div>
                <div className="text-walnut-700 font-medium">09:00 - 18:00</div>
                <div className="text-walnut-500">Pazar</div>
                <div className="text-walnut-400">Kapalı</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-5 py-3.5 bg-whatsapp hover:bg-whatsapp-dark text-white font-semibold rounded-xl transition-all duration-300 shadow-md hover:shadow-lg text-sm"
              >
                <WhatsAppIcon className="w-5 h-5" />
                WhatsApp'tan Yaz
              </a>
              <a
                href={PHONE_2}
                className="flex items-center justify-center gap-2 px-5 py-3.5 bg-walnut-600 hover:bg-walnut-700 text-cream-50 font-semibold rounded-xl transition-all duration-300 shadow-md hover:shadow-lg text-sm"
              >
                <Phone className="w-5 h-5" />
                Telefonla Ara
              </a>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-5 py-3.5 bg-cream-200 hover:bg-cream-300 text-walnut-700 font-semibold rounded-xl transition-all duration-300 border border-walnut-100 text-sm"
              >
                <Navigation className="w-5 h-5" />
                Yol Tarifi Al
              </a>
            </div>
          </div>
        </AnimatedItem>

        {/* Right - Map Placeholder */}
        <AnimatedItem>
          <div className="relative h-full min-h-[400px] rounded-2xl overflow-hidden border border-walnut-100/50 shadow-sm">
            {/* Map embed */}
            <iframe
              title="Sanat Koltuk Konum"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16948.8864313515!2d36.28296530782487!3d41.326957182352835!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40887947acfc91e7%3A0x20ce0b158ec99891!2sSanat%20Koltuk%20Kanepe%20Hastanesi!5e0!3m2!1str!2str!4v1778230994799!5m2!1str!2str"
              className="absolute inset-0 w-full h-full"
              style={{ border: 0, filter: 'saturate(0.8) contrast(1.05)' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            
            {/* Overlay card on map */}
            <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md rounded-xl p-4 shadow-lg">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full premium-gradient flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-cream-50" />
                </div>
                <div>
                  <p className="font-heading font-bold text-walnut-800 text-sm">Sanat Koltuk & Kanepe Hastanesi</p>
                  <p className="text-xs text-walnut-400">Esenevler Mah. İsmet İnönü Bulvarı No: 64/A</p>
                </div>
              </div>
            </div>
          </div>
        </AnimatedItem>
      </div>
    </SectionWrapper>
  )
}
