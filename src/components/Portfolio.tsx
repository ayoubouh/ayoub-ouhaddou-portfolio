import { useState } from 'react'

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null)

  const projects = [
    {
      id: 1,
      title: 'Identité Digitale Restaurant Marrakech',
      category: 'Branding & Photographie',
      description: 'Création d\'une identité numérique complète pour un restaurant moderne à Marrakech',
      details: [
        'Définition du territoire visuel avec tons chauds et style marocain moderne',
        'Photographies haut de gamme (plats, détails, lifestyle, ambiance)',
        'Production de visuels cohérents pour les réseaux sociaux',
        'Création d\'un mini-brandbook avec polices, couleurs et mood',
        'Système de publication et ligne éditoriale'
      ],
      objectives: [
        'Construire une image digitale cohérente',
        'Définir une identité visuelle distinctive',
        'Réaliser une séance photo professionnelle',
        'Créer une présence sociale attractive',
        'Positionner l\'établissement comme incontournable'
      ],
      result: 'Une marque chaleureuse, élégante et moderne, capable de se démarquer dans un marché très compétitif.'
    },
    {
      id: 2,
      title: 'Dîner de Gala - Expérience Événementielle Premium',
      category: 'Événementiel & Direction Artistique',
      description: 'Création et gestion d\'un dîner de gala élégant et immersif',
      details: [
        'Élaboration du concept thème : "Élégance & Lumière"',
        'Création de l\'identité graphique du gala (logo, palette, invitations)',
        'Scénographie lumière et atmosphère',
        'Coordination des intervenants',
        'Séance photo professionnelle et reportage événementiel',
        'Développement d\'une communication avant/après l\'événement'
      ],
      objectives: [
        'Concevoir une expérience haut de gamme',
        'Créer une identité visuelle dédiée',
        'Gérer l\'organisation complète',
        'Assurer la cohérence branding-réalité',
        'Produire des photos professionnelles'
      ],
      result: 'Un dîner de gala créant une expérience émotionnelle forte, une image prestigieuse et une communication cohérente.'
    }
  ]

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
            Portfolio
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez mes réalisations et les projets qui ont marqué mes clients
          </p>
        </div>

        <div className="space-y-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="card overflow-hidden hover:shadow-2xl transition-all duration-300"
            >
              <div className="p-8">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                  <div>
                    <span className="inline-block px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold mb-3">
                      {project.category}
                    </span>
                    <h3 className="text-3xl font-serif font-bold text-gray-900">
                      {project.title}
                    </h3>
                  </div>
                  <button
                    onClick={() => setSelectedProject(selectedProject === project.id ? null : project.id)}
                    className="mt-4 md:mt-0 text-primary-600 hover:text-primary-700 font-semibold flex items-center gap-2"
                  >
                    {selectedProject === project.id ? 'Masquer' : 'Voir plus'}
                    <svg
                      className={`w-5 h-5 transition-transform ${selectedProject === project.id ? 'rotate-180' : ''}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                  </button>
                </div>

                <p className="text-gray-600 text-lg mb-4">
                  {project.description}
                </p>

                {selectedProject === project.id && (
                  <div className="mt-8 pt-8 border-t-2 border-gray-100 space-y-6">
                    <div>
                      <h4 className="text-xl font-serif font-bold text-gray-900 mb-4">Objectifs</h4>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {project.objectives.map((obj, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="text-accent-500 font-bold mr-3 mt-1">✓</span>
                            <span className="text-gray-700">{obj}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-xl font-serif font-bold text-gray-900 mb-4">Travail Réalisé</h4>
                      <ul className="space-y-2">
                        {project.details.map((detail, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="text-primary-600 font-bold mr-3 mt-1">•</span>
                            <span className="text-gray-700">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-primary-50 border-l-4 border-primary-600 p-6 rounded">
                      <h4 className="text-lg font-serif font-bold text-gray-900 mb-2">Résultat</h4>
                      <p className="text-gray-700">{project.result}</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
