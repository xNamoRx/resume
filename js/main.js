document.querySelectorAll(".header-link").forEach((link) => {
  link.addEventListener("click", function (e) {
    const href = this.getAttribute("href");
    if (href && href.startsWith("#")) {
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "center" });
        target.classList.add("section-highlight");
        setTimeout(() => target.classList.remove("section-highlight"), 5000);
      }
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const companies = document.querySelectorAll(".work .company");
  companies.forEach((company, index) => {
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
    btn.style.marginRight = "8px";
    btn.style.fontWeight = "bold";
    btn.style.fontSize = "1.1em";
    btn.textContent = index === 0 ? "−" : "+";

    if (jobTitleText) {
      jobTitleWrapper.appendChild(btn);
      jobTitleWrapper.appendChild(
        document.createTextNode(
          jobTitleText.textContent || jobTitleText.nodeValue || ""
        )
      );
      title.removeChild(jobTitleText);
      title.insertBefore(jobTitleWrapper, companyName);
    } else {
      title.insertBefore(btn, companyName);
    }

    // Ensure only the first is expanded, others collapsed, and set toggle button accordingly
    if (index === 0) {
      list.classList.remove("collapsed"); // first block expanded
      btn.textContent = "−";
    } else {
      list.classList.add("collapsed"); // other blocks collapsed
      btn.textContent = "+";
    }

    title.addEventListener("click", () => {
      list.classList.toggle("collapsed");
      btn.textContent = list.classList.contains("collapsed") ? "+" : "−";
    });
  });
});

const header = document.querySelector(".header");
let lastScroll = 0;
window.addEventListener("scroll", () => {
  if (window.scrollY > 10) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

// Functionality for "Send Mail" button
const sendMailBtn = document.getElementById("send-mail-button");
if (sendMailBtn) {
  sendMailBtn.addEventListener("click", () => {
    window.location.href = "mailto:rrusnak09@gmail.com";
  });
}
