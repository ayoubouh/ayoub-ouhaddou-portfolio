export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-serif font-bold mb-4">Ayoub Ouhaddou</h3>
            <p className="text-gray-400">
              Expert en branding, marketing visuel, photographie et organisation d'événements.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-white transition-colors">Accueil</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">À propos</a></li>
              <li><a href="#portfolio" className="text-gray-400 hover:text-white transition-colors">Portfolio</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Services</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Branding</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Photographie</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Marketing Digital</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Événementiel</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Direct</h4>
            <div className="space-y-2">
              <p><a href="mailto:studio.a.events27@gmail.com" className="text-gray-400 hover:text-white transition-colors">studio.a.events27@gmail.com</a></p>
              <p><a href="tel:+212621695313" className="text-gray-400 hover:text-white transition-colors">+212 6 21 69 53 13</a></p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} Ayoub Ouhaddou. Tous droits réservés.
            </p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Politique de confidentialité</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Conditions d'utilisation</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
