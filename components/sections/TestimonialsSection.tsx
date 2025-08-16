'use client'

import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

export default function TestimonialsSection() {
  const testimonials = [
    {
      id: 1,
      name: 'Maria Silva',
      role: 'Cliente há 5 anos',
      content: 'O café Jabô transformou minhas manhãs. O aroma e sabor são incomparáveis, e saber que estou apoiando práticas sustentáveis torna cada xícara ainda mais especial.',
      rating: 5
    },
    {
      id: 2,
      name: 'João Santos',
      role: 'Barista Profissional',
      content: 'Como profissional, reconheço qualidade quando vejo. O Jabô tem consistência, sabor complexo e notas únicas que elevam qualquer método de preparo.',
      rating: 5
    },
    {
      id: 3,
      name: 'Ana Costa',
      role: 'Apreciadora de Café',
      content: 'Mais que um café, é uma experiência. Cada pacote conta uma história de tradição, cuidado e respeito pela natureza. Simplesmente perfeito!',
      rating: 5
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-coffee-50 to-cream">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-serif text-4xl md:text-5xl text-coffee-800 mb-4">
            O Que Dizem Nossos Clientes
          </h2>
          <p className="text-lg text-coffee-600 max-w-2xl mx-auto">
            Histórias de pessoas que descobriram o verdadeiro sabor do café especial
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center justify-between mb-4">
                <Quote className="w-8 h-8 text-coffee-300" />
                <div className="flex space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-coffee-500 text-coffee-500" />
                  ))}
                </div>
              </div>

              <p className="text-coffee-700 mb-6 italic">
                "{testimonial.content}"
              </p>

              <div className="border-t pt-4">
                <div className="font-semibold text-coffee-800">
                  {testimonial.name}
                </div>
                <div className="text-sm text-coffee-600">
                  {testimonial.role}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}