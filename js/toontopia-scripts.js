 document.addEventListener("DOMContentLoaded", function() {
        const secciones = document.querySelectorAll("section.scroll-horizontal");
        let episodioGlobal = 1;

        secciones.forEach(seccion => {
            const cards = seccion.querySelectorAll(".card");
            cards.forEach(card => {
                const p = document.createElement("p");
                p.textContent = `Episodio ${episodioGlobal}`;
                card.querySelector("a").appendChild(p);
                episodioGlobal++;
            });
        });
    });