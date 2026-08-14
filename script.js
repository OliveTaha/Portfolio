/* =====================================================
   TYPING ANIMATION
===================================================== */

const typingText = document.getElementById("typing-text");

const words = [
    "CSE Student",
    "Web Developer",
    "Programmer",
    "Problem Solver",
    "Project Maker"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;


function typeEffect() {

    const currentWord = words[wordIndex];

    if (!deleting) {

        typingText.textContent =
            currentWord.substring(0, charIndex + 1);

        charIndex++;

        if (charIndex === currentWord.length) {

            deleting = true;

            setTimeout(typeEffect, 1500);

            return;
        }

    } else {

        typingText.textContent =
            currentWord.substring(0, charIndex - 1);

        charIndex--;

        if (charIndex === 0) {

            deleting = false;

            wordIndex++;

            if (wordIndex >= words.length) {
                wordIndex = 0;
            }

        }

    }

    setTimeout(
        typeEffect,
        deleting ? 50 : 100
    );
}

typeEffect();


/* =====================================================
   MOBILE MENU
===================================================== */

const menuBtn = document.getElementById("menuBtn");

const navMenu = document.getElementById("nav-menu");

menuBtn.addEventListener("click", () => {

    navMenu.classList.toggle("active");

});


/* Close menu after clicking */

document.querySelectorAll("#nav-menu a").forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("active");

    });

});


/* =====================================================
   SCROLL TO TOP
===================================================== */

const scrollTop = document.getElementById("scrollTop");

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        scrollTop.classList.add("show");

    } else {

        scrollTop.classList.remove("show");

    }

});


scrollTop.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


/* =====================================================
   REVEAL ANIMATION
===================================================== */

const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";

                entry.target.style.transform =
                    "translateY(0)";

            }

        });

    },
    {
        threshold: 0.15
    }
);


document.querySelectorAll(
    ".section-title, .about-container, .timeline-item, .skill-card, .project-card, .hobby-card, .contact-container"
).forEach(element => {

    element.style.opacity = "0";

    element.style.transform = "translateY(40px)";

    element.style.transition =
        "opacity 0.8s ease, transform 0.8s ease";

    observer.observe(element);

});