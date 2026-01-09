document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("menuToggle");
  const menu = document.querySelector(".right-links");

  if (!toggle || !menu) {
    console.error("menuToggle / right-links tidak ditemukan");
    return;
  }

  toggle.addEventListener("click", () => {
    menu.classList.toggle("active");
  });
});
