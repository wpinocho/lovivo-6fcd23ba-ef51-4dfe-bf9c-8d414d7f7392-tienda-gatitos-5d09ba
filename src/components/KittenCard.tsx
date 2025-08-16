import React from 'react';
import { Heart, ShoppingCart, Star } from 'lucide-react';
import { Kitten } from '../types/kitten';
import { useCart } from '../contexts/CartContext';
import { toast } from 'sonner';

interface KittenCardProps {
  kitten: Kitten;
}

const KittenCard: React.FC<KittenCardProps> = ({ kitten }) => {
  const { addItem } = useCart();

  console.log('KittenCard rendered for:', kitten.name);

  const handleAddToCart = () => {
    addItem(kitten);
    toast.success(`${kitten.name} agregado al carrito! 🐾`);
  };

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="relative">
        <img
          src={kitten.image}
          alt={kitten.name}
          className="w-full h-64 object-cover"
        />
        <div className="absolute top-4 right-4">
          <button className="bg-white p-2 rounded-full shadow-md hover:bg-gray-50 transition-colors">
            <Heart className="w-5 h-5 text-gray-600 hover:text-red-500" />
          </button>
        </div>
        <div className="absolute top-4 left-4">
          <span className="bg-purple-600 text-white px-2 py-1 rounded-full text-xs font-semibold">
            {kitten.breed}
          </span>
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-xl font-bold text-gray-800">{kitten.name}</h3>
          <div className="flex items-center">
            <Star className="w-4 h-4 text-yellow-400 fill-current" />
            <span className="text-sm text-gray-600 ml-1">5.0</span>
          </div>
        </div>

        <div className="flex items-center gap-4 mb-3 text-sm text-gray-600">
          <span className="flex items-center">
            <span className="w-2 h-2 bg-blue-500 rounded-full mr-1"></span>
            {kitten.gender}
          </span>
          <span className="flex items-center">
            <span className="w-2 h-2 bg-green-500 rounded-full mr-1"></span>
            {kitten.age}
          </span>
        </div>

        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {kitten.description}
        </p>

        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-purple-600">
            ${kitten.price}
          </div>
          <button
            onClick={handleAddToCart}
            className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors flex items-center gap-2"
          >
            <ShoppingCart className="w-4 h-4" />
            Agregar
          </button>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {kitten.features.map((feature, index) => (
            <span
              key={index}
              className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs"
            >
              {feature}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default KittenCard;