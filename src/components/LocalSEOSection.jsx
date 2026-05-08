import { SectionWrapper, SectionTitle, AnimatedItem } from './SectionWrapper'
import { MapPin, Clock, Truck, ShieldCheck } from 'lucide-react'
import WhatsAppIcon from './icons/WhatsAppIcon'

const WHATSAPP_URL = 'https://wa.me/905054387744?text=Merhaba%2C%20Samsun%20Atakum%20koltuk%20d%C3%B6%C5%9Feme%20hizmetiniz%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum.'

export default function LocalSEOSection() {
  return (
    <SectionWrapper id="samsun-koltuk-doseme" bg="bg-white">
      <SectionTitle
        title="Samsun Atakum Koltuk Döşeme Hizmeti"
        subtitle="Samsun ve çevresinde, eskiyen koltuklarınızı ücretsiz evinizden alıyor, yenileyip tekrar evinize teslim ediyoruz."
      />

      <div className="grid lg:grid-cols-2 gap-12 items-center mt-8">
        <AnimatedItem>
          <div className="prose prose-walnut text-walnut-600">
            <p className="text-lg leading-relaxed mb-6">
              Sanat Koltuk olarak, <strong>Samsun Atakum</strong> başta olmak üzere İlkadım, Canik ve çevre ilçelerde profesyonel koltuk döşeme, yüz değişimi ve iskelet tamiri hizmeti sunuyoruz. Mobilyalarınızın değerini biliyor, onları en kaliteli kumaşlar ve usta işçilikle ilk günkü ihtişamına kavuşturuyoruz.
            </p>
            
            <ul className="space-y-4 list-none pl-0">
              <li className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold-50 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-gold-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-walnut-800 m-0">Samsun İçi Ücretsiz Servis</h4>
                  <p className="text-sm m-0">Mobilyalarınızı adresinizden alıyor, adresinize teslim ediyoruz.</p>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold-50 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 text-gold-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-walnut-800 m-0">Hızlı ve Zamanında Teslimat</h4>
                  <p className="text-sm m-0">Söz verdiğimiz tarihte, gecikme olmadan ürünlerinizi teslim ediyoruz.</p>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold-50 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-5 h-5 text-gold-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-walnut-800 m-0">Garantili İşçilik</h4>
                  <p className="text-sm m-0">Kullandığımız sünger ve kumaşlarda uzun ömür ve kalite garantisi.</p>
                </div>
              </li>
            </ul>

            <div className="mt-8">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-whatsapp hover:bg-whatsapp-dark text-white font-semibold rounded-full transition-all duration-300 shadow-lg shadow-whatsapp/25 hover:shadow-whatsapp/40"
              >
                <WhatsAppIcon className="w-6 h-6" />
                WhatsApp'tan Konum ve Fotoğraf Gönder
              </a>
            </div>
          </div>
        </AnimatedItem>

        <AnimatedItem className="relative h-[400px] rounded-3xl overflow-hidden shadow-2xl">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3000.722956247348!2d36.2922709!3d41.3411083!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40887964b3df2a5d%3A0x6b6d5162a843e9cd!2sSanat%20Koltuk%20D%C3%B6%C5%9Feme!5e0!3m2!1str!2str!4v1709123456789!5m2!1str!2str" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Sanat Koltuk Konum"
            className="absolute inset-0"
          />
        </AnimatedItem>
      </div>
    </SectionWrapper>
  )
}
