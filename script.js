// ======================================
// MOBILE MENU
// ======================================

const menuButton = document.querySelector(".menu-button");
const nav = document.querySelector(".nav");

if (menuButton && nav) {

    menuButton.addEventListener("click", () => {

        menuButton.classList.toggle("active");
        nav.classList.toggle("mobile-open");
        document.body.classList.toggle("menu-open");

    });

    nav.querySelectorAll("a").forEach((link) => {

        link.addEventListener("click", () => {

            menuButton.classList.remove("active");
            nav.classList.remove("mobile-open");
            document.body.classList.remove("menu-open");

        });

    });

}


// ======================================
// HEADER SCROLL
// ======================================

const header =
    document.querySelector(".header");


window.addEventListener(
    "scroll",
    () => {

        if (
            window.scrollY > 30
        ) {

            header.classList.add(
                "scrolled"
            );

        } else {

            header.classList.remove(
                "scrolled"
            );

        }

    }
);



// ======================================
// SCROLL REVEAL
// ======================================

const revealElements =
    document.querySelectorAll(
        ".reveal, .reveal-image"
    );


const observer =
    new IntersectionObserver(
        (entries) => {

            entries.forEach(
                (entry) => {

                    if (
                        entry.isIntersecting
                    ) {

                        entry.target
                            .classList
                            .add("active");

                    }

                }
            );

        },

        {
            threshold: 0.12
        }
    );


revealElements.forEach(
    (element) => {

        observer.observe(
            element
        );

    }
);



// ======================================
// ACTIVE NAVIGATION
// ======================================

const sections =
    document.querySelectorAll(
        "#about, #projects, #education, #contact"
    );


const navLinks =
    document.querySelectorAll(
        ".nav a"
    );


const navObserver =
    new IntersectionObserver(

        (entries) => {

            entries.forEach(
                (entry) => {

                    if (
                        !entry.isIntersecting
                    ) {
                        return;
                    }


                    navLinks.forEach(
                        (link) => {

                            link.classList
                                .remove(
                                    "active"
                                );


                            if (
                                link.getAttribute(
                                    "href"
                                ) ===
                                `#${entry.target.id}`
                            ) {

                                link.classList
                                    .add(
                                        "active"
                                    );

                            }

                        }
                    );

                }
            );

        },

        {
            threshold: 0.4
        }

    );


sections.forEach(
    (section) => {

        navObserver.observe(
            section
        );

    }
);



// ======================================
// DESKTOP PROJECT IMAGE MOVEMENT
// ======================================

if (
    window.matchMedia(
        "(min-width: 769px)"
    ).matches
) {

    const projectVisuals =
        document.querySelectorAll(
            ".project-visual"
        );


    projectVisuals.forEach(
        (visual) => {

            const image =
                visual.querySelector(
                    "img"
                );


            visual.addEventListener(
                "mousemove",
                (event) => {

                    const rect =
                        visual
                            .getBoundingClientRect();


                    const x =
                        (
                            event.clientX -
                            rect.left
                        ) /
                        rect.width -
                        0.5;


                    const y =
                        (
                            event.clientY -
                            rect.top
                        ) /
                        rect.height -
                        0.5;


                    image.style.transform =
                        `
                        scale(1.04)
                        translate(
                            ${x * 7}px,
                            ${y * 7}px
                        )
                        `;

                }
            );


            visual.addEventListener(
                "mouseleave",
                () => {

                    image.style.transform =
                        "";

                }
            );

        }
    );

}