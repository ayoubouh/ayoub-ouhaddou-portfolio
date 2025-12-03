export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
            Qui suis-je ?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Expert en branding, marketing créatif, photographie professionnelle et organisation d'événements
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              Je suis Ayoub Ouhaddou, spécialiste en branding, marketing créatif, photographie professionnelle, 
              ainsi qu'en organisation d'événements, aussi bien en présentiel qu'en virtuel.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              J'accompagne les marques, entreprises et projets dans la création d'une identité visuelle forte, 
              d'une présence numérique cohérente, et d'expériences mémorables capables de marquer leur audience.
            </p>
            <div className="bg-primary-50 border-l-4 border-primary-600 p-6 rounded">
              <h3 className="text-xl font-serif font-bold text-gray-900 mb-3">Ma Vision</h3>
              <p className="text-gray-700">
                Chaque projet possède une âme, une histoire et une valeur à révéler. 
                Mon rôle est de transformer cette essence en une identité complète, visuelle, 
                émotionnelle et stratégique.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="bg-white border-2 border-primary-100 rounded-lg p-6 hover:border-primary-300 transition-colors">
              <h4 className="text-lg font-serif font-bold text-primary-600 mb-2">Approche Artistique</h4>
              <p className="text-gray-600">
                Une vision créative moderne combinée à une compréhension profonde des besoins du marché
              </p>
            </div>
            <div className="bg-white border-2 border-primary-100 rounded-lg p-6 hover:border-primary-300 transition-colors">
              <h4 className="text-lg font-serif font-bold text-primary-600 mb-2">Réflexion Stratégique</h4>
              <p className="text-gray-600">
                Chaque projet est orienté résultats avec une stratégie claire et mesurable
              </p>
            </div>
            <div className="bg-white border-2 border-primary-100 rounded-lg p-6 hover:border-primary-300 transition-colors">
              <h4 className="text-lg font-serif font-bold text-primary-600 mb-2">Maîtrise Technique</h4>
              <p className="text-gray-600">
                Expertise en photo, vidéo, design et communication digitale
              </p>
            </div>
            <div className="bg-white border-2 border-primary-100 rounded-lg p-6 hover:border-primary-300 transition-colors">
              <h4 className="text-lg font-serif font-bold text-primary-600 mb-2">Expériences Immersives</h4>
              <p className="text-gray-600">
                Capacité à orchestrer des événements et des univers mémorables
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
