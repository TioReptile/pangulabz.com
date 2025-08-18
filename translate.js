const translations = {
  pt: {
    pageTitle: "Pan Gu Labz - Soluções para Perfect World",
    navHome: "Início",
    navSolutions: "Soluções",
    navAbout: "Sobre",
    navContact: "Contato",
    heroTitle: "Eleve Seu Servidor de Perfect World a um Novo Patamar",
    heroSubtitle: "Desenvolvemos soluções exclusivas que transformarão a experiência no seu mundo.",
    heroButton: "Conheça as Soluções",
    solutionsTitle: "Nossas Soluções",
    card1Title: "Mapas Customizados",
    card1Desc: "Cidades, dungeons e arenas únicas, criadas do zero para surpreender seus jogadores e oferecer novos desafios.",
    card2Title: "Sistemas Exclusivos",
    card2Desc: "Sistemas de forja, títulos, eventos automáticos e mecânicas de jogo inovadoras para engajar sua comunidade.",
    card3Title: "Painéis de Controle",
    card3Desc: "Painéis web intuitivos para administração de jogadores, contas e do servidor, com total segurança e controle.",
    aboutTitle: "Forjado no Caos, Entregue a Você",
    aboutDesc: "A Pan Gu Labz foi fundada por veteranos de Perfect World apaixonados por desenvolvimento. Assim como o mito de Pan Gu, que moldou o mundo, nós moldamos a experiência do seu servidor com precisão e criatividade. Entendemos as necessidades de donos de servidores e jogadores, e nosso compromisso é entregar qualidade e inovação.",
    contactTitle: "Transforme sua Ideia em Realidade",
    contactDesc: "Tem um projeto em mente? Fale conosco e vamos construir algo lendário juntos.",
    contactButton: "Orçamento via E-mail",
    footerText: "Pan Gu Labz © 2025 - Soluções para Perfect World. Todos os direitos reservados."
  },
  en: {
    pageTitle: "Pan Gu Labz - Solutions for Perfect World",
    navHome: "Home",
    navSolutions: "Solutions",
    navAbout: "About",
    navContact: "Contact",
    heroTitle: "Elevate Your Perfect World Server to a New Level",
    heroSubtitle: "We develop exclusive solutions that will transform the experience in your world.",
    heroButton: "Discover Our Solutions",
    solutionsTitle: "Our Solutions",
    card1Title: "Custom Maps",
    card1Desc: "Unique cities, dungeons, and arenas, created from scratch to surprise your players and offer new challenges.",
    card2Title: "Exclusive Systems",
    card2Desc: "Forging systems, titles, automatic events, and innovative game mechanics to engage your community.",
    card3Title: "Control Panels",
    card3Desc: "Intuitive web panels for managing players, accounts, and the server, with total security and control.",
    aboutTitle: "Forged in Chaos, Delivered to You",
    aboutDesc: "Pan Gu Labz was founded by Perfect World veterans passionate about development. Like the myth of Pan Gu, who shaped the world, we shape your server's experience with precision and creativity. We understand the needs of server owners and players, and our commitment is to deliver quality and innovation.",
    contactTitle: "Turn Your Idea into Reality",
    contactDesc: "Have a project in mind? Contact us and let's build something legendary together.",
    contactButton: "Request a Quote via E-mail",
    footerText: "Pan Gu Labz © 2025 - Solutions for Perfect World. All rights reserved."
  },
  ru: {
    pageTitle: "Pan Gu Labz - Решения для Perfect World",
    navHome: "Главная",
    navSolutions: "Решения",
    navAbout: "О нас",
    navContact: "Контакты",
    heroTitle: "Поднимите ваш сервер Perfect World на новый уровень",
    heroSubtitle: "Мы разрабатываем эксклюзивные решения, которые преобразят опыт в вашем мире.",
    heroButton: "Наши решения",
    solutionsTitle: "Наши решения",
    card1Title: "Пользовательские карты",
    card1Desc: "Уникальные города, подземелья и арены, созданные с нуля, чтобы удивить ваших игроков и предложить новые испытания.",
    card2Title: "Эксклюзивные системы",
    card2Desc: "Системы крафта, титулов, автоматические события и инновационные игровые механики для вовлечения вашего сообщества.",
    card3Title: "Панели управления",
    card3Desc: "Интуитивно понятные веб-панели для управления игроками, аккаунтами и сервером с полной безопасностью и контролем.",
    aboutTitle: "Создано в Хаосе, Доставлено Вам",
    aboutDesc: "Pan Gu Labz была основана ветеранами Perfect World, увлеченными разработкой. Подобно мифу о Пангу, который создал мир, мы формируем опыт вашего сервера с точностью и креативностью. Мы понимаем потребности владельцев серверов и игроков, и наше обязательство - предоставлять качество и инновации.",
    contactTitle: "Превратите вашу идею в реальность",
    contactDesc: "У вас есть проект? Свяжитесь с нами, и давайте вместе создадим что-то легендарное.",
    contactButton: "Запросить расчет по E-mail",
    footerText: "Pan Gu Labz © 2025 - Решения для Perfect World. Все права защищены."
  }
};

const setLanguage = (language) => {
  const elements = document.querySelectorAll('[data-key]');
  elements.forEach(elem => {
    const key = elem.getAttribute('data-key');
    if (translations[language] && translations[language][key]) {
      if (elem.hasAttribute('value')) {
        elem.value = translations[language][key];
      } else {
        elem.innerHTML = translations[language][key];
      }
    }
  });
  document.documentElement.lang = language;
  localStorage.setItem('language', language);

  // Update active language switcher
  document.querySelectorAll('.language-switcher a').forEach(a => {
    a.classList.remove('active');
    if (a.getAttribute('data-lang') === language) {
      a.classList.add('active');
    }
  });
};

document.addEventListener('DOMContentLoaded', () => {
  const langSwitchers = document.querySelectorAll('.language-switcher a');
  const savedLanguage = localStorage.getItem('language') || 'pt';

  langSwitchers.forEach(switcher => {
    switcher.addEventListener('click', (event) => {
      event.preventDefault();
      const lang = switcher.getAttribute('data-lang');
      setLanguage(lang);
    });
  });

  setLanguage(savedLanguage);
});
