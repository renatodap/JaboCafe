'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Coffee, Package } from 'lucide-react'

export default function ProductsSection() {
  const products = [
    {
      id: 1,
      name: 'Café Grãos Jabô',
      subtitle: 'Premium',
      description: 'Grãos inteiros selecionados, torrados no ponto ideal para extrair o máximo sabor e aroma.',
      features: ['100% Arábica', 'Torra Média', 'Notas de Chocolate'],
      price: 'R$ 45,00',
      icon: Coffee,
      color: 'from-coffee-600 to-coffee-700'
    },
    {
      id: 2,
      name: 'Café Moído Jabô',
      subtitle: 'Tradicional',
      description: 'Moagem perfeita para diversos métodos de preparo, mantendo toda a essência do café.',
      features: ['Moagem Média', 'Ideal para Filtro', 'Aroma Intenso'],
      price: 'R$ 38,00',
      icon: Package,
      color: 'from-coffee-700 to-coffee-800'
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-serif text-4xl md:text-5xl text-coffee-800 mb-4">
            Nossos Cafés
          </h2>
          <p className="text-lg text-coffee-600 max-w-2xl mx-auto">
            Cada produto é resultado de décadas de experiência e dedicação, 
            trazendo o melhor do café especial brasileiro.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, x: index === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${product.color} opacity-95`} />
              
              <div className="relative p-8 text-white">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3 className="font-serif text-3xl mb-2">{product.name}</h3>
                    <span className="text-coffee-200 uppercase tracking-wider text-sm">
                      {product.subtitle}
                    </span>
                  </div>
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <product.icon className="w-6 h-6" />
                  </div>
                </div>

                <p className="text-coffee-100 mb-6">
                  {product.description}
                </p>

                <div className="mb-6">
                  <ul className="space-y-2">
                    {product.features.map((feature) => (
                      <li key={feature} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-coffee-300 rounded-full" />
                        <span className="text-coffee-100 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-coffee-200 text-sm">A partir de</span>
                    <div className="font-bold text-2xl">{product.price}</div>
                  </div>
                  <button className="group/btn flex items-center space-x-2 bg-white/20 px-5 py-2.5 rounded-full hover:bg-white hover:text-coffee-800 transition-all">
                    <span className="font-semibold">Ver Detalhes</span>
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <button className="px-8 py-3 bg-coffee-600 text-white rounded-full hover:bg-coffee-700 transition-colors font-semibold inline-flex items-center space-x-2">
            <span>Explorar Toda a Linha</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </motion.div>
      </div>
    </section>
  )
}