const titles = [
  { text: "Web Developer", color: "#00bcd4" },
  { text: "UI Designer", color: "#ff4081" },
  { text: "C++ Debugger", color: "#8bc34a" }
];

let currentTitle = 0;
let charIndex = 0;
let isDeleting = false;
const speed = 100;
const pause = 1500;

function typeEffect() {
  const element = document.getElementById("typewriter");
  const { text, color } = titles[currentTitle];

  element.style.color = color;

  if (isDeleting) {
    element.textContent = text.substring(0, charIndex--);
  } else {
    element.textContent = text.substring(0, charIndex++);
  }

  if (!isDeleting && charIndex === text.length) {
    isDeleting = true;
    setTimeout(typeEffect, pause);
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    currentTitle = (currentTitle + 1) % titles.length;
    setTimeout(typeEffect, 300);
  } else {
    setTimeout(typeEffect, isDeleting ? speed / 2 : speed);
  }
}

window.onload = typeEffect;


      document.addEventListener("DOMContentLoaded", function () {
        const header = document.querySelector(".header");
        const about = document.getElementById("about");
        const portfolio = document.getElementById("portfolio");
        const contact = document.getElementById("contact");
        const offset = 50;

        function checkSection() {
          const scrollY = window.scrollY + offset;
          const aboutTop = about.offsetTop;
          const portfolioTop = portfolio.offsetTop;
          const contactTop = contact.offsetTop;

          if (
            (scrollY >= aboutTop && scrollY < contactTop) ||
            (scrollY >= portfolioTop && scrollY < contactTop)
          ) {
            header.classList.add("header-dark");
          } else {
            header.classList.remove("header-dark");
          }
        }

        window.addEventListener("scroll", checkSection);
        checkSection();
      });

      document.addEventListener("DOMContentLoaded", function () {
        const wrappers = document.querySelectorAll(
          ".hero-cards-wrapper, .design-cards-wrapper, .cta-cards-wrapper"
        );

        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                entry.target.classList.add("visible");
              }
            });
          },
          { threshold: 0.2 }
        );

        wrappers.forEach((wrapper) => observer.observe(wrapper));

        // parallax
        const heroWrapper = document.querySelector(".hero-cards-wrapper");

        if (heroWrapper) {
          window.addEventListener("scroll", () => {
            let scrollPercent =
              window.scrollY /
              (document.body.scrollHeight - window.innerHeight);
            let parallaxOffset = Math.max(
              -20,
              Math.min(20, (scrollPercent - 0.05) * 400)
            );

            heroWrapper.style.transform = `translateY(${parallaxOffset}px)`;
          });
        }
      });



        document.addEventListener("DOMContentLoaded", function () {
        const formWrapper = document.querySelector(".w-form");
        const form = document.querySelector("form");
        const resetBtn = document.querySelector(".reset-form-btn");

        if (formWrapper && form && resetBtn) {
          resetBtn.addEventListener("click", function () {
            form.reset();
            formWrapper.querySelector(".w-form-done").style.display = "none";
            formWrapper.querySelector(".w-form-fail").style.display = "none";
            form.style.display = "flex";
          });
        }
      });