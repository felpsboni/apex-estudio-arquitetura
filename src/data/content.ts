import { Project, ProcessStage, Principle, StudioMetric } from '../types';

export const STUDIO_INFO = {
  name: 'Apex Studio',
  subtitle: 'Arquitetura & Interiores',
  city: 'São Paulo – SP',
  cep: '04235-200',
  fullAddress: 'São Paulo – SP, CEP 04235-200',
  phoneDisplay: '(59) 85384-6294',
  phoneSanitized: '+55 59 85384-6294',
  whatsAppNumber: '5559853846294',
  whatsAppLink: 'https://wa.me/5559853846294',
  defaultWhatsAppMessage: 'Olá, Apex Studio. Gostaria de conversar sobre um projeto de arquitetura ou interiores.',
  schedule: 'Atendimento mediante contato',
  coordinates: "23° 35' S · 46° 37' W",
};

export const PROJECTS: Project[] = [
  {
    id: 'residencia-monolito',
    number: '01',
    title: 'Residência Monólito',
    subtitle: 'Volumes puros em concreto aparente e madeira cumaru',
    category: 'residencial',
    categoryLabel: 'Residencial',
    location: 'Alto de Pinheiros, São Paulo',
    typology: 'Residência Unifamiliar',
    yearConcept: 'Projeto Autoral',
    coverImage: {
      url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=85',
      alt: 'Fachada contemporânea da Residência Monólito em concreto aparente e brises de madeira com iluminação linear',
      caption: 'Fachada frontal com planos sobrepostos e jardins integrados',
      width: 1600,
      height: 1067,
    },
    gallery: [
      {
        url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=85',
        alt: 'Fachada frontal da Residência Monólito',
        caption: 'Fachada frontal com planos sobrepostos e jardins integrados',
      },
      {
        url: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=85',
        alt: 'Living integrado com pé-direito duplo e painéis ripados em madeira',
        caption: 'Área social ampla com iluminação zenital e conexão com pátio interno',
      },
      {
        url: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1600&q=85',
        alt: 'Cozinha gourmet minimalista com ilha em pedra natural escura',
        caption: 'Ilha escultural em quartzito e marcenaria oculta',
      },
      {
        url: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=85',
        alt: 'Área externa com piscina em pedra Hijau e deck em madeira',
        caption: 'Transição suave entre os espaços internos e a lâmina d’água',
      },
    ],
    description:
      'Uma exploração da gravidade e da luz natural. A residência organiza-se em torno de um vazio central que distribui ventilação cruzada e iluminação filtrada ao longo de todos os pavimentos, conectando a vida doméstica à vegetação nativa.',
    highlights: [
      'Concreto pigmentado moldado in loco',
      'Painéis pivotantes em madeira natural',
      'Captação de luz natural por aberturas zenitais',
    ],
  },
  {
    id: 'galeria-mineral',
    number: '02',
    title: 'Pavilhão Mineral',
    subtitle: 'Espaço expositivo e comercial de alta densidade estética',
    category: 'comercial',
    categoryLabel: 'Comercial',
    location: 'Jardins, São Paulo',
    typology: 'Espaço Comercial & Flagship',
    yearConcept: 'Arquitetura Comercial',
    coverImage: {
      url: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=85',
      alt: 'Interior corporativo e comercial minimalista com linhas arquitetônicas puras e iluminação difusa',
      caption: 'Plano geral do espaço comercial com circulação fluida e materiais táteis',
      width: 1600,
      height: 1067,
    },
    gallery: [
      {
        url: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=85',
        alt: 'Perspectiva linear do Pavilhão Mineral com divisórias acústicas em vidro fumê',
        caption: 'Eixos visuais contínuos e mobiliário autoral integrado',
      },
      {
        url: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1600&q=85',
        alt: 'Sala de reuniões executiva com acabamento em nogueira e iluminação indireta',
        caption: 'Atmosfera de recolhimento acústico com materiais nobres',
      },
      {
        url: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=85',
        alt: 'Detalhe da fachada envidraçada com estrutura metálica escura',
        caption: 'Enquadramento urbano e controle de incidência solar',
      },
    ],
    description:
      'Projetado para estabelecer uma experiência imersiva de marca. O espaço utiliza limestone, metal escurecido e iluminação cenográfica de precisão para valorizar os produtos expostos e proporcionar acolhimento sensorial aos visitantes.',
    highlights: [
      'Pisos em limestone jateado contínuo',
      'Sistemas acústicos discretamente integrados',
      'Iluminação técnica com temperatura de cor calibrada',
    ],
  },
  {
    id: 'apartamento-aurora',
    number: '03',
    title: 'Apartamento Aurora',
    subtitle: 'Interiores contemporâneos e paleta mineral calorosa',
    category: 'residencial',
    categoryLabel: 'Residencial',
    location: 'Vila Nova Conceição, São Paulo',
    typology: 'Interiores Residenciais',
    yearConcept: 'Design de Interiores',
    coverImage: {
      url: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1600&q=85',
      alt: 'Living contemporâneo de alto padrão com sofá orgânico, cortinas de linho e luz natural suave',
      caption: 'Área social integrada banhada por iluminação natural',
      width: 1600,
      height: 1067,
    },
    gallery: [
      {
        url: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1600&q=85',
        alt: 'Living contemporâneo de alto padrão com sofá orgânico e luz suave',
        caption: 'Área social integrada banhada por iluminação natural',
      },
      {
        url: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1600&q=85',
        alt: 'Detalhe de marcenaria sob medida em freijó e estofados em linho cru',
        caption: 'Composição de texturas naturais e marcenaria sob medida',
      },
      {
        url: 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1600&q=85',
        alt: 'Suíte master com cabeceira estofada e iluminação pontual indireta',
        caption: 'Atmosfera de repouso com transição suave para o closet',
      },
    ],
    description:
      'Uma intervenção de interiores completa que redefiniu a circulação e ampliou a entrada de luz. A sobriedade dos tons minerais é equilibrada pela calidez da madeira e pela fluidez dos tecidos naturais.',
    highlights: [
      'Marcenaria autoral em folha natural de freijó',
      'Portas embutidas com fechamento rente à alvenaria',
      'Seleção curada de mobiliário assinado brasileiro',
    ],
  },
  {
    id: 'atelier-botanico',
    number: '04',
    title: 'Estúdio Botânico',
    subtitle: 'Sede criativa com integração biofílica e ritmo estrutural',
    category: 'comercial',
    categoryLabel: 'Comercial',
    location: 'Pinheiros, São Paulo',
    typology: 'Espaço Comercial & Escritório',
    yearConcept: 'Arquitetura Comercial',
    coverImage: {
      url: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1600&q=85',
      alt: 'Ambiente de trabalho contemporâneo com claraboias e jardim interno contemplativo',
      caption: 'Ambiente de trabalho flexível cercado por vegetação e luz natural',
      width: 1600,
      height: 1067,
    },
    gallery: [
      {
        url: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1600&q=85',
        alt: 'Ambiente de trabalho flexível cercado por vegetação e luz natural',
        caption: 'Layout dinâmico estruturado em torno do pátio vegetal',
      },
      {
        url: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1600&q=85',
        alt: 'Lounge de recepção com poltronas ergonômicas e estantes metálicas delgadas',
        caption: 'Área de recepção e conversas informais com materiais táteis',
      },
      {
        url: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1600&q=85',
        alt: 'Área externa de descompressão com pergolado em aço corten',
        caption: 'Pérgula de sombreamento e continuidade visual interna-externa',
      },
    ],
    description:
      'Uma sede institucional concebida para estimular o foco e o bem-estar. A biofilia atua como elemento estruturador do espaço, filtrando o ruído urbano de São Paulo e garantindo conforto térmico permanente.',
    highlights: [
      'Pátio verde central com espécies da Mata Atlântica',
      'Brises pivotantes para controle de insolação',
      'Pisos drenantes e materiais de baixa emissão',
    ],
  },
  {
    id: 'casa-das-pedras',
    number: '05',
    title: 'Casa das Rochas',
    subtitle: 'Composição tectônica em pedra bruta e esquadrias monumentais',
    category: 'residencial',
    categoryLabel: 'Residencial',
    location: 'Morumbi, São Paulo',
    typology: 'Residência Unifamiliar',
    yearConcept: 'Projeto Autoral',
    coverImage: {
      url: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=85',
      alt: 'Residência contemporânea com paredes em pedra natural rústica e piscina com reflexo d’água',
      caption: 'Vista do terraço principal e muros de arrimo em pedra aparente',
      width: 1600,
      height: 1067,
    },
    gallery: [
      {
        url: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=85',
        alt: 'Vista do terraço principal e muros de arrimo em pedra aparente',
        caption: 'Encaixe topográfico respeitoso ao declive original',
      },
      {
        url: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1600&q=85',
        alt: 'Sala de jantar com mesa maciça em tora e iluminação minimalista',
        caption: 'Integração entre sala de jantar e jardim de pedras',
      },
      {
        url: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=85',
        alt: 'Banheiro master com banheira de imersão e vista para pátio privativo',
        caption: 'Banho master revestido em granito escovado',
      },
    ],
    description:
      'Implantada em terreno com declive acentuado, a casa pousa suavemente sobre muros de contenção em pedra gabião. A arquitetura estabelece um contraponto deliberado entre o peso telúrico da pedra e a leveza das grandes esquadrias de vidro.',
    highlights: [
      'Muros ciclópicos em pedra moledo aparelhada',
      'Esquadrias minimalistas embutidas no piso',
      'Sistema de reaproveitamento e ventilação passiva',
    ],
  },
  {
    id: 'sede-corporativa-prisma',
    number: '06',
    title: 'Espaço Prisma',
    subtitle: 'Ambiente de negócios com identidade espacial e acústica rigorosa',
    category: 'comercial',
    categoryLabel: 'Comercial',
    location: 'Itaim Bibi, São Paulo',
    typology: 'Sede Corporativa & Consultoria',
    yearConcept: 'Arquitetura de Negócios',
    coverImage: {
      url: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1600&q=85',
      alt: 'Sede corporativa sofisticada com divisórias de madeira e vidro e iluminação escultural',
      caption: 'Atmosfera executiva que equilibra privacidade e transparência',
      width: 1600,
      height: 1067,
    },
    gallery: [
      {
        url: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1600&q=85',
        alt: 'Perspectiva da sala de reuniões com mesa em mármore e poltronas ergonômicas',
        caption: 'Mobiliário corporativo ergonômico e revestimentos acústicos',
      },
      {
        url: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=85',
        alt: 'Corredor com iluminação linear embutida e forro mineral',
        caption: 'Circulações limpas com sinalização discreta',
      },
    ],
    description:
      'Desenvolvimento de arquitetura corporativa para uma firma de investimentos. O projeto prioriza conforto acústico absoluto, transições discretas entre áreas públicas e confidenciais e uma estética contida e atemporal.',
    highlights: [
      'Atenuação sonora com vidros laminados duplos',
      'Painéis em microperfurado de carvalho natural',
      'Automação discreta de iluminação e climatização',
    ],
  },
];

export const PRINCIPLES: Principle[] = [
  {
    number: '01',
    title: 'Rigor Estrutural',
    description:
      'A forma arquitetônica não responde ao supérfluo. Cada viga, pilar e abertura atende a uma lógica construtiva clara, conferindo coerência, estabilidade e pureza geométrica ao conjunto.',
  },
  {
    number: '02',
    title: 'Materialidade Tátil',
    description:
      'Pedras de jazidas brasileiras, madeiras certificadas, concreto e metais crus. Valorizamos a verdade dos materiais, suas texturas naturais e o modo como envelhecem com dignidade.',
  },
  {
    number: '03',
    title: 'Luz como Matéria',
    description:
      'A luz natural é tratada como elemento primário de projeto. Desenhamos aberturas, rasgos zenitais e brises para esculpir sombras precisas e modular a passagem do dia nos interiores.',
  },
  {
    number: '04',
    title: 'Funcionalidade Silenciosa',
    description:
      'O design de interiores serve à vida real. Fluxos intuitivos, soluções de marcenaria inteligente e ergonomia apurada operam nos bastidores sem disputar protagonismo visual.',
  },
];

export const STUDIO_METRICS: StudioMetric[] = [
  {
    value: '01',
    label: 'Visão Integrada',
    detail: 'Arquitetura, interiores e detalhamento construtivo conduzidos sob uma única direção estética.',
  },
  {
    value: '02',
    label: 'Escalas de Atuação',
    detail: 'Especialização dedicada em projetos residenciais de alto padrão e espaços comerciais autorais.',
  },
  {
    value: '04',
    label: 'Etapas de Processo',
    detail: 'Metodologia consultiva e transparente da primeira conversa ao acompanhamento da obra.',
  },
];

export const PROCESS_STAGES: ProcessStage[] = [
  {
    number: '01',
    title: 'Escuta e Diagnóstico',
    lead: 'Compreensão das rotinas, expectativas e condicionantes do terreno ou imóvel.',
    description:
      'Iniciamos com uma imersão técnica e humana. Analisamos topografia, insolação, ventilação e as dinâmicas de uso do cliente, estabelecendo o programa de necessidades e os parâmetros regulatórios.',
    deliverables: ['Briefing aprofundado', 'Análise de condicionantes', 'Diretrizes programáticas'],
  },
  {
    number: '02',
    title: 'Conceito e Direção Estética',
    lead: 'Definição da linguagem arquitetônica, volumetria e paleta de materiais.',
    description:
      'Criamos os estudos preliminares em plantas, cortes, modelos tridimensionais e amostras físicas de materiais. Aqui a identidade espacial ganha forma e é lapidada em conjunto com o cliente.',
    deliverables: ['Estudo preliminar 3D', 'Plantas de layout', 'Moodboard de materiais e acabamentos'],
  },
  {
    number: '03',
    title: 'Desenvolvimento e Especificação',
    lead: 'Detalhamento executivo minucioso para garantir precisão orçamentária e construtiva.',
    description:
      'Elaboramos o projeto executivo completo: marcenaria sob medida, iluminação técnica, paginação de pisos, compatibilização com engenharia e cadernos de especificação de fornecedores.',
    deliverables: ['Projeto executivo completo', 'Detalhamento de marcenaria', 'Caderno de especificações'],
  },
  {
    number: '04',
    title: 'Acompanhamento e Refinamento',
    lead: 'Consultoria estética contínua para assegurar a fidelidade de execução do projeto.',
    description:
      'Realizamos visitas técnicas periódicas à obra para conferência de acabamentos, esclarecimento de dúvidas junto aos executores e ajustes finais de montagem e produção de interiores.',
    deliverables: ['Visitas técnicas de validação', 'Conferência de amostras em obra', 'Produção final de interiores'],
  },
];
