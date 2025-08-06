import { useState } from 'react'

const Header = () => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <header className="bg-white bg-opacity-95 backdrop-blur-lg shadow-xl sticky top-0 z-50 border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center py-5">

                    {/* Logo */}
                    <div className="flex items-center">
                        <div className="text-3xl font-extrabold bg-gradient-to-r from-primary-600 via-blue-600 to-purple-600 bg-clip-text text-transparent hover:scale-110 transition-all duration-300 cursor-pointer">
                            <img src="/src/assets/LogoConTexto.png" alt="Nubix Logo" className="h-10" />
                        </div>
                    </div>

                    {/* Desktop Navigation - Visible solo en desktop */}
                    <nav className="hidden md:flex items-center bg-white bg-opacity-80 backdrop-blur-md rounded-full px-8 py-3 shadow-lg border border-gray-100">
                        <div className="flex items-center">
                            <a 
                                href="#inicio" 
                                className="mx-3 px-5 py-2 text-sm font-medium text-gray-700 hover:text-white hover:bg-primary-600 rounded-full transition-all duration-300"
                            >
                                Inicio
                            </a>
                            <a 
                                href="#servicios" 
                                className="mx-3 px-5 py-2 text-sm font-medium text-gray-700 hover:text-white hover:bg-primary-600 rounded-full transition-all duration-300"
                            >
                                Servicios
                            </a>
                            <a 
                                href="#nosotros" 
                                className="mx-3 px-5 py-2 text-sm font-medium text-gray-700 hover:text-white hover:bg-primary-600 rounded-full transition-all duration-300"
                            >
                                Nosotros
                            </a>
                            <a 
                                href="#contacto" 
                                className="mx-3 px-5 py-2 text-sm font-medium text-gray-700 hover:text-white hover:bg-primary-600 rounded-full transition-all duration-300"
                            >
                                Contacto
                            </a>
                        </div>
                    </nav>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
                            className="p-2 rounded-lg text-gray-600 hover:text-primary-600 hover:bg-primary-50 transition-all duration-300"
                        >
                            {isMobileMenuOpen ? (
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            ) : (
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {isMobileMenuOpen && (
                    <div className="md:hidden">
                        <div className="px-4 pt-4 pb-6 space-y-2 bg-white bg-opacity-95 backdrop-blur-sm rounded-xl mx-4 mb-4 shadow-lg border border-gray-100">
                            <a 
                                href="#inicio" 
                                className="block px-4 py-3 text-gray-700 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-all duration-300 font-medium"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                Inicio
                            </a>
                            <a 
                                href="#servicios" 
                                className="block px-4 py-3 text-gray-700 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-all duration-300 font-medium"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                Servicios
                            </a>
                            <a 
                                href="#nosotros" 
                                className="block px-4 py-3 text-gray-700 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-all duration-300 font-medium"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                Nosotros
                            </a>
                            <a 
                                href="#contacto" 
                                className="block px-4 py-3 text-gray-700 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-all duration-300 font-medium"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                Contacto
                            </a>
                            <div className="pt-4 border-t border-gray-100">
                                <button 
                                    className="block w-full text-center bg-gradient-to-r from-primary-600 to-blue-600 text-white px-4 py-3 rounded-lg font-semibold hover:from-primary-700 hover:to-blue-700 transition-all duration-300"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    Comenzar Proyecto
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </header>
    )
}

export default Header
