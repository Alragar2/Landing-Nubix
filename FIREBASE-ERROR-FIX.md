# 🚨 SOLUCIÓN: Error Firebase en Producción

## Problema
```
Missing App configuration value: "projectId"
```

## Causa
Las variables de entorno de Firebase no están configuradas en Vercel.

## Solución Paso a Paso

### 1. Configurar Variables en Vercel

1. Ve a [Dashboard de Vercel](https://vercel.com/dashboard)
2. Selecciona tu proyecto **Landing-Nubix**
3. Ve a **Settings** → **Environment Variables**
4. Agrega estas variables una por una:

| Variable | Valor |
|----------|-------|
| `VITE_FIREBASE_API_KEY` | `AIzaSyAYjlXDEbBa6PSfPNk8Ly6zHvscvHbO9rk` |
| `VITE_FIREBASE_AUTH_DOMAIN` | `nubix-landing.firebaseapp.com` |
| `VITE_FIREBASE_PROJECT_ID` | `nubix-landing` |
| `VITE_FIREBASE_STORAGE_BUCKET` | `nubix-landing.firebasestorage.app` |
| `VITE_FIREBASE_MESSAGING_SENDER_ID` | `352425336422` |
| `VITE_FIREBASE_APP_ID` | `1:352425336422:web:1fc16f345999fd126c57a7` |
| `VITE_FIREBASE_MEASUREMENT_ID` | `G-FT5EPK388W` |

### 2. Para cada variable:
- Haz clic en **"Add"**
- Nombre: Copia exactamente el nombre (ej: `VITE_FIREBASE_API_KEY`)
- Value: Pega el valor correspondiente
- Environment: Selecciona **Production**, **Preview**, **Development**
- Haz clic en **"Save"**

### 3. Verificar configuración
Después de agregar todas las variables, deberías ver algo así:

```
✅ VITE_FIREBASE_API_KEY          Production, Preview, Development
✅ VITE_FIREBASE_AUTH_DOMAIN      Production, Preview, Development  
✅ VITE_FIREBASE_PROJECT_ID       Production, Preview, Development
✅ VITE_FIREBASE_STORAGE_BUCKET   Production, Preview, Development
✅ VITE_FIREBASE_MESSAGING_SENDER_ID Production, Preview, Development
✅ VITE_FIREBASE_APP_ID           Production, Preview, Development
✅ VITE_FIREBASE_MEASUREMENT_ID   Production, Preview, Development
```

### 4. Redesplegar
1. Ve a **Deployments**
2. Haz clic en los **3 puntos** del último deployment
3. Selecciona **"Redeploy"**
4. Marca **"Use existing Build Cache"**
5. Haz clic en **"Redeploy"**

### 5. Verificar que funciona
1. Ve a tu sitio en producción
2. Abre las herramientas de desarrollador (F12)
3. Ve al formulario de contacto
4. Envía un mensaje de prueba
5. Verifica que no hay errores en la consola

## ⚡ Solución Rápida por Terminal

Si tienes Vercel CLI instalado:

```bash
# Instalar Vercel CLI
npm i -g vercel

# Login
vercel login

# Configurar variables (desde la raíz del proyecto)
vercel env add VITE_FIREBASE_API_KEY production
vercel env add VITE_FIREBASE_AUTH_DOMAIN production
vercel env add VITE_FIREBASE_PROJECT_ID production
vercel env add VITE_FIREBASE_STORAGE_BUCKET production
vercel env add VITE_FIREBASE_MESSAGING_SENDER_ID production
vercel env add VITE_FIREBASE_APP_ID production
vercel env add VITE_FIREBASE_MEASUREMENT_ID production

# Redesplegar
vercel --prod
```

## 🔍 Verificación Local

Para probar localmente que todo funciona:

```bash
npm run dev
```

Abre `http://localhost:5174` y prueba el formulario de contacto.

## 📊 Verificar en Firebase

Después de enviar un formulario:
1. Ve a [Firebase Console](https://console.firebase.google.com/)
2. Selecciona el proyecto `nubix-landing`
3. Ve a **Firestore Database** → **Datos**
4. Deberías ver la colección `contacts` con los datos

## 🆘 Si aún no funciona

1. **Verifica las reglas de Firestore**:
   - Ve a Firestore → Reglas
   - Asegúrate de que permiten `create: if true`

2. **Revisa la consola del navegador**:
   - F12 → Console
   - Busca errores adicionales

3. **Verifica las variables**:
   - En Vercel, confirma que todas están configuradas
   - Asegúrate de que no hay espacios extra

4. **Rebuild completo**:
   - En Vercel, elimina el último deployment
   - Haz push al repositorio para triggerear nuevo deploy
