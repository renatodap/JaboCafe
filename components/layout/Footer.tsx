import Link from 'next/link'
import { Facebook, Instagram, Mail, MapPin, Phone } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-coffee-900 text-coffee-100">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-serif text-2xl mb-4">Jabô Café</h3>
            <p className="text-sm text-coffee-200">
              Café especial com alma, cultivado com tradição e sustentabilidade desde 1938.
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-coffee-200 hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-coffee-200 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/sobre" className="text-coffee-200 hover:text-white transition-colors text-sm">
                  Nossa História
                </Link>
              </li>
              <li>
                <Link href="/cafe" className="text-coffee-200 hover:text-white transition-colors text-sm">
                  Nosso Café
                </Link>
              </li>
              <li>
                <Link href="/sustentabilidade" className="text-coffee-200 hover:text-white transition-colors text-sm">
                  Sustentabilidade
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-coffee-200 hover:text-white transition-colors text-sm">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Atendimento</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/loja" className="text-coffee-200 hover:text-white transition-colors text-sm">
                  Loja Online
                </Link>
              </li>
              <li>
                <Link href="/conta" className="text-coffee-200 hover:text-white transition-colors text-sm">
                  Minha Conta
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-coffee-200 hover:text-white transition-colors text-sm">
                  Perguntas Frequentes
                </Link>
              </li>
              <li>
                <Link href="/politica-privacidade" className="text-coffee-200 hover:text-white transition-colors text-sm">
                  Política de Privacidade
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contato</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-coffee-200">
                  Guaxupé, Minas Gerais<br />
                  Brasil
                </span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <span className="text-sm text-coffee-200">+55 35 1234-5678</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <span className="text-sm text-coffee-200">contato@jabo.cafe</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-coffee-800 text-center">
          <p className="text-sm text-coffee-300">
            © {new Date().getFullYear()} Jabô Café. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}