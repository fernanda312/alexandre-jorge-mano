/* AJMANO — novas secções: vídeos em modal e livro que se abre. Não toca no hero nem no original. */
(function () {
  // Vídeos: o botão abre o vídeo num ecrã, o X fecha e para o vídeo.
  var modal = document.createElement("div");
  modal.className = "aj-video-modal";
  modal.innerHTML = '<button class="aj-video-close" type="button" aria-label="Fechar vídeo">×</button><video controls playsinline></video>';
  document.body.appendChild(modal);
  var video = modal.querySelector("video");
  var closeBtn = modal.querySelector(".aj-video-close");
  function openVideo(src) {
    video.src = src; modal.classList.add("aj-open");
    var p = video.play(); if (p && p.catch) p.catch(function () {});
  }
  function closeVideo() {
    video.pause(); video.removeAttribute("src"); video.load(); modal.classList.remove("aj-open");
  }
  document.querySelectorAll(".aj-video-btn").forEach(function (btn) {
    btn.addEventListener("click", function () { openVideo(btn.getAttribute("data-video")); });
  });
  closeBtn.addEventListener("click", closeVideo);
  modal.addEventListener("click", function (e) { if (e.target === modal) closeVideo(); });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape") closeVideo(); });

  // Livro: toca no livro ou nos botões para virar a página.
  var book = document.getElementById("ajBook");
  if (book) {
    var pages = book.querySelectorAll(".aj-page");
    var current = 0;
    function show(i) {
      pages.forEach(function (pg, idx) { pg.classList.toggle("aj-active", idx === i); });
      current = i;
    }
    function next() { show((current + 1) % pages.length); }
    function prev() { show((current - 1 + pages.length) % pages.length); }
    book.addEventListener("click", next);
    var nextBtn = document.getElementById("ajBookNext");
    var prevBtn = document.getElementById("ajBookPrev");
    if (nextBtn) nextBtn.addEventListener("click", function (e) { e.stopPropagation(); next(); });
    if (prevBtn) prevBtn.addEventListener("click", function (e) { e.stopPropagation(); prev(); });
  }
})();

/* Rolo de fotos a passar sozinho (pausa uns segundos depois de tocares) */
(function () {
  var film = document.querySelector(".aj-film");
  if (!film) return;
  var lastTouch = 0;
  film.addEventListener("touchstart", function () { lastTouch = Date.now(); }, { passive: true });
  film.addEventListener("wheel", function () { lastTouch = Date.now(); }, { passive: true });
  setInterval(function () {
    if (Date.now() - lastTouch < 8000) return;
    var figs = film.querySelectorAll("figure");
    if (!figs.length) return;
    // Foto mais perto do centro agora, para avançar sempre para a seguinte, mesmo depois de arrastares
    var center = film.scrollLeft + film.clientWidth / 2, cur = 0, best = 1e9;
    figs.forEach(function (fg, i) {
      var c = fg.offsetLeft + fg.clientWidth / 2, d = Math.abs(c - center);
      if (d < best) { best = d; cur = i; }
    });
    var next = figs[(cur + 1) % figs.length];
    var target = next.offsetLeft + next.clientWidth / 2 - film.clientWidth / 2;
    film.scrollTo({ left: target, behavior: "smooth" });
  }, 3000);
})();
