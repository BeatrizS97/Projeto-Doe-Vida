import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Mail, Github, Linkedin, MapPin, Phone, ExternalLink } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Início', path: '/' },
    { name: 'Cuidados', path: '/cuidados' },
    { name: 'Histórias', path: '/historias' },
    { name: 'Hemocentros', path: '/hemocentros' }
  ];

  const resources = [
    { name: 'Ministério da Saúde', url: 'https://www.gov.br/saude/pt-br' },
    { name: 'Hemocentros Brasil', url: 'http://www.prosangue.sp.gov.br/' },
    { name: 'OMS - Doação de Sangue', url: 'https://www.who.int/campaigns/world-blood-donor-day' }
  ];

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-red-950 to-gray-900 text-white overflow-hidden">
      {/* Padrão de fundo sutil */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="container mx-auto px-4 lg:px-6 relative z-10">
        
        {/* Seção Principal - Layout Otimizado */}
        <div className="py-10 lg:py-12">
          
          {/* Homenagem + Grid Compacto */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
            
            {/* Coluna 1: Homenagem (5 cols) */}
            <div className="lg:col-span-5 text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start mb-3">
                <Heart className="w-10 h-10 text-rose-400 fill-rose-400 animate-pulse mr-3" />
                <h2 className="text-xl lg:text-2xl font-bold">
                  <span className="bg-gradient-to-r from-rose-400 to-red-400 bg-clip-text text-transparent">
                    Rodrigo e Natalha ainda vivem em nós
                  </span>
                </h2>
              </div>
              <p className="text-sm lg:text-base text-gray-300 mb-4 lg:mb-0">
                Cada doação é um ato de amor que eterniza a memória de quem partiu
              </p>
            </div>

            {/* Coluna 2: Navegação (2 cols) */}
            <div className="lg:col-span-2 text-center lg:text-left">
              <h3 className="text-xs font-bold mb-3 text-rose-400 uppercase tracking-wider flex items-center justify-center lg:justify-start gap-1">
                <MapPin className="w-3 h-3" />
                Navegação
              </h3>
              <ul className="space-y-2 text-sm">
                {quickLinks.map((link) => (
                  <li key={link.path}>
                    <Link 
                      to={link.path} 
                      className="text-gray-300 hover:text-rose-400 transition-colors inline-flex items-center group"
                    >
                      <span className="transform group-hover:translate-x-1 transition-transform">
                        {link.name}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Coluna 3: Recursos (2 cols) */}
            <div className="lg:col-span-2 text-center lg:text-left">
              <h3 className="text-xs font-bold mb-3 text-rose-400 uppercase tracking-wider flex items-center justify-center lg:justify-start gap-1">
                <ExternalLink className="w-3 h-3" />
                Recursos
              </h3>
              <ul className="space-y-2 text-sm">
                {resources.map((resource) => (
                  <li key={resource.name}>
                    <a
                      href={resource.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-300 hover:text-rose-400 transition-colors inline-flex items-center group"
                    >
                      <span className="transform group-hover:translate-x-1 transition-transform">
                        {resource.name}
                      </span>
                      <ExternalLink className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Coluna 4: Emergências (2 cols) */}
            <div className="lg:col-span-2 text-center lg:text-left">
              <h3 className="text-xs font-bold mb-3 text-rose-400 uppercase tracking-wider flex items-center justify-center lg:justify-start gap-1">
                <Phone className="w-3 h-3" />
                Emergências
              </h3>
              <ul className="space-y-1 text-sm text-gray-300">
                <li><strong className="text-rose-400">SAMU:</strong> 192</li>
                <li><strong className="text-rose-400">Bombeiros:</strong> 193</li>
                <li><strong className="text-rose-400">Defesa Civil:</strong> 199</li>
              </ul>
            </div>

            {/* Coluna 5: Redes Sociais (1 col - centralizado) */}
            <div className="lg:col-span-1 text-center">
              <h3 className="text-xs font-bold mb-3 text-rose-400 uppercase tracking-wider">Social</h3>
              <div className="flex justify-center gap-2">
                <a href="mailto:beatriz.santos.ads97@gmail.com" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-rose-600 hover:scale-110 transition-all" aria-label="Email">
                  <Mail className="w-4 h-4" />
                </a>
                <a href="https://github.com/BeatrizS97" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-rose-600 hover:scale-110 transition-all" aria-label="GitHub">
                  <Github className="w-4 h-4" />
                </a>
                <a href="https://www.linkedin.com/in/beatrizsilvasantos-dev/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-rose-600 hover:scale-110 transition-all" aria-label="LinkedIn">
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* CTA Compacto */}
          <div className="text-center mt-8 pt-6 border-t border-white/10">
            <p className="text-sm text-gray-300 mb-3">
              💉 <strong className="text-rose-400">Uma doação salva até 4 vidas.</strong> Seja um herói.
            </p>
            <Link to="/hemocentros" className="inline-flex items-center gap-2 bg-gradient-to-r from-rose-600 to-red-700 hover:from-rose-700 hover:to-red-800 text-white text-sm font-semibold px-6 py-2.5 rounded-full transition-all transform hover:scale-105 shadow-lg">
              <MapPin className="w-4 h-4" />
              Encontrar Hemocentro
            </Link>
          </div>
        </div>

        {/* Copyright - Minimalista */}
        <div className="py-4 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-2 text-center">
            <div className="flex flex-col sm:flex-row items-center gap-1 text-gray-400 text-xs">
              <span className="font-semibold text-rose-400">© {currentYear} Doe Vida</span>
              <span className="hidden sm:inline text-gray-600">•</span>
              <span>Desenvolvido com ❤️ por Beatriz Silva Santos</span>
            </div>
            <p className="text-gray-500 text-xs">Em memória de Rodrigo e Natalha</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;