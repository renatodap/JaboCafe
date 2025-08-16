'use client'

import Link from 'next/link'
import { Menu, X, ShoppingBag, User, Globe } from 'lucide-react'
import { useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isLangOpen, setIsLangOpen] = useState(false)

  const navItems = [
    { href: '/', label: 'Início' },
    { href: '/sobre', label: 'Nossa História' },
    { href: '/cafe', label: 'Nosso Café' },
    { href: '/sustentabilidade', label: 'Sustentabilidade' },
    { href: '/blog', label: 'Blog' },
    { href: '/contato', label: 'Contato' },
  ]

  const languages = [
    { code: 'pt', label: 'Português' },
    { code: 'en', label: 'English' },
    { code: 'es', label: 'Español' },
  ]

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-coffee-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xl">J</span>
            </div>
            <span className="font-serif text-2xl text-coffee-800">Jabô Café</span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-coffee-800 hover:text-coffee-600 transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <button className="p-2 text-coffee-800 hover:text-coffee-600 transition-colors">
              <User className="w-5 h-5" />
            </button>
            <button className="p-2 text-coffee-800 hover:text-coffee-600 transition-colors">
              <ShoppingBag className="w-5 h-5" />
            </button>
            <div className="relative">
              <button 
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="p-2 text-coffee-800 hover:text-coffee-600 transition-colors flex items-center space-x-1"
              >
                <Globe className="w-5 h-5" />
                <span className="text-sm">PT</span>
              </button>
              {isLangOpen && (
                <div className="absolute right-0 mt-2 w-32 bg-white rounded-lg shadow-lg py-2">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      className="block w-full text-left px-4 py-2 text-sm text-coffee-800 hover:bg-coffee-50"
                    >
                      {lang.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-coffee-800"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block py-2 text-coffee-800 hover:text-coffee-600"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="flex items-center space-x-4 pt-4 border-t mt-4">
              <button className="p-2 text-coffee-800">
                <User className="w-5 h-5" />
              </button>
              <button className="p-2 text-coffee-800">
                <ShoppingBag className="w-5 h-5" />
              </button>
              <button className="p-2 text-coffee-800 flex items-center space-x-1">
                <Globe className="w-5 h-5" />
                <span className="text-sm">PT</span>
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}