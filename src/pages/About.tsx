import React from 'react';
import { Heart, Users, Award, Clock } from 'lucide-react';

const About = () => {
  console.log('About page rendered');

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-purple-600 text-white py-16 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Sobre Nosotros
          </h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
            Conectando gatitos amorosos con familias cariñosas desde 2020
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Nuestra Historia</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Gatitos Adorables nació del amor incondicional hacia los felinos y la pasión por conectar 
              a estas maravillosas criaturas con familias que les brinden el hogar que merecen. 
              Fundada en 2020 por María González, una veterinaria con más de 15 años de experiencia, 
              nuestra misión es asegurar que cada gatito encuentre su hogar perfecto.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Nuestra Misión</h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              Nos dedicamos a criar y cuidar gatitos con el más alto estándar de amor, salud y bienestar. 
              Creemos que cada gatito merece una familia que lo ame incondicionalmente, y cada familia 
              merece un compañero fiel que llene su hogar de alegría y ronroneos.
            </p>
            
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Nuestros Valores</h3>
            <ul className="text-gray-600 space-y-2">
              <li className="flex items-start">
                <span className="text-purple-600 mr-2">•</span>
                <strong>Bienestar Animal:</strong> La salud y felicidad de nuestros gatitos es nuestra prioridad número uno
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 mr-2">•</span>
                <strong>Transparencia:</strong> Proporcionamos información completa sobre cada gatito y su historial
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 mr-2">•</span>
                <strong>Compromiso:</strong> Te acompañamos durante todo el proceso de adopción y más allá
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 mr-2">•</span>
                <strong>Amor:</strong> Cada gatito es tratado como parte de nuestra familia hasta encontrar la suya
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Nuestros Logros
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-purple-600" />
              </div>
              <div className="text-3xl font-bold text-purple-600 mb-2">500+</div>
              <p className="text-gray-600">Gatitos Adoptados</p>
            </div>
            <div className="text-center p-6">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-purple-600" />
              </div>
              <div className="text-3xl font-bold text-purple-600 mb-2">450+</div>
              <p className="text-gray-600">Familias Felices</p>
            </div>
            <div className="text-center p-6">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-purple-600" />
              </div>
              <div className="text-3xl font-bold text-purple-600 mb-2">15</div>
              <p className="text-gray-600">Razas Disponibles</p>
            </div>
            <div className="text-center p-6">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-purple-600" />
              </div>
              <div className="text-3xl font-bold text-purple-600 mb-2">4</div>
              <p className="text-gray-600">Años de Experiencia</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Nuestro Equipo
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <div className="w-24 h-24 bg-purple-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">👩‍⚕️</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Dra. María González</h3>
              <p className="text-purple-600 font-semibold mb-2">Fundadora y Veterinaria</p>
              <p className="text-gray-600 text-sm">
                15+ años de experiencia en medicina veterinaria especializada en felinos
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <div className="w-24 h-24 bg-purple-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">👨‍💼</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Carlos Rodríguez</h3>
              <p className="text-purple-600 font-semibold mb-2">Especialista en Cuidado</p>
              <p className="text-gray-600 text-sm">
                Experto en comportamiento felino y socialización de gatitos
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <div className="w-24 h-24 bg-purple-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">👩‍💻</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Ana Martínez</h3>
              <p className="text-purple-600 font-semibold mb-2">Coordinadora de Adopciones</p>
              <p className="text-gray-600 text-sm">
                Se encarga de encontrar la familia perfecta para cada gatito
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;