import { Phone, MapPin, ArrowUp } from 'lucide-react'
import { Link } from 'react-router-dom'
import WhatsAppIcon from './icons/WhatsAppIcon'

// Brand icons as inline SVGs (not available in latest lucide-react)
function InstagramIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}

function FacebookIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}

const WHATSAPP_URL = 'https://wa.me/905054387744?text=Merhaba%2C%20bilgi%20almak%20istiyorum.'

const quickLinks = [
  { label: 'Ana Sayfa', href: '/' },
  { label: 'Hizmetlerimiz', href: '/hizmetler' },
  { label: 'Referanslarımız', href: '/referanslar' },
  { label: 'İletişim', href: '/iletisim' },
]

const serviceLinks = [
  { label: 'Koltuk Döşeme', href: '/koltuk-doseme' },
  { label: 'Kanepe Yüz Değişimi', href: '/kanepe-yuz-degisimi' },
  { label: 'Berjer Döşeme', href: '/berjer-doseme' },
  { label: 'Sandalye Döşeme', href: '/sandalye-doseme' },
  { label: 'Koltuk Tamiri', href: '/koltuk-tamiri' },
  { label: 'Köşe Takımı Yenileme', href: '/kose-takimi-yenileme' },
]

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-walnut-800 text-cream-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-white rounded-lg p-1 flex items-center justify-center shrink-0">
                <img 
                  src="/img/analogo.webp" 
                  alt="Sanat Koltuk Logo" 
                  loading="lazy"
                  width="32"
                  height="32"
                  className="w-8 h-8 object-contain mix-blend-multiply"
                />
              </div>
              <div>
                <div className="font-heading font-bold text-cream-50 text-base">Sanat Koltuk</div>
                <div className="text-xs text-cream-300/60">Kanepe Hastanesi</div>
              </div>
            </div>
            <p className="text-sm text-cream-300/70 leading-relaxed mb-4 max-w-xs">
              Samsun Atakum'da köklü hizmet anlayışıyla koltuk döşeme, kanepe tamiri ve mobilya yenileme hizmetleri sunuyoruz.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/sanatkoltuk"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href="https://www.facebook.com/sanat.koltuk55"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-whatsapp/20 hover:bg-whatsapp/30 flex items-center justify-center transition-colors text-whatsapp"
                aria-label="WhatsApp"
              >
                <WhatsAppIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-bold text-cream-50 text-base mb-4">Hızlı Bağlantılar</h3>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => {
                const isHash = link.href.includes('#')
                return (
                  <li key={link.href}>
                    {isHash ? (
                      <a
                        href={link.href}
                        className="text-sm text-cream-300/70 hover:text-cream-50 transition-colors"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        to={link.href}
                        className="text-sm text-cream-300/70 hover:text-cream-50 transition-colors"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                )
              })}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-heading font-bold text-cream-50 text-base mb-4">Hizmetler</h3>
            <ul className="space-y-2.5">
              {serviceLinks.map((service) => (
                <li key={service.href}>
                  <Link
                    to={service.href}
                    className="text-sm text-cream-300/70 hover:text-cream-50 transition-colors"
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading font-bold text-cream-50 text-base mb-4">İletişim</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 mt-0.5 text-gold-400 shrink-0" />
                <p className="text-sm text-cream-300/70 leading-relaxed">
                  Esenevler Mah. İsmet İnönü Bulvarı No: 64/A Atakum / Samsun
                </p>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-gold-400 shrink-0" />
                <a href="tel:+903624387744" className="text-sm text-cream-300/70 hover:text-cream-50 transition-colors">
                  0362 438 77 44
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <WhatsAppIcon className="w-4 h-4 text-whatsapp shrink-0" />
                <a href="tel:+905054387744" className="text-sm text-cream-300/70 hover:text-cream-50 transition-colors">
                  0505 438 77 44
                </a>
              </div>
              <div className="pt-2">
                <p className="text-sm font-medium text-cream-100 mb-1">Çalışma Saatleri:</p>
                <p className="text-xs text-cream-300/70">Pazartesi - Cumartesi: 09:00 - 18:30</p>
                <p className="text-xs text-cream-300/70">Pazar: Kapalı</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-cream-300/50 text-center sm:text-left">
            © {new Date().getFullYear()} Sanat Koltuk & Kanepe Hastanesi. Tüm hakları saklıdır.
          </p>
          <button
            onClick={scrollToTop}
            className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all hover:-translate-y-1"
            aria-label="Sayfanın başına dön"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  )
}
