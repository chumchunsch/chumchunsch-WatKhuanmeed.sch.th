document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("menuToggle");
  const menu = document.querySelector(".right-links");

  if (!toggle || !menu) {
    console.error("menuToggle atau right-links tidak ditemukan");
    return;
  }

  // buka/tutup menu utama
  toggle.addEventListener("click", () => {
    menu.classList.toggle("active");
    toggle.textContent = menu.classList.contains("active") ? "✕" : "☰";
  });

  // dropdown mobile
  document.querySelectorAll(".dropdown > a").forEach(link => {
    link.addEventListener("click", e => {
      if (window.innerWidth <= 768) {
        e.preventDefault();
        link.parentElement.classList.toggle("open");
      }
    });
  });

  // reset saat balik ke desktop
  window.addEventListener("resize", () => {
    if (window.innerWidth > 768) {
      menu.classList.remove("active");
      toggle.textContent = "☰";
      document.querySelectorAll(".dropdown").forEach(d => d.classList.remove("open"));
    }
  });
});
