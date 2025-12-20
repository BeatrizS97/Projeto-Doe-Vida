import { Heart, Users, Droplet, HeartHandshake } from "lucide-react" // Ícones da biblioteca Lucide
import { useNavigate } from "react-router-dom" // Hook para navegação entre rotas
import Heart3D from "../components/Heart3D" // Componente de coração 3D customizado
import Button from "../components/Button" // Componente de botão reutilizável
import BloodDonationAnimation from "../components/BloodDonationAnimation" // Animação de doação de sangue

// Componente principal da página Home
const Home = () => {
  // Hook do React Router para navegação programática entre páginas
  const navigate = useNavigate()

  // Array de estatísticas exibidas na página
  // Cada objeto contém informações sobre um card de estatística
  const stats = [
    {
      icon: Heart, // Ícone do card
      title: "Uma doação salva", // Título principal
      subtitle: "até 4 vidas", // Subtítulo
      bgClass: "bg-rose-600", // Classe de fundo completa (Tailwind)
    },
    {
      icon: Users,
      title: "Apenas 1.6%",
      subtitle: "da população doa",
      bgClass: "bg-red-600",
    },
    {
      icon: Droplet,
      title: "A cada 2 segundos",
      subtitle: "alguém precisa de sangue",
      bgClass: "bg-rose-600",
    },
  ]

  // Renderização do componente
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-white to-red-50">
      {/* Seção hero - topo da página com título principal e animação */}
      <div className="relative overflow-hidden bg-gradient-to-br from-rose-600 via-red-600 to-rose-800 text-white py-12 sm:py-16 lg:py-20">
        {/* Efeitos de gradiente radial para adicionar profundidade visual */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(251,113,133,0.3),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(220,38,38,0.2),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-black opacity-15"></div>

        <div className="container mx-auto px-6 sm:px-10 md:px-12 lg:px-16 relative z-10">
          {/* Grid de 2 colunas: conteúdo à esquerda e animação à direita */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-center">
            {/* Lado esquerdo: conteúdo textual */}
            <div className="text-center md:text-left animate-fade-in px-2 sm:px-4 md:px-8 md:pl-8 lg:pl-24">
              <div className="relative">
                {/* Coração 3D animado posicionado acima do título */}
                <div className="flex justify-center md:justify-end mb-2">
                  <div className="w-28 h-28 xs:w-32 xs:h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 flex items-center justify-center filter drop-shadow-2xl transform -translate-y-2 sm:-translate-y-4 mr-0 lg:mr-[50%] max-w-[70%]">
                    <Heart3D wingImageUrl={true} />
                  </div>
                </div>

                {/* Título principal (H1) com sombra de texto para destacar */}
                <div className="relative inline-block w-full">
                  <h1
                    className="text-4xl xs:text-5xl sm:text-5xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 leading-tight tracking-tight px-0 py-1 text-white"
                    style={{
                      textShadow: `
        0 2px 4px rgba(0,0,0,0.7),
        0 4px 8px rgba(0,0,0,0.5),
        0 0 12px rgba(0,0,0,0.3)
      `,
                    }}
                  >
                    Doe Vida, Salve Vidas
                  </h1>
                </div>

                <div className="inline-block bg-white/10 backdrop-blur-sm rounded-full px-4 sm:px-6 py-1.5 sm:py-2 mb-3 sm:mb-4 border border-white/10">
                  <p className="text-base xs:text-lg sm:text-xl md:text-2xl font-medium flex items-center justify-center gap-2 flex-wrap">
                    <span className="whitespace-nowrap">Em memória de Rodrigo e Natalha</span>
                    <span className="inline-block animate-pulse" style={{ animationDuration: "2s" }}>
                      ❤️
                    </span>
                  </p>
                </div>

                <p className="text-lg xs:text-xl sm:text-lg md:text-xl leading-relaxed mb-6 sm:mb-8 opacity-95 max-w-md mx-auto md:mx-0 text-white/95 font-medium px-2 sm:px-0">
                  Transformando saudade em esperança através da doação de sangue. Cada gota salva vidas e mantém viva a
                  memória de quem amamos.
                </p>

                {/* Botão principal de call-to-action */}
                <div className="flex justify-center md:justify-start mt-4 sm:mt-6 px-2 sm:px-0">
                  <button
                    onClick={() => navigate("/hemocentros")}
                    className="group relative inline-flex items-center gap-2 sm:gap-3 px-5 sm:px-6 md:px-8 py-3 sm:py-4 bg-white text-rose-600 rounded-2xl font-bold text-sm sm:text-base md:text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 overflow-hidden min-h-[48px] w-full sm:w-auto justify-center"
                  >
                    {/* Efeito de brilho animado ao passar o mouse */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-rose-100 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                    {/* Partículas decorativas animadas */}
                    <div className="absolute top-2 left-6 w-1 h-1 bg-rose-300/60 rounded-full animate-ping"></div>
                    <div
                      className="absolute bottom-2 right-8 w-1 h-1 bg-rose-400/60 rounded-full animate-ping"
                      style={{ animationDelay: "0.5s" }}
                    ></div>

                    {/* Ícone SVG customizado de pin de localização com coração */}
                    <div className="relative z-10 flex-shrink-0">
                      <svg
                        className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 group-hover:scale-110 transition-transform duration-300"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        {/* Definição de gradiente para o ícone */}
                        <defs>
                          <linearGradient id="pinGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" style={{ stopColor: "#fb7185" }} />
                            <stop offset="100%" style={{ stopColor: "#f43f5e" }} />
                          </linearGradient>
                        </defs>
                        {/* Forma do pin de localização */}
                        <path
                          d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"
                          fill="url(#pinGradient)"
                        />
                        {/* Coração dentro do pin */}
                        <path
                          d="M12 13.5c-1.5-1-2.5-2-2.5-3.25 0-.69.56-1.25 1.25-1.25.36 0 .69.15.93.39l.32.36.32-.36c.24-.24.57-.39.93-.39.69 0 1.25.56 1.25 1.25 0 1.25-1 2.25-2.5 3.25z"
                          fill="#fff"
                        />
                      </svg>
                      {/* Efeito de pulso ao redor do ícone */}
                      <div className="absolute inset-0 animate-ping opacity-30">
                        <svg className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" viewBox="0 0 24 24" fill="none">
                          <circle cx="12" cy="9" r="6" stroke="#fb7185" strokeWidth="1.5" />
                        </svg>
                      </div>
                    </div>

                    {/* Texto do botão */}
                    <span className="relative z-10 font-bold">
                      <span className="hidden xs:inline">Encontre um Hemocentro</span>
                      <span className="xs:hidden">Hemocentros</span>
                    </span>
                    {/* Seta animada */}
                    <svg
                      className="relative z-10 w-4 h-4 sm:w-5 sm:h-5 transform group-hover:translate-x-1 transition-transform duration-300 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2.5}
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                    {/* Borda decorativa que aparece no hover */}
                    <div className="absolute inset-0 rounded-2xl border-2 border-rose-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </button>
                </div>
              </div>
            </div>

            {/* Lado direito: animação da bolsa de sangue */}
            <div className="flex justify-center items-center animate-fade-in-delay-2 px-2 sm:px-4 md:px-8 md:pr-8 lg:pr-16">
              <div className="w-full max-w-xl h-[200px] xs:h-[240px] sm:h-[280px] md:h-[350px] lg:h-[400px] xl:h-[450px]">
                <BloodDonationAnimation />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Seção de estatísticas - cards com informações importantes */}
      <div className="relative z-20 -mt-6 sm:-mt-8">
        <div className="container mx-auto px-4 sm:px-8 md:px-10 lg:px-16">
          {/* Grid responsivo de 1 a 3 colunas dependendo do tamanho da tela */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 justify-center mx-3 sm:mx-0">
            {/* Loop map para renderizar cada card de estatística */}
            {stats.map((stat, idx) => (
              <div
                key={idx} // Key única para cada elemento do loop
                className="bg-white rounded-xl shadow-lg p-6 sm:p-6 md:p-7 text-center transform hover:scale-105 transition-all hover:shadow-xl animate-slide-up max-w-full sm:max-w-[280px] md:max-w-[320px] w-full mx-auto"
                // Atraso progressivo na animação baseado no índice
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                {/* Ícone circular com cor dinâmica */}
                <div
                  className={`${stat.bgClass} w-14 h-14 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-4`}
                >
                  <stat.icon className="w-6 h-6 sm:w-6 sm:h-6 md:w-7 md:h-7 text-white" />
                </div>
                <h3 className="text-2xl xs:text-2xl sm:text-3xl font-bold text-gray-800 mb-2">{stat.title}</h3>
                <p className="text-lg xs:text-lg sm:text-xl text-gray-600">{stat.subtitle}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Seção meta de doações - card dividido em duas colunas */}
      <div className="container mx-auto px-4 sm:px-8 md:px-10 lg:px-16 py-8 sm:py-10 lg:py-14">
        <div className="max-w-4xl mx-auto mx-3 sm:mx-auto">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            {/* Grid de 5 colunas: 3 para conteúdo, 2 para visual */}
            <div className="grid grid-cols-1 md:grid-cols-5 gap-0">
              {/* Coluna esquerda - informações (3/5 do espaço) */}
              <div className="md:col-span-3 p-8 sm:p-8 md:p-8 lg:p-10">
                {/* Cabeçalho com ícone de gotas animadas */}
                <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                  {/* SVG de gotas de sangue com animações */}
                  <div className="relative w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 flex-shrink-0">
                    {/* Gota principal com pulso */}
                    <div className="absolute inset-0 animate-pulse" style={{ animationDuration: "2s" }}>
                      <svg viewBox="0 0 56 56" className="w-full h-full drop-shadow-lg">
                        {/* Definição de gradiente */}
                        <defs>
                          <linearGradient id="dropGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#fb7185" />
                            <stop offset="50%" stopColor="#f43f5e" />
                            <stop offset="100%" stopColor="#dc2626" />
                          </linearGradient>
                        </defs>
                        {/* Forma da gota com gradiente */}
                        <path
                          d="M28 8 C28 8, 14 20, 14 32 C14 41, 20 49, 28 49 C36 49, 42 41, 42 32 C42 20, 28 8, 28 8 Z"
                          fill="url(#dropGradient)"
                        />
                        {/* Brilhos para dar profundidade */}
                        <ellipse cx="24" cy="26" rx="6" ry="8" fill="white" opacity="0.3" />
                        <ellipse cx="22" cy="24" rx="3" ry="4" fill="white" opacity="0.5" />
                      </svg>
                    </div>
                    {/* Gota pequena animada no canto superior direito */}
                    <div
                      className="absolute -top-1 -right-1 w-5 h-5 animate-bounce"
                      style={{ animationDuration: "2s", animationDelay: "0.3s" }}
                    >
                      <svg viewBox="0 0 20 20" className="w-full h-full drop-shadow-md">
                        <path
                          d="M10 2 C10 2, 5 7, 5 11 C5 14, 7 16, 10 16 C13 16, 15 14, 15 11 C15 7, 10 2, 10 2 Z"
                          fill="#dc2626"
                        />
                        <ellipse cx="8" cy="9" rx="2" ry="2.5" fill="white" opacity="0.4" />
                      </svg>
                    </div>
                    {/* Gota pequena animada no canto inferior esquerdo */}
                    <div
                      className="absolute -bottom-1 -left-1 w-4 h-4 animate-bounce"
                      style={{ animationDuration: "2.5s", animationDelay: "0.6s" }}
                    >
                      <svg viewBox="0 0 16 16" className="w-full h-full drop-shadow-md">
                        <path
                          d="M8 1 C8 1, 4 5, 4 8 C4 10.5, 5.5 12, 8 12 C10.5 12, 12 10.5, 12 8 C12 5, 8 1, 8 1 Z"
                          fill="#f43f5e"
                        />
                        <ellipse cx="6.5" cy="6.5" rx="1.5" ry="2" fill="white" opacity="0.4" />
                      </svg>
                    </div>
                  </div>
                  {/* Título da seção */}
                  <h2 className="text-3xl xs:text-3xl sm:text-3xl lg:text-3xl font-bold text-gray-800">
                    Nossa Meta de Doações
                  </h2>
                </div>
                <p className="text-lg sm:text-lg lg:text-xl text-gray-700 mb-5 sm:mb-6 leading-relaxed">
                  Estamos trabalhando para aumentar a conscientização sobre a importância da doação de sangue. Juntos,
                  podemos salvar mais vidas e honrar a memória de Rodrigo e Natalha.
                </p>
                {/* Botão para navegar para página de detalhes */}
                <Button
                  variant="primary"
                  size="large"
                  onClick={() => navigate("/doacao")}
                  className="relative overflow-hidden group/btn transform transition-all duration-300 hover:scale-105 hover:shadow-xl bg-gradient-to-r from-rose-600 to-red-600 hover:from-rose-500 hover:to-red-500 w-full sm:w-auto"
                >
                  {/* Efeito de brilho animado */}
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700"></span>
                  {/* Partículas decorativas */}
                  <span className="absolute top-1 left-4 w-1 h-1 bg-white/40 rounded-full animate-ping"></span>
                  <span
                    className="absolute bottom-1 right-6 w-1.5 h-1.5 bg-white/40 rounded-full animate-ping"
                    style={{ animationDelay: "0.5s" }}
                  ></span>
                  {/* Conteúdo do botão */}
                  <span className="relative flex items-center justify-center gap-2 font-semibold text-sm sm:text-base">
                    Veja Nossas Metas Detalhadas
                    <svg
                      className="w-4 h-4 sm:w-5 sm:h-5 transform group-hover/btn:translate-x-1 transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                </Button>
              </div>
              {/* Coluna direita - card visual da meta (2/5 do espaço) */}
              <div className="md:col-span-2 bg-gradient-to-br from-rose-600 via-red-600 to-rose-700 p-8 sm:p-8 flex flex-col items-center justify-center text-white relative overflow-hidden group min-h-[220px]">
                {/* Efeito de brilho ao passar mouse */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 translate-x-full group-hover:translate-x-[-200%] transition-transform duration-1000"></div>
                {/* Partículas decorativas em posições diferentes */}
                <div
                  className="absolute top-4 left-4 w-2 h-2 bg-white/30 rounded-full animate-ping"
                  style={{ animationDuration: "3s" }}
                ></div>
                <div
                  className="absolute top-12 right-8 w-1.5 h-1.5 bg-white/40 rounded-full animate-ping"
                  style={{ animationDuration: "4s", animationDelay: "1s" }}
                ></div>
                <div
                  className="absolute bottom-8 left-12 w-2.5 h-2.5 bg-white/25 rounded-full animate-ping"
                  style={{ animationDuration: "5s", animationDelay: "2s" }}
                ></div>
                <div
                  className="absolute bottom-16 right-6 w-1 h-1 bg-white/35 rounded-full animate-ping"
                  style={{ animationDuration: "3.5s", animationDelay: "1.5s" }}
                ></div>
                {/* Conteúdo central */}
                <div className="relative z-10 text-center">
                  {/* Ícone de coração com fundo */}
                  <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 shadow-xl group-hover:scale-110 transition-transform duration-300">
                    <Heart
                      className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white animate-pulse"
                      style={{ animationDuration: "1.5s" }}
                    />
                  </div>
                  <p className="text-sm sm:text-base font-semibold mb-2 opacity-90 group-hover:opacity-100 transition-opacity">
                    Nossa meta é alcançar
                  </p>
                  <p className="text-4xl sm:text-5xl lg:text-5xl font-extrabold mb-2 transform group-hover:scale-105 transition-transform duration-300">
                    10.000
                  </p>
                  <p className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">doações este ano!</p>
                  {/* Mensagem adicional com divisor */}
                  <div className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-white/30">
                    <p className="text-sm sm:text-base font-medium opacity-90">Cada doação conta!</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Seção nossa missão - card explicativo sobre a missão do projeto */}
      <div className="container mx-auto px-6 sm:px-8 md:px-10 lg:px-12 pb-8 sm:pb-10 lg:pb-14">
        <div className="max-w-4xl mx-auto">
          {/* Cabeçalho da seção - REMOVIDO O SEPARADOR COM LINHAS E CORAÇÃO */}
          {/* Agora temos apenas o título e subtítulo, sem decoração extra */}
          <div className="text-center mb-6 sm:mb-8 animate-fade-in">
            <h2 className="text-2xl xs:text-3xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-2">Nossa Missão</h2>
            <p className="text-sm xs:text-base sm:text-lg text-gray-600 font-normal leading-relaxed italic px-2">
              Transformando vidas através da solidariedade
            </p>
          </div>
          {/* Card principal com hover effect */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-rose-100 hover:shadow-2xl transition-all duration-500 animate-slide-up group/card relative">
            {/* Linha decorativa no topo que aparece no hover */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-rose-400 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-500"></div>
            <div className="p-5 sm:p-6 md:p-8 lg:p-10">
              {/* Citação principal com aspas decorativas */}
              <div className="mb-6 sm:mb-8 relative animate-fade-in" style={{ animationDelay: "0.1s" }}>
                {/* Aspas de abertura */}
                <div
                  className="absolute -left-1 sm:-left-2 -top-2 sm:-top-3 text-4xl sm:text-5xl md:text-6xl text-rose-200/40 font-serif leading-none animate-pulse"
                  style={{ animationDuration: "3s" }}
                >
                  "
                </div>
                <p className="text-sm xs:text-base sm:text-lg lg:text-xl text-gray-700 leading-relaxed pl-6 sm:pl-8 md:pl-10 pr-4 sm:pr-6">
                  Em memória de{" "}
                  <span className="font-semibold text-rose-600 relative inline-block group/name">
                    Rodrigo
                    {/* Linha animada que aparece sob o nome no hover */}
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-rose-300 scale-x-0 group-hover/name:scale-x-100 transition-transform duration-300 origin-left"></span>
                  </span>{" "}
                  e{" "}
                  <span className="font-semibold text-rose-600 relative inline-block group/name">
                    Natalha
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-rose-300 scale-x-0 group-hover/name:scale-x-100 transition-transform duration-300 origin-left"></span>
                  </span>
                  , o Doe Vida existe para que o amor que sinto por eles não termine aqui. Esse projeto nasce da
                  necessidade de manter viva a bondade, a gentileza e a pureza que eles deixaram no mundo, transformando
                  esse amor em uma corrente viva de solidariedade por meio da doação de sangue.
                </p>
                {/* Aspas de fechamento */}
                <div
                  className="absolute -right-1 sm:-right-2 -bottom-2 sm:-bottom-3 text-4xl sm:text-5xl md:text-6xl text-rose-200/40 font-serif leading-none rotate-180 animate-pulse"
                  style={{ animationDuration: "3s", animationDelay: "1s" }}
                >
                  "
                </div>
              </div>
              {/* Grid de valores - 2 cards lado a lado */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 mb-6 sm:mb-8">
                {/* Card 1: Amor em ação */}
                <div
                  className="bg-gradient-to-br from-rose-50 to-white rounded-xl p-4 sm:p-5 md:p-6 border border-rose-100 hover:border-rose-300 transform hover:scale-105 hover:rotate-1 transition-all duration-300 hover:shadow-lg group/value cursor-pointer animate-slide-up"
                  style={{ animationDelay: "0.1s" }}
                >
                  <div className="flex items-start gap-3 sm:gap-4">
                    {/* Ícone com animação no hover */}
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-rose-500 to-red-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover/value:rotate-12 group-hover/value:scale-110 transition-all duration-300 shadow-md group-hover/value:shadow-xl">
                      <Heart className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                    {/* Texto do valor */}
                    <div className="flex-1">
                      <h4 className="font-bold text-gray-800 text-base sm:text-lg mb-0.5 group-hover/value:text-rose-600 transition-colors">
                        Amor em ação
                      </h4>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        Convertendo luto em esperança e salvando vidas por meio da doação.
                      </p>
                    </div>
                  </div>
                  {/* Linha decorativa animada no hover */}
                  <div className="mt-3 h-0.5 bg-gradient-to-r from-rose-200 to-transparent scale-x-0 group-hover/value:scale-x-100 transition-transform duration-500 origin-left"></div>
                </div>

                {/* Card 2: você faz parte */}
                <div
                  className="bg-gradient-to-br from-rose-50 to-white rounded-xl p-4 sm:p-5 md:p-6 border border-rose-100 hover:border-rose-300 transform hover:scale-105 hover:rotate-1 transition-all duration-300 hover:shadow-lg group/value cursor-pointer animate-slide-up"
                  style={{ animationDelay: "0.3s" }}
                >
                  <div className="flex items-start gap-3 sm:gap-4">
                    {/* Ícone com animação no hover */}
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-rose-500 to-red-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover/value:rotate-12 group-hover/value:scale-110 transition-all duration-300 shadow-md group-hover/value:shadow-xl">
                      <HeartHandshake className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                    {/* Texto do valor */}
                    <div className="flex-1">
                      <h4 className="font-bold text-gray-800 text-base sm:text-lg mb-0.5 group-hover/value:text-rose-600 transition-colors">
                        Você faz parte
                      </h4>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        Ao doar sangue, você se torna parte dessa corrente viva de amor e solidariedade.
                      </p>
                    </div>
                  </div>

                  {/* Linha decorativa animada no hover */}
                  <div className="mt-3 h-0.5 bg-gradient-to-r from-rose-200 to-transparent scale-x-0 group-hover/value:scale-x-100 transition-transform duration-500 origin-left"></div>
                </div>
              </div>

              {/* Call-to-action final com efeitos visuais */}
              <div className="relative animate-slide-up" style={{ animationDelay: "0.4s" }}>
                {/* Blur de fundo com gradiente e pulso */}
                <div
                  className="absolute -inset-1 bg-gradient-to-r from-rose-400 via-red-500 to-rose-400 rounded-xl blur opacity-30 animate-pulse"
                  style={{ animationDuration: "3s" }}
                ></div>
                {/* Card gradiente com múltiplos efeitos */}
                <div className="relative bg-gradient-to-r from-rose-600 via-red-600 to-rose-600 rounded-xl p-6 sm:p-8 text-center overflow-hidden group/cta">
                  {/* Efeito de brilho animado */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover/cta:translate-x-full transition-transform duration-1000"></div>
                  {/* Múltiplas partículas decorativas com diferentes animações */}
                  <div
                    className="absolute top-4 left-8 w-1.5 h-1.5 bg-white/40 rounded-full animate-ping"
                    style={{ animationDuration: "3s" }}
                  ></div>
                  <div
                    className="absolute top-8 right-12 w-1 h-1 bg-white/30 rounded-full animate-ping"
                    style={{ animationDuration: "4s", animationDelay: "0.5s" }}
                  ></div>
                  <div
                    className="absolute bottom-6 left-16 w-1.5 h-1.5 bg-white/35 rounded-full animate-ping"
                    style={{ animationDuration: "3.5s", animationDelay: "1s" }}
                  ></div>
                  <div
                    className="absolute bottom-8 right-8 w-1 h-1 bg-white/40 rounded-full animate-ping"
                    style={{ animationDuration: "4.5s", animationDelay: "1.5s" }}
                  ></div>
                  {/* Ícones de gotas flutuantes */}
                  <div
                    className="absolute top-4 left-1/4 opacity-20 animate-bounce"
                    style={{ animationDuration: "3s" }}
                  >
                    <Droplet className="w-4 h-4 text-white" />
                  </div>
                  <div
                    className="absolute bottom-4 right-1/4 opacity-20 animate-bounce"
                    style={{ animationDuration: "3.5s", animationDelay: "0.5s" }}
                  >
                    <Droplet className="w-3 h-3 text-white" />
                  </div>
                  {/* Conteúdo principal do CTA */}
                  <div className="relative z-10">
                    {/* Ícone central */}
                    <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 bg-white/20 backdrop-blur-sm rounded-full mb-3 sm:mb-4 group-hover/cta:scale-110 group-hover/cta:rotate-12 transition-all duration-300 shadow-lg">
                      <Droplet
                        className="w-6 h-6 sm:w-7 sm:h-7 text-white animate-pulse"
                        style={{ animationDuration: "2s" }}
                      />
                    </div>
                    <p className="text-base sm:text-lg md:text-xl font-bold text-white leading-relaxed mb-2 sm:mb-3 drop-shadow-lg px-2">
                      Seu sangue pode ser o milagre que alguém está esperando
                    </p>
                    {/* Decoração com pontos e linhas */}
                    <div className="flex items-center justify-center gap-2 mt-4">
                      <div className="h-0.5 w-8 bg-white/50 rounded-full group-hover/cta:w-12 transition-all duration-500"></div>
                      <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></div>
                      <div className="h-0.5 w-8 bg-white/50 rounded-full group-hover/cta:w-12 transition-all duration-500"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Seção ações rápidas - grid de 3 cards clicáveis */}
      <div className="container mx-auto px-8 sm:px-10 md:px-12 lg:px-16 pb-12 sm:pb-16 lg:pb-20">
        <div className="max-w-6xl mx-auto">
          {/* Cabeçalho da seção */}
          <div className="text-center mb-8 sm:mb-10 md:mb-12 animate-fade-in">
            <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-2 sm:mb-3 px-2">
              Como você pode ajudar
            </h2>
            <p className="text-base xs:text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto px-4">
              Escolha uma das opções abaixo e faça parte dessa corrente do bem
            </p>
          </div>
          {/* Grid de 3 cards responsivo */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
            {/* Card 1: prepare-se para doar */}
            <div
              // Função onClick: navega e scroll para o topo
              onClick={() => {
                navigate("/cuidados")
                setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 100)
              }}
              className="group relative cursor-pointer animate-slide-up"
              style={{ animationDelay: "0.1s" }}
            >
              {/* Card com hover effects */}
              <div className="relative h-full bg-white rounded-2xl p-5 sm:p-6 md:p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl shadow-lg border border-rose-100 overflow-hidden">
                {/* Overlay gradiente no hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-rose-50/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                {/* Blur decorativo */}
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-rose-100/20 rounded-full blur-3xl group-hover:scale-125 transition-transform duration-700"></div>
                <div className="relative z-10">
                  {/* Ícone SVG customizado de checklist */}
                  <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 mx-auto mb-4 sm:mb-5 md:mb-6 relative group-hover:scale-105 transition-transform duration-500">
                    <svg viewBox="0 0 80 80" className="w-full h-full drop-shadow-lg">
                      {/* Definição de gradiente */}
                      <defs>
                        <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" style={{ stopColor: "#fda4af", stopOpacity: 1 }} />
                          <stop offset="50%" style={{ stopColor: "#fb7185", stopOpacity: 1 }} />
                          <stop offset="100%" style={{ stopColor: "#f43f5e", stopOpacity: 1 }} />
                        </linearGradient>
                      </defs>
                      {/* Círculo de fundo */}
                      <circle cx="40" cy="40" r="36" fill="#fce7f3" opacity="0.3" />
                      {/* Prancheta */}
                      <rect x="20" y="18" width="40" height="50" rx="6" fill="url(#grad1)" />
                      {/* Clip superior */}
                      <rect x="28" y="13" width="24" height="10" rx="5" fill="#fff" opacity="0.95" />
                      <circle cx="40" cy="18" r="2.5" fill="#fda4af" />
                      {/* Checkmarks */}
                      <path
                        d="M26 32 L31 37 L42 28"
                        stroke="#fff"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fill="none"
                      />
                      <path
                        d="M26 48 L31 53 L42 44"
                        stroke="#fff"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fill="none"
                        opacity="0.8"
                      />
                      {/* Partículas decorativas */}
                      <circle cx="68" cy="20" r="1.5" fill="#fb7185" className="animate-ping" opacity="0.6" />
                      <circle
                        cx="14"
                        cy="42"
                        r="1.5"
                        fill="#fda4af"
                        className="animate-ping"
                        style={{ animationDelay: "0.5s" }}
                        opacity="0.5"
                      />
                    </svg>
                  </div>
                  {/* Textos do card */}
                  <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2 sm:mb-3 text-center group-hover:text-rose-600 transition-colors duration-300">
                    Prepare-se para Doar
                  </h3>
                  <p className="text-sm sm:text-base md:text-lg text-gray-600 font-medium leading-relaxed mb-3 sm:mb-4 text-center">
                    Confira os cuidados essenciais antes e depois da doação de sangue
                  </p>
                  {/* Link "Saiba mais" com seta */}
                  <div className="flex items-center justify-center gap-1 text-rose-600 text-base sm:text-lg font-semibold group-hover:gap-2 transition-all">
                    <span>Saiba mais</span>
                    <svg
                      className="w-4 h-4 sm:w-5 sm:h-5 transform group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2: histórias reais / legado vivo */}
            <div
              // Função onClick: navega e scroll para o topo
              onClick={() => {
                navigate("/historias")
                setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 100)
              }}
              className="group relative cursor-pointer animate-slide-up"
              style={{ animationDelay: "0.2s" }}
            >
              {/* Card com hover effects */}
              <div className="relative h-full bg-white rounded-2xl p-5 sm:p-6 md:p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl shadow-lg border border-red-100 overflow-hidden">
                {/* Overlay gradiente no hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-red-50/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                {/* Blur decorativo */}
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-red-100/20 rounded-full blur-3xl group-hover:scale-125 transition-transform duration-700"></div>
                <div className="relative z-10">
                  {/* Ícone SVG customizado de coração */}
                  <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 mx-auto mb-4 sm:mb-5 md:mb-6 relative group-hover:scale-105 transition-transform duration-500">
                    <svg viewBox="0 0 80 80" className="w-full h-full drop-shadow-lg">
                      {/* Definição de gradiente */}
                      <defs>
                        <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" style={{ stopColor: "#fca5a5", stopOpacity: 1 }} />
                          <stop offset="50%" style={{ stopColor: "#ef4444", stopOpacity: 1 }} />
                          <stop offset="100%" style={{ stopColor: "#dc2626", stopOpacity: 1 }} />
                        </linearGradient>
                      </defs>
                      {/* Círculo de fundo */}
                      <circle cx="40" cy="40" r="36" fill="#fee2e2" opacity="0.3" />
                      {/* Coração principal */}
                      <path
                        d="M40 62 C24 50, 14 38, 14 28 C14 20, 18 15, 24 15 C30 15, 36 19, 40 26 C44 19, 50 15, 56 15 C62 15, 66 20, 66 28 C66 38, 56 50, 40 62 Z"
                        fill="url(#grad2)"
                      />
                      {/* Brilho interno */}
                      <path
                        d="M40 54 C28 44, 21 35, 21 28 C21 23, 24 20, 27 20 C31 20, 36 23, 40 29"
                        fill="none"
                        stroke="#fff"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        opacity="0.35"
                      />
                      {/* Cruzes decorativas animadas */}
                      <g opacity="0.8" className="animate-pulse" style={{ animationDuration: "2s" }}>
                        <line x1="16" y1="16" x2="16" y2="22" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
                        <line x1="13" y1="19" x2="19" y2="19" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
                      </g>
                      <g
                        opacity="0.7"
                        className="animate-pulse"
                        style={{ animationDuration: "2.5s", animationDelay: "0.5s" }}
                      >
                        <line x1="64" y1="22" x2="64" y2="26" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
                        <line x1="62" y1="24" x2="66" y2="24" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
                      </g>
                      {/* Partículas decorativas */}
                      <circle cx="70" cy="36" r="1.5" fill="#fca5a5" className="animate-ping" opacity="0.6" />
                      <circle
                        cx="12"
                        cy="38"
                        r="1.5"
                        fill="#ef4444"
                        className="animate-ping"
                        style={{ animationDelay: "0.7s" }}
                        opacity="0.5"
                      />
                    </svg>
                  </div>
                  {/* Textos do card */}
                  <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2 sm:mb-3 text-center group-hover:text-rose-600 transition-colors duration-300">
                    Legado vivo
                  </h3>
                  <p className="text-sm sm:text-base md:text-lg text-gray-600 font-medium leading-relaxed mb-3 sm:mb-4 md:mb-5 text-center">
                    Mantendo viva a memória através da solidariedade
                  </p>
                  {/* Link "Saiba mais" com seta */}
                  <div className="flex items-center justify-center gap-1 text-rose-600 text-base sm:text-lg font-semibold group-hover:gap-2 transition-all">
                    <span>Saiba mais</span>
                    <svg
                      className="w-4 h-4 sm:w-5 sm:h-5 transform group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 3: doe agora */}
            <div
              onClick={() => {
                navigate("/hemocentros")
                setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 100)
              }}
              className="group relative cursor-pointer animate-slide-up sm:col-span-2 md:col-span-1 sm:max-w-md sm:mx-auto md:max-w-none"
              style={{ animationDelay: "0.3s" }}
            >
              {/* Card com hover effects */}
              <div className="relative h-full bg-white rounded-2xl p-5 sm:p-6 md:p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl shadow-lg border border-rose-100 overflow-hidden">
                {/* Overlay gradiente no hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-rose-50/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                {/* Blur decorativo */}
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-rose-100/20 rounded-full blur-3xl group-hover:scale-125 transition-transform duration-700"></div>
                <div className="relative z-10">
                  {/* Ícone SVG customizado de pin com coração */}
                  <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 mx-auto mb-4 sm:mb-5 md:mb-6 relative group-hover:scale-105 transition-transform duration-500">
                    <svg viewBox="0 0 80 80" className="w-full h-full drop-shadow-lg">
                      {/* Definição de gradiente */}
                      <defs>
                        <linearGradient id="grad3" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" style={{ stopColor: "#fb7185", stopOpacity: 1 }} />
                          <stop offset="50%" style={{ stopColor: "#f43f5e", stopOpacity: 1 }} />
                          <stop offset="100%" style={{ stopColor: "#dc2626", stopOpacity: 1 }} />
                        </linearGradient>
                      </defs>
                      {/* Círculo de fundo */}
                      <circle cx="40" cy="40" r="36" fill="#fce7f3" opacity="0.3" />
                      {/* Pin de localização */}
                      <path
                        d="M40 12 C28 12, 20 20, 20 32 C20 47, 40 64, 40 64 C40 64, 60 47, 60 32 C60 20, 52 12, 40 12 Z"
                        fill="url(#grad3)"
                      />
                      {/* Coração dentro do pin */}
                      <path
                        d="M40 42 C33 38, 29 34, 29 29 C29 26, 31 24, 33 24 C35 24, 38 26, 40 29 C42 26, 45 24, 47 24 C49 24, 51 26, 51 29 C51 34, 47 38, 40 42 Z"
                        fill="#fff"
                        opacity="0.95"
                      />
                      {/* Círculos de pulso animados */}
                      <circle
                        cx="40"
                        cy="32"
                        r="20"
                        stroke="#fb7185"
                        strokeWidth="1.5"
                        fill="none"
                        opacity="0.25"
                        className="animate-ping"
                        style={{ animationDuration: "2s" }}
                      />
                      <circle
                        cx="40"
                        cy="32"
                        r="24"
                        stroke="#fb7185"
                        strokeWidth="1"
                        fill="none"
                        opacity="0.15"
                        className="animate-ping"
                        style={{ animationDuration: "3s", animationDelay: "0.5s" }}
                      />
                      {/* Partículas decorativas */}
                      <circle cx="66" cy="18" r="1.5" fill="#fb7185" className="animate-ping" opacity="0.6" />
                      <circle
                        cx="16"
                        cy="36"
                        r="1.5"
                        fill="#f43f5e"
                        className="animate-ping"
                        style={{ animationDelay: "0.5s" }}
                        opacity="0.5"
                      />
                    </svg>
                  </div>
                  {/* Textos do card */}
                  <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2 sm:mb-3 text-center group-hover:text-rose-600 transition-colors duration-300">
                    Doe Agora
                  </h3>
                  <p className="text-sm sm:text-base md:text-lg text-gray-600 font-medium leading-relaxed mb-3 sm:mb-4 md:mb-5 text-center">
                    Encontre o hemocentro mais próximo e agende sua doação
                  </p>
                  {/* Link "Saiba mais" com seta */}
                  <div className="flex items-center justify-center gap-1 text-rose-600 text-base sm:text-lg font-semibold group-hover:gap-2 transition-all">
                    <span>Saiba mais</span>
                    <svg
                      className="w-4 h-4 sm:w-5 sm:h-5 transform group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// Exporta o componente para uso em outras partes da aplicação
export default Home