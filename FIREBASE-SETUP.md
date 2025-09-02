# 🔥 Guía de Configuración de Firebase

## Pasos para configurar Firebase en la Landing Page de Nubix

### 1. Crear proyecto en Firebase Console

1. Ve a [Firebase Console](https://console.firebase.google.com/)
2. Haz clic en "Crear un proyecto"
3. Nombre del proyecto: `nubix-landing` (o como prefieras)
4. Habilita Google Analytics (opcional)
5. Espera a que se cree el proyecto

### 2. Configurar Firestore Database

1. En el panel izquierdo, selecciona **"Firestore Database"**
2. Haz clic en **"Crear base de datos"**
3. Selecciona **"Empezar en modo de prueba"** (cambiaremos las reglas después)
4. Elige la ubicación más cercana (ej: `us-central1`)

### 3. Agregar aplicación web

1. En la página principal del proyecto, haz clic en el ícono **"</>"** (Web)
2. Nombre de la app: `Nubix Landing Page`
3. **NO marques** "Configurar Firebase Hosting"
4. Haz clic en **"Registrar app"**

### 4. Copiar configuración

Te aparecerá un código similar a este:

```javascript
const firebaseConfig = {
  apiKey: "AIzaSyExample...",
  authDomain: "nubix-landing.firebaseapp.com",
  projectId: "nubix-landing",
  storageBucket: "nubix-landing.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abc123...",
  measurementId: "G-ABC123..."
};
```

### 5. Crear archivo .env

1. En la raíz del proyecto, crea un archivo `.env`
2. Copia y pega esta configuración reemplazando con tus valores:

```env
VITE_FIREBASE_API_KEY=AIzaSyExample...
VITE_FIREBASE_AUTH_DOMAIN=nubix-landing.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=nubix-landing
VITE_FIREBASE_STORAGE_BUCKET=nubix-landing.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=123456789
VITE_FIREBASE_APP_ID=1:123456789:web:abc123...
VITE_FIREBASE_MEASUREMENT_ID=G-ABC123...
```

### 6. Configurar reglas de Firestore

1. Ve a **Firestore Database** → **Reglas**
2. Reemplaza el contenido con las reglas del archivo `firestore.rules`:

```javascript
rules_version = '2';

service cloud.firestore {
  match /databases/{database}/documents {
    match /contacts/{document} {
      allow create: if true;
      allow read, update, delete: if false;
    }
    
    match /{document=**} {
      allow read, write: if false;
    }
  }
}
```

3. Haz clic en **"Publicar"**

### 7. Probar la aplicación

1. Ejecuta `npm run dev`
2. Ve al formulario de contacto
3. Completa y envía un mensaje de prueba
4. Verifica en Firestore Console que se creó el documento

### 8. Verificar datos en Firestore

1. Ve a **Firestore Database** → **Datos**
2. Deberías ver una colección `contacts`
3. Dentro encontrarás los documentos con los datos enviados

### 9. (Opcional) Configurar Firebase Hosting

Si quieres usar Firebase Hosting en lugar de Vercel:

```bash
firebase login
firebase init hosting
firebase deploy
```

### 10. Configurar variables en Vercel

Si usas Vercel, agrega las variables de entorno en:
1. Dashboard de Vercel → Tu proyecto → Settings → Environment Variables
2. Agrega cada variable con su valor correspondiente

## 🔒 Seguridad

- ✅ Las reglas de Firestore solo permiten **crear** documentos
- ✅ Los usuarios no pueden leer datos de otros contactos
- ✅ Las variables de Firebase son seguras para el frontend
- ✅ Firestore controla el acceso mediante reglas

## 📊 Monitoreo

Puedes ver las consultas y el uso en:
- **Firebase Console** → **Firestore** → **Uso**
- **Firebase Console** → **Analytics** (si lo habilitaste)

## 🆘 Solución de problemas

### Error: "Firebase App not initialized"
- Verifica que todas las variables de entorno estén configuradas
- Asegúrate de que el archivo `.env` esté en la raíz del proyecto

### Error: "Permission denied"
- Verifica las reglas de Firestore
- Asegúrate de que permiten `create: if true` para la colección `contacts`

### El formulario no envía datos
- Abre las herramientas de desarrollador (F12)
- Verifica la consola por errores
- Revisa la pestaña Network para ver las peticiones
