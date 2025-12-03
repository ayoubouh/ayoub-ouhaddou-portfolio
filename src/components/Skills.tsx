export default function Skills() {
  const skills = [
    {
      category: 'Branding & Identité',
      items: ['Création d\'identités complètes', 'Moodboard & charte graphique', 'Logo design', 'Univers narratif']
    },
    {
      category: 'Marketing Digital',
      items: ['Plan de communication', 'Storytelling', 'Stratégie social media', 'Ligne éditoriale']
    },
    {
      category: 'Photographie',
      items: ['Photographie produit', 'Lifestyle', 'Corporate', 'Food photography', 'Reportage événementiel']
    },
    {
      category: 'Événementiel',
      items: ['Dîners de gala', 'Lancements de produits', 'Activations de marque', 'Événements hybrides']
    },
    {
      category: 'Gestion de Projets',
      items: ['Coordination d\'équipes', 'Gestion créative', 'Suivi budgétaire', 'Planning événementiel']
    },
    {
      category: 'Communication',
      items: ['Analyse de positionnement', 'Stratégie de marque', 'Identité numérique', 'Présence web']
    }
  ]

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
            Mes Compétences
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Une expertise multidisciplinaire au service de votre marque
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div key={index} className="card p-8">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-primary-400 to-accent-400 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-white font-bold text-lg">{index + 1}</span>
                </div>
                <h3 className="text-xl font-serif font-bold text-gray-900">
                  {skill.category}
                </h3>
              </div>
              <ul className="space-y-3">
                {skill.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start">
                    <span className="text-primary-600 font-bold mr-3 mt-1">•</span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
