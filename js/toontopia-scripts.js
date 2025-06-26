document.addEventListener("DOMContentLoaded", function () {
        const galerias = document.querySelectorAll("section.gallery");
        let episodioGlobal = 1;

        galerias.forEach(galeria => {
          const cards = galeria.querySelectorAll(".card");
          cards.forEach(card => {
            const titulo = card.querySelector("h2");
            if (titulo) {
              const numero = document.createElement("p");
              numero.textContent = `Episodio ${episodioGlobal++}`;
              numero.classList.add("episodio-numero");
              titulo.insertAdjacentElement("afterend", numero);
            }
          });
        });
      });
