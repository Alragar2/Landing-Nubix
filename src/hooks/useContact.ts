import { useState } from 'react'
import { collection, addDoc, Timestamp } from 'firebase/firestore'
import { db } from '../config/firebase'

interface ContactData {
  name: string
  email: string
  phone?: string
  company?: string
  message: string
}

interface UseContactReturn {
  submitContact: (data: ContactData) => Promise<boolean>
  isLoading: boolean
  error: string | null
  success: boolean
}

export const useContact = (): UseContactReturn => {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)

  const submitContact = async (data: ContactData): Promise<boolean> => {
    setIsLoading(true)
    setError(null)
    setSuccess(false)

    try {
      // Verificar que Firebase esté configurado
      if (!db) {
        throw new Error('Firebase no está configurado correctamente')
      }

      // Agregar timestamp y datos adicionales
      const contactData = {
        ...data,
        createdAt: Timestamp.now(),
        status: 'new',
        source: 'landing-page'
      }

      console.log('📤 Enviando contacto a Firestore...')
      
      // Guardar en Firestore
      const docRef = await addDoc(collection(db, 'contacts'), contactData)
      
      console.log('✅ Contacto guardado con ID: ', docRef.id)
      setSuccess(true)
      return true
    } catch (err: any) {
      console.error('❌ Error al guardar contacto: ', err)
      
      // Mensajes de error más específicos
      let errorMessage = 'Error al enviar el mensaje. Por favor, inténtalo de nuevo.'
      
      if (err.code === 'permission-denied') {
        errorMessage = 'Error de permisos. Verifica la configuración de Firestore.'
      } else if (err.code === 'unavailable') {
        errorMessage = 'Servicio temporalmente no disponible. Inténtalo más tarde.'
      } else if (err.message?.includes('Firebase')) {
        errorMessage = 'Error de configuración de Firebase. Contacta al administrador.'
      }
      
      setError(errorMessage)
      return false
    } finally {
      setIsLoading(false)
    }
  }

  return {
    submitContact,
    isLoading,
    error,
    success
  }
}
