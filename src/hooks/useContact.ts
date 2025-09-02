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
      // Agregar timestamp y datos adicionales
      const contactData = {
        ...data,
        createdAt: Timestamp.now(),
        status: 'new',
        source: 'landing-page'
      }

      // Guardar en Firestore
      const docRef = await addDoc(collection(db, 'contacts'), contactData)
      
      console.log('Contacto guardado con ID: ', docRef.id)
      setSuccess(true)
      return true
    } catch (err) {
      console.error('Error al guardar contacto: ', err)
      setError('Error al enviar el mensaje. Por favor, inténtalo de nuevo.')
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
