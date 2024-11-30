document.addEventListener("DOMContentLoaded", () => {
    // Navigation Links
    const navLinks = document.querySelectorAll("nav ul li a");
    navLinks.forEach((link) => {
        const text = link.textContent.trim();
        if (text === "Blog") {
            link.addEventListener("click", (event) => {
                event.preventDefault();
                document.getElementById("news-section").scrollIntoView({ behavior: "smooth" });
            });
        } else if (text === "Types") {
            link.addEventListener("click", (event) => {
                event.preventDefault();
                document.getElementById("type-section").scrollIntoView({ behavior: "smooth" });
            });
        }
        else if (text === "About") {
            link.addEventListener("click", (event) => {
                event.preventDefault();
                document.getElementById("about-section").scrollIntoView({behaviour: "smooth"});
            });
        }
    });

    // Product Links
    const productMappings = {
        "lakers-item": "jersey lakers.html?jersey=LAKERS",
        "miami-heat-item": "miami-heats-jersey.html?jersey=MIAMIHEAT",
        "charlotte-hornets-item": "hornets jersey.html?jersey=CHARLOTTEHORNETS",
        "chicago-bulls-item": "Bulls jersey.html?jersey=CHICAGOBULLS",
        "gsw-item": "gsw.html?jersey=GSW",
        "okc-item": "OKC.html?jersey=OKC",
        "Wilson-item": "Wilson ball.html?ball=WILSON",
        "kemmler-item": "Kemmler ball.html?ball=kemmler",
        "Molten-item": "Molten ball.html?ball=molten",
        "Spalding-item": "Spalding ball.html?ball=spalding",
        "Hype-item": "Hype ball.html?ball=hype",
        "Psyche-item": "Psyche ball.html?ball=psyche",
        "curry-item": "curries.html?shoe=curries",
        "giannis-item": "giannis.html?shoe=giannis",
        "zoom-item": "Zoom.html?shoe=zoom",
        "wade-item": "Wade.html?shoe=wade",
        "kyrie-item": "Kyries.html?shoe=kyries",
        "lamelo-item": "lamelos.html?shoe=Lamelos"
    };
    Object.keys(productMappings).forEach((id) => {
        const item = document.getElementById(id);
        if (item) {
            item.addEventListener("click", () => {
                window.location.href = productMappings[id];
            });
        }
    });

    // Redirect Filter Buttons
    const filterButtons = {
        jerseys: "index.html",
        balls: "Homepage Balls.html",
        shoes: "Homepage shoes.html"
    };
    document.querySelectorAll(".filter-buttons button").forEach((button, index) => {
        button.addEventListener("click", () => {
            const pages = Object.values(filterButtons);
            const targetUrl = pages[index] + "#type-section";
            window.location.href = targetUrl;
        });
    });


    // Size Option Selection
    const sizeButtons = document.querySelectorAll(".size-option");
    sizeButtons.forEach(button => {
        button.addEventListener("click", () => {
            sizeButtons.forEach(btn => btn.classList.remove("selected"));
            button.classList.add("selected");
        });
    });

    // Redirect Home Link
    const homeLink = document.querySelector(".nav ul li a[href='#']");
    if (homeLink) {
        homeLink.addEventListener("click", (event) => {
            event.preventDefault();
            window.location.assign("index.html");
        });
    }
});
