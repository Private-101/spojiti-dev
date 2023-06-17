// app/components/AboutUsSection.tsx

import React from 'react';

const AboutUsSection: React.FC = () => {
  return (
    <section className="bg-white py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">About Us</h2>
        <p className="text-gray-600 mb-8">
          Learn more about our company and our mission to connect job seekers with great opportunities.
        </p>
        {/* Additional content for the About Us section */}
      </div>
    </section>
  );
};

export default AboutUsSection;
