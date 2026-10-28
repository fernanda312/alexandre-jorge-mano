/* AJMANO — painel admin: o que for guardado no admin.html aparece aqui no site.
 * Sem dados guardados, o site fica exatamente como está. Não mexe no desenho. */
(function () {
  var KEY = "ajmano_admin_v1";
  var IMAGES = [
    "images/retrato-fato-preto-estendido-original.jpg",
    "images/retrato-fato-preto.jpg",
    "images/retrato-fato-preto-estendido.jpg",
    "images/retrato-camisa-branca.jpg",
    "images/retrato-polo-preto.jpg",
    "images/alexandre-gravata-azul.jpg",
    "images/alexandre-maos-cruzadas.jpg",
    "images/alexandre-oculos-camisa.jpg",
    "images/alexandre-camisa-bege.jpg",
    "images/grupo-trabalho.jpg",
    "images/moztech.jpg",
    "images/painel-comarp.jpg",
    "images/painel-comarp-publico.jpg",
    "images/evento-ar-livre.jpg",
    "images/evento-ar-livre-2.jpg",
    "images/auditorio.jpg",
    "images/orador-yango.jpg",
    "images/orador-gravata-vermelha.jpg",
    "images/octagon.jpg"
  ];
  var VIDEOS = [
    "videos/video-investir-mocambique.mp4",
    "videos/video-inovacao-lider.mp4",
    "videos/video-tempos-dificeis.mp4"
  ];
  var DEFAULTS = {
    logo: "AJMANO",
    hero: "images/retrato-fato-preto-estendido-original.jpg",
    descTitle: ["ALEXANDRE é", "mais do que um", "empresário."],
    descQuote: "É um empresário, consultor e orador em Maputo — fundador e CEO da AJMANO Consultores, assessor do Ministro da Juventude e Desporto e a ponte entre investidores e Moçambique.",
    gallery: [
      "images/retrato-fato-preto.jpg",
      "images/retrato-camisa-branca.jpg",
      "images/retrato-polo-preto.jpg",
      "images/alexandre-gravata-azul.jpg",
      "images/alexandre-maos-cruzadas.jpg",
      "images/alexandre-oculos-camisa.jpg",
      "images/alexandre-camisa-bege.jpg"
    ],
    jornalTitle: "Quem é Alexandre.",
    jornalIntro: "Empresário, consultor e orador. A ponte entre quem quer investir e Moçambique.",
    jornal: [
      { photo: "images/retrato-camisa-branca.jpg", title: "Empresário", text: "Alexandre Jorge Mano é fundador e CEO da AJMANO Consultores, em Maputo. A empresa é a porta de entrada para quem quer investir em Moçambique, com assessoria estratégica, identificação de oportunidades, estruturação de projetos e apoio legal, fiscal e regulamentar." },
      { photo: "images/alexandre-maos-cruzadas.jpg", title: "Consultor", text: "Como consultor, trabalha com empresas e investidores, e também com pequenas e médias empresas. O foco é simples: abrir portas, dar segurança a quem chega e transformar uma ideia num projeto que funciona em Moçambique." },
      { photo: "images/grupo-trabalho.jpg", title: "Assessor do Ministro", text: "É assessor do Ministro da Juventude e Desporto, Caifadine Paulo Manasse, em emprego e formação profissional. Uma ponte entre o governo, os jovens e as empresas, em Moçambique e fora dele." },
      { photo: "images/moztech.jpg", title: "Orador", text: "Como orador, fala em eventos e painéis sobre liderança, inovação e investimento — do MozTech ao COMARP Talks. A sua frase de assinatura é: “Liderança é a capacidade de traduzir visão em realidade.”" }
    ],
    projetosTitle: "Os Projetos.",
    projetosIntro: "Consultoria, investimento e palcos de influência — o trabalho de Alexandre, em Moçambique e além.",
    projetos: [
      { photo: "images/retrato-fato-preto.jpg", title: "AJMANO Consultores", text: "AJMANO Consulting & Advisory, Lda, em Maputo. Facilita o investimento em Moçambique: assessoria estratégica, oportunidades, projetos e apoio legal, fiscal e regulamentar. Site: ajmano.com. Email: info@ajmano.com." },
      { photo: "images/evento-ar-livre.jpg", title: "Assessoria ao Governo", text: "Assessor do Ministro da Juventude e Desporto, Caifadine Paulo Manasse. Trabalho em emprego e formação profissional, incluindo a visita oficial a Portugal sobre emprego e formação." },
      { photo: "images/painel-comarp.jpg", title: "COMARP Talks e MozTech", text: "Painéis e conversas que inspiram: comunicação, marketing e relações públicas, com Alexandre a falar para o público, em Maputo, sobre liderança e inovação." },
      { photo: "images/alexandre-oculos-camisa.jpg", title: "Superbrands Moçambique", text: "Conselheiro da Superbrands Moçambique, listado como consultor. Um reconhecimento do seu trabalho em comunicação e assessoria empresarial no país." }
    ],
    livroTitle: "O Livro de Alexandre.",
    livroIntro: "Visão, trabalho e palavra — a trajetória de Alexandre, contada em quatro páginas.",
    livro: [
      { title: "ALEXANDRE JORGE MANO", text: "Empresário · Consultor · Orador — Maputo · Moçambique" },
      { title: "A Visão", text: "“Liderança é a capacidade de traduzir visão em realidade.” É assim que Alexandre trabalha: uma ideia, um plano e um projeto que chega ao fim." },
      { title: "O Trabalho", text: "AJMANO Consultores, em Maputo. Investimento, assessoria e projetos em Moçambique, com quem conhece o país por dentro. E, ao mesmo tempo, assessoria ao Ministro da Juventude e Desporto." },
      { title: "A Palavra", text: "“Mesmo que ninguém veja, faça o seu melhor todos os dias.” E, como ele gosta de lembrar: inovação distingue um líder de um seguidor." }
    ],
    livroContacto: "Contactos: Facebook, Instagram e LinkedIn no rodapé, e ajmano.com.",
    videosTitle: "Alexandre em vídeo.",
    videos: [
      { video: "videos/video-investir-mocambique.mp4", title: "Investir em Moçambique" },
      { video: "videos/video-inovacao-lider.mp4", title: "Inovação distingue um líder de um seguidor" },
      { video: "videos/video-tempos-dificeis.mp4", title: "Tempos difíceis passam, pessoas fortes ficam" }
    ],
    marquee: "AJMANO · Liderança · Visão · Investimento · Inovação · Moçambique · Comunicação ·",
    social: [
      "https://www.facebook.com/share/197qpPBTXg/",
      "https://www.instagram.com/alexandrejorgemano/",
      "https://mz.linkedin.com/in/amano",
      "https://ajmano.com"
    ],
    copyright: "© 2026 AJMANO Consultores."
  };
  window.AJMANO_ADMIN = { KEY: KEY, IMAGES: IMAGES, VIDEOS: VIDEOS, DEFAULTS: DEFAULTS };
  function load() {
    try { return JSON.parse(localStorage.getItem(KEY)) || null; } catch (e) { return null; }
  }
  function setText(sel, val) {
    if (val === undefined || val === null) return;
    var el = document.querySelector(sel);
    if (el) el.textContent = val;
  }
  function apply(d) {
    if (!d) return;
    var logo = document.querySelector(".logo-header text");
    if (logo && d.logo) logo.textContent = d.logo;
    var hero = document.querySelector(".parallax-image");
    if (hero && d.hero) hero.src = d.hero;
    var lines = document.querySelectorAll(".desc-title .line");
    (d.descTitle || []).forEach(function (txt, i) { if (lines[i]) lines[i].textContent = txt; });
    var q = document.querySelector(".section-desc .p-desc");
    if (q && d.descQuote) q.textContent = "“" + d.descQuote + "”";
    var film = document.querySelector(".aj-film");
    if (film && d.gallery) {
      film.innerHTML = "";
      d.gallery.forEach(function (src) {
        var f = document.createElement("figure");
        var img = document.createElement("img");
        img.src = src; img.alt = "Foto do Alexandre";
        f.appendChild(img); film.appendChild(f);
      });
    }
    setText("#sobre .aj-title", d.jornalTitle);
    setText("#sobre .aj-intro", d.jornalIntro);
    var news = document.querySelectorAll("#sobre .aj-news-item");
    (d.jornal || []).forEach(function (it, i) {
      if (!news[i]) return;
      var img = news[i].querySelector("img"); if (img && it.photo) img.src = it.photo;
      var h = news[i].querySelector("h3"); if (h) h.textContent = it.title;
      var p = news[i].querySelector("p"); if (p) p.textContent = it.text;
    });
    setText("#projetos .aj-title", d.projetosTitle);
    setText("#projetos .aj-intro", d.projetosIntro);
    var projs = document.querySelectorAll("#projetos .aj-projeto");
    (d.projetos || []).forEach(function (it, i) {
      if (!projs[i]) return;
      var img = projs[i].querySelector("img"); if (img && it.photo) img.src = it.photo;
      var h = projs[i].querySelector("h3"); if (h) h.textContent = it.title;
      var p = projs[i].querySelector("p"); if (p) p.textContent = it.text;
    });
    setText("#livro .aj-title", d.livroTitle);
    setText("#livro .aj-intro", d.livroIntro);
    var pages = document.querySelectorAll("#livro .aj-page");
    (d.livro || []).forEach(function (it, i) {
      if (!pages[i]) return;
      var h = pages[i].querySelector("h3"); if (h) h.textContent = it.title;
      var p = pages[i].querySelector("p"); if (p) p.textContent = it.text;
    });
    var lastPagePs = document.querySelectorAll("#livro .aj-page:last-child p");
    if (lastPagePs.length > 1 && d.livroContacto) lastPagePs[1].textContent = d.livroContacto;
    setText("#videos .aj-title", d.videosTitle);
    var btns = document.querySelectorAll(".aj-video-mini");
    (d.videos || []).forEach(function (it, i) {
      if (!btns[i]) return;
      if (it.video) btns[i].setAttribute("data-video", it.video);
      var span = btns[i].querySelector("span");
      if (span) { span.nextSibling.textContent = " " + it.title; }
    });
    var spans = document.querySelectorAll(".aj-marquee-inner span");
    spans.forEach(function (s) { if (d.marquee) s.textContent = d.marquee + " "; });
    var menuLinks = document.querySelectorAll(".menu-social a");
    var footLinks = document.querySelectorAll(".footer-social a");
    (d.social || []).forEach(function (url, i) {
      if (menuLinks[i]) menuLinks[i].href = url;
      if (footLinks[i]) footLinks[i].href = url;
    });
    setText(".footer-copyright", d.copyright);
  }
  if (document.querySelector(".parallax-image")) {
    document.addEventListener("DOMContentLoaded", function () { apply(load()); });
    if (document.readyState !== "loading") apply(load());
  }
})();
