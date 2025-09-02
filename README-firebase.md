# 🌟 Nubix Landing Page

[![Deploy Status](https://img.shields.io/badge/status-active-brightgreen.svg)]()
[![React](https://img.shields.io/badge/React-19-blue.svg)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue.svg)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-38B2AC.svg)](https://tailwindcss.com/)
[![Firebase](https://img.shields.io/badge/Firebase-10-orange.svg)](https://firebase.google.com/)

Una landing page moderna y responsiva para **Nubix**, empresa especializada en soluciones de transformación digital. Desarrollada con React, TypeScript, Tailwind CSS y Firebase.

## 🎯 **Demo en Vivo**
[Ver sitio web](https://your-domain.com) <!-- Actualizar cuando tengas el enlace -->

## 🚀 **Características**

- ✅ **Diseño Moderno**: Interfaz clean con gradientes y animaciones suaves
- ✅ **Completamente Responsivo**: Optimizado para móvil, tablet y desktop
- ✅ **TypeScript**: Tipado estático para mayor robustez del código
- ✅ **Componentes Modulares**: Arquitectura escalable y mantenible
- ✅ **Animaciones Fluidas**: Efectos hover y transiciones profesionales
- ✅ **SEO Optimizado**: Estructura semántica y meta tags
- ✅ **Accesibilidad**: Implementación de buenas prácticas ARIA
- ✅ **Firebase Integration**: Almacenamiento de contactos en Firestore
- ✅ **Formulario Avanzado**: Estados de loading, error y éxito

## 🛠️ **Tecnologías Utilizadas**

| Tecnología | Versión | Propósito |
|------------|---------|-----------|
| React | 19.1.0 | Framework de interfaz de usuario |
| TypeScript | 5.8.3 | Tipado estático |
| Vite | 7.0.4 | Herramienta de build moderna |
| Tailwind CSS | 3.4.17 | Framework de CSS utility-first |
| Firebase | 10+ | Backend-as-a-Service para almacenamiento |
| ESLint | 9.30.1 | Linting y calidad de código |

## 📦 Instalación

1. Clona el repositorio:
```bash
git clone [url-del-repositorio]
cd landing-nubix
```

2. Instala las dependencias:
```bash
npm install
```

3. **Configura Firebase**:
   - Crea un proyecto en [Firebase Console](https://console.firebase.google.com/)
   - Habilita Firestore Database
   - Copia las credenciales de configuración
   - Crea un archivo `.env` basado en `.env.example`:

```bash
cp .env.example .env
```

4. Completa las variables de entorno en `.env`:
```env
VITE_FIREBASE_API_KEY=tu_api_key
VITE_FIREBASE_AUTH_DOMAIN=tu-proyecto.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=tu-proyecto-id
VITE_FIREBASE_STORAGE_BUCKET=tu-proyecto.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=tu_sender_id
VITE_FIREBASE_APP_ID=tu_app_id
VITE_FIREBASE_MEASUREMENT_ID=tu_measurement_id
```

5. Inicia el servidor de desarrollo:
```bash
npm run dev
```

6. Abre tu navegador en `http://localhost:5174` (o el puerto que muestre Vite)

## 🔥 Configuración de Firebase

### Firestore Database
- **Colección**: `contacts`
- **Campos almacenados**:
  - `name` (string): Nombre completo
  - `email` (string): Email de contacto
  - `phone` (string, opcional): Teléfono
  - `company` (string, opcional): Empresa
  - `message` (string): Mensaje
  - `createdAt` (timestamp): Fecha de creación
  - `status` (string): Estado del contacto
  - `source` (string): Origen de la consulta

### Reglas de Seguridad
Las reglas de Firestore permiten solo **escritura** desde el cliente para la colección `contacts`, garantizando que los usuarios puedan enviar consultas pero no leer datos de otros usuarios.

## 🛠️ Scripts Disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Construye el proyecto para producción
- `npm run preview` - Previsualiza la build de producción
- `npm run lint` - Ejecuta ESLint

## 📁 Estructura del Proyecto

```
src/
├── components/          # Componentes React
│   ├── Header.tsx      # Navegación principal
│   ├── Hero.tsx        # Sección hero
│   ├── Features.tsx    # Servicios
│   ├── About.tsx       # Sobre nosotros
│   ├── Contact.tsx     # Formulario de contacto
│   └── Footer.tsx      # Pie de página
├── config/             # Configuraciones
│   └── firebase.ts     # Configuración Firebase
├── hooks/              # Custom hooks
│   └── useContact.ts   # Hook para manejo de contactos
├── App.tsx             # Componente principal
├── main.tsx           # Punto de entrada
└── index.css          # Estilos globales
```

## 🎯 Secciones de la Landing

1. **Header** - Navegación con menú responsive
2. **Hero** - Presentación principal con CTA
3. **Features** - Servicios que ofrece Nubix
4. **About** - Historia, valores y equipo
5. **Contact** - Formulario de contacto integrado con Firebase
6. **Footer** - Links adicionales y redes sociales

## 📱 Responsividad

El diseño está optimizado para:
- 📱 Mobile (320px+)
- 📊 Tablet (768px+)
- 💻 Desktop (1024px+)
- 🖥️ Large Desktop (1280px+)

## 🚀 Despliegue

### Build para Producción
```bash
npm run build
```

### Deploy en Firebase Hosting (Opcional)
```bash
firebase login
firebase init hosting
firebase deploy
```

### Deploy en Vercel
1. Conecta tu repositorio con Vercel
2. Configura las variables de entorno en el dashboard de Vercel
3. Deploy automático en cada push

## 🔒 Variables de Entorno

**Importante**: Nunca subas el archivo `.env` al repositorio. Las variables de Firebase son seguras para usar en el frontend ya que las reglas de Firestore controlan el acceso a los datos.

## 🤝 Contribuir

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 📞 Contacto

Para más información sobre Nubix:
- Email: agencyrais3@gmail.com
- Sitio web: [nubix.com](https://nubix.com)
