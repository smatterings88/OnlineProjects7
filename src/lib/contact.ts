import { db } from './firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import emailjs from '@emailjs/browser';

interface ContactForm {
  from_name: string;
  from_email: string;
  phone?: string | null;
  message?: string;
  project_details?: string;
  service_category: string;
  budget: string;
}

export const saveContact = async (formData: ContactForm) => {
  try {
    // Prepare data for Firestore
    const firestoreData = {
      name: formData.from_name,
      email: formData.from_email,
      phone: formData.phone === undefined ? null : formData.phone,
      projectDetails: formData.project_details || formData.message || '',
      serviceCategory: formData.service_category,
      budget: formData.budget,
      createdAt: serverTimestamp()
    };

    // Save to Firestore first
    const contactsRef = collection(db, 'contacts');
    const docRef = await addDoc(contactsRef, firestoreData);

    // Then send email using EmailJS
    await emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      formData,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    );

    return { success: true, id: docRef.id };
  } catch (error) {
    console.error('Error saving contact:', error);
    throw error;
  }
};