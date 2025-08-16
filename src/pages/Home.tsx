import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Shield, Award, Users } from 'lucide-react';

const Home = () => {
  console.log('Home page rendered');

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
            Gatitos Adorables 🐾
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Encuentra tu compañero perfecto entre nuestra adorable colección de gatitos. 
            Todos nuestros gatitos están vacunados, son saludables y están listos para encontrar su hogar para siempre.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/productos" 
              className="bg-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-purple-700 transition-colors"
            >
              Ver Nuestros Gatitos
            </Link>
            <Link 
              to="/sobre-nosotros" 
              className="border-2 border-purple-600 text-purple-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-purple-600 hover:text-white transition-colors"
            >
              Conoce Nuestra Historia
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            ¿Por qué elegir Gatitos Adorables?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Amor y Cuidado</h3>
              <p className="text-gray-600">
                Todos nuestros gatitos reciben amor y cuidados especiales desde el primer día
              </p>
            </div>
            <div className="text-center p-6">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Salud Garantizada</h3>
              <p className="text-gray-600">
                Vacunados, desparasitados y con certificado veterinario completo
              </p>
            </div>
            <div className="text-center p-6">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Calidad Premium</h3>
              <p className="text-gray-600">
                Gatitos de razas puras con pedigree y excelente temperamento
              </p>
            </div>
            <div className="text-center p-6">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Soporte Continuo</h3>
              <p className="text-gray-600">
                Te acompañamos en todo el proceso de adopción y más allá
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-purple-600 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            ¿Listo para encontrar tu nuevo mejor amigo?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Explora nuestra colección de gatitos adorables y encuentra el compañero perfecto para ti
          </p>
          <Link 
            to="/productos" 
            className="bg-white text-purple-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors inline-block"
          >
            Explorar Gatitos
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;