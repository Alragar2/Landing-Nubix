#!/bin/bash

echo "🔥 Configuración de Firebase para Nubix Landing Page"
echo "=================================================="
echo ""

# Verificar si Firebase CLI está instalado
if ! command -v firebase &> /dev/null; then
    echo "❌ Firebase CLI no está instalado."
    echo "🔧 Instalando Firebase CLI..."
    npm install -g firebase-tools
fi

echo "✅ Firebase CLI detectado"
echo ""

# Login en Firebase
echo "🔑 Iniciando sesión en Firebase..."
firebase login

echo ""
echo "🚀 Inicializando proyecto Firebase..."
firebase init

echo ""
echo "📁 Configuración completada!"
echo ""
echo "📝 Próximos pasos:"
echo "1. Configura las variables de entorno en .env"
echo "2. Copia las credenciales desde Firebase Console"
echo "3. Ejecuta 'npm run dev' para probar"
echo "4. Usa 'firebase deploy' para desplegar"
echo ""
echo "🔗 Firebase Console: https://console.firebase.google.com/"
