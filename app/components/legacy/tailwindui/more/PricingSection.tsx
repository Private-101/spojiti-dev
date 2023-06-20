// app/components/PricingSection.tsx

import React from 'react';

const PricingSection: React.FC = () => {
  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Pricing</h2>
        <p className="text-gray-600 mb-8">
          Choose from our flexible pricing plans that suit your needs and budget.
        </p>
        {/* Additional content for the Pricing section */}
      </div>
    </section>
  );
};

export default PricingSection;
