document.addEventListener("DOMContentLoaded", () => {
  // Mobile Nav Toggle
  const menuToggle = document.getElementById("menuToggle");
  const navLinks = document.getElementById("navLinks");

  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("open");
  });

  // Close nav menu on link click (mobile)
  navLinks.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
    });
  });

  // Dark/Light Theme Toggle
  const themeToggle = document.getElementById("themeToggle");
  const currentTheme = localStorage.getItem("portfolio-theme") || "light";

  document.documentElement.setAttribute("data-theme", currentTheme);
  themeToggle.textContent = currentTheme === "dark" ? "☀️" : "🌙";

  themeToggle.addEventListener("click", () => {
    const isDark = document.documentElement.getAttribute("data-theme") === "dark";
    const nextTheme = isDark ? "light" : "dark";

    document.documentElement.setAttribute("data-theme", nextTheme);
    localStorage.setItem("portfolio-theme", nextTheme);
    themeToggle.textContent = nextTheme === "dark" ? "☀️" : "🌙";
  });
});