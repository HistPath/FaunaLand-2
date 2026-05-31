/* =====================================================
   FAUNALAND - SCRIPT.JS
   JavaScript sederhana untuk:
   1. Hamburger Menu
   2. Smooth Scroll
   3. Reveal Animation
   4. Fallback Gambar
   5. Navbar Active Link
   6. Sidebar LMS Mobile
===================================================== */

/* =====================================================
   HAMBURGER MENU
===================================================== */

const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");

if (hamburger && navMenu) {

    hamburger.addEventListener("click", () => {

        navMenu.classList.toggle("active");

    });

}

/* =====================================================
   TUTUP MENU MOBILE SETELAH DIKLIK
===================================================== */

const navLinks = document.querySelectorAll(".nav-menu a");

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        if (navMenu) {
            navMenu.classList.remove("active");
        }

    });

});

/* =====================================================
   SMOOTH SCROLL
===================================================== */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e) {

        const targetId = this.getAttribute("href");

        if (targetId.length > 1) {

            const targetSection = document.querySelector(targetId);

            if (targetSection) {

                e.preventDefault();

                targetSection.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }

        }

    });

});

/* =====================================================
   REVEAL ANIMATION
===================================================== */

const revealElements = document.querySelectorAll(".reveal");

function revealOnScroll() {

    const windowHeight = window.innerHeight;

    revealElements.forEach(element => {

        const elementTop =
            element.getBoundingClientRect().top;

        const revealPoint = 120;

        if (elementTop < windowHeight - revealPoint) {

            element.classList.add("active");

        }

    });

}

window.addEventListener("scroll", revealOnScroll);

window.addEventListener("load", revealOnScroll);

/* =====================================================
   FALLBACK GAMBAR
===================================================== */

const images = document.querySelectorAll("img");

images.forEach(img => {

    img.addEventListener("error", function() {

        const fallback = document.createElement("div");

        fallback.className = "image-fallback";

        fallback.innerHTML =
            "🖼️ Gambar belum ditambahkan";

        this.parentNode.replaceChild(
            fallback,
            this
        );

    });

});

/* =====================================================
   NAVBAR ACTIVE LINK
===================================================== */

const sections = document.querySelectorAll("section");

function updateActiveMenu() {

    let currentSection = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 150;

        const sectionHeight =
            section.offsetHeight;

        if (
            pageYOffset >= sectionTop &&
            pageYOffset < sectionTop + sectionHeight
        ) {
            currentSection = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active-link");

        const href =
            link.getAttribute("href");

        if (href === "#" + currentSection) {

            link.classList.add("active-link");

        }

    });

}

window.addEventListener(
    "scroll",
    updateActiveMenu
);

/* =====================================================
   TOMBOL KEMBALI KE ATAS
===================================================== */

/*
   Dibuat otomatis menggunakan JavaScript
*/

const backToTop =
document.createElement("button");

backToTop.innerHTML = "↑";

backToTop.id = "backToTop";

document.body.appendChild(backToTop);

/* Styling sederhana */

backToTop.style.position = "fixed";
backToTop.style.bottom = "20px";
backToTop.style.right = "20px";
backToTop.style.width = "50px";
backToTop.style.height = "50px";
backToTop.style.border = "none";
backToTop.style.borderRadius = "50%";
backToTop.style.cursor = "pointer";
backToTop.style.fontSize = "20px";
backToTop.style.display = "none";
backToTop.style.zIndex = "999";
backToTop.style.background = "#6bb8ff";
backToTop.style.color = "#ffffff";
backToTop.style.boxShadow =
    "0 5px 15px rgba(0,0,0,0.2)";

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {

        backToTop.style.display = "block";

    } else {

        backToTop.style.display = "none";

    }

});

backToTop.addEventListener("click", () => {

    window.scrollTo({

        top: 0,
        behavior: "smooth"

    });

});

/* =====================================================
   SIDEBAR LMS (BELAJAR.HTML)
===================================================== */

const sidebarToggle =
document.getElementById("sidebarToggle");

const sidebar =
document.getElementById("sidebar");

if (sidebarToggle && sidebar) {

    sidebarToggle.addEventListener(
        "click",
        () => {

            sidebar.classList.toggle(
                "sidebar-open"
            );

        }
    );

}

/* =====================================================
   PESAN CONSOLE
===================================================== */

console.log(
    "%cFaunaLand",
    "font-size:20px;font-weight:bold;color:green;"
);

console.log(
    "Menjelajah Alam, Menjaga Kehidupan"
);

/* =====================================================
   LOADING SEDERHANA
===================================================== */

window.addEventListener("load", () => {

    document.body.classList.add(
        "page-loaded"
    );

});

/* =====================================================
   ANIMASI HOVER CARD
===================================================== */

const cards = document.querySelectorAll(
    ".card, .feature-card, .team-card"
);

cards.forEach(card => {

    card.addEventListener(
        "mouseenter",
        () => {

            card.style.transform =
                "translateY(-6px)";

        }
    );

    card.addEventListener(
        "mouseleave",
        () => {

            card.style.transform =
                "translateY(0px)";

        }
    );

});

/* =====================================================
   LMS PLACEHOLDER
===================================================== */

const contentPlaceholder =
document.getElementById(
    "content-placeholder"
);

if (contentPlaceholder) {

    console.log(
        "Area materi siap dikembangkan."
    );

}

/* =====================================================
   SELESAI
===================================================== */