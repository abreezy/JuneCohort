document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll("#nav a");

    navLinks.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault(); // Prevent default link behavior

            const targetId = link.getAttribute("href"); // Get the target ID from the link's href attribute
            const targetElement = document.querySelector(targetId); // Get the target element by ID

            if (targetElement) {
                // Scroll to the target element smoothly
                targetElement.scrollIntoView({
                    behavior: "smooth"
                });
            }
        });
    });
});