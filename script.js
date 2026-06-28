/* ==========================================
   YES-O Digital Hub
   Main JavaScript
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* ==========================
       Mobile Navigation
    ========================== */

    const menu = document.getElementById("menu-toggle");
    const nav = document.getElementById("nav-links");

    if (menu && nav) {

        menu.addEventListener("click", () => {
            nav.classList.toggle("show");
        });

        document.querySelectorAll("#nav-links a").forEach(link => {
            link.addEventListener("click", () => {
                nav.classList.remove("show");
            });
        });

    }

    /* ==========================
       Generic Search Function
    ========================== */

    function setupSearch(inputId, cardClass) {

        const input = document.getElementById(inputId);

        if (!input) return;

        input.addEventListener("keyup", function () {

            const value = this.value.toLowerCase();

            document.querySelectorAll("." + cardClass).forEach(card => {

                card.style.display =
                    card.textContent.toLowerCase().includes(value)
                        ? ""
                        : "none";

            });

        });

    }

    setupSearch("officerSearch", "officer-card");
    setupSearch("committeeSearch", "committee-card");
    setupSearch("activitySearch", "activity-card");
    setupSearch("newsSearch", "news-card");
    setupSearch("gallerySearch", "gallery-card");

    /* ==========================
       Gallery Lightbox
    ========================== */

    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightboxImg");
    const closeLightbox = document.getElementById("closeLightbox");

    if (lightbox && lightboxImg && closeLightbox) {

        document.querySelectorAll(".gallery-item").forEach(img => {

            img.addEventListener("click", () => {

                lightbox.style.display = "flex";
                lightboxImg.src = img.src;

            });

        });

        closeLightbox.addEventListener("click", () => {

            lightbox.style.display = "none";

        });

        lightbox.addEventListener("click", e => {

            if (e.target === lightbox) {

                lightbox.style.display = "none";

            }

        });

    }

    /* ==========================
       Animated Counters
    ========================== */

    function animateValue(id, start, end, duration) {

        const obj = document.getElementById(id);

        if (!obj) return;

        let current = start;

        const increment = (end - start) / 100;

        const timer = duration / 100;

        const counter = setInterval(() => {

            current += increment;

            if (current >= end) {

                current = end;
                clearInterval(counter);

            }

            obj.textContent = Math.floor(current);

        }, timer);

    }

    animateValue("members", 0, 15, 2000);
    animateValue("trees", 0, 1200, 2500);
    animateValue("events", 0, 48, 1800);
    animateValue("campaigns", 0, 35, 1800);

    /* ==========================
       Back To Top
    ========================== */

    const topBtn = document.getElementById("backToTop");

    if (topBtn) {

        window.addEventListener("scroll", () => {

            topBtn.style.display =
                window.scrollY > 300 ? "block" : "none";

        });

        topBtn.addEventListener("click", () => {

            window.scrollTo({

                top: 0,
                behavior: "smooth"

            });

        });

    }

    /* ==========================
       Fade Animation
    ========================== */

    if ("IntersectionObserver" in window) {

        const observer = new IntersectionObserver(entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                }

            });

        });

        document.querySelectorAll("section").forEach(section => {

            section.classList.add("fade");
            observer.observe(section);

        });

    }

    /* ==========================
       Dynamic Greeting
    ========================== */

    const welcome = document.getElementById("welcomeMessage");

    if (welcome) {

        const hour = new Date().getHours();

        if (hour < 12) {

            welcome.textContent =
                "🌞 Good Morning! Welcome to YES-O Digital Hub";

        } else if (hour < 18) {

            welcome.textContent =
                "🌿 Good Afternoon! Welcome to YES-O Digital Hub";

        } else {

            welcome.textContent =
                "🌙 Good Evening! Welcome to YES-O Digital Hub";

        }

    }

    /* ==========================
       Dark Mode
    ========================== */

    const darkBtn = document.getElementById("darkToggle");

    if (localStorage.getItem("theme") === "dark") {

        document.body.classList.add("dark");

        if (darkBtn) {

            darkBtn.textContent = "☀️";

        }

    }

    if (darkBtn) {

        darkBtn.addEventListener("click", () => {

            document.body.classList.toggle("dark");

            const dark = document.body.classList.contains("dark");

            localStorage.setItem(
                "theme",
                dark ? "dark" : "light"
            );

            darkBtn.textContent = dark ? "☀️" : "🌙";

        });

    }

    /* ==========================
       Hero Slider
    ========================== */

    const slides = document.querySelectorAll(".slide");

    if (slides.length > 0) {

        let current = 0;

        setInterval(() => {

            slides[current].classList.remove("active");

            current = (current + 1) % slides.length;

            slides[current].classList.add("active");

        }, 4000);

    }

});
