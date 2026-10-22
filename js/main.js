// Current year in footer
document.getElementById("year").textContent = new Date().getFullYear();

// Theme toggle (initial theme is set inline in <head> to avoid a flash)
document.getElementById("theme-toggle").addEventListener("click", () => {
  const t = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
  document.documentElement.dataset.theme = t;
  localStorage.setItem("theme", t);
});

// Header border on scroll
const header = document.getElementById("header");
addEventListener("scroll", () => header.classList.toggle("scrolled", scrollY > 10));

// Expand all jobs before printing, restore after
const jobs = [...document.querySelectorAll(".job")];
let openState = [];
addEventListener("beforeprint", () => {
  openState = jobs.map((j) => j.open);
  jobs.forEach((j) => (j.open = true));
});
addEventListener("afterprint", () => jobs.forEach((j, i) => (j.open = openState[i])));

document.getElementById("print-btn").addEventListener("click", () => print());
