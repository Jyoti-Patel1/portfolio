/* ================= THEME TOGGLE ================= */

const themeButton = document.querySelector(".change-theme");
const body = document.body;

const savedTheme = localStorage.getItem("selected-theme");

if (savedTheme === "light") {
  body.classList.add("light-theme");
  themeButton?.classList.replace("ri-sun-line", "ri-moon-line");
}

themeButton?.addEventListener("click", () => {
  body.classList.toggle("light-theme");

  const isLight = body.classList.contains("light-theme");

  themeButton.classList.toggle("ri-moon-line", isLight);
  themeButton.classList.toggle("ri-sun-line", !isLight);

  localStorage.setItem("selected-theme", isLight ? "light" : "dark");
});

/* ================= MOBILE MENU ================= */

// const navToggle = document.querySelector(".nav-toggle");
// const navMenu = document.querySelector(".nav-menu");
// const navClose = document.querySelector(".nav-close");

// navToggle?.addEventListener("click", () => {
//   navMenu.classList.toggle("show");
// });

// navClose?.addEventListener("click", () => {
//   navMenu.classList.remove("show");
// });
// document.querySelectorAll(".nav-link").forEach((link) => {
//   link.addEventListener("click", () => {
//     navMenu.classList.remove("show");
//   });
// });

const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");
const navIcon = navToggle.querySelector("i");

navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("show");

  if (navMenu.classList.contains("show")) {
    navIcon.classList.remove("ri-menu-line");
    navIcon.classList.add("ri-close-line");
  } else {
    navIcon.classList.remove("ri-close-line");
    navIcon.classList.add("ri-menu-line");
  }
});

/* ================= STATUS FUNCTION ================= */

function showStatus(message, type) {
  contactStatus.textContent = message;

  contactStatus.classList.remove("success", "error");
  contactStatus.classList.add(type);

  setTimeout(() => {
    contactStatus.textContent = "";
    contactStatus.classList.remove("success", "error");
  }, 5000);
}
