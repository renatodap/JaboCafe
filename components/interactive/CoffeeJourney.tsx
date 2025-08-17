'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ProgressiveImage } from '../storytelling/ProgressiveImage'
import { useIntersectionObserver } from '@/lib/hooks/useIntersectionObserver'

const journeySteps = [
  {
    id: 1,
    title: 'Plantio',
    subtitle: 'O Início da Jornada',
    description: 'Mudas selecionadas são plantadas em solo rico e fértil, preparado com técnicas regenerativas.',
    image: '/images/IMAGE_fazenda_vista_aerea.webp',
    color: 'from-green-600 to-green-800',
    icon: '🌱'
  },
  {
    id: 2,
    title: 'Cultivo',
    subtitle: 'Crescimento Sustentável',
    description: 'Cuidado diário com práticas orgânicas, respeitando o ciclo natural do café.',
    image: '/images/IMAGE_graos.webp',
    color: 'from-amber-600 to-amber-800',
    icon: '🌿'
  },
  {
    id: 3,
    title: 'Colheita',
    subtitle: 'Seleção Manual',
    description: 'Apenas os grãos maduros são colhidos manualmente, garantindo qualidade superior.',
    image: '/images/hero_colheita_cafe.webp',
    color: 'from-red-600 to-red-800',
    icon: '☕'
  },
  {
    id: 4,
    title: 'Secagem',
    subtitle: 'Processo Artesanal',
    description: 'Secagem natural ao sol em terreiros suspensos, preservando os aromas.',
    image: '/images/IMAGE_SECAGEM.webp',
    color: 'from-orange-600 to-orange-800',
    icon: '☀️'
  },
  {
    id: 5,
    title: 'Torra',
    subtitle: 'Arte e Ciência',
    description: 'Torra artesanal que realça as notas únicas de cada lote.',
    image: '/images/IMAGE_graos.webp',
    color: 'from-coffee-700 to-coffee-900',
    icon: '🔥'
  },
  {
    id: 6,
    title: 'Sua Xícara',
    subtitle: 'Experiência Única',
    description: 'O resultado: um café especial que conta nossa história em cada gole.',
    image: '/images/IMAGE_hero_people_fazenda.webp',
    color: 'from-coffee-800 to-black',
    icon: '☕'
  }
]

export function CoffeeJourney() {
  const [activeStep, setActiveStep] = useState(0)
  const { ref, hasIntersected } = useIntersectionObserver({ threshold: 0.3 })
  
  return (
    <section ref={ref} className="py-16 bg-gradient-to-b from-cream to-white overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={hasIntersected ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <p className="text-coffee-600 uppercase tracking-wider text-sm mb-4">
            Do Grão à Xícara
          </p>
          <h2 className="text-4xl md:text-5xl font-serif text-coffee-900 mb-6">
            A Jornada do Café Jabô
          </h2>
          <p className="text-lg text-coffee-700 max-w-2xl mx-auto">
            Acompanhe cada etapa do processo que transforma nossos grãos em uma experiência única
          </p>
        </motion.div>
        
        {/* Timeline */}
        <div className="relative">
          {/* Progress Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-coffee-200">
            <motion.div
              className="absolute top-0 left-0 w-full bg-gradient-to-b from-coffee-600 to-coffee-800"
              initial={{ height: 0 }}
              animate={hasIntersected ? { height: `${(activeStep + 1) * (100 / journeySteps.length)}%` } : {}}
              transition={{ duration: 0.5, ease: 'easeOut' }}
            />
          </div>
          
          {/* Steps */}
          <div className="relative space-y-12">
            {journeySteps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={hasIntersected ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                onMouseEnter={() => setActiveStep(index)}
              >
                {/* Content */}
                <div className="w-5/12">
                  <motion.div
                    className={`bg-white rounded-2xl shadow-xl p-8 cursor-pointer transform transition-all duration-300 ${
                      activeStep === index ? 'scale-105 shadow-2xl' : ''
                    }`}
                    whileHover={{ y: -5 }}
                  >
                    <div className="flex items-center mb-4">
                      <span className="text-3xl mr-3">{step.icon}</span>
                      <div>
                        <h3 className="text-2xl font-bold text-coffee-900">{step.title}</h3>
                        <p className="text-sm text-coffee-600">{step.subtitle}</p>
                      </div>
                    </div>
                    <p className="text-coffee-700 leading-relaxed">{step.description}</p>
                    
                    {/* Image Preview */}
                    <div className="mt-4 h-32 rounded-lg overflow-hidden">
                      <ProgressiveImage
                        src={step.image}
                        alt={step.title}
                        fill
                        className="h-full"
                      />
                    </div>
                  </motion.div>
                </div>
                
                {/* Center Circle */}
                <div className="w-2/12 flex justify-center">
                  <motion.div
                    className={`w-16 h-16 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center text-white font-bold text-xl shadow-lg z-10`}
                    animate={activeStep >= index ? { scale: [1, 1.2, 1] } : {}}
                    transition={{ duration: 0.3 }}
                  >
                    {step.id}
                  </motion.div>
                </div>
                
                {/* Empty Space */}
                <div className="w-5/12" />
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* Active Step Detail */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStep}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="mt-12 text-center"
          >
            <div className="inline-block">
              <div className={`px-6 py-3 rounded-full bg-gradient-to-r ${journeySteps[activeStep].color} text-white font-medium`}>
                Etapa {activeStep + 1} de {journeySteps.length}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}