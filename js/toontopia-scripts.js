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

      // Selecciona solo .card que NO tengan la clase .special-card
document.querySelectorAll('.gallery .card:not(.special-card)').forEach((card, i) => {
  const num = document.createElement('div');
  num.className = 'episodio-numero';
  num.textContent = `Episodio ${i + 1}`;
  card.prepend(num);
});
