import React from 'react';
import { Heart, ShoppingCart } from 'lucide-react';
import { Kitten } from '../types/kitten';
import { useCart } from '../contexts/CartContext';
import { toast } from 'sonner';

interface KittenCardProps {
  kitten: Kitten;
}

const KittenCard: React.FC<KittenCardProps> = ({ kitten }) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(kitten);
    toast.success(`${kitten.name} agregado al carrito! 🐱`);
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="relative">
        <img
          src={kitten.image}
          alt={kitten.name}
          className="w-full h-64 object-cover"
        />
        <div className="absolute top-2 right-2">
          <button className="p-2 bg-white rounded-full shadow-md hover:bg-gray-50 transition-colors">
            <Heart className="w-5 h-5 text-gray-600 hover:text-red-500" />
          </button>
        </div>
        {kitten.vaccinated && (
          <div className="absolute top-2 left-2 bg-green-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
            Vacunado
          </div>
        )}
      </div>
      
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold text-gray-800">{kitten.name}</h3>
          <span className="text-2xl font-bold text-purple-600">${kitten.price}</span>
        </div>
        
        <div className="space-y-1 mb-3">
          <p className="text-sm text-gray-600">
            <span className="font-semibold">Raza:</span> {kitten.breed}
          </p>
          <p className="text-sm text-gray-600">
            <span className="font-semibold">Edad:</span> {kitten.age}
          </p>
          <p className="text-sm text-gray-600">
            <span className="font-semibold">Color:</span> {kitten.color}
          </p>
          <p className="text-sm text-gray-600">
            <span className="font-semibold">Género:</span> {kitten.gender === 'male' ? 'Macho' : 'Hembra'}
          </p>
        </div>
        
        <p className="text-gray-700 text-sm mb-4 line-clamp-2">{kitten.description}</p>
        
        <button
          onClick={handleAddToCart}
          disabled={!kitten.available}
          className="w-full bg-purple-600 hover:bg-purple-700 disabled:bg-gray-400 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2"
        >
          <ShoppingCart className="w-4 h-4" />
          {kitten.available ? 'Agregar al carrito' : 'No disponible'}
        </button>
      </div>
    </div>
  );
};

export default KittenCard;