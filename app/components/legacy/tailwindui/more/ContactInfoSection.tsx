/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'
import { Container } from '~/components/legacy/tailwindui/Container';
import { ContactForm } from '~/components/legacy/tailwindui/more/ContactForm';
import { ActionButtons } from '~/components/legacy/tailwindui/more/ActionButtons';

export default function ContactInfoSection() {
  return (
    <form>
      <Container>
        <ContactForm />
        <ActionButtons onCancel={() => {}} onClick={() => {}} />
      </Container>
    </form>
  )
}


// app/components/ContactInfoSection.tsx
/*
import React from 'react';

const ContactInfoSection: React.FC = () => {
  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Contact Info</h2>
        <p className="text-gray-600 mb-8">
          Get in touch with our team for any inquiries or support you may need.
        </p>
        {/* Additional content for the Contact Info section /}
      </div>
    </section>
  );
};

export default ContactInfoSection;
*/