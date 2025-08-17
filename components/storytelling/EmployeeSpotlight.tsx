'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ProgressiveImage } from './ProgressiveImage'
import { useIntersectionObserver } from '@/lib/hooks/useIntersectionObserver'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'

const employees = [
  {
    id: 1,
    name: 'Reginaldo',
    role: 'Mestre de Colheita',
    image: '/images/IMAGE_funcionarioReginaldo.webp',
    quote: 'Cada grão que colhemos carrega a história de gerações. É mais que trabalho, é preservar uma tradição.',
    experience: '25 anos',
    specialty: 'Seleção manual de grãos maduros',
    story: 'Reginaldo cresceu nas terras da fazenda e conhece cada pé de café como a palma de sua mão. Sua experiência é fundamental para garantir que apenas os melhores grãos sejam colhidos.'
  },
  {
    id: 2,
    name: 'Everaldo',
    role: 'Especialista em Sustentabilidade',
    image: '/images/IMAGE_funcionario_Everaldo.webp',
    quote: 'Trabalhar com a terra é um privilégio. Nossa missão é deixá-la melhor para as próximas gerações.',
    experience: '18 anos',
    specialty: 'Práticas regenerativas e cultivo orgânico',
    story: 'Everaldo é responsável por implementar as técnicas de agricultura regenerativa que tornaram a Fazenda Jaboticabeiras referência em sustentabilidade.'
  }
]

export function EmployeeSpotlight() {
  const [currentEmployee, setCurrentEmployee] = useState(0)
  const { ref, hasIntersected } = useIntersectionObserver({ threshold: 0.2 })
  
  const nextEmployee = () => {
    setCurrentEmployee((prev) => (prev + 1) % employees.length)
  }
  
  const prevEmployee = () => {
    setCurrentEmployee((prev) => (prev - 1 + employees.length) % employees.length)
  }
  
  return (
    <section ref={ref} className="py-20 bg-gradient-to-b from-white to-cream">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={hasIntersected ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-coffee-600 uppercase tracking-wider text-sm mb-4">
            Nossa Equipe
          </p>
          <h2 className="text-4xl md:text-5xl font-serif text-coffee-900 mb-6">
            As Pessoas Por Trás do Café
          </h2>
          <p className="text-lg text-coffee-700 max-w-2xl mx-auto">
            Conheça os mestres artesãos que dedicam suas vidas a produzir o melhor café
          </p>
        </motion.div>
        
        <div className="relative max-w-6xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentEmployee}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
              className="grid md:grid-cols-2 gap-12 items-center"
            >
              {/* Image Side */}
              <div className="relative">
                <motion.div 
                  className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <ProgressiveImage
                    src={employees[currentEmployee].image}
                    alt={employees[currentEmployee].name}
                    fill
                    className="h-full"
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  
                  {/* Name Badge */}
                  <motion.div 
                    className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm rounded-xl px-6 py-4"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    <h3 className="text-2xl font-bold text-coffee-900">
                      {employees[currentEmployee].name}
                    </h3>
                    <p className="text-coffee-600">
                      {employees[currentEmployee].role}
                    </p>
                  </motion.div>
                </motion.div>
                
                {/* Experience Badge */}
                <motion.div 
                  className="absolute -top-4 -right-4 bg-gradient-to-br from-coffee-600 to-coffee-800 text-white rounded-full w-24 h-24 flex flex-col items-center justify-center shadow-xl"
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 0.5, type: 'spring' }}
                >
                  <span className="text-2xl font-bold">{employees[currentEmployee].experience.split(' ')[0]}</span>
                  <span className="text-xs">anos</span>
                </motion.div>
              </div>
              
              {/* Content Side */}
              <div className="space-y-6">
                {/* Quote */}
                <motion.div 
                  className="relative"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <Quote className="absolute -top-4 -left-4 w-12 h-12 text-coffee-200" />
                  <blockquote className="text-xl md:text-2xl text-coffee-800 font-light italic leading-relaxed pl-8">
                    {employees[currentEmployee].quote}
                  </blockquote>
                </motion.div>
                
                {/* Story */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <p className="text-coffee-700 leading-relaxed">
                    {employees[currentEmployee].story}
                  </p>
                </motion.div>
                
                {/* Specialty */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="bg-coffee-50 rounded-xl p-6"
                >
                  <h4 className="text-sm uppercase tracking-wider text-coffee-600 mb-2">
                    Especialidade
                  </h4>
                  <p className="text-coffee-900 font-medium">
                    {employees[currentEmployee].specialty}
                  </p>
                </motion.div>
                
                {/* Navigation */}
                <motion.div 
                  className="flex items-center space-x-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  <button
                    onClick={prevEmployee}
                    className="p-3 rounded-full bg-white shadow-lg hover:shadow-xl transform hover:scale-110 transition-all"
                    aria-label="Anterior"
                  >
                    <ChevronLeft className="w-5 h-5 text-coffee-700" />
                  </button>
                  
                  <div className="flex space-x-2">
                    {employees.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentEmployee(index)}
                        className={`w-2 h-2 rounded-full transition-all ${
                          index === currentEmployee 
                            ? 'w-8 bg-coffee-700' 
                            : 'bg-coffee-300 hover:bg-coffee-400'
                        }`}
                        aria-label={`Ir para funcionário ${index + 1}`}
                      />
                    ))}
                  </div>
                  
                  <button
                    onClick={nextEmployee}
                    className="p-3 rounded-full bg-white shadow-lg hover:shadow-xl transform hover:scale-110 transition-all"
                    aria-label="Próximo"
                  >
                    <ChevronRight className="w-5 h-5 text-coffee-700" />
                  </button>
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}