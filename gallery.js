/* ==========================================
   YES-O Digital Hub
   Gallery JavaScript
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* ==========================
       Search Gallery
    ========================== */

    const gallerySearch = document.getElementById("gallerySearch");

    if (gallerySearch) {

        gallerySearch.addEventListener("keyup", function () {

            const value = this.value.toLowerCase();

            document.querySelectorAll(".gallery-card").forEach(card => {

                const text = card.textContent.toLowerCase();

                card.style.display = text.includes(value)
                    ? "block"
                    : "none";

            });

        });

    }

    /* ==========================
       Gallery Lightbox
    ========================== */

    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightboxImg");
    const closeBtn = document.getElementById("closeLightbox");

    if (lightbox && lightboxImg) {

        document.querySelectorAll(".gallery-item").forEach(image => {

            image.addEventListener("click", () => {

                lightbox.style.display = "flex";
                lightboxImg.src = image.src;
                lightboxImg.alt = image.alt;

            });

        });

    }

    if (closeBtn) {

        closeBtn.addEventListener("click", () => {

            lightbox.style.display = "none";

        });

    }

    if (lightbox) {

        lightbox.addEventListener("click", function (e) {

            if (e.target === lightbox) {

                lightbox.style.display = "none";

            }

        });

    }

});


