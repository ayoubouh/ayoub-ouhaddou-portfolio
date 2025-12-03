interface HeroProps {
  setActiveNav: (nav: string) => void
}

export default function Hero({ setActiveNav }: HeroProps) {
  return (
    <section id="home" className="pt-32 pb-20 bg-gradient-to-br from-primary-50 to-white">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-gray-900 leading-tight">
              Ayoub Ouhaddou
            </h1>
            <p className="text-xl text-gray-600 font-medium">
              Expert en Branding, Marketing Visuel & Photographie
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Je transforme les visions en identités visuelles complètes, cohérentes et mémorables. 
              Du branding stratégique à la photographie professionnelle, en passant par l'organisation 
              d'événements immersifs, j'accompagne les marques qui veulent marquer leur audience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                onClick={() => setActiveNav('portfolio')}
                className="btn-primary"
              >
                Voir mon portfolio
              </button>
              <button
                onClick={() => setActiveNav('contact')}
                className="btn-secondary"
              >
                Me contacter
              </button>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center">
            <div className="relative w-full max-w-md">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-200 to-accent-200 rounded-2xl blur-3xl opacity-50"></div>
              <img
                src="/profile.jpeg"
                alt="Ayoub Ouhaddou"
                className="relative w-full rounded-2xl shadow-2xl object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
