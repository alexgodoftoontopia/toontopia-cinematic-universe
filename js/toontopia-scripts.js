// Espera a que todo el contenido del DOM esté completamente cargado
    document.addEventListener("DOMContentLoaded", function() {

        // Selecciona todas las secciones que tienen desplazamiento horizontal (donde están los episodios)
        const secciones = document.querySelectorAll("section.scroll-horizontal");

        // Variable que lleva el conteo global de episodios (se usará para numerarlos)
        let episodioGlobal = 1;

        // Recorre cada sección (por ejemplo, Temporada 1, Temporada 2, etc.)
        secciones.forEach(seccion => {

            // Dentro de cada sección, selecciona todas las tarjetas de episodios (divs con clase .card)
            const cards = seccion.querySelectorAll(".card");

            // Recorre cada tarjeta individual
            cards.forEach(card => {

                // Crea un nuevo elemento <p> donde se escribirá "Episodio X"
                const p = document.createElement("p");

                // Establece el texto del párrafo con el número de episodio actual
                p.textContent = `Episodio ${episodioGlobal}`;

                // Inserta ese <p> al final del <a> dentro de la tarjeta
                card.querySelector("a").appendChild(p);

                // Aumenta el número de episodio global para el siguiente
                episodioGlobal++;
            });
        });
    });
