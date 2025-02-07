// MENU SHOW //
document.addEventListener("DOMContentLoaded", () => {
    const toggle = document.getElementById("nav-toggle"),
          nav = document.getElementById("nav-menu"),
          navLinks = document.querySelectorAll(".nav__link");

    // แสดง/ซ่อนเมนู
    if (toggle && nav) {
        toggle.addEventListener("click", () => nav.classList.toggle("show"));
    }

    // ปิดเมนูเมื่อคลิกที่ลิงก์ //
    navLinks.forEach(link => {
        link.addEventListener("click", (event) => {
            // Prevent default link behavior
            event.preventDefault();
            
            // Get the target section to scroll to
            const target = document.querySelector(link.getAttribute("href"));
            
            // Scroll to the target section smoothly
            target.scrollIntoView({ behavior: "smooth", block: "start" });
    
            // Close the menu
            nav.classList.remove("show");
        });
    });
    

    // SCROLL SECTIONS ACTIVE LINK //
    const sections = document.querySelectorAll("section[id]");

    const scrollActive = () => {
        const scrollY = window.scrollY;

        sections.forEach(section => {
            const sectionHeight = section.offsetHeight,
                  sectionTop = section.offsetTop - 58,
                  sectionId = section.getAttribute("id"),
                  sectionLink = document.querySelector(`.nav__menu a[href*="${sectionId}"]`);

            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                sectionLink.classList.add("active-link");
            } else {
                sectionLink.classList.remove("active-link");
            }
        });
    };

    window.addEventListener("scroll", scrollActive);

    // SCROLL REVEAL ANIMATION //
    if (typeof ScrollReveal !== "undefined") {
        const sr = ScrollReveal({
            origin: "top",
            distance: "60px",
            duration: 2000,
            delay: 200
        });

        sr.reveal(".home__data, .about__img, .skills__subtitle, .skills__text");
        sr.reveal(".home__img, .about__subtitle, .about__text, .skills__img", { delay: 400 });
        sr.reveal(".home__social-icon", { interval: 200 });
        sr.reveal(".skills__data, .work__img, .contact__input", { interval: 200 });
    }
});
