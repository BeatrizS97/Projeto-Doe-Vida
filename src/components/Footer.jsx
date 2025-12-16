import { useState } from "react"
import { Link } from "react-router-dom"
import { Heart, Mail, Github, Linkedin, ExternalLink, ChevronDown } from "lucide-react"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { name: "Início", path: "/" },
    { name: "Cuidados", path: "/cuidados" },
    { name: "Histórias", path: "/historias" },
    { name: "Hemocentros", path: "/hemocentros" },
  ]

  const resources = [
    { name: "Ministério da Saúde", url: "https://www.gov.br/saude/pt-br" },
    { name: "Hemocentros Brasil", url: "http://www.prosangue.sp.gov.br/" },
    { name: "OMS - Doação de Sangue", url: "https://www.who.int/campaigns/world-blood-donor-day" },
  ]

  const emergencyNumbers = [
    { service: "SAMU", number: "192" },
    { service: "Bombeiros", number: "193" },
    { service: "Defesa Civil", number: "199" },
  ]

  const [isAboutOpen, setIsAboutOpen] = useState(false)
  const [isNavOpen, setIsNavOpen] = useState(false)
  const [isResourcesOpen, setIsResourcesOpen] = useState(false)
  const [isEmergenciesOpen, setIsEmergenciesOpen] = useState(false)
  const [isContactOpen, setIsContactOpen] = useState(false)

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-red-950 to-gray-900 text-white overflow-hidden">
      {/* Fundo sutil */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        ></div>
      </div>

      {/* Container com padding responsivo */}
      <div className="px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="py-3 sm:py-4 lg:py-6">
          {/* Versão desktop: grid */}
          <div className="hidden sm:grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4 lg:gap-8">
            {/* Coluna 1: Sobre */}
            <div className="text-left">
              <div className="flex items-center mb-1 sm:mb-2">
                <Heart className="w-6 h-6 text-rose-400 fill-rose-400 animate-pulse mr-2" />
                <h2 className="text-sm font-bold text-white">Doe Vida</h2>
              </div>
              <p className="text-xs sm:text-sm text-gray-400 mt-0 sm:mt-1">
                Em memória de Rodrigo e Natalha. Cada doação eterniza o amor.
              </p>
            </div>

            {/* Coluna 2: Navegação */}
            <div className="text-left">
              <h3 className="text-xs sm:text-sm font-bold mb-1 sm:mb-2 text-rose-400 uppercase tracking-wider">
                Navegação
              </h3>
              <ul className="space-y-0 sm:space-y-1 text-xs sm:text-sm">
                {quickLinks.map((link) => (
                  <li key={link.path}>
                    <Link to={link.path} className="text-gray-300 hover:text-rose-400 transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Coluna 3: Recursos */}
            <div className="text-left">
              <h3 className="text-xs sm:text-sm font-bold mb-1 sm:mb-2 text-rose-400 uppercase tracking-wider">
                Recursos
              </h3>
              <ul className="space-y-0 sm:space-y-1 text-xs sm:text-sm">
                {resources.map((resource) => (
                  <li key={resource.name}>
                    <a
                      href={resource.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-300 hover:text-rose-400 transition-colors inline-flex items-center"
                    >
                      {resource.name}
                      <ExternalLink className="w-3 h-3 ml-1 opacity-60" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Coluna 4: Emergências */}
            <div className="text-left">
              <h3 className="text-xs sm:text-sm font-bold mb-1 sm:mb-2 text-rose-400 uppercase tracking-wider">
                Emergências
              </h3>
              <ul className="space-y-0 sm:space-y-1 text-xs sm:text-sm text-gray-300">
                {emergencyNumbers.map((item) => (
                  <li key={item.service}>
                    <strong className="text-rose-400">{item.service}:</strong> {item.number}
                  </li>
                ))}
              </ul>
            </div>

            {/* Coluna 5: Entre em Contato */}
            <div className="text-left col-span-2 lg:col-span-1">
              <h3 className="text-xs sm:text-sm font-bold mb-1 sm:mb-2 text-rose-400 uppercase tracking-wider">
                Entre em Contato
              </h3>
              <p className="text-xs sm:text-sm text-gray-400 mb-1 sm:mb-3">
                Tem uma dúvida ou quer colaborar? Estou à disposição!
              </p>
              <div className="flex gap-2 mt-1 sm:mt-2">
                <a
                  href="mailto:beatriz.santos.ads97@gmail.com"
                  className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-rose-600 hover:scale-110 transition-all"
                  aria-label="Email"
                >
                  <Mail className="w-4 h-4" />
                </a>
                <a
                  href="https://github.com/BeatrizS97"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-rose-600 hover:scale-110 transition-all"
                  aria-label="GitHub"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href="https://www.linkedin.com/in/beatrizsilvasantos-dev/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-rose-600 hover:scale-110 transition-all"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Versão mobile: accordion */}
          <div className="sm:hidden space-y-4">
            {/* Seção 1: Sobre */}
            <div>
              <button
                className="flex justify-between items-center w-full text-left"
                onClick={() => setIsAboutOpen(!isAboutOpen)}
              >
                <div className="flex items-center">
                  <Heart className="w-5 h-5 text-rose-400 fill-rose-400 animate-pulse mr-2" />
                  <h3 className="text-sm font-bold text-white">Doe Vida</h3>
                </div>
                <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center hover:bg-rose-600/20 transition-all">
                  <ChevronDown
                    className={`w-4 h-4 text-rose-400 transition-transform duration-300 ease-in-out ${isAboutOpen ? "rotate-180" : ""}`}
                  />
                </div>
              </button>
              {isAboutOpen && (
                <p className="text-xs text-gray-400 mt-2 pl-7">
                  Em memória de Rodrigo e Natalha. Cada doação eterniza o amor.
                </p>
              )}
            </div>

            {/* Seção 2: Navegação */}
            <div>
              <button
                className="flex justify-between items-center w-full text-left"
                onClick={() => setIsNavOpen(!isNavOpen)}
              >
                <h3 className="text-xs font-bold text-rose-400 uppercase tracking-wider">Navegação</h3>
                <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center hover:bg-rose-600/20 transition-all">
                  <ChevronDown
                    className={`w-4 h-4 text-rose-400 transition-transform duration-300 ease-in-out ${isNavOpen ? "rotate-180" : ""}`}
                  />
                </div>
              </button>
              {isNavOpen && (
                <ul className="space-y-1 text-xs mt-2 pl-4">
                  {quickLinks.map((link) => (
                    <li key={link.path}>
                      <Link to={link.path} className="text-gray-300 hover:text-rose-400 transition-colors">
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Seção 3: Recursos */}
            <div>
              <button
                className="flex justify-between items-center w-full text-left"
                onClick={() => setIsResourcesOpen(!isResourcesOpen)}
              >
                <h3 className="text-xs font-bold text-rose-400 uppercase tracking-wider">Recursos</h3>
                <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center hover:bg-rose-600/20 transition-all">
                  <ChevronDown
                    className={`w-4 h-4 text-rose-400 transition-transform duration-300 ease-in-out ${isResourcesOpen ? "rotate-180" : ""}`}
                  />
                </div>
              </button>
              {isResourcesOpen && (
                <ul className="space-y-1 text-xs mt-2 pl-4">
                  {resources.map((resource) => (
                    <li key={resource.name}>
                      <a
                        href={resource.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-300 hover:text-rose-400 transition-colors inline-flex items-center"
                      >
                        {resource.name}
                        <ExternalLink className="w-3 h-3 ml-1 opacity-60" />
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Seção 4: Emergências */}
            <div>
              <button
                className="flex justify-between items-center w-full text-left"
                onClick={() => setIsEmergenciesOpen(!isEmergenciesOpen)}
              >
                <h3 className="text-xs font-bold text-rose-400 uppercase tracking-wider">Emergências</h3>
                <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center hover:bg-rose-600/20 transition-all">
                  <ChevronDown
                    className={`w-4 h-4 text-rose-400 transition-transform duration-300 ease-in-out ${isEmergenciesOpen ? "rotate-180" : ""}`}
                  />
                </div>
              </button>
              {isEmergenciesOpen && (
                <ul className="space-y-1 text-xs text-gray-300 mt-2 pl-4">
                  {emergencyNumbers.map((item) => (
                    <li key={item.service}>
                      <strong className="text-rose-400">{item.service}:</strong> {item.number}
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Seção 5: Entre em Contato */}
            <div>
              <button
                className="flex justify-between items-center w-full text-left"
                onClick={() => setIsContactOpen(!isContactOpen)}
              >
                <h3 className="text-xs font-bold text-rose-400 uppercase tracking-wider">Entre em Contato</h3>
                <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center hover:bg-rose-600/20 transition-all">
                  <ChevronDown
                    className={`w-4 h-4 text-rose-400 transition-transform duration-300 ease-in-out ${isContactOpen ? "rotate-180" : ""}`}
                  />
                </div>
              </button>
              {isContactOpen && (
                <div className="mt-2 pl-4">
                  <p className="text-xs text-gray-400 mb-2">Tenho uma dúvida ou quero colaborar? Estou à disposição!</p>
                  <div className="flex gap-2">
                    <a
                      href="mailto:beatriz.santos.ads97@gmail.com"
                      className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center hover:bg-rose-600 hover:scale-110 transition-all"
                      aria-label="Email"
                    >
                      <Mail className="w-4 h-4" />
                    </a>
                    <a
                      href="https://github.com/BeatrizS97"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center hover:bg-rose-600 hover:scale-110 transition-all"
                      aria-label="GitHub"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/beatrizsilvasantos-dev/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center hover:bg-rose-600 hover:scale-110 transition-all"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="py-2 sm:py-3 border-t border-white/10">
          <p className="text-center text-xs sm:text-sm text-gray-400">
            <span className="font-semibold text-rose-400">© {currentYear} Doe Vida</span>
            <span className="mx-2 text-gray-600">•</span>
            <span>Desenvolvido com ❤️ por Beatriz Silva Santos</span>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
