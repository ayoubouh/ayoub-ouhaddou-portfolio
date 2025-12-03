import { useState } from 'react'

interface HeaderProps {
  activeNav: string
  setActiveNav: (nav: string) => void
}

export default function Header({ activeNav, setActiveNav }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { id: 'home', label: 'Accueil', href: '#home' },
    { id: 'about', label: 'À propos', href: '#about' },
    { id: 'skills', label: 'Compétences', href: '#skills' },
    { id: 'portfolio', label: 'Portfolio', href: '#portfolio' },
    { id: 'services', label: 'Services', href: '#services' },
    { id: 'contact', label: 'Contact', href: '#contact' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#home" className="text-2xl font-serif font-bold text-primary-600">
              AO
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                onClick={() => setActiveNav(item.id)}
                className={`font-medium transition-colors duration-300 ${
                  activeNav === item.id
                    ? 'text-primary-600 border-b-2 border-primary-600'
                    : 'text-gray-600 hover:text-primary-600'
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-primary-600 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                onClick={() => {
                  setActiveNav(item.id)
                  setIsOpen(false)
                }}
                className="block py-2 text-gray-600 hover:text-primary-600 font-medium"
              >
                {item.label}
              </a>
            ))}
          </div>
        )}
      </nav>
    </header>
  )
}
