// Banco de dados dos produtos

const data = [
  {
    id: 1,
    img: "./img/feijoada.webp",
    nameItem: "Feijoada",
    description:
      "Quarta e Sábado são dias consagrados de Feijoada para os brasileiros! É feita com feijão preto, diversos cortes de carnes suínas e bovinas, cebola e alho, sendo “religiosamente” acompanhada por arroz, couve refogada, farofa, torresmo, laranja e vinagrete.",
    value: 45,
    addCart: "Adicionar ao carrinho",
    tag: "Pratos",
  },
  {
    id: 2,
    img: "./img/moqueca.webp",
    nameItem: "Moqueca",
    description:
      "A moqueca é um dos pratos mais conhecidos no Brasil, sua origem ainda é motivo de muita disputa entre baianos e capixabas. As receitas mais comuns utilizam peixes e crustáceos, como camarão, siri e lagosta e tradicionalmente são feitas em panelas de barro.",
    value: 45,
    addCart: "Adicionar ao carrinho",
    tag: "Pratos",
  },
  {
    id: 3,
    img: "./img/feijaotropeiro.webp",
    nameItem: "Feijão Tropeiro",
    description:
      "Assim como o arroz carreteiro, o Feijão Tropeiro também foi um prato de “nômades”, já que era consumido pelos condutores de tropas de cavalos ou mulas durante os séculos XVIII e XX, chamados de Tropeiros. Os principais ingredientes da receita de Feijão de Tropeiro são feijão, carne seca, toucinho, farinha de mandioca ou milho e sal, todos fáceis de serem levados pelos viajantes durante suas longas jornadas.",
      value: 45,
    addCart: "Adicionar ao carrinho",
    tag: "Pratos",
  },
  {
    id: 4,
    img: "./img/baiaodedois.webp",
    nameItem: "Baião de Dois",
    description:
      "Originado no Ceará, um dos pratos nordestinos mais famosos no Brasil é o Baião de Dois, uma combinação imbatível de arroz com feijão, que pode ser o verde, o fradinho ou o de corda. Na receita, o arroz é preparado no caldo de feijão já cozido, sendo uma ótima forma de utilizar sobras de feijão. Os ingredientes podem variar conforme a região, sendo os mais comuns toucinho, carne seca, queijo coalho, coentro e cebolinha.",
    value: 45,
    addCart: "Adicionar ao carrinho",
    tag: "Pratos",
  },
  {
    id: 5,
    img: "./img/tacaca.webp",
    nameItem: "Tacacá",
    description:
      "O Tacacá é um prato tradicional da região amazônica e é uma famosa comida de rua nos estados do Pará e Amazonas. A iguaria também é feita com tucupi e jambu, com adição de camarões secos, chicória, goma de tapioca (em tupi guarani Tacacá significa goma), além de vários temperos como pimenta de cheiro, alho e cheiro verde. Mesmo nos dias de calor o caldo encorpado é consumido bem quente. ",
    value: 45,
    addCart: "Adicionar ao carrinho",
    tag: "Pratos",
  },
  {
    id: 6,
    img: "./img/coxinha.webp",
    nameItem: "Coxinha de frango",
    description:
      "Você já viu alguém triste comendo coxinha? A pergunta pode até ser uma brincadeira entre os brasileiros, mas também é uma realidade. Isso porque a coxinha está entre os tipos de salgados mais amados do Brasil. ",
    value: 7,
    addCart: "Adicionar ao carrinho",
    tag: "Salgados",
  },
  {
    id: 7,
    img: "./img/quibe.webp",
    nameItem: "Quibe",
    description:
      "O quibe é um salgado de origem no Oriente Médio, feito com trigo, carne bovina, hortelã, manjericão, cebolinha e muitos outros ingredientes, que conquistou o gosto dos brasileiros.",
    value: 7,
    addCart: "Adicionar ao carrinho",
    tag: "Salgados",
  },
  {
    id: 8,
    img: "./img/esfirra.webp",
    nameItem: "Esfirra",
    description:
      "Entre os vários tipos de salgados, a esfirra pode ser considerada um dos mais saudáveis, talvez por ser consumida assada. ",
    value: 7,
    addCart: "Adicionar ao carrinho",
    tag: "Salgados",
  },
  {
    id: 9,
    img: "./img/bolinhodemandioca.webp",
    nameItem: "Bolinho de mandioca",
    description:
      "Bolinho de mandioca, uma receita ideal para quem quer um lanche muito saboroso em cafés e lanchonetes, por exemplo.",
    value: 7,
    addCart: "Adicionar ao carrinho",
    tag: "Salgados",
  },
  {
    id: 10,
    img: "./img/empada.webp",
    nameItem: "Empada",
    description:
      "A empada brasileira é uma versão muito saborosa da receita original portuguesa, e a massa é feita com farinha de trigo enriquecida com ferro e ácido fólico. Por sua vez, o recheio pode ser de inúmeras variedades: palmito, frango, frango com requeijão e calabresa com requeijão. ",
    value: 7,
    addCart: "Adicionar ao carrinho",
    tag: "Salgados",
  },
  {
    id: 11,
    img: "./img/brigadeiro.webp",
    nameItem: "Brigadeiro ",
    description:
      "Difícil acreditar que um doce tão simples e gostoso exista só em um lugar do mundo. Mas é isso mesmo, a mistura de chocolate em pó com leite condensado, é brasileira! O nome brigadeiro, segundo algumas histórias, nasceu em homenagem a um candidato à presidência, o Brigadeiro Eduardo Gomes, que distribuía bolinhas de chocolate para conquistar eleitores.",
    value: 2,
    addCart: "Adicionar ao carrinho",
    tag: "Doces",
  },
  {
    id: 12,
    img: "./img/quindin.webp",
    nameItem: "Quindim",
    description:
      "Quindim é um doce que tem como ingredientes gema de ovo, açúcar e coco ralado. A receita do nordeste brasileiro foi inspirada na receita portuguesa conhecida como brisa-do-Lis, com uma única diferença que é a utilização de coco ralado ao invés de amêndoa.",
    value: 4,
    addCart: "Adicionar ao carrinho",
    tag: "Doces",
  },
  {
    id: 13,
    img: "./img/pudim.webp",
    nameItem: "Pudim",
    description:
      "A tradição de fazer doces cozinhando leite com ovos é bem comum no mundo inteiro, mas nada se compara ao nosso delicioso pudim. Preparado com bastante açúcar e coberto com uma calda de caramelo, o pudim lembra o quanto é bom ser brasileiro a cada garfada!",
    value: 4,
    addCart: "Adicionar ao carrinho",
    tag: "Doces",
  },
  {
    id: 14,
    img: "./img/pamonha.webp",
    nameItem: "Pamonha",
    description:
      "O quitute brasileiro, comum nos estados do Nordeste e ainda em Goiás, Mato Grosso, Minas Gerais, Paraná, São Paulo e Tocantins, provavelmente descende da culinária indígena.",
    value: 4,
    addCart: "Adicionar ao carrinho",
    tag: "Doces",
  },
  {
    id: 15,
    img: "./img/pacoca.webp",
    nameItem: "Paçoca",
    description:
      "Paçoca de amendoim, ou Capiroçava, é um doce tradicional brasileiro à base de amendoim, farinha de mandioca e açúcar.",
    value: 4,
    addCart: "Adicionar ao carrinho",
    tag: "Doces",
  },
];
