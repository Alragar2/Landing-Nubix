const Footer = () => {
    const currentYear = new Date().getFullYear()

    const socialLinks = [
        {
            name: 'LinkedIn',
            icon: (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
            ),
            url: 'https://linkedin.com/company/nubix'
        },
        {
            name: 'Twitter',
            icon: (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
            ),
            url: 'https://twitter.com/nubix'
        },
        {
            name: 'Instagram',
            icon: (
                <svg className="w-5 h-5" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
                    <path d="M 16 3 C 8.8324839 3 3 8.8324839 3 16 L 3 34 C 3 41.167516 8.8324839 47 16 47 L 34 47 C 41.167516 47 47 41.167516 47 34 L 47 16 C 47 8.8324839 41.167516 3 34 3 L 16 3 z M 16 5 L 34 5 C 40.086484 5 45 9.9135161 45 16 L 45 34 C 45 40.086484 40.086484 45 34 45 L 16 45 C 9.9135161 45 5 40.086484 5 34 L 5 16 C 5 9.9135161 9.9135161 5 16 5 z M 37 11 A 2 2 0 0 0 35 13 A 2 2 0 0 0 37 15 A 2 2 0 0 0 39 13 A 2 2 0 0 0 37 11 z M 25 14 C 18.936712 14 14 18.936712 14 25 C 14 31.063288 18.936712 36 25 36 C 31.063288 36 36 31.063288 36 25 C 36 18.936712 31.063288 14 25 14 z M 25 16 C 29.982407 16 34 20.017593 34 25 C 34 29.982407 29.982407 34 25 34 C 20.017593 34 16 29.982407 16 25 C 16 20.017593 20.017593 16 25 16 z"></path>
                </svg>
            ),
            url: 'https://instagram.com/nubix'
        },
        {
            name: 'GitHub',
            icon: (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
            ),
            url: 'https://github.com/nubix'
        }
    ]

    const quickLinks = [
        { name: 'Inicio', url: '#inicio' },
        { name: 'Servicios', url: '#servicios' },
        { name: 'Nosotros', url: '#nosotros' },
        { name: 'Contacto', url: '#contacto' }
    ]

    const services = [
        { name: 'Desarrollo Web', url: '#' },
        { name: 'Apps Móviles', url: '#' },
        { name: 'Cloud Solutions', url: '#' },
        { name: 'Inteligencia Artificial', url: '#' }
    ]

    const legal = [
        { name: 'Política de Privacidad', url: '#' },
        { name: 'Términos de Servicio', url: '#' },
        { name: 'Cookies', url: '#' }
    ]

    return (
        <footer className="bg-secondary-900 text-white">
            {/* Main Footer */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Company Info */}
                    <div className="lg:col-span-1">
                        <div className="text-2xl font-bold text-primary-400 mb-4">
                            Nubix
                        </div>
                        <p className="text-secondary-300 mb-6 leading-relaxed">
                            Transformamos ideas en soluciones digitales que impulsan el crecimiento
                            de tu negocio. Tu socio tecnológico de confianza.
                        </p>
                        <div className="flex space-x-4">
                            {socialLinks.map((social, index) => (
                                <a
                                    key={index}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-secondary-400 hover:text-primary-400 transition-colors duration-300 p-2 rounded-lg hover:bg-secondary-800"
                                    title={social.name}
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">
                            Navegación
                        </h3>
                        <ul className="space-y-3">
                            {quickLinks.map((link, index) => (
                                <li key={index}>
                                    <a
                                        href={link.url}
                                        className="text-secondary-300 hover:text-white transition-colors"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">
                            Servicios
                        </h3>
                        <ul className="space-y-3">
                            {services.map((service, index) => (
                                <li key={index}>
                                    <a
                                        href={service.url}
                                        className="text-secondary-300 hover:text-white transition-colors"
                                    >
                                        {service.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact & Legal */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">
                            Contacto
                        </h3>
                        <div className="space-y-3 text-secondary-300">
                            <div className="flex items-center">
                                <span className="mr-2">📧</span>
                                <a href="mailto:agencyrais3@gmail.com" className="hover:text-white transition-colors">
                                    agencyrais3@gmail.com
                                </a>
                            </div>
                            {/*<div className="flex items-center">
                <span className="mr-2">📱</span>
                <a href="tel:+525512345678" className="hover:text-white transition-colors">
                </a>
              </div>*/}
                            <div className="flex items-center">
                                <span className="mr-2">📍</span>
                                <span>Valencia, España</span>
                            </div>
                        </div>

                        <h4 className="text-sm font-semibold mt-6 mb-3">
                            Legal
                        </h4>
                        <ul className="space-y-2">
                            {legal.map((item, index) => (
                                <li key={index}>
                                    <a
                                        href={item.url}
                                        className="text-secondary-400 hover:text-white transition-colors text-sm"
                                    >
                                        {item.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-secondary-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <div className="text-secondary-400 text-sm">
                            © {currentYear} Nubix. Todos los derechos reservados.
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
