import React, { useState, useMemo } from 'react';
import { CartProvider } from '../contexts/CartContext';
import Header from '../components/Header';
import Filters from '../components/Filters';
import KittenCard from '../components/KittenCard';
import Cart from '../components/Cart';
import { kittens } from '../data/kittens';
import { Kitten } from '../types/kitten';

const Index = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedBreed, setSelectedBreed] = useState('Todos');
  const [selectedGender, setSelectedGender] = useState('Todos');
  const [selectedPriceRange, setSelectedPriceRange] = useState('Todos');

  console.log('Index component rendered');
  console.log('Current filters:', { selectedBreed, selectedGender, selectedPriceRange, searchTerm });

  const filteredKittens = useMemo(() => {
    let filtered = kittens.filter((kitten: Kitten) => {
      // Filtro por búsqueda
      const matchesSearch = kitten.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           kitten.breed.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           kitten.description.toLowerCase().includes(searchTerm.toLowerCase());

      // Filtro por raza
      const matchesBreed = selectedBreed === 'Todos' || kitten.breed === selectedBreed;

      // Filtro por género
      const matchesGender = selectedGender === 'Todos' || kitten.gender === selectedGender;

      // Filtro por precio
      let matchesPrice = true;
      if (selectedPriceRange !== 'Todos') {
        const [min, max] = selectedPriceRange.split('-').map(p => p.replace('+', ''));
        const minPrice = parseInt(min);
        const maxPrice = max ? parseInt(max) : Infinity;
        matchesPrice = kitten.price >= minPrice && kitten.price <= maxPrice;
      }

      return matchesSearch && matchesBreed && matchesGender && matchesPrice;
    });

    console.log('Filtered kittens count:', filtered.length);
    return filtered;
  }, [searchTerm, selectedBreed, selectedGender, selectedPriceRange]);

  return (
    <CartProvider>
      <div className="min-h-screen bg-gray-50">
        <Header
          onCartClick={() => setIsCartOpen(true)}
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
        />

        <main className="container mx-auto px-4 py-8">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Encuentra tu Compañero Perfecto 🐾
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Descubre nuestra adorable colección de gatitos. Todos nuestros gatitos están vacunados, 
              son saludables y están listos para encontrar su hogar para siempre.
            </p>
          </div>

          <Filters
            selectedBreed={selectedBreed}
            selectedGender={selectedGender}
            selectedPriceRange={selectedPriceRange}
            onBreedChange={setSelectedBreed}
            onGenderChange={setSelectedGender}
            onPriceRangeChange={setSelectedPriceRange}
          />

          {filteredKittens.length === 0 ? (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">😿</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                No se encontraron gatitos
              </h3>
              <p className="text-gray-600">
                Intenta ajustar tus filtros para ver más opciones
              </p>
            </div>
          ) : (
            <>
              <div className="flex justify-between items-center mb-6">
                <p className="text-gray-600">
                  Mostrando {filteredKittens.length} gatito{filteredKittens.length !== 1 ? 's' : ''}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredKittens.map((kitten) => (
                  <KittenCard key={kitten.id} kitten={kitten} />
                ))}
              </div>
            </>
          )}
        </main>

        <footer className="bg-purple-600 text-white py-8 mt-12">
          <div className="container mx-auto px-4 text-center">
            <h3 className="text-2xl font-bold mb-4">Gatitos Adorables</h3>
            <p className="mb-4">
              Conectando gatitos amorosos con familias cariñosas desde 2024
            </p>
            <div className="flex justify-center gap-6 text-sm">
              <span>📞 +1 (555) 123-4567</span>
              <span>📧 info@gatitosadorables.com</span>
              <span>📍 Ciudad de México, México</span>
            </div>
          </div>
        </footer>

        <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
      </div>
    </CartProvider>
  );
};

export default Index;