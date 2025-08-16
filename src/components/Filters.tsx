import React from 'react';
import { Filter } from 'lucide-react';

interface FiltersProps {
  selectedBreed: string;
  selectedGender: string;
  selectedPriceRange: string;
  onBreedChange: (breed: string) => void;
  onGenderChange: (gender: string) => void;
  onPriceRangeChange: (range: string) => void;
}

const Filters: React.FC<FiltersProps> = ({
  selectedBreed,
  selectedGender,
  selectedPriceRange,
  onBreedChange,
  onGenderChange,
  onPriceRangeChange,
}) => {
  console.log('Filters component rendered');

  const breeds = ['Todos', 'Persa', 'Siamés', 'Maine Coon', 'Británico', 'Ragdoll', 'Bengalí'];
  const genders = ['Todos', 'Macho', 'Hembra'];
  const priceRanges = ['Todos', '0-500', '501-1000', '1001-1500', '1501+'];

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-8">
      <div className="flex items-center mb-4">
        <Filter className="w-5 h-5 text-purple-600 mr-2" />
        <h3 className="text-lg font-semibold text-gray-800">Filtros</h3>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Breed Filter */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Raza
          </label>
          <select
            value={selectedBreed}
            onChange={(e) => onBreedChange(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          >
            {breeds.map((breed) => (
              <option key={breed} value={breed}>
                {breed}
              </option>
            ))}
          </select>
        </div>

        {/* Gender Filter */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Género
          </label>
          <select
            value={selectedGender}
            onChange={(e) => onGenderChange(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          >
            {genders.map((gender) => (
              <option key={gender} value={gender}>
                {gender}
              </option>
            ))}
          </select>
        </div>

        {/* Price Range Filter */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Rango de Precio (USD)
          </label>
          <select
            value={selectedPriceRange}
            onChange={(e) => onPriceRangeChange(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          >
            {priceRanges.map((range) => (
              <option key={range} value={range}>
                {range === 'Todos' ? 'Todos' : `$${range}`}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default Filters;