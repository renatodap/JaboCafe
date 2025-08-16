'use client'

import { motion } from 'framer-motion'
import { Coffee, Heart, Leaf, Users } from 'lucide-react'

export default function AboutSection() {
  const features = [
    {
      icon: Coffee,
      title: 'Café Especial',
      description: 'Grãos selecionados e processados com cuidado artesanal'
    },
    {
      icon: Users,
      title: 'Tradição Familiar',
      description: 'Três gerações dedicadas ao cultivo de café desde 1938'
    },
    {
      icon: Leaf,
      title: 'Sustentável',
      description: 'Práticas regenerativas que respeitam o meio ambiente'
    },
    {
      icon: Heart,
      title: 'Com Alma',
      description: 'Cada xícara conta nossa história e paixão pelo café'
    }
  ]

  return (
    <section className="py-20 bg-cream">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-serif text-4xl md:text-5xl text-coffee-800 mb-4">
            Nossa História
          </h2>
          <p className="text-lg text-coffee-600 max-w-3xl mx-auto">
            Desde 1938, a família Jabô cultiva café com dedicação em Guaxupé, Minas Gerais. 
            Nossa fazenda une tradição centenária com práticas modernas de sustentabilidade.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-coffee-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-xl text-coffee-800 mb-2">
                {feature.title}
              </h3>
              <p className="text-coffee-600">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          <div>
            <h3 className="font-serif text-3xl text-coffee-800 mb-4">
              Três Gerações de Paixão
            </h3>
            <p className="text-coffee-600 mb-4">
              Nossa história começou quando o avô Jabô plantou os primeiros pés de café em nossa terra. 
              Desde então, mantemos viva a tradição familiar, combinando técnicas ancestrais com 
              inovações sustentáveis.
            </p>
            <p className="text-coffee-600 mb-4">
              Cada grão é cultivado com respeito à natureza, utilizando práticas regenerativas que 
              enriquecem o solo e preservam a biodiversidade local. Nosso compromisso vai além do 
              café excepcional - cultivamos um futuro sustentável.
            </p>
            <p className="text-coffee-600">
              Hoje, a terceira geração da família continua esse legado, levando o sabor único do 
              café Jabô para apreciadores em todo o Brasil, mantendo sempre o cuidado artesanal 
              que nos define.
            </p>
          </div>
          <div className="relative h-96 bg-gradient-to-br from-coffee-200 to-coffee-300 rounded-2xl overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl font-serif text-coffee-800 mb-2">1938</div>
                <div className="text-coffee-600">Desde sempre com você</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}