import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { saveContact } from '../lib/contact';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectDetails: '',
    serviceCategory: '',
    budget: '',
    phone: ''
  });
  
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  
  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!formData.serviceCategory) {
      newErrors.serviceCategory = 'Please select a service category';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: '',
      }));
    }
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    setSubmitError(null);
    
    try {
      await saveContact(formData);
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        projectDetails: '',
        serviceCategory: '',
        budget: '',
        phone: ''
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitError('Failed to submit form. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <div className="bg-white p-8 rounded-xl shadow-lg border border-secondary-200">
      {isSubmitted ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-8"
        >
          <h3 className="text-2xl font-bold mb-4 text-primary-600">Thank You!</h3>
          <p className="mb-6 text-secondary-600">Your message has been received. We'll get back to you within 24 hours.</p>
          <button
            onClick={() => setIsSubmitted(false)}
            className="btn btn-primary"
          >
            Send Another Message
          </button>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          {submitError && (
            <div className="p-4 bg-red-50 text-red-700 rounded-lg border border-red-100">
              {submitError}
            </div>
          )}
          
          <div>
            <label htmlFor="name" className="block mb-2 font-medium text-secondary-900">
              Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className={`input-field bg-secondary-50 ${
                errors.name ? 'border-red-500 focus:ring-red-200' : 'focus:ring-primary-200 hover:border-primary-300'
              }`}
            />
            {errors.name && <p className="mt-1 text-red-500 text-sm">{errors.name}</p>}
          </div>
          
          <div>
            <label htmlFor="email" className="block mb-2 font-medium text-secondary-900">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className={`input-field bg-secondary-50 ${
                errors.email ? 'border-red-500 focus:ring-red-200' : 'focus:ring-primary-200 hover:border-primary-300'
              }`}
            />
            {errors.email && <p className="mt-1 text-red-500 text-sm">{errors.email}</p>}
          </div>

          <div>
            <label htmlFor="phone" className="block mb-2 font-medium text-secondary-900">
              Phone (Optional)
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter your phone number"
              className="input-field bg-secondary-50 focus:ring-primary-200 hover:border-primary-300"
            />
          </div>
          
          <div>
            <label htmlFor="serviceCategory" className="block mb-2 font-medium text-secondary-900">
              Service Category <span className="text-red-500">*</span>
            </label>
            <select
              id="serviceCategory"
              name="serviceCategory"
              value={formData.serviceCategory}
              onChange={handleChange}
              className={`select-field bg-secondary-50 ${
                errors.serviceCategory ? 'border-red-500 focus:ring-red-200' : 'focus:ring-primary-200 hover:border-primary-300'
              }`}
            >
              <option value="">Select a service</option>
              <option value="aiSolutions">AI Solutions</option>
              <option value="webDevelopment">Web Development</option>
              <option value="contentCreation">Content Creation</option>
              <option value="digitalMarketing">Digital Marketing</option>
              <option value="graphicDesign">Graphic Design</option>
              <option value="virtualAssistant">Virtual Assistant</option>
            </select>
            {errors.serviceCategory && <p className="mt-1 text-red-500 text-sm">{errors.serviceCategory}</p>}
          </div>
          
          <div>
            <label htmlFor="budget" className="block mb-2 font-medium text-secondary-900">
              Budget Range
            </label>
            <select
              id="budget"
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              className="select-field bg-secondary-50 focus:ring-primary-200 hover:border-primary-300"
            >
              <option value="">Select budget range</option>
              <option value="under500">Under $500</option>
              <option value="500to1000">$500 – $1,000</option>
              <option value="1000to5000">$1,000 – $5,000</option>
              <option value="5000plus">$5,000+</option>
            </select>
          </div>
          
          <div>
            <label htmlFor="projectDetails" className="block mb-2 font-medium text-secondary-900">
              Project Details
            </label>
            <textarea
              id="projectDetails"
              name="projectDetails"
              value={formData.projectDetails}
              onChange={handleChange}
              rows={4}
              placeholder="Tell us about your project..."
              className="textarea-field bg-secondary-50 focus:ring-primary-200 hover:border-primary-300"
            ></textarea>
          </div>
          
          <motion.button
            type="submit"
            className="btn btn-primary w-full text-lg font-semibold py-4"
            disabled={isSubmitting}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {isSubmitting ? 'Sending...' : 'Get a Free Quote'}
          </motion.button>
        </form>
      )}
    </div>
  );
};

export default ContactForm;