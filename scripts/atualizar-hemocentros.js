import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Obter o diretório atual (equivalente a __dirname no CommonJS)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Dados corrigidos com base em fontes oficiais
const hemocentrosCorrigidos = {
  'AC': [
    { city: 'Rio Branco', name: 'Hemoacre', address: 'Av. Getúlio Vargas, 2787', phone: '(68) 3248-1380', district: 'Bosque' }
  ],
  'AL': [
    { city: 'Maceió', name: 'Hemoal', address: 'Av. Jorge de Lima, 58', phone: '(82) 3315-2109', district: 'Trapiche da Barra' },
    { city: 'Arapiraca', name: 'Hemoar - Arapiraca', address: 'Rua Marechal Floriano Peixoto, 200', phone: '(82) 3521-4934', district: 'Eldorado' }
  ],
  'AP': [
    { city: 'Macapá', name: 'Hemoap', address: 'Av. Raimundo Álvares da Costa, s/n', phone: '(96) 3212-6200', district: 'Centro' }
  ],
  'AM': [
    { city: 'Manaus', name: 'Hemoam', address: 'Av. Constantino Nery, 4.397', phone: '(92) 3655-0100', district: 'Chapada' },
    { city: 'Manaus', name: 'Hemoam - Posto Hospital Delphina Aziz', address: 'Av. Torquato Tapajós, 4.010', phone: '(92) 2101-5959', district: 'Flores' }
  ],
  'BA': [
    { city: 'Salvador', name: 'Hemoba - Sede', address: 'Ladeira do Hospital Geral, s/n', phone: '(71) 3116-5600', district: 'Brotas' },
    { city: 'Salvador', name: 'Hemoba - Hospital Roberto Santos', address: 'Rua Silveira Martins, s/n', phone: '(71) 3117-7569', district: 'Cabula' },
    { city: 'Feira de Santana', name: 'Hemoba - Feira', address: 'Av. Presidente Dutra, s/n', phone: '(75) 3602-5130', district: '35º BI' },
    { city: 'Vitória da Conquista', name: 'Hemoba - Conquista', address: 'Av. Filipinas, s/n', phone: '(77) 3422-5500', district: 'Felícia' },
    { city: 'Ilhéus', name: 'Hemoba - Ilhéus', address: 'Rua Eustáquio Bastos, s/n', phone: '(73) 3234-2207', district: 'Centro' }
  ],
  'CE': [
    { city: 'Fortaleza', name: 'Hemoce - Sede', address: 'Av. José Bastos, 3.390', phone: '(85) 3101-2300', district: 'Rodolfo Teófilo' },
    { city: 'Fortaleza', name: 'Hemoce - Posto IJF', address: 'Rua Barão do Rio Branco, 1.816', phone: '(85) 3101-5293', district: 'Centro' },
    { city: 'Juazeiro do Norte', name: 'Hemoce - Juazeiro', address: 'Rua Divino Salvador, 1.311', phone: '(88) 3102-1250', district: 'Franciscanos' },
    { city: 'Sobral', name: 'Hemoce - Sobral', address: 'Rua Coronel Mont\'Alverne, 1.003', phone: '(88) 3112-1877', district: 'Centro' }
  ],
  'DF': [
    { city: 'Brasília', name: 'Hemocentro de Brasília', address: 'SMHN Q. 03, Conj. A, Bl. 03', phone: '(61) 3327-4413', district: 'Asa Norte' }
  ],
  'ES': [
    { city: 'Vitória', name: 'Hemoes - Sede', address: 'Av. Marechal Campos, 1.468', phone: '(27) 3636-7921', district: 'Maruípe' },
    { city: 'Cachoeiro de Itapemirim', name: 'Hemoes - Cachoeiro', address: 'Rua Moreira, 29', phone: '(28) 3155-5387', district: 'Centro' },
    { city: 'Colatina', name: 'Hemoes - Colatina', address: 'Rua Cassiano Castelo, s/n', phone: '(27) 3717-2800', district: 'Centro' }
  ],
  'GO': [
    { city: 'Goiânia', name: 'Hemocentro de Goiás', address: 'Av. Anhanguera, 5.195', phone: '(62) 3201-4570', district: 'Setor Coimbra' },
    { city: 'Anápolis', name: 'Hemocentro - Anápolis', address: 'Av. Universitária, Km 3.5', phone: '(62) 3328-1516', district: 'Cidade Universitária' }
  ],
  'MA': [
    { city: 'São Luís', name: 'Hemomar - Sede', address: 'Rua 5 de Janeiro, s/n', phone: '(98) 3216-1134', district: 'Jordão' },
    { city: 'Imperatriz', name: 'Hemomar - Imperatriz', address: 'Rua Godofredo Viana, 1.217', phone: '(99) 3524-1596', district: 'Centro' }
  ],
  'MT': [
    { city: 'Cuiabá', name: 'MT-Hemocentro', address: 'Rua 13 de Junho, 1.055', phone: '(65) 3623-0044', district: 'Centro Sul' },
    { city: 'Rondonópolis', name: 'Hemocentro - Rondonópolis', address: 'R. Barão do Rio Branco, 2.802', phone: '(66) 3422-8799', district: 'Jardim Santa Luzia' }
  ],
  'MS': [
    { city: 'Campo Grande', name: 'Hemosul Coordenador', address: 'Av. Fernando Corrêa da Costa, 1.304', phone: '(67) 3312-1500', district: 'Centro' },
    { city: 'Dourados', name: 'Hemosul - Dourados', address: 'Rua Oliveira Marques, 2.535', phone: '(67) 98163-0863', district: 'Jardim Tropical' }
  ],
  'MG': [
    { city: 'Belo Horizonte', name: 'Hemominas - Sede', address: 'Rua Grão Pará, 882', phone: '(31) 3248-4500', district: 'Santa Efigênia' },
    { city: 'Juiz de Fora', name: 'Hemominas - JF', address: 'Av. Eugênio do Nascimento, s/n', phone: '(32) 3231-0600', district: 'Dom Bosco' },
    { city: 'Uberlândia', name: 'Hemominas - Uberlândia', address: 'Av. Leonidas Balduino, 1.000', phone: '(34) 3088-9236', district: 'Tibery' },
    { city: 'Montes Claros', name: 'Hemominas - Montes Claros', address: 'Av. Osmane Barbosa, 2.500', phone: '(38) 3229-7600', district: 'Santo Expedito' },
    { city: 'Governador Valadares', name: 'Hemominas - GV', address: 'Rua Barão do Rio Branco, 707', phone: '(33) 3212-5800', district: 'Centro' }
  ],
  'PA': [
    { city: 'Belém', name: 'Hemopa - Sede', address: 'Tv. Padre Eutíquio, 2.109', phone: '(91) 3242-7500', district: 'Batista Campos' },
    { city: 'Santarém', name: 'Hemopa - Santarém', address: 'Av. Frei Vicente, s/n', phone: '(93) 3524-7550', district: 'Aeroporto Velho' },
    { city: 'Marabá', name: 'Hemopa - Marabá', address: 'Folha 26, Quadra 07, Lote 01', phone: '(94) 3324-5846', district: 'Nova Marabá' }
  ], 'PB': [
    { city: 'João Pessoa', name: 'Hemocentro PB', address: 'Av. Dom Pedro II, 1.548', phone: '(83) 3218-7600', district: 'Jaguaribe' },
    { city: 'Campina Grande', name: 'Hemonúcleo Regional de CG', address: 'Rua Prof. Eutécia Vital Ribeiro, s/n', phone: '(83) 3344-5482', district: 'Catolé' }
  ],
  'PR': [
    { city: 'Curitiba', name: 'Hemepar - Sede', address: 'Tv. João Prosdócimo, 145', phone: '(41) 3281-4000', district: 'Alto da XV' },
    { city: 'Londrina', name: 'Hemepar - Londrina', address: 'Rua Mato Grosso, 300', phone: '(43) 3371-2000', district: 'Centro' },
    { city: 'Maringá', name: 'Hemepar - Maringá', address: 'Av. Mandacaru, 1.590', phone: '(44) 3031-9900', district: 'Parque Res. Cidade Nova' },
    { city: 'Cascavel', name: 'Hemepar - Cascavel', address: 'Rua Paraná, 3.654', phone: '(45) 3224-7373', district: 'Centro' },
    { city: 'Ponta Grossa', name: 'Hemepar - Ponta Grossa', address: 'Rua Balduíno Taques, 878', phone: '(42) 3225-2727', district: 'Centro' }
  ],
  'PE': [
    { city: 'Recife', name: 'Hemope - Sede', address: 'Rua Joaquim Nabuco, 171', phone: '(81) 3182-4700', district: 'Graças' },
    { city: 'Caruaru', name: 'Hemope - Caruaru', address: 'Av. Oswaldo Cruz, s/n', phone: '(81) 3719-9565', district: 'Maurício de Nassau' },
    { city: 'Petrolina', name: 'Hemope - Petrolina', address: 'Rua Pacífico da Luz, s/n', phone: '(87) 3866-6601', district: 'Centro' }
  ], 'PI': [
    { city: 'Teresina', name: 'Hemopi', address: 'Rua 1º de Maio, 235', phone: '(86) 3221-9291', district: 'Centro' },
    { city: 'Parnaíba', name: 'Hemopi - Parnaíba', address: 'Rua Vera Cruz, 870', phone: '(86) 98894-7159', district: 'São José' }
  ],
  'RJ': [
    { city: 'Rio de Janeiro', name: 'Hemorio - Centro', address: 'Rua Frei Caneca, 8', phone: '(21) 2332-8800', district: 'Centro' },
    { city: 'Campos dos Goytacazes', name: 'Hemorio - Campos', address: 'Av. Dr. Alberto Torres, 219', phone: '(22) 2738-7650', district: 'Centro' },
    { city: 'Nova Iguaçu', name: 'Hemorio - Nova Iguaçu', address: 'Rua Antônio Rabelo Guimarães, 98', phone: '(21) 2667-6734', district: 'Centro' }
  ],
  'RN': [
    { city: 'Natal', name: 'Hemonorte', address: 'Av. Alexandrino de Alencar, 1.800', phone: '(84) 3232-6701', district: 'Tirol' },
    { city: 'Mossoró', name: 'Hemonorte - Mossoró', address: 'Rua Projetada, s/n', phone: '(84) 3315-3428', district: 'Aeroporto' }
  ],
  'RS': [
    { city: 'Porto Alegre', name: 'Hemorgs - Sede', address: 'Av. Bento Gonçalves, 3.722', phone: '(51) 3901-1000', district: 'Partenon' },
    { city: 'Caxias do Sul', name: 'Hemocs', address: 'Rua Ernesto Alves, 1.500', phone: '(54) 3218-7200', district: 'Centro' },
    { city: 'Pelotas', name: 'Hemorgs - Pelotas', address: 'Praça 20 de Setembro, 229', phone: '(53) 3284-1511', district: 'Centro' },
    { city: 'Santa Maria', name: 'Hemorgs - Santa Maria', address: 'Rua Pinheiro Machado, 1.835', phone: '(55) 3222-6583', district: 'Centro' },
    { city: 'Passo Fundo', name: 'Hemorgs - Passo Fundo', address: 'Rua Tiradentes, 295', phone: '(54) 3045-3344', district: 'Centro' }
  ], 'RO': [
    { city: 'Porto Velho', name: 'Fhemeron', address: 'Av. Gov. Jorge Teixeira, 3.329', phone: '(69) 3216-2292', district: 'Setor Industrial' }
  ],
  'RR': [
    { city: 'Boa Vista', name: 'Hemoraima', address: 'Av. Brigadeiro Eduardo Gomes, 3.418', phone: '(95) 2121-0850', district: 'Aeroporto' }
  ],
  'SC': [
    { city: 'Florianópolis', name: 'Hemosc - Sede', address: 'Av. Othon Gama D\'Eça, 756', phone: '(48) 3251-9700', district: 'Centro' },
    { city: 'Joinville', name: 'Hemosc - Joinville', address: 'Av. Getúlio Vargas, 198', phone: '(47) 3305-7500', district: 'Centro' },
    { city: 'Blumenau', name: 'Hemosc - Blumenau', address: 'Rua Alberto Stein, 199', phone: '(47) 3331-5900', district: 'Vorstadt' },
    { city: 'Chapecó', name: 'Hemosc - Chapecó', address: 'Rua Humaitá, 255-D', phone: '(49) 3321-8000', district: 'Centro' }
  ],
  'SP': [
    { city: 'São Paulo', name: 'Fundação Pró-Sangue - Clínicas', address: 'Av. Dr. Enéas de Carvalho Aguiar, 155', phone: '(11) 4573-7800', district: 'Cerqueira César' },
    { city: 'São Paulo', name: 'Pró-Sangue - Dante Pazzanese', address: 'Av. Dr. Dante Pazzanese, 500', phone: '(11) 5085-6193', district: 'Vila Mariana' },
    { city: 'São Paulo', name: 'Pró-Sangue - Mandaqui', address: 'Rua Voluntários da Pátria, 4.227', phone: '(11) 2172-5400', district: 'Mandaqui' },
    { city: 'Campinas', name: 'Hemocentro Unicamp', address: 'Rua Carlos Chagas, 480', phone: '(19) 3521-8740', district: 'Cidade Universitária' },
    { city: 'Ribeirão Preto', name: 'Hemocentro RP', address: 'R. Tenente Catão Roxo, 2.501', phone: '(16) 2101-9300', district: 'Monte Alegre' },
    { city: 'Santos', name: 'Hemonúcleo Santos', address: 'Av. Cláudio Luiz da Costa, 50', phone: '(13) 3202-0620', district: 'Jabaquara' },
    { city: 'Santos', name: 'Colsan - Santos', address: 'R. Oswaldo Cruz, 197', phone: '(13) 3223-2860', district: 'Boqueirão' },
    { city: 'São José dos Campos', name: 'Hemocentro SJC', address: 'Rua Antônio Saes, 140', phone: '(12) 3924-6100', district: 'Centro' },
    { city: 'Sorocaba', name: 'Hemocentro Sorocaba', address: 'Av. Comendador Pereira Inácio, 564', phone: '(15) 3212-4444', district: 'Jardim Vergueiro' },
    { city: 'Guarulhos', name: 'Hemocentro Guarulhos', address: 'Rua Cristóvão Pereira Neto, 362', phone: '(11) 2464-0000', district: 'Centro' },
    { city: 'São Bernardo do Campo', name: 'Colsan - SBC', address: 'Rua Pedro Jacobucci, 440', phone: '(11) 4362-9500', district: 'Jardim das Américas' }
  ],
  'SE': [
    { city: 'Aracaju', name: 'Hemose', address: 'Av. Tancredo Neves, s/n', phone: '(79) 3259-3170', district: 'Capucho' }
  ],
  'TO': [
    { city: 'Palmas', name: 'Hemocentro TO', address: 'Quadra 301 Sul, Av. NS 01', phone: '(63) 3218-3189', district: 'Plano Diretor Sul' }
  ]
};

// Função para salvar os dados corrigidos em JSON
function atualizarDados() {
  console.log('Gerando arquivo JSON com dados corrigidos...');

  const outputPath = path.join(__dirname, '..', 'public', 'data', 'hemocentros.json');
  const outputDir = path.dirname(outputPath);

  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  fs.writeFileSync(outputPath, JSON.stringify(hemocentrosCorrigidos, null, 2));

  console.log(`✅ Arquivo ${outputPath} gerado com sucesso!`);
  console.log('💡 Dica: rode este script novamente quando quiser atualizar os dados manualmente.');
}

atualizarDados();
