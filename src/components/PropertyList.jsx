
// PropertyList.jsx
// Responsible for rendering the list of Property Card components. It fetches and passes property data from the hardcoded properties.js to each Property Card component.

import React from 'react';
import properties from '../lib/dataStore';
import PropertyCard from './PropertyCard';

const PropertyList = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {properties.map(property => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>
    </div>
  );
};

export default PropertyList;
