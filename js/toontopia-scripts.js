 document.addEventListener("DOMContentLoaded", function () {
      const secciones = document.querySelectorAll(".carousel-inner");
      let episodioGlobal = 1;
      secciones.forEach(seccion => {
        const cards = seccion.querySelectorAll(".card");
        cards.forEach(card => {
          const p = document.createElement("p");
          p.textContent = `Episodio ${episodioGlobal}`;
          p.className = "text-secondary m-0 px-3 pb-3";
          card.querySelector("a").appendChild(p);
          episodioGlobal++;
        });
      });
    });
