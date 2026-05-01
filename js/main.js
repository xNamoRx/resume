// Smooth scroll + section highlight on nav click
document.querySelectorAll(".header-link").forEach((link) => {
  link.addEventListener("click", function (e) {
    const href = this.getAttribute("href");
    if (href && href.startsWith("#")) {
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "center" });
        target.classList.add("section-highlight");
        setTimeout(() => target.classList.remove("section-highlight"), 1500);
      }
    }
  });
});

// Work experience accordion
document.addEventListener("DOMContentLoaded", () => {
  const companies = document.querySelectorAll(".work .company");
  companies.forEach((company) => {
    const title = company.querySelector(".company-position");
    const list = company.querySelector(".company-list");
    if (!title || !list) return;

    const companyName = title.querySelector(".company-name");
    if (!companyName) return;

    const jobTitleText = title.childNodes[0];
    const jobTitleWrapper = document.createElement("span");
    jobTitleWrapper.className = "job-title-toggle-wrapper";
    jobTitleWrapper.style.display = "inline-flex";
    jobTitleWrapper.style.alignItems = "center";

    const btn = document.createElement("span");
    btn.classList.add("toggle-btn");
    btn.style.cursor = "pointer";
    btn.textContent = list.classList.contains("collapsed") ? "+" : "−";

    if (jobTitleText) {
      jobTitleWrapper.appendChild(btn);
      jobTitleWrapper.appendChild(
        document.createTextNode(jobTitleText.textContent || jobTitleText.nodeValue || "")
      );
      title.removeChild(jobTitleText);
      title.insertBefore(jobTitleWrapper, companyName);
    } else {
      title.insertBefore(btn, companyName);
    }

    title.addEventListener("click", () => {
      list.classList.toggle("collapsed");
      btn.textContent = list.classList.contains("collapsed") ? "+" : "−";
    });
  });
});

// Header glass effect on scroll
const header = document.querySelector(".header");
window.addEventListener("scroll", () => {
  header.classList.toggle("scrolled", window.scrollY > 10);
});

// Interactive blob follows cursor
const interactive = document.querySelector(".interactive");
if (interactive) {
  window.addEventListener("mousemove", (e) => {
    const xPct = (e.clientX / window.innerWidth - 0.5) * 80;
    const yPct = (e.clientY / window.innerHeight - 0.5) * 80;
    interactive.style.transform = `translate(calc(-50% + ${xPct}vw), calc(-50% + ${yPct}vh))`;
  });
}

// Send mail button
const sendMailBtn = document.getElementById("send-mail-button");
if (sendMailBtn) {
  sendMailBtn.addEventListener("click", () => {
    window.location.href = "mailto:rrusnak09@gmail.com";
  });
}
