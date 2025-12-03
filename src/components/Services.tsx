export default function Services() {
  const services = [
    {
      id: 1,
      title: 'Branding & Identité Visuelle',
      icon: '🎨',
      description: 'Création d\'identités complètes et cohérentes',
      features: [
        'Création d\'identités complètes',
        'Moodboard et charte graphique',
        'Design de logo',
        'Univers narratif et positionnement'
      ]
    },
    {
      id: 2,
      title: 'Marketing Digital & Stratégie',
      icon: '📱',
      description: 'Stratégies de communication modernes et efficaces',
      features: [
        'Plan de communication',
        'Storytelling et narration de marque',
        'Stratégie social media',
        'Ligne éditoriale et content strategy'
      ]
    },
    {
      id: 3,
      title: 'Photographie Professionnelle',
      icon: '📸',
      description: 'Photographies de qualité professionnelle',
      features: [
        'Photographie produit',
        'Lifestyle et ambiance',
        'Corporate et portraits',
        'Food photography et reportage événementiel'
      ]
    },
    {
      id: 4,
      title: 'Organisation d\'Événements',
      icon: '🎭',
      description: 'Événements mémorables et immersifs',
      features: [
        'Dîners de gala et événements premium',
        'Lancements de produits',
        'Activations de marque',
        'Événements hybrides (réels + virtuels)'
      ]
    }
  ]

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
            Mes Offres
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Une approche globale où branding, marketing, photographie et événementiel se complètent
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service) => (
            <div key={service.id} className="card p-8 hover:scale-105 transition-transform duration-300">
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-2xl font-serif font-bold text-gray-900 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-6 font-medium">
                {service.description}
              </p>
              <ul className="space-y-3">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="text-primary-600 font-bold mr-3 mt-1">→</span>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-primary-600 to-accent-500 rounded-2xl p-12 text-white text-center">
          <h3 className="text-3xl font-serif font-bold mb-4">
            Pourquoi travailler avec moi ?
          </h3>
          <p className="text-lg mb-8 max-w-3xl mx-auto">
            Je propose une approche globale où branding, marketing, photographie et événementiel se complètent. 
            J'apporte créativité, professionnalisme, cohérence, vision moderne et exécution précise.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {['Créativité', 'Professionnalisme', 'Cohérence', 'Vision Moderne', 'Exécution'].map((value, idx) => (
              <div key={idx} className="bg-white bg-opacity-20 rounded-lg p-4">
                <p className="font-semibold">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
