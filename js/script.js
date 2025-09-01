// Adicionando um evendo simples que caso o reconheça que o scroll é maior que 0 mude a as cores do header via css.
window.addEventListener("scroll", function () {
  const header = document.querySelector(".header-bg");
  if (window.scrollY > 0) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});
