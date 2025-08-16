import React, { useState, useMemo } from 'react';
import { CartProvider } from '../contexts/CartContext';
import Filters from '../components/Filters';
import KittenCard from '../components/KittenCard';
import Cart from '../components/Cart';
import { kittens } from '../data/kittens';
import { Kitten } from '../types/kitten';
import { Search, ShoppingCart } from 'lucide-react';
import { useCart } from '../contexts/CartContext';

const ProductsContent = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedBreed, setSelectedBreed] = useState('Todos');
  const [selectedGender, setSelectedGender] = useState('Todos');
  const [selectedPriceRange, setSelectedPriceRange] = useState('Todos');
  const { items } = useCart();

  console.log('Products page rendered');
  console.log('Current filters:', { selectedBreed, selectedGender, selectedPriceRange, searchTerm });

  const filteredKittens = useMemo(() => {
    let filtered = kittens.filter((kitten: Kitten) => {
      const matchesSearch = kitten.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           kitten.breed.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           kitten.description.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesBreed = selectedBreed === 'Todos' || kitten.breed === selectedBreed;
      const matchesGender = selectedGender === 'Todos' || kitten.gender === selectedGender;

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

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-purple-600">Nuestros Productos</h1>
            
            <div className="flex items-center gap-4">
              {/* Search Bar */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Buscar gatitos..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent w-64"
                />
              </div>

              {/* Cart Button */}
              <button
                onClick={() => setIsCartOpen(true)}
                className="relative bg-purple-600 text-white p-2 rounded-lg hover:bg-purple-700 transition-colors"
              >
                <ShoppingCart className="w-6 h-6" />
                {totalItems > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

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

      <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </div>
  );
};

const Products = () => {
  return (
    <CartProvider>
      <ProductsContent />
    </CartProvider>
  );
};

export default Products;