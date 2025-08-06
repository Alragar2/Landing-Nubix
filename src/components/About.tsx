const About = () => {
  const team = [
    {
      name: 'Jorge Romero',
      role: 'CEO & Fundador',
      description: 'Experto en transformación digital.',
      image: 'https://media.licdn.com/dms/image/v2/D4D03AQEL6DxDaFKbjQ/profile-displayphoto-shrink_800_800/B4DZWvtdO7G8Ak-/0/1742409685333?e=1757548800&v=beta&t=YKUgzFA-OsBF4mDd5-EOWfrG79jfYGRKsoRyy0nqmss'
    },
    {
      name: 'Alvaro Ramón',
      role: 'CEO, Cofundador & CTO',
      description: 'Ingeniero Multimedia especializado en soluciones escalables.',
      image: 'https://dam.malt.com/4c71a789-6574-49d7-a7ac-2c797041ac2a?gravity=face&func=face&face_margin=70&w=440&h=440&force_format=webp'
    }
  ]

  const values = [
    {
      icon: '🎯',
      title: 'Orientados a resultados',
      description: 'Cada proyecto tiene objetivos claros y medibles que nos comprometemos a cumplir.'
    },
    {
      icon: '🚀',
      title: 'Innovación constante',
      description: 'Utilizamos las últimas tecnologías para mantener a nuestros clientes a la vanguardia.'
    },
    {
      icon: '🤝',
      title: 'Colaboración transparente',
      description: 'Trabajamos codo a codo con nuestros clientes en cada etapa del proyecto.'
    },
    {
      icon: '⚡',
      title: 'Agilidad y eficiencia',
      description: 'Entregamos soluciones de calidad en los tiempos acordados sin comprometer la excelencia.'
    }
  ]

  return (
    <section id="nosotros" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Sobre Nubix
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Somos un equipo apasionado por la tecnología, comprometido con transformar 
            ideas en soluciones digitales que generen impacto real.
          </p>
        </div>

        {/* Story */}
        <div className="mb-20">
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm">
            <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Nuestra Historia
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Jorge ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus 
                  ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis 
                  convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla 
                  lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere.
                </p>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque 
                  sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque 
                  sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor.
                </p>
              </div>
              <div className="mt-8 lg:mt-0">
                <div className="bg-gradient-to-br from-primary-100 to-primary-200 rounded-xl p-8 text-center">
                  <div className="text-6xl mb-4">🏢</div>
                  <h4 className="text-xl font-bold text-primary-800 mb-2">
                    Nuestra Visión
                  </h4>
                  <p className="text-primary-700">
                    Ser el socio tecnológico de confianza que impulse la transformación 
                    digital de las empresas valencianas.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-12">
            Nuestros Valores
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-xl p-6 text-center shadow-sm">
                <div className="text-3xl mb-4">{value.icon}</div>
                <h4 className="text-lg font-bold text-gray-900 mb-3">
                  {value.title}
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Team */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-12">
            Nuestro Equipo
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-2 gap-10">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-xl p-6 text-center shadow-sm">
                <div className="mb-4">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-20 h-20 rounded-full mx-auto object-cover"
                  />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-1">
                  {member.name}
                </h4>
                <p className="text-primary-600 font-medium mb-3">
                  {member.role}
                </p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {member.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
