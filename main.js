/* ALEXANDRE JORGE MANO — só o menu. O scroll é o nativo do navegador:
   nada aqui interceta a roda do rato nem o deslizar no telemóvel. */
(function () {
  var burger = document.querySelector(".header-burger");
  var menu = document.getElementById("menu");
  if (!burger || !menu) return;
  function setOpen(open) {
    menu.classList.toggle("open", open);
    document.body.classList.toggle("menu-open", open);
    burger.setAttribute("aria-expanded", open ? "true" : "false");
  }
  burger.addEventListener("click", function () {
    setOpen(!menu.classList.contains("open"));
  });
  menu.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () { setOpen(false); });
  });
})();
