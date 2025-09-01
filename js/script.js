window.addEventListener("scroll", function () {
  const header = document.querySelector(".header-bg");
  if (window.scrollY > 0) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});
