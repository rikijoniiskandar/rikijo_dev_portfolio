/*==================== SHOW MENU ====================*/
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId);

  // VALIDASI VARIABEL YANG ADA
  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      // menambahkan kelas show-menu ke tag div dengan kelas nav__menu
      nav.classList.toggle("show-menu");
    });
  }
};
showMenu("navToggle", "navMenu");

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll(".nav_link");

function linkAction() {
  const navMenu = document.getElementById("navMenu");
  // Saat mengklik setiap nav_link, akan menghapus kelas show menu
  navMenu.classList.remove("show-menu");
}
navLink.forEach(n => n.addEventListener("click", linkAction));

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach(current => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document.querySelector(".nav_menu a[href*=" + sectionId + "]").classList.add("active-link");
    } else {
      document.querySelector(".nav_menu a[href*=" + sectionId + "]").classList.remove("active-link");
    }
  });
}
window.addEventListener("scroll", scrollActive);

/*==================== CHANGE BACKGROUND HEADER ====================*/
function scrollHeader() {
  const nav = document.getElementById("header");
  // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
  if (this.scrollY >= 200) nav.classList.add("scroll-header");
  else nav.classList.remove("scroll-header");
}
window.addEventListener("scroll", scrollHeader);

/*==================== SHOW SCROLL TOP ====================*/
function scrollTop() {
  const scrollTop = document.getElementById("scroll-top");
  // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
  if (this.scrollY >= 560) scrollTop.classList.add("show-scroll");
  else scrollTop.classList.remove("show-scroll");
}
window.addEventListener("scroll", scrollTop);

/*==================== DARK LIGHT THEME ====================*/
const themeButton = document.getElementById("theme-button");
const darkTheme = "dark-theme";
const iconTheme = "bx-sun";

//Topik yang dipilih sebelumnya (jika dipilih pengguna)
const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

//  mendapatkan tema saat ini yang dimiliki antarmuka dengan memvalidasi kelas tema gelap
const getCurrentTheme = () => (document.body.classList.contains(darkTheme) ? "dark" : "light");
const getCurrentIcon = () => (themeButton.classList.contains(iconTheme) ? "bx-moon" : "bx-sun");

// memvalidasi jika pengguna sebelumnya memilih topik
if (selectedTheme) {
  // Jika validasi terpenuhi, program bertanya apa masalahnya untuk mengetahui apakah kami mengaktifkan atau menonaktifkan gelap
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](darkTheme);
  themeButton.classList[selectedIcon === "bx-moon" ? "add" : "remove"](iconTheme);
}

// Aktifkan / nonaktifkan tema secara manual dengan tombol
themeButton.addEventListener("click", () => {
  // Tambahkan atau hapus tema gelap / ikon
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);
  //  menyimpan tema dan ikon saat ini yang dipilih pengguna
  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
});

/*==================== SCROLL REVEAL ANIMATION ====================*/
const sr = ScrollReveal({
  origin: "top",
  distance: "30px",
  duration: 2000,
  reset: true,
});

sr.reveal(
  `.home_data, .home_img,
            .about_data, .about_img,
            .services_content,
            .contact_data, .contact_button,
            .footer__content`,
  {
    interval: 200,
  },
);
