import { motion, AnimatePresence } from 'framer-motion'
import WhatsAppIcon from './icons/WhatsAppIcon'
import { useState, useEffect } from 'react'

const WHATSAPP_URL = 'https://wa.me/905054387744?text=Merhaba%2C%20fiyat%20bilgisi%20almak%20istiyorum.'

export default function FloatingWhatsApp() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 2000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5 }}
          className="fixed bottom-6 right-6 z-50"
        >
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 shadow-2xl shadow-whatsapp/30 hover:shadow-whatsapp/50 transition-all duration-300 hover:scale-110"
          >
            {/* Desktop: Text + Icon */}
            <div className="hidden sm:flex items-center gap-2 bg-whatsapp hover:bg-whatsapp-dark text-white font-semibold rounded-full pl-5 pr-4 py-3.5 transition-colors">
              <span className="text-sm">Fiyat Al</span>
              <WhatsAppIcon className="w-5 h-5" />
            </div>

            {/* Mobile: Icon Only */}
            <div className="sm:hidden w-14 h-14 bg-whatsapp hover:bg-whatsapp-dark rounded-full flex items-center justify-center text-white transition-colors">
              <WhatsAppIcon className="w-7 h-7" />
            </div>
          </a>

          {/* Pulse ring */}
          <div className="absolute inset-0 sm:hidden">
            <span className="absolute inset-0 rounded-full bg-whatsapp/20 animate-ping" />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
