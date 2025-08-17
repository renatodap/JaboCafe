'use client'

import { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import { SubscriptionModal } from '@/components/ecommerce/SubscriptionModal'
import { PurchaseNotification } from '@/components/ecommerce/PurchaseNotification'
import { HeroSection } from '@/components/storytelling/HeroSection'
import { CoffeeJourney } from '@/components/interactive/CoffeeJourney'
import { EmployeeSpotlight } from '@/components/storytelling/EmployeeSpotlight'
import { MorningMist } from '@/components/ambient/MorningMist'
import { CoffeeBeanRain } from '@/components/ambient/CoffeeBeanRain'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ProgressiveImage } from '@/components/storytelling/ProgressiveImage'
import { useIntersectionObserver } from '@/lib/hooks/useIntersectionObserver'
import { Coffee, Leaf, Heart, Award, ArrowRight, ShoppingCart, Package, CheckCircle } from 'lucide-react'

export default function Home() {
  const [isDayMode, setIsDayMode] = useState(true)
  const [showSubscriptionModal, setShowSubscriptionModal] = useState(false)
  const { scrollYProgress } = useScroll()
  
  // Time-based theme
  useEffect(() => {
    const hour = new Date().getHours()
    setIsDayMode(hour >= 6 && hour < 18)
  }, [])
  
  return (
    <div className={`min-h-screen ${isDayMode ? 'bg-cream' : 'bg-coffee-900'} transition-colors duration-1000`}>
      {/* Ambient Effects */}
      <MorningMist />
      <CoffeeBeanRain />
      
      {/* Social Proof Notifications */}
      <PurchaseNotification />
      
      {/* Subscription Modal */}
      <SubscriptionModal 
        isOpen={showSubscriptionModal} 
        onClose={() => setShowSubscriptionModal(false)} 
      />
      
      {/* Grain Texture Overlay */}
      <div 
        className="fixed inset-0 pointer-events-none z-30 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100' height='100' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
        }}
      />
      
      {/* Hero Section */}
      <HeroSection />
      
      {/* Quick Purchase CTA - Premium placement */}
      <section className="py-12 bg-gradient-to-r from-coffee-800 to-coffee-900">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-white">
              <h3 className="text-2xl font-bold mb-2">Café Jabô Especial - 250g</h3>
              <p className="text-coffee-200">Experimente a tradição de 3 gerações em cada xícara</p>
            </div>
            <div className="flex gap-4">
              <motion.a
                href="#produtos"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-coffee-900 px-8 py-3 rounded-full font-semibold flex items-center gap-2 hover:shadow-xl transition-shadow"
              >
                <ShoppingCart className="w-5 h-5" />
                Comprar Agora
              </motion.a>
              <motion.a
                href="https://wa.me/5511984153337?text=Olá! Gostaria de saber mais sobre o Café Jabô Especial"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-green-600 text-white px-8 py-3 rounded-full font-semibold flex items-center gap-2 hover:bg-green-700 transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.149-.67.149-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                </svg>
                WhatsApp
              </motion.a>
            </div>
          </div>
        </div>
      </section>
      
      {/* Product Introduction - Fixed contrast and readability */}
      <section className="py-20 bg-gradient-to-b from-white to-cream relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <ProductShowcase />
        </div>
      </section>
      
      {/* Coffee Journey */}
      <CoffeeJourney />
      
      {/* History Section */}
      <section className="py-20 bg-gradient-to-b from-cream to-white">
        <HistorySection />
      </section>
      
      {/* Product Section - Moved up for better visibility */}
      <ProductSection onOpenSubscription={() => setShowSubscriptionModal(true)} />
      
      {/* Employee Spotlight */}
      <EmployeeSpotlight />
      
      {/* Sustainability Section */}
      <SustainabilitySection />
      
      {/* Testimonials */}
      <TestimonialsSection />
      
      {/* Contact CTA */}
      <ContactSection />
    </div>
  )
}

function ProductShowcase() {
  const { ref, hasIntersected } = useIntersectionObserver({ threshold: 0.3 })
  
  return (
    <div ref={ref} className="grid md:grid-cols-2 gap-16 items-center">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={hasIntersected ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <p className="text-coffee-700 uppercase tracking-wider text-sm mb-4 font-semibold">
          Nosso Café Especial
        </p>
        <h2 className="text-4xl md:text-5xl font-serif text-coffee-900 mb-6">
          Três Gerações de Excelência
        </h2>
        <p className="text-lg text-coffee-800 mb-8 leading-relaxed font-medium">
          Desde 1938, a Fazenda Jaboticabeiras cultiva cafés especiais com paixão e dedicação. 
          Cada grão é cuidadosamente selecionado para oferecer uma experiência única.
        </p>
        
        <div className="grid grid-cols-2 gap-6 mb-8">
          <div className="flex items-start space-x-3">
            <Coffee className="w-6 h-6 text-coffee-600 mt-1" />
            <div>
              <h4 className="font-semibold text-coffee-900">100% Arábica</h4>
              <p className="text-sm text-coffee-600">Altitude ideal de 1.200m</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <Leaf className="w-6 h-6 text-green-600 mt-1" />
            <div>
              <h4 className="font-semibold text-coffee-900">Sustentável</h4>
              <p className="text-sm text-coffee-600">Cultivo regenerativo</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <Heart className="w-6 h-6 text-red-600 mt-1" />
            <div>
              <h4 className="font-semibold text-coffee-900">Artesanal</h4>
              <p className="text-sm text-coffee-600">Colheita manual</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <Award className="w-6 h-6 text-amber-600 mt-1" />
            <div>
              <h4 className="font-semibold text-coffee-900">Premiado</h4>
              <p className="text-sm text-coffee-600">Reconhecimento mundial</p>
            </div>
          </div>
        </div>
        
        <motion.a
          href="#produtos"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-gradient-to-r from-coffee-700 to-coffee-900 text-white px-8 py-4 rounded-full font-medium inline-flex items-center space-x-2 hover:shadow-xl transition-shadow"
        >
          <span>Conheça Nossos Cafés</span>
          <ArrowRight className="w-5 h-5" />
        </motion.a>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={hasIntersected ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative"
      >
        <div className="relative h-[600px] rounded-2xl overflow-hidden shadow-2xl">
          <ProgressiveImage
            src="/images/IMAGE_SECAGEM.webp"
            alt="Processo de secagem do café"
            fill
            className="h-full"
            kenBurns
          />
          
        </div>
      </motion.div>
    </div>
  )
}

function HistorySection() {
  const { ref, hasIntersected } = useIntersectionObserver({ threshold: 0.2 })
  
  return (
    <div ref={ref} className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={hasIntersected ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <p className="text-coffee-600 uppercase tracking-wider text-sm mb-4">
          Nossa História
        </p>
        <h2 className="text-4xl md:text-5xl font-serif text-coffee-900 mb-6">
          Uma Tradição Que Atravessa Gerações
        </h2>
      </motion.div>
      
      <div className="relative">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={hasIntersected ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-xl">
              <ProgressiveImage
                src="/images/IMAGE_history(oldpic).webp"
                alt="História da Fazenda Jaboticabeiras"
                fill
                className="h-full sepia-[0.3]"
              />
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={hasIntersected ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-gradient-to-br from-coffee-600 to-coffee-800 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  1938
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-coffee-900">O Início</h3>
                  <p className="text-coffee-600">Fundação da Fazenda Jaboticabeiras</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-gradient-to-br from-coffee-600 to-coffee-800 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  1965
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-coffee-900">Expansão</h3>
                  <p className="text-coffee-600">Primeira exportação internacional</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-gradient-to-br from-coffee-600 to-coffee-800 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  1998
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-coffee-900">Sustentabilidade</h3>
                  <p className="text-coffee-600">Adoção de práticas regenerativas</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-gradient-to-br from-coffee-600 to-coffee-800 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  2024
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-coffee-900">Inovação</h3>
                  <p className="text-coffee-600">Tecnologia e tradição em harmonia</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

function SustainabilitySection() {
  const { ref, hasIntersected } = useIntersectionObserver({ threshold: 0.2 })
  
  return (
    <section ref={ref} className="py-20 bg-gradient-to-b from-white to-cream">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={hasIntersected ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <p className="text-coffee-600 uppercase tracking-wider text-sm mb-4">
            Sustentabilidade
          </p>
          <h2 className="text-4xl md:text-5xl font-serif text-coffee-900 mb-6">
            Nosso Compromisso com o Futuro
          </h2>
          <p className="text-lg text-coffee-700 max-w-2xl mx-auto">
            Agricultura regenerativa que preserva e enriquece nosso ecossistema
          </p>
        </motion.div>
        
        {/* Simplified Impact Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-12 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={hasIntersected ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-xl p-6 shadow-lg text-center"
          >
            <Leaf className="w-12 h-12 text-green-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-coffee-900 mb-2">Carbono Negativo</h3>
            <p className="text-coffee-600">Capturamos mais CO₂ do que emitimos</p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={hasIntersected ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-white rounded-xl p-6 shadow-lg text-center"
          >
            <svg className="w-12 h-12 text-blue-600 mx-auto mb-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.69l5.66 5.66a8 8 0 11-11.31 0z"/>
            </svg>
            <h3 className="text-xl font-semibold text-coffee-900 mb-2">Água Preservada</h3>
            <p className="text-coffee-600">Técnicas que economizam 85% de água</p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={hasIntersected ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-xl p-6 shadow-lg text-center"
          >
            <Heart className="w-12 h-12 text-coffee-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-coffee-900 mb-2">Biodiversidade</h3>
            <p className="text-coffee-600">127 espécies nativas protegidas</p>
          </motion.div>
        </div>
        
        {/* Certifications - Simplified */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={hasIntersected ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center"
        >
          <h3 className="text-xl font-semibold text-coffee-900 mb-6">
            Certificações de Qualidade
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {['Orgânico Brasil', 'Rainforest Alliance', 'Fair Trade', 'Carbon Neutral'].map((cert, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-lg px-6 py-3 shadow-md border border-coffee-200"
              >
                <p className="text-coffee-800 font-medium">{cert}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function TestimonialsSection() {
  const { ref, hasIntersected } = useIntersectionObserver({ threshold: 0.2 })
  
  const testimonials = [
    {
      text: "Ter experimentado o Café Jabô foi uma sensação de nostalgia com emoções. Um café frutado, leve, muito saboroso e que traz consigo tanta história, selos e cuidado que é impossível tomar com pressa ou tomar sem sentir alguma coisa. Parabéns à família produtora e à fazenda Jaboticabeiras por terem criado esse patrimônio brasileiro.",
      author: "Barbara Grings",
      role: "Cliente",
      rating: 5
    },
    {
      text: "Perfeito! Obrigada!!!! Delicioso!",
      author: "Isabella Salton",
      role: "Cliente",
      rating: 5
    }
  ]
  
  return (
    <section ref={ref} className="py-20 bg-gradient-to-b from-cream to-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={hasIntersected ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-coffee-600 uppercase tracking-wider text-sm mb-4">
            Depoimentos
          </p>
          <h2 className="text-4xl md:text-5xl font-serif text-coffee-900 mb-6">
            O Que Dizem Sobre Nós
          </h2>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={hasIntersected ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-shadow border border-coffee-100"
            >
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className={`w-5 h-5 ${i < testimonial.rating ? 'text-amber-400' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                ))}
              </div>
              <p className="text-coffee-700 mb-6 italic leading-relaxed">
                &quot;{testimonial.text}&quot;
              </p>
              <div className="border-t border-coffee-100 pt-4">
                <p className="font-semibold text-coffee-900">{testimonial.author}</p>
                <p className="text-coffee-600 text-sm">{testimonial.role} verificado</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ProductSection({ onOpenSubscription }: { onOpenSubscription: () => void }) {
  const { ref, hasIntersected } = useIntersectionObserver({ threshold: 0.2 })
  const [selectedType, setSelectedType] = useState<'graos' | 'moido'>('graos')
  const [quantity, setQuantity] = useState(1)
  const [showCart, setShowCart] = useState(false)
  
  const basePrice = 45.00
  const totalPrice = basePrice * quantity
  
  const handleAddToCart = () => {
    setShowCart(true)
    setTimeout(() => setShowCart(false), 3000)
  }
  
  const handleWhatsAppOrder = () => {
    const message = `Olá! Gostaria de comprar ${quantity} unidade(s) de Café Jabô Especial (${selectedType === 'graos' ? 'Grãos' : 'Moído'}) - Total: R$ ${totalPrice.toFixed(2)}`
    const whatsappUrl = `https://wa.me/5511984153337?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }
  
  return (
    <section ref={ref} id="produtos" className="py-20 bg-gradient-to-b from-white to-cream">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={hasIntersected ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-coffee-600 uppercase tracking-wider text-sm mb-4">
            Produto Exclusivo
          </p>
          <h2 className="text-4xl md:text-5xl font-serif text-coffee-900 mb-6">
            Café Jabô Especial
          </h2>
          <p className="text-lg text-coffee-700 max-w-2xl mx-auto">
            250g de puro sabor e tradição, cultivado com amor desde 1938
          </p>
        </motion.div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
          {/* Product Gallery */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={hasIntersected ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-4"
          >
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <ProgressiveImage
                src="/images/nature-package.png"
                alt="Café Jabô Especial - Embalagem Premium"
                fill
                className="h-full object-cover"
              />
              <div className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold animate-pulse">
                Lote Limitado
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur rounded-lg px-4 py-2">
                <p className="text-coffee-900 font-bold">250g Premium</p>
              </div>
            </div>
            
            {/* Trust Badges */}
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-white rounded-lg p-4 text-center shadow-md">
                <Package className="w-8 h-8 text-coffee-600 mx-auto mb-2" />
                <p className="text-xs text-coffee-700 font-medium">Frete Grátis</p>
                <p className="text-xs text-coffee-500">Acima de R$100</p>
              </div>
              <div className="bg-white rounded-lg p-4 text-center shadow-md">
                <CheckCircle className="w-8 h-8 text-green-600 mx-auto mb-2" />
                <p className="text-xs text-coffee-700 font-medium">Garantia</p>
                <p className="text-xs text-coffee-500">Satisfação 100%</p>
              </div>
              <div className="bg-white rounded-lg p-4 text-center shadow-md">
                <Coffee className="w-8 h-8 text-coffee-600 mx-auto mb-2" />
                <p className="text-xs text-coffee-700 font-medium">Torrado</p>
                <p className="text-xs text-coffee-500">Há 3 dias</p>
              </div>
            </div>
          </motion.div>
          
          {/* Product Details & Purchase */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={hasIntersected ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-6"
          >
            {/* Price */}
            <div>
              <p className="text-3xl font-bold text-coffee-900 mb-2">
                R$ {totalPrice.toFixed(2)}
              </p>
              <p className="text-coffee-600">250g - {quantity} unidade{quantity > 1 ? 's' : ''}</p>
            </div>
            
            {/* Type Selection */}
            <div>
              <label className="block text-sm font-medium text-coffee-700 mb-3">
                Escolha o tipo:
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={() => setSelectedType('graos')}
                  className={`px-4 py-3 rounded-lg border-2 transition-all ${
                    selectedType === 'graos'
                      ? 'border-coffee-600 bg-coffee-50 text-coffee-900'
                      : 'border-gray-200 text-coffee-600 hover:border-coffee-300'
                  }`}
                >
                  <Coffee className="w-5 h-5 mx-auto mb-1" />
                  <span className="block font-medium">Grãos</span>
                  <span className="text-xs">Para moer em casa</span>
                </button>
                <button
                  onClick={() => setSelectedType('moido')}
                  className={`px-4 py-3 rounded-lg border-2 transition-all ${
                    selectedType === 'moido'
                      ? 'border-coffee-600 bg-coffee-50 text-coffee-900'
                      : 'border-gray-200 text-coffee-600 hover:border-coffee-300'
                  }`}
                >
                  <Package className="w-5 h-5 mx-auto mb-1" />
                  <span className="block font-medium">Moído</span>
                  <span className="text-xs">Pronto para usar</span>
                </button>
              </div>
            </div>
            
            {/* Quantity Selector */}
            <div>
              <label className="block text-sm font-medium text-coffee-700 mb-3">
                Quantidade:
              </label>
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 rounded-full border-2 border-coffee-300 text-coffee-600 hover:bg-coffee-50 transition-colors"
                >
                  -
                </button>
                <span className="text-xl font-semibold text-coffee-900 w-12 text-center">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 rounded-full border-2 border-coffee-300 text-coffee-600 hover:bg-coffee-50 transition-colors"
                >
                  +
                </button>
              </div>
            </div>
            
            {/* Purchase Buttons */}
            <div className="space-y-3">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleWhatsAppOrder}
                className="w-full bg-green-600 text-white px-6 py-4 rounded-lg font-medium flex items-center justify-center space-x-2 hover:bg-green-700 transition-colors"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.149-.67.149-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                  <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm5.472 12.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.149-.67.149-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                </svg>
                <span>Comprar via WhatsApp</span>
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleAddToCart}
                className="w-full bg-gradient-to-r from-coffee-700 to-coffee-900 text-white px-6 py-4 rounded-lg font-medium flex items-center justify-center space-x-2 hover:shadow-xl transition-shadow"
              >
                <ShoppingCart className="w-5 h-5" />
                <span>Adicionar ao Carrinho</span>
              </motion.button>
            </div>
            
            {/* Product Features */}
            <div className="border-t border-coffee-200 pt-6 space-y-3">
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                <div>
                  <p className="font-medium text-coffee-900">Notas de chocolate e caramelo</p>
                  <p className="text-sm text-coffee-600">Sabor equilibrado e marcante</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                <div>
                  <p className="font-medium text-coffee-900">Acidez cítrica suave</p>
                  <p className="text-sm text-coffee-600">Finalização limpa e agradável</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                <div>
                  <p className="font-medium text-coffee-900">Corpo aveludado</p>
                  <p className="text-sm text-coffee-600">Textura cremosa e envolvente</p>
                </div>
              </div>
            </div>
            
            {/* Subscription Option */}
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-lg p-4 border border-amber-200">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-semibold text-coffee-900">Assine e Economize 10%</h4>
                <span className="bg-amber-500 text-white text-xs px-2 py-1 rounded-full">NOVO</span>
              </div>
              <p className="text-sm text-coffee-700 mb-3">Receba mensalmente e nunca fique sem café</p>
              <button 
                onClick={onOpenSubscription}
                className="text-coffee-800 font-medium text-sm hover:text-coffee-600 transition-colors"
              >
                Saiba mais →
              </button>
            </div>
          </motion.div>
        </div>
        
        {/* Success Toast */}
        {showCart && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-8 right-8 bg-green-600 text-white px-6 py-4 rounded-lg shadow-2xl flex items-center space-x-3 z-50"
          >
            <CheckCircle className="w-6 h-6" />
            <span className="font-medium">Produto adicionado ao carrinho!</span>
          </motion.div>
        )}
      </div>
    </section>
  )
}

function ContactSection() {
  const { ref, hasIntersected } = useIntersectionObserver({ threshold: 0.3 })
  
  return (
    <section ref={ref} className="py-20 bg-gradient-to-br from-coffee-800 to-coffee-900 text-white">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={hasIntersected ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-serif mb-6">
            Experimente o Sabor da Tradição
          </h2>
          <p className="text-xl text-coffee-200 mb-8 max-w-2xl mx-auto">
            Entre em contato e descubra como levar o autêntico café Jabô para sua casa ou estabelecimento
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="mailto:renatofap@jabo.cafe"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-coffee-900 px-8 py-4 rounded-full font-medium hover:shadow-2xl transition-shadow"
            >
              Fale Conosco
            </motion.a>
            <motion.a
              href="tel:+5511984153337"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-medium hover:bg-white hover:text-coffee-900 transition-colors"
            >
              (11) 98415-3337
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}