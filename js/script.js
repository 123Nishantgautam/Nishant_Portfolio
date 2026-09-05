// ========================================
// NISHANT GAUTAM PORTFOLIO
// MAIN JAVASCRIPT
// ========================================


// ========================================
// 1. SELECT ELEMENTS
// ========================================

const navLinks = document.querySelectorAll(".nav-menu a");

const sections = document.querySelectorAll("main section");

const navbar = document.querySelector(".navbar");


// ========================================
// 2. SMOOTH SCROLLING
// ========================================

navLinks.forEach((link) => {

    link.addEventListener("click", function (event) {

        const targetId = this.getAttribute("href");

        // Only work with section links
        if (!targetId || !targetId.startsWith("#")) {
            return;
        }

        const targetSection = document.querySelector(targetId);

        if (targetSection) {

            event.preventDefault();

            targetSection.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }

    });

});


// ========================================
// 3. ACTIVE NAVIGATION
// ========================================

function updateActiveNavigation() {

    let currentSection = "";

    sections.forEach((section) => {

        const sectionTop = section.offsetTop;

        const sectionHeight = section.offsetHeight;

        if (
            window.scrollY >=
            sectionTop - sectionHeight * 0.25
        ) {

            currentSection = section.getAttribute("id");

        }

    });


    navLinks.forEach((link) => {

        link.classList.remove("active");

        const linkTarget = link.getAttribute("href");

        if (linkTarget === `#${currentSection}`) {

            link.classList.add("active");

        }

    });

}


// Run when scrolling

window.addEventListener(
    "scroll",
    updateActiveNavigation
);


// Run once when page loads

updateActiveNavigation();


// ========================================
// 4. NAVBAR SCROLL EFFECT
// ========================================

function updateNavbar() {

    if (window.scrollY > 50) {

        navbar.classList.add("navbar-scrolled");

    } else {

        navbar.classList.remove("navbar-scrolled");

    }

}


window.addEventListener(
    "scroll",
    updateNavbar
);


// ========================================
// 5. SCROLL REVEAL ANIMATION
// ========================================

const revealElements = document.querySelectorAll(
    ".section-heading, " +
    ".about-content, " +
    ".skill-card, " +
    ".project-featured, " +
    ".project-card, " +
    ".timeline-item, " +
    ".certificate-card, " +
    ".learning-card, " +
    ".contact-container"
);


const revealObserver = new IntersectionObserver(

    function (entries, observer) {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add(
                    "reveal-visible"
                );

                observer.unobserve(entry.target);

            }

        });

    },

    {
        threshold: 0.12
    }

);


revealElements.forEach((element) => {

    element.classList.add("reveal");

    revealObserver.observe(element);

});


// ========================================
// 6. EMPTY LINK PROTECTION
// ========================================

const emptyLinks = document.querySelectorAll(
    'a[href="#"]'
);


emptyLinks.forEach((link) => {

    link.addEventListener("click", function (event) {

        event.preventDefault();

    });

});


// ========================================
// 7. PAGE LOADED
// ========================================

window.addEventListener("load", function () {

    document.body.classList.add("page-loaded");

});


// ========================================
// 8. CONSOLE MESSAGE
// ========================================

console.log(
    "Nishant Gautam Portfolio Loaded Successfully 🚀"
);

// ========================================
// 9. MOBILE NAVIGATION
// ========================================

const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".nav-menu");

if (menuToggle && navMenu) {

    menuToggle.addEventListener("click", function () {

        navMenu.classList.toggle("mobile-open");

        if (navMenu.classList.contains("mobile-open")) {

            menuToggle.textContent = "✕";
            menuToggle.setAttribute(
                "aria-label",
                "Close navigation menu"
            );

        } else {

            menuToggle.textContent = "☰";
            menuToggle.setAttribute(
                "aria-label",
                "Open navigation menu"
            );

        }

    });


    // Close menu after clicking a navigation link

    navMenu.querySelectorAll("a").forEach((link) => {

        link.addEventListener("click", function () {

            navMenu.classList.remove("mobile-open");

            menuToggle.textContent = "☰";

            menuToggle.setAttribute(
                "aria-label",
                "Open navigation menu"
            );

        });

    });

}