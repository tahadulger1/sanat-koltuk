import { Suspense, lazy } from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import FloatingWhatsApp from './components/FloatingWhatsApp'
import ScrollToTop from './components/ScrollToTop'

const Home = lazy(() => import('./pages/Home'))
const ServicesPage = lazy(() => import('./pages/ServicesPage'))
const References = lazy(() => import('./pages/References'))
const Contact = lazy(() => import('./pages/Contact'))
const ServiceDetail = lazy(() => import('./pages/ServiceDetail'))

export default function App() {
  return (
    <div className="min-h-screen bg-cream-50 flex flex-col">
      <ScrollToTop />
      <Header />
      <main className="flex-1">
        <Suspense fallback={<div className="flex items-center justify-center min-h-screen"><div className="w-8 h-8 border-4 border-gold-400 border-t-transparent rounded-full animate-spin"></div></div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/hizmetler" element={<ServicesPage />} />
            <Route path="/referanslar" element={<References />} />
            <Route path="/iletisim" element={<Contact />} />
            
            {/* Specific Service Pages */}
            <Route path="/koltuk-doseme" element={<ServiceDetail serviceId="koltuk-doseme" />} />
            <Route path="/kanepe-yuz-degisimi" element={<ServiceDetail serviceId="kanepe-yuz-degisimi" />} />
            <Route path="/berjer-doseme" element={<ServiceDetail serviceId="berjer-doseme" />} />
            <Route path="/sandalye-doseme" element={<ServiceDetail serviceId="sandalye-doseme" />} />
            <Route path="/koltuk-tamiri" element={<ServiceDetail serviceId="koltuk-tamiri" />} />
            <Route path="/kose-takimi-yenileme" element={<ServiceDetail serviceId="kose-takimi-yenileme" />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  )
}

