/**
 * EmailJS Service Configuration
 * 
 * This module provides a centralized configuration and helper functions
 * for sending emails through EmailJS from the TeddyKids website.
 * 
 * Setup instructions:
 * 1. Create an account at https://www.emailjs.com
 * 2. Connect your Gmail account via OAuth
 * 3. Create email templates for contact and application forms
 * 4. Set up the environment variables in your Vercel project
 * 
 * Environment variables needed:
 * - NEXT_PUBLIC_EMAILJS_SERVICE_ID: Your EmailJS service ID
 * - NEXT_PUBLIC_EMAILJS_CONTACT_TEMPLATE_ID: Template ID for contact form
 * - NEXT_PUBLIC_EMAILJS_APPLY_TEMPLATE_ID: Template ID for apply form
 * - NEXT_PUBLIC_EMAILJS_PUBLIC_KEY: Your EmailJS public key
 */

import emailjs from '@emailjs/browser';
import type { EmailJSResponseStatus } from '@emailjs/browser';

// Initialize EmailJS with public key
export const initEmailJS = () => {
  if (typeof window !== 'undefined') {
    emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || '');
  }
};

/**
 * Service IDs
 * --------------------------------------------------
 * We hard-code the user-supplied service IDs so the
 * forms work instantly in staging / production while
 * still allowing overrides via environment variables.
 */
const CONTACT_SERVICE_ID =
  process.env.NEXT_PUBLIC_EMAILJS_CONTACT_SERVICE_ID || 'service_37lypyd';
const APPLY_SERVICE_ID =
  process.env.NEXT_PUBLIC_EMAILJS_APPLY_SERVICE_ID || 'service_uarua1j';

// Contact form data interface
export interface ContactFormData {
  name: string;
  email: string;
  childAge?: string;
  message: string;
  language?: string; // Current language for localized responses
}

// Apply form data interface (comprehensive)
export interface ApplyFormData {
  // Program Selection
  program: string;
  location: string;
  startDate: string;
  
  // Child Information
  childFirstName: string;
  childLastName: string;
  childDateOfBirth: string;
  childGender?: string;
  childNationality?: string;
  childLanguages?: string;
  
  // Parent/Guardian Information
  parentFirstName: string;
  parentLastName: string;
  parentEmail: string;
  parentPhone?: string;
  parentAddress?: string;
  parentCity?: string;
  parentPostalCode?: string;
  parentCountry?: string;
  
  // Additional Information
  previousChildcare?: string;
  dietaryRestrictions?: string;
  medicalInformation?: string;
  additionalComments?: string;
  
  // Preferences
  tourRequested?: boolean;
  readyToApply?: boolean;
  whatsappPreferred?: boolean;
  agreeTerms: boolean;

  // System fields
  language?: string; // Current language for localized responses
}

/**
 * Send contact form email
 * 
 * @param formData Contact form data
 * @returns Promise with EmailJS response
 */
export const sendContactEmail = async (
  formData: ContactFormData,
): Promise<EmailJSResponseStatus> => {
  try {
    // Add language to template params for localized responses
    const templateParams = {
      ...formData,
      language: formData.language || 'en',
      // Add any additional template parameters here
      site_name: 'TeddyKids Website',
      submission_date: new Date().toISOString(),
    };

    return await emailjs.send(
      CONTACT_SERVICE_ID,
      process.env.NEXT_PUBLIC_EMAILJS_CONTACT_TEMPLATE_ID || '',
      templateParams
    );
  } catch (error) {
    console.error('Error sending contact email:', error);
    throw error;
  }
};

/**
 * Send application form email
 * 
 * @param formData Application form data
 * @returns Promise with EmailJS response
 */
export const sendApplicationEmail = async (
  formData: ApplyFormData,
): Promise<EmailJSResponseStatus> => {
  try {
    // Format the data for better email readability
    const programInfo = `${formData.program} at ${formData.location}`;
    const childInfo = `${formData.childFirstName} ${formData.childLastName} (DOB: ${formData.childDateOfBirth})`;
    const parentInfo = `${formData.parentFirstName} ${formData.parentLastName} (${formData.parentEmail})`;
    
    // Prepare preferences as readable text
    const preferences = [
      formData.tourRequested ? 'Requested a tour' : '',
      formData.readyToApply ? 'Ready to apply now' : '',
      formData.whatsappPreferred ? 'Prefers WhatsApp communication' : '',
    ].filter(Boolean).join(', ');
    
    // Add language to template params for localized responses
    const templateParams = {
      ...formData,
      language: formData.language || 'en',
      program_info: programInfo,
      child_info: childInfo,
      parent_info: parentInfo,
      preferences: preferences,
      // Add any additional template parameters here
      site_name: 'TeddyKids Website',
      submission_date: new Date().toISOString(),
    };

    return await emailjs.send(
      APPLY_SERVICE_ID,
      process.env.NEXT_PUBLIC_EMAILJS_APPLY_TEMPLATE_ID || '',
      templateParams
    );
  } catch (error) {
    console.error('Error sending application email:', error);
    throw error;
  }
};

/**
 * Generic function to send any email via EmailJS
 * 
 * @param serviceId EmailJS service ID
 * @param templateId EmailJS template ID
 * @param templateParams Template parameters
 * @returns Promise with EmailJS response
 */
export const sendEmail = async (
  serviceId: string = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '',
  templateId: string,
  templateParams: Record<string, unknown>
): Promise<EmailJSResponseStatus> => {
  try {
    return await emailjs.send(serviceId, templateId, templateParams);
  } catch (error) {
    console.error('Error sending email:', error);
    throw error;
  }
};
