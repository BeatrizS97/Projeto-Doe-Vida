// src/components/Footer.jsx
import React from 'react';
import HeartBeat from './HeartBeat';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-red-950 to-gray-900 text-white py-16">
      <div className="container mx-auto px-4 lg:px-6 text-center">
        <div className="mb-8 flex justify-center">
          <HeartBeat size="large" />
        </div>
        
        <h2 className="text-3xl lg:text-4xl font-bold mb-4 bg-gradient-to-r from-rose-400 to-red-500 bg-clip-text text-transparent">
          Rodrigo e Natalha ainda vivem em nós
        </h2>
        
        <p className="text-xl mb-8 text-gray-300">
          Faça parte dessa corrente
        </p>
        
        <div className="border-t border-gray-700 pt-8 mt-8">
          <p className="text-gray-400 mb-6 text-lg">
            Uma doação de sangue pode salvar até 4 vidas. Seja um herói hoje.
          </p>
          
          {/* Direitos Autorais */}
          <div className="bg-gray-800/50 backdrop-blur rounded-lg p-6 max-w-2xl mx-auto mb-6">
            <p className="text-gray-300 mb-2">
              <span className="font-bold text-rose-400">© {new Date().getFullYear()} Doe Vida</span>
            </p>
            <p className="text-gray-400 text-sm">
              Desenvolvido por <span className="font-semibold text-white">Beatriz Whitacker</span>
            </p>
            <p className="text-gray-500 text-xs mt-2">
              Todos os direitos reservados. Site criado em homenagem ao Rodrigo e Natalha.
            </p>
          </div>

          {/* Links Sociais (opcional) */}
          <div className="flex justify-center space-x-6 text-gray-400">
            <a href="#" className="hover:text-rose-400 transition-colors">
              <Mail className="w-6 h-6" />
            </a>
            <a href="#" className="hover:text-rose-400 transition-colors">
              <Github className="w-6 h-6" />
            </a>
            <a href="#" className="hover:text-rose-400 transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;