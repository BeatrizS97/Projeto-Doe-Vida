// Importações necessárias do React e bibliotecas externas
import { useState } from "react"
import { Home, AlertCircle, Users, MapPin, Heart } from "lucide-react"
import { useNavigate, useLocation } from "react-router-dom"

// Componente Navigation: Barra de navegação principal do site
const Navigation = () => {
  // Hook useNavigate: permite navegar programaticamente entre páginas
  const navigate = useNavigate()

  // Hook useLocation: retorna informações sobre a URL atual
  const location = useLocation()

  // Estado para controlar se o menu mobile está aberto ou fechado
  // Valor inicial: false (menu fechado)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  // Pega diretamente a URL atual usando location.pathname, o que garante que o item ativo sempre reflete a página real
  const activeItem = location.pathname

  // Dados do menu de navegação: Array com todos os itens do menu
  // Cada objeto contém: caminho da rota, texto a exibir, e ícone
  const navItems = [
    { path: "/", label: "Início", icon: Home },
    { path: "/cuidados", label: "Cuidados", icon: AlertCircle },
    { path: "/historias", label: "Histórias", icon: Users },
    { path: "/hemocentros", label: "Hemocentros", icon: MapPin },
    { path: "/doacao", label: "Metas de Doações", icon: Heart },
  ]

  // NOVA FUNÇÃO: Centraliza a lógica de navegação
  // Recebe o caminho de destino como parâmetro
  const handleNavigation = (path) => {
    // 1. Navega para a rota especificada usando React Router
    navigate(path)

    // 2. Fecha o menu mobile (importante para dispositivos móveis)
    setIsMobileMenuOpen(false)

    // 3. Faz scroll suave para o topo da página
    // behavior: 'smooth' cria uma animação suave ao invés de pulo instantâneo
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  // Estrutura do componente
  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50 border-b-4 border-rose-600">
      {/* Container responsivo centralizado */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Flex container para alinhar logo e menu horizontalmente */}
        <div className="flex items-center justify-between py-4">
          {/* Logo (Esquerda) */}
          <div
            className="flex items-center space-x-3 cursor-pointer group"
            // CORRIGIDO: Agora usa handleNavigation para realmente navegar para home
            onClick={() => handleNavigation("/")}
          >
            {/* Container do ícone de coração com efeitos */}
            <div className="relative">
              {/* Ícone do coração */}
              <Heart className="w-10 h-10 text-red-600 fill-red-600 transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-lg" />

              {/* Anel de pulso que aparece ao passar o mouse */}
              <div className="absolute inset-0 rounded-full bg-red-600 opacity-0 group-hover:opacity-20 group-hover:scale-150 transition-all duration-500"></div>
            </div>

            {/* Textos do logo */}
            <div className="flex flex-col">
              {/* Título principal com gradiente */}
              <span className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-rose-600 to-red-700 bg-clip-text text-transparent transition-all duration-300 group-hover:from-rose-700 group-hover:to-red-800">
                Doe Vida
              </span>

              {/* Subtítulo */}
              <span className="text-sm lg:text-lg text-gray-600 -mt-0.5 transition-colors duration-300 group-hover:text-gray-800">
                Rodrigo e Natalha vivem em nós
              </span>
            </div>
          </div>

          {/* Menu Desktop (Visível apenas em telas grandes) */}
          <div className="hidden lg:flex space-x-6">
            {/* Loop: renderiza um botão para cada item do menu */}
            {navItems.map(({ path, label, icon: Icon }) => (
              <button
                key={path}
                // CORRIGIDO: Usa handleNavigation para navegar de verdade
                // Antes só mudava o estado visual, agora muda a rota real
                onClick={() => handleNavigation(path)}
                className={`relative flex items-center space-x-1.5 px-4 py-3 rounded-lg font-semibold transition-all duration-300 ease-in-out text-lg group ${
                  activeItem === path
                    ? "bg-gradient-to-r from-rose-600 to-red-700 text-white shadow-md scale-105"
                    : "text-gray-700 hover:bg-rose-50 hover:scale-105"
                }`}
              >
                {/* Efeito de brilho sutil que aparece ao passar o mouse (apenas em itens não ativos) */}
                {activeItem !== path && (
                  <div className="absolute inset-0 bg-gradient-to-r from-rose-100 to-red-100 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                )}

                {/* Ícone do menu */}
                <Icon
                  className={`w-5 h-5 relative z-10 transition-transform duration-300 ${
                    activeItem === path ? "" : "group-hover:scale-110"
                  }`}
                />

                {/* Texto do menu */}
                <span className="relative z-10">{label}</span>
              </button>
            ))}
          </div>

          {/* Botão Hamburger (Visível apenas em mobile) */}
          <button
            className="lg:hidden p-2 rounded-lg text-gray-700 hover:text-rose-600 hover:bg-rose-50 transition-all duration-300 ease-in-out shadow-sm hover:shadow-md relative overflow-hidden group"
            // Toggle: inverte o estado (abre/fecha menu)
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {/* Efeito ripple (ondulação) ao clicar no botão */}
            <div className="absolute inset-0 bg-rose-100 scale-0 group-active:scale-100 transition-transform duration-300 rounded-lg"></div>

            {/* Container das 3 linhas do ícone hamburger */}
            <div className="relative w-6 h-6">
              {/* Linha superior: vira diagonal quando menu está aberto */}
              <span
                className={`absolute left-0 block w-full h-1 bg-current rounded-full transform transition-all duration-500 ease-in-out ${
                  isMobileMenuOpen ? "rotate-45 translate-y-2.5" : "top-1"
                }`}
              ></span>

              {/* Linha do meio: desaparece quando menu está aberto */}
              <span
                className={`absolute left-0 block w-full h-1 bg-current rounded-full transform transition-all duration-500 ease-in-out ${
                  isMobileMenuOpen ? "opacity-0 scale-0" : "opacity-100 scale-100 top-2.5"
                }`}
              ></span>

              {/* Linha inferior: vira diagonal oposta quando menu está aberto */}
              <span
                className={`absolute left-0 block w-full h-1 bg-current rounded-full transform transition-all duration-500 ease-in-out ${
                  isMobileMenuOpen ? "-rotate-45 translate-y-2.5" : "top-4"
                }`}
              ></span>
            </div>
          </button>
        </div>

        {/* Menu Mobile Dropdown */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${
            isMobileMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          {/* Container dos itens do menu */}
          <div className="flex flex-col space-y-2 pb-4 bg-white rounded-lg shadow-md">
            {/* Loop: renderiza cada item do menu mobile */}
            {navItems.map(({ path, label, icon: Icon }, idx) => (
              <button
                key={path}
                // CORRIGIDO: Usa handleNavigation que:
                // 1. Navega para a página
                // 2. Fecha o menu mobile automaticamente
                // 3. Faz scroll para o topo
                onClick={() => handleNavigation(path)}
                className={`relative flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-300 ease-in-out overflow-hidden group ${
                  activeItem === path
                    ? "bg-gradient-to-r from-rose-600 to-red-700 text-white shadow-md"
                    : "text-gray-700 hover:bg-rose-50 hover:shadow-sm"
                }`}
                style={{
                  // Atraso progressivo: cada item aparece 50ms depois do anterior
                  animationDelay: `${idx * 50}ms`,
                  animation: isMobileMenuOpen ? "slideInFromLeft 0.3s ease-out forwards" : "none",
                }}
              >
                {/* Efeito de brilho deslizante ao passar o dedo/mouse (apenas itens não ativos) */}
                {activeItem !== path && (
                  <div className="absolute inset-0 bg-gradient-to-r from-rose-100 to-red-100 translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
                )}

                {/* Ícone do item */}
                <Icon
                  className={`w-5 h-5 relative z-10 transition-transform duration-300 ${
                    activeItem === path ? "" : "group-hover:scale-110"
                  }`}
                />

                {/* Texto do item do menu */}
                <span className="font-semibold text-lg relative z-10">{label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Animação CSS Customizada */}
      <style>{`
        /* 
          Animação slideInFromLeft:
          Usada nos itens do menu mobile para aparecerem da esquerda com fade-in
        */
        @keyframes slideInFromLeft {
          from {
            opacity: 0; /* Totalmente invisível */
            transform: translateX(-20px); /* 20px para a esquerda */
          }
          to {
            opacity: 1; /* Totalmente visível */
            transform: translateX(0); /* Posição original */
          }
        }
      `}</style>
    </nav>
  )
}

// Exporta o componente para ser usado em outras partes do projeto
export default Navigation
