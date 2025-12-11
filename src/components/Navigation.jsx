// Importações necessárias do React e bibliotecas externas
import React, { useState } from 'react';
import { Home, AlertCircle, Users, MapPin, Heart } from 'lucide-react'; // Ícones para menu
import { Link, useLocation } from 'react-router-dom'; // Link para navegação e useLocation para rota ativa
import HeartBeat from './HeartBeat'; // Componente de coração animado

// Componente de navegação principal
const Navigation = () => {
  // Hook useLocation retorna a localização/rota atual
  const location = useLocation();

  // Estado para controlar abertura/fechamento do menu mobile
  // useState retorna [valor, função para alterar valor]
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Array com todos os itens do menu de navegação
  // Cada objeto contém: caminho, texto e ícone
  const navItems = [
    { path: '/', label: 'Início', icon: Home },
    { path: '/cuidados', label: 'Cuidados', icon: AlertCircle },
    { path: '/historias', label: 'Histórias', icon: Users },
    { path: '/hemocentros', label: 'Hemocentros', icon: MapPin },
    { path: '/doacao', label: 'Metas de Doações', icon: Heart }
  ];

  return (
    // Nav principal com posição sticky (fica fixo no topo ao rolar)
    <nav className="bg-white shadow-lg sticky top-0 z-50 border-b-4 border-rose-600">
      {/* Container responsivo com padding adaptativo */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Flex container para alinhar logo e menu */}
        <div className="flex items-center justify-between py-4">

          {/* Logo e nome do site */}
          <Link to="/" className="flex items-center space-x-3 cursor-pointer hover:opacity-80 transition-opacity duration-300">
            {/* Componente de coração animado */}
            <HeartBeat size="small" />
            {/* Textos do logo */}
            <div className="flex flex-col">
              <span className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-rose-600 to-red-700 bg-clip-text text-transparent">
                Doe Vida
              </span>
              <span className="text-sm lg:text-base text-gray-600 -mt-0.5">Rodrigo e Natalha vivem em nós</span>
            </div>
          </Link>

          {/* Menu desktop - visível apenas em telas grandes (lg e acima) */}
          <div className="hidden lg:flex space-x-6">
            {/* Loop map para renderizar cada item do menu */}
            {navItems.map(({ path, label, icon: Icon }) => (
              <Link
                key={path} // Key única para cada elemento do loop
                to={path} // Caminho de destino
                // Classes dinâmicas baseadas na rota atual
                // Se location.pathname === path, aplica estilos de "ativo"
                className={`flex items-center space-x-1.5 px-4 py-3 rounded-lg font-semibold transition-all duration-300 ease-in-out text-lg ${location.pathname === path
                    ? 'bg-gradient-to-r from-rose-600 to-red-700 text-white shadow-md scale-105'
                    : 'text-gray-700 hover:bg-rose-50 hover:scale-105'
                  }`}
              >
                {/* Renderiza o ícone do item */}
                <Icon className="w-5 h-5" />
                {/* Renderiza o texto do item */}
                <span>{label}</span>
              </Link>
            ))}
          </div>

          {/* Botão hamburger para menu mobile */}
          {/* Visível apenas em telas pequenas (oculto em lg e acima) */}
          <button
            className="lg:hidden p-2 rounded-lg text-gray-700 hover:text-rose-600 hover:bg-rose-50 transition-all duration-300 ease-in-out shadow-sm hover:shadow-md"
            // onClick inverte o estado do menu (aberto/fechado)
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {/* Container do ícone hamburger animado */}
            <div className="relative w-6 h-6">
              {/* Linha superior - se menu aberto, rotaciona 45° */}
              <span className={`absolute left-0 block w-full h-1 bg-current rounded-full transform transition duration-500 ease-in-out ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : 'top-1'
                }`}></span>
              {/* Linha do meio - se menu aberto, fica invisível */}
              <span className={`absolute left-0 block w-full h-1 bg-current rounded-full transform transition duration-500 ease-in-out ${isMobileMenuOpen ? 'opacity-0 scale-0' : 'opacity-100 scale-100 top-3'
                }`}></span>
              {/* Linha inferior - se menu aberto, rotaciona -45° */}
              <span className={`absolute left-0 block w-full h-1 bg-current rounded-full transform transition duration-500 ease-in-out ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : 'top-5'
                }`}></span>
            </div>
          </button>
        </div>

        {/* Menu mobile dropdown */}
        {/* Visível apenas em telas pequenas (oculto em lg e acima) */}
        <div
          // Classes dinâmicas para animar abertura/fechamento
          // max-h-screen quando aberto, max-h-0 quando fechado
          className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${isMobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
            }`}
        >
          {/* Container dos links do menu mobile */}
          <div className="flex flex-col space-y-2 pb-4 bg-white rounded-lg shadow-md">
            {/* Loop map para renderizar cada item do menu mobile */}
            {navItems.map(({ path, label, icon: Icon }) => (
              <Link
                key={path} // Key única para cada elemento
                to={path} // Caminho de destino
                // Ao clicar, fecha o menu mobile
                onClick={() => setIsMobileMenuOpen(false)}
                // Classes dinâmicas baseadas na rota atual
                className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-300 ease-in-out ${location.pathname === path
                    ? 'bg-gradient-to-r from-rose-600 to-red-700 text-white shadow-md'
                    : 'text-gray-700 hover:bg-rose-50 hover:shadow-sm'
                  }`}
              >
                {/* Renderiza o ícone do item */}
                <Icon className="w-5 h-5" />
                {/* Renderiza o texto do item */}
                <span className="font-semibold text-lg">{label}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

// Exporta o componente para uso em outras partes da aplicação
export default Navigation;