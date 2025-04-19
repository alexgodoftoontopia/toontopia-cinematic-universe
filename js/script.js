document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll("a");
    links.forEach(link => {
        const href = link.getAttribute("href");
        if (href && href.endsWith(".html")) {
            fetch(href, { method: "HEAD" })
                .then(response => {
                    if (!response.ok) {
                        link.classList.add("link-not-found");
                    }
                })
                .catch(() => {
                    link.classList.add("link-not-found");
                });
        }
    });
});
