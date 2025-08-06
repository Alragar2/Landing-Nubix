const Hero = () => {
    return (
        <section id="inicio" className="relative bg-gradient-to-br from-primary-50 via-blue-50 to-white py-20 overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-100 rounded-full opacity-50 blur-3xl"></div>
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-100 rounded-full opacity-50 blur-3xl"></div>
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
                    {/* Content */}
                    <div className="animate-fade-in-up">
                        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                            Tu tiempo 
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-blue-600"> vale más
                            </span>
                        </h1>
                        <p className="mt-6 text-xl text-gray-600 leading-relaxed">
                            En Nubix desarrollamos soluciones tecnológicas innovadoras que impulsan
                            el crecimiento de tu negocio en la era digital.
                        </p>
                        <div className="mt-8 flex flex-col sm:flex-row gap-4">
                            <button className="bg-gradient-to-r from-primary-600 to-primary-700 text-white px-8 py-4 rounded-lg font-medium hover:from-primary-700 hover:to-primary-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                                onClick={() => window.location.href = '#servicios'}>
                                Conoce nuestros servicios
                            </button>
                        </div>
                        {/* Stats */}
{/** 
                        
                        <div className="mt-12 grid grid-cols-3 gap-8">
                            <div className="text-center lg:text-left group">
                                <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-blue-600 group-hover:scale-110 transition-transform duration-300">3</div>
                                <div className="text-gray-600 text-sm">Proyectos completados</div>
                            </div>
                            <div className="text-center lg:text-left group">
                                <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-blue-600 group-hover:scale-110 transition-transform duration-300">1</div>
                                <div className="text-gray-600 text-sm">Años de experiencia</div>
                            </div>
                            <div className="text-center lg:text-left group">
                                <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-blue-600 group-hover:scale-110 transition-transform duration-300">100%</div>
                                <div className="text-gray-600 text-sm">Clientes satisfechos</div>
                            </div>
                        </div>
                        */}
                    </div>

                    {/* Image/Graphic */}
                    <div className="mt-12 lg:mt-0 animate-fade-in-right">
                        <div className="relative">
                            <div className="bg-gradient-to-br from-primary-500 via-primary-600 to-blue-600 rounded-2xl p-8 text-center shadow-2xl transform hover:scale-105 transition-all duration-300">
                                <div className="text-white text-6xl mb-6 animate-bounce">🚀</div>
                                <h3 className="text-2xl font-bold text-white mb-4">
                                    Soluciones a medida
                                </h3>
                                <p className="text-primary-100 leading-relaxed">
                                    Desarrollamos tecnología que se adapta a tus necesidades específicas
                                </p>
                            </div>

                            {/* Floating elements */}
                            <div className="absolute -top-6 -right-6 bg-white rounded-xl shadow-xl p-4 animate-float">
                                <div className="text-3xl">💡</div>
                            </div>
                            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-4 animate-float-delayed">
                                <div className="text-3xl">⚡</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero
