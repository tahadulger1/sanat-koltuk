import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { Link } from 'react-router-dom'
import WhatsAppIcon from './icons/WhatsAppIcon'

const navLinks = [
  { label: 'Ana Sayfa', href: '/' },
  { label: 'Hizmetlerimiz', href: '/hizmetler' },
  { label: 'Referanslarımız', href: '/referanslar' },
  { label: 'İletişim', href: '/iletisim' },
]

const WHATSAPP_URL = 'https://wa.me/905054387744?text=Merhaba%2C%20koltuk%20yenileme%20hizmeti%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum.'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [isMobileMenuOpen])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'glass shadow-lg shadow-walnut-900/5 py-2'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <img 
            src="/img/analogo.webp" 
            alt="Sanat Koltuk Logo" 
            width="48"
            height="48"
            fetchpriority="high"
            className={`transition-all duration-300 object-contain mix-blend-multiply ${
              isScrolled ? 'w-10 h-10' : 'w-12 h-12'
            }`}
          />
          <div className="hidden sm:block">
            <div className={`font-heading font-bold text-walnut-800 leading-tight transition-all duration-300 ${
              isScrolled ? 'text-base' : 'text-lg'
            }`}>
              Sanat Koltuk
            </div>
            <div className={`text-walnut-400 leading-tight transition-all duration-300 ${
              isScrolled ? 'text-[10px]' : 'text-xs'
            }`}>
              Kanepe Hastanesi
            </div>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => {
            const isHash = link.href.includes('#')
            return isHash ? (
              <a
                key={link.href}
                href={link.href}
                className="px-3 py-2 text-sm font-medium text-walnut-600 hover:text-walnut-800 hover:bg-walnut-50/60 rounded-lg transition-all duration-200"
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.href}
                to={link.href}
                className="px-3 py-2 text-sm font-medium text-walnut-600 hover:text-walnut-800 hover:bg-walnut-50/60 rounded-lg transition-all duration-200"
              >
                {link.label}
              </Link>
            )
          })}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-whatsapp hover:bg-whatsapp-dark text-white text-sm font-semibold rounded-full transition-all duration-300 shadow-lg shadow-whatsapp/20 hover:shadow-whatsapp/40 hover:scale-105"
          >
            <WhatsAppIcon className="w-4 h-4" />
            WhatsApp'tan Fiyat Al
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden p-2 text-walnut-700 hover:bg-walnut-50 rounded-lg transition-colors"
          aria-label="Menü aç/kapat"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="lg:hidden overflow-hidden glass border-t border-walnut-100"
          >
            <nav className="px-4 py-4 space-y-1">
              {navLinks.map((link, i) => {
                const isHash = link.href.includes('#')
                return isHash ? (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className="block px-4 py-3 text-walnut-700 hover:text-walnut-900 hover:bg-walnut-50 rounded-xl font-medium transition-colors"
                  >
                    {link.label}
                  </motion.a>
                ) : (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <Link
                      to={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block px-4 py-3 text-walnut-700 hover:text-walnut-900 hover:bg-walnut-50 rounded-xl font-medium transition-colors"
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                )
              })}
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 mt-4 px-5 py-3 bg-whatsapp hover:bg-whatsapp-dark text-white font-semibold rounded-full transition-all duration-300"
              >
                <WhatsAppIcon className="w-5 h-5" />
                WhatsApp'tan Fiyat Al
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
