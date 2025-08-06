const Features = () => {
  const features = [
    {
      icon: '🌐',
      title: 'Desarrollo y mejoras de Web',
      description: 'Creamos sitios web modernos, personalizados y optimizados para acercarte al clienete de la mejor manera posible.',
      technologies: ['React', 'Next.js', 'HTML', 'CSS']
    },
    {
      icon: '🔄🔗',
      title: 'Automatización de procesos',
      description: 'Utilizamos la inteligencia artificial para automatizar tareas repetitivas y mejorar la eficiencia, reducir errores y ahorrar tiempo.',
      technologies: ['Make']
    },
    {
      icon: '🤖',
      title: 'Creación e instalación de chatbots de audio y texto',
      description: 'Creamos e implementamos chatbots que responden a preguntas frecuentes de tus clientes al instante. Agenda citas en segundos, disponible las 24 horas.',
      technologies: [ 'Chatbase', 'Twilio']
    }
  ]

  return (
    <section id="servicios" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Nuestros Servicios
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ofrecemos soluciones tecnológicas integrales que cubren todas las necesidades 
            de transformación digital de tu empresa.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 hover:border-primary-200 relative overflow-hidden"
            >
              {/* Background gradient effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <div className="text-5xl mb-6 transform group-hover:scale-110 transition-transform duration-300">{feature.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-primary-700 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {feature.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {feature.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm font-medium hover:bg-primary-200 transition-colors cursor-default"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Decorative corner */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary-500 to-blue-500 opacity-10 group-hover:opacity-20 transition-opacity"></div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              ¿Listo para transformar tu negocio?
            </h3>
            <p className="text-primary-100 mb-6 max-w-2xl mx-auto">
              Agenda una consulta y descubre cómo podemos ayudarte a alcanzar tus objetivos digitales.
            </p>
            <button className="bg-white text-primary-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
              Agendar consulta 
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features
