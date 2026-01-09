document.addEventListener("DOMContentLoaded", () => {
  // 🔒 HANYA UNTUK HP
  if (window.innerWidth > 768) return;

  const toggle = document.getElementById("menuToggle");
  const menu = document.querySelector(".right-links");

  if (!toggle || !menu) {
    console.error("menuToggle / right-links tidak ditemukan");
    return;
  }

  /* ======================
     MODE HP – INIT
  ====================== */
  let menuOpen = false;

  // hamburger tampil
  toggle.style.display = "block";
  toggle.style.cursor = "pointer";
  toggle.style.fontSize = "26px";

  // menu disembunyikan
  menu.style.display = "none";
  menu.style.flexDirection = "column";
  menu.style.width = "100%";
  menu.style.background = "#005613";
  menu.style.padding = "10px 0";

  /* ======================
     HAMBURGER CLICK
  ====================== */
  toggle.addEventListener("click", () => {
    menuOpen = !menuOpen;
    menu.style.display = menuOpen ? "flex" : "none";
    toggle.textContent = menuOpen ? "✕" : "☰";
  });

  /* ======================
     DROPDOWN MODE HP
     (GANTI HOVER → CLICK)
  ====================== */
  document.querySelectorAll(".dropdown > a").forEach(btn => {
    btn.addEventListener("click", e => {
      e.preventDefault();
      e.stopPropagation();

      const parent = btn.parentElement;
      const submenu =
        parent.querySelector(".dropdown-content") ||
        parent.querySelector(".dropdown-sub") ||
        parent.querySelector(".dropdown-kari");

      if (!submenu) return;

      // tutup submenu lain
      document.querySelectorAll(
        ".dropdown-content, .dropdown-sub, .dropdown-kari"
      ).forEach(sm => {
        if (sm !== submenu) sm.style.display = "none";
      });

      submenu.style.display =
        submenu.style.display === "block" ? "none" : "block";

      submenu.style.position = "relative";
      submenu.style.left = "0";
      submenu.style.right = "0";
      submenu.style.opacity = "1";
      submenu.style.visibility = "visible";
      submenu.style.transform = "none";
    });
  });

  /* ======================
     KLIK LUAR → TUTUP MENU
  ====================== */
  document.addEventListener("click", e => {
    if (!menu.contains(e.target) && e.target !== toggle) {
      menu.style.display = "none";
      toggle.textContent = "☰";
      menuOpen = false;

      document.querySelectorAll(
        ".dropdown-content, .dropdown-sub, .dropdown-kari"
      ).forEach(sm => sm.style.display = "none");
    }
  });
});
