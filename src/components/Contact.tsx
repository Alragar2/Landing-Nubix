import { useState } from 'react'

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        message: ''
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // Aquí integrarías con tu backend o servicio de email
        console.log('Form submitted:', formData)
        alert('¡Gracias por contactarnos! Te responderemos pronto.')
        setFormData({ name: '', email: '', company: '', message: '' })
    }

    const contactInfo = [
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 48 48">
                    <path fill="#4caf50" d="M45,16.2l-5,2.75l-5,4.75L35,40h7c1.657,0,3-1.343,3-3V16.2z"></path><path fill="#1e88e5" d="M3,16.2l3.614,1.71L13,23.7V40H6c-1.657,0-3-1.343-3-3V16.2z"></path><polygon fill="#e53935" points="35,11.2 24,19.45 13,11.2 12,17 13,23.7 24,31.95 35,23.7 36,17"></polygon><path fill="#c62828" d="M3,12.298V16.2l10,7.5V11.2L9.876,8.859C9.132,8.301,8.228,8,7.298,8h0C4.924,8,3,9.924,3,12.298z"></path><path fill="#fbc02d" d="M45,12.298V16.2l-10,7.5V11.2l3.124-2.341C38.868,8.301,39.772,8,40.702,8h0 C43.076,8,45,9.924,45,12.298z"></path>
                </svg>
            ),
            title: 'Gmail',
            detail: 'agencyrais3@gmail.com',
            action: 'mailto:agencyrais3@gmail.com'
        }
    ]

    return (
        <section id="contacto" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Hablemos de tu Proyecto
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        ¿Tienes una idea? ¿Necesitas mejorar tu presencia digital?
                        Estamos aquí para ayudarte a hacerlo realidad.
                    </p>
                </div>

                <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                    {/* Contact Form */}
                    <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-6">
                            Envíanos un mensaje
                        </h3>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                                    Nombre completo *
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors"
                                    placeholder="Tu nombre completo"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                    Email *
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors"
                                    placeholder="tu@email.com"
                                />
                            </div>

                            <div>
                                <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                                    Empresa
                                </label>
                                <input
                                    type="text"
                                    id="company"
                                    name="company"
                                    value={formData.company}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors"
                                    placeholder="Nombre de tu empresa"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                                    Mensaje *
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    required
                                    rows={6}
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors resize-none"
                                    placeholder="Cuéntanos sobre tu proyecto, necesidades o cualquier pregunta que tengas..."
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-primary-600 text-white py-4 px-6 rounded-lg font-medium hover:bg-primary-700 transition-colors"
                            >
                                Enviar mensaje
                            </button>
                        </form>
                    </div>

                    {/* Contact Info */}
                    <div className="mt-12 lg:mt-0">
                        <h3 className="text-2xl font-bold text-gray-900 mb-6">
                            Información de contacto
                        </h3>
                        <p className="text-gray-600 mb-8 leading-relaxed">
                            Puedes contactarnos a través de cualquiera de estos medios.
                            Respondemos en menos de 24 horas.
                        </p>

                        <div className="space-y-6">
                            {contactInfo.map((info, index) => (
                                <a
                                    key={index}
                                    href={info.action}
                                    className="flex items-center p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors group"
                                >
                                    <div className="text-2xl mr-4">{info.icon}</div>
                                    <div>
                                        <h4 className="font-medium text-gray-900 group-hover:text-primary-600 transition-colors">
                                            {info.title}
                                        </h4>
                                        <p className="text-gray-600">{info.detail}</p>
                                    </div>
                                </a>
                            ))}
                        </div>

                        {/* Business Hours */}
                        <div className="mt-8 p-6 bg-primary-50 rounded-xl">
                            <h4 className="font-bold text-primary-800 mb-3">
                                📅 Horarios de atención
                            </h4>
                            <div className="space-y-2 text-sm text-primary-700">
                                <div className="flex justify-between">
                                    <span>Lunes - Viernes:</span>
                                    <span>9:00 - 18:00</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Sábados:</span>
                                    <span>Cerrado</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Domingos:</span>
                                    <span>Cerrado</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact
