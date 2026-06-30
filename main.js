/* =========================
   THEME TOGGLE + SAVE THEME
========================= */

const toggleBtn = document.getElementById("themeToggle");
const html = document.documentElement;

/* Load Saved Theme */
const savedTheme = localStorage.getItem("theme");

if (savedTheme) {

    html.setAttribute("data-theme", savedTheme);

    if (toggleBtn) {

        toggleBtn.innerHTML =
            savedTheme === "dark"
                ? '<i class="fa-solid fa-moon"></i>'
                : '<i class="fa-solid fa-sun"></i>';

    }

}
/* =========================
        MOBILE MENU
========================= */

document.addEventListener("DOMContentLoaded", () => {

    const menuToggle = document.getElementById("menuToggle");
    const navLinks = document.getElementById("navLinks");

    if (!menuToggle || !navLinks) return;

    menuToggle.addEventListener("click", () => {

        navLinks.classList.toggle("active");

        const icon = menuToggle.querySelector("i");

        if (navLinks.classList.contains("active")) {
            icon.classList.remove("fa-bars");
            icon.classList.add("fa-xmark");
        } else {
            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");
        }

    });

});

/* =========================
   SMOOTH PAGE TRANSITION
========================= */

document.querySelectorAll("a").forEach(link => {

    const href = link.getAttribute("href");

    if (
        href &&
        !href.startsWith("#") &&
        !href.startsWith("javascript") &&
        !link.hasAttribute("target")
    ) {

        link.addEventListener("click", function (e) {

            e.preventDefault();

            document.body.classList.add("fade-out");

            setTimeout(() => {

                window.location.href = href;

            }, 300);

        });

    }

});

/* Theme Toggle Click */
if (toggleBtn) {

    toggleBtn.addEventListener("click", () => {

        const currentTheme =
            html.getAttribute("data-theme");

        if (currentTheme === "dark") {

            html.setAttribute("data-theme", "light");

            localStorage.setItem("theme", "light");

            toggleBtn.innerHTML =
                '<i class="fa-solid fa-sun"></i>';

        } else {

            html.setAttribute("data-theme", "dark");

            localStorage.setItem("theme", "dark");

            toggleBtn.innerHTML =
                '<i class="fa-solid fa-moon"></i>';

        }

    });

}
/* =========================
   TESTIMONIAL SWIPER
========================= */

const testimonialSlider =
    document.querySelector(".testimonialsSwiper");

if (testimonialSlider) {

    new Swiper(".testimonialsSwiper", {

        loop: true,
        speed: 800,
        spaceBetween: 24,

        autoplay: {
            delay: 3500,
            disableOnInteraction: false,
        },

        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },

        breakpoints: {

            0: {
                slidesPerView: 1,
            },

            768: {
                slidesPerView: 2,
            },

            1024: {
                slidesPerView: 3,
            }

        }

    });

}

/* =========================
   FAQ ACCORDION
========================= */

const faqButtons =
    document.querySelectorAll(".accordion-button");

faqButtons.forEach(button => {

    button.addEventListener("click", () => {

        const content =
            button.nextElementSibling;

        button.classList.toggle("active");

        content.classList.toggle("show");

        faqButtons.forEach(otherButton => {

            if (otherButton !== button) {

                otherButton.classList.remove("active");

                otherButton.nextElementSibling
                    .classList.remove("show");

            }

        });

    });

});

/* =========================
   SCROLL TO TOP
========================= */

const scrollTopBtn =
    document.getElementById("scrollTopBtn");

if (scrollTopBtn) {

    window.addEventListener("scroll", () => {

        if (window.scrollY > 300) {

            scrollTopBtn.classList.add("show");

        } else {

            scrollTopBtn.classList.remove("show");

        }

    });

    scrollTopBtn.addEventListener("click", () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

}

/* =========================
   SMOOTH SCROLL
========================= */

document.querySelectorAll('a[href^="#"]')
    .forEach(anchor => {

        anchor.addEventListener("click", function (e) {

            const target =
                document.querySelector(
                    this.getAttribute("href")
                );

            if (target) {

                e.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }

        });

    });

/* =========================
   ACTIVE HEADER ON SCROLL
========================= */

const header =
    document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

});

/*------  scrolling of index page -------*/
const gradientTexts = document.querySelectorAll(".gradient-text");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("visible");

        } else {

            entry.target.classList.remove("visible");

        }

    });

}, {
    threshold: 0.3
});

gradientTexts.forEach(text => {
    observer.observe(text);
});

/* ==================================================
   ACTIVE MENU ON SCROLL (SCROLLSPY)
================================================== */

document.addEventListener("DOMContentLoaded", () => {

    // All sections having an ID
    const sections = document.querySelectorAll("section[id]");

    // Navbar links
    const navLinks = document.querySelectorAll(".nav-links a");

    function updateActiveMenu() {

        // Default active section
        let currentSection = "home";

        sections.forEach(section => {

            const sectionTop = section.offsetTop - 150;
            const sectionHeight = section.offsetHeight;

            if (
                window.scrollY >= sectionTop &&
                window.scrollY < sectionTop + sectionHeight
            ) {
                currentSection = section.id;
            }

        });

        navLinks.forEach(link => {

            link.classList.remove("active");

            if (
                link.getAttribute("href") === `#${currentSection}`
            ) {
                link.classList.add("active");
            }

        });

    }

    // Run on page load
    updateActiveMenu();

    // Run while scrolling
    window.addEventListener("scroll", updateActiveMenu);

});