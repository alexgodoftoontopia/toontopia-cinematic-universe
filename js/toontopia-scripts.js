// ...existing code...
document.addEventListener("DOMContentLoaded", () => {
  // eliminar numeraciones previas para evitar duplicados
  document.querySelectorAll('.episodio-numero').forEach(n => n.remove());

  // seleccionar todas las .card que NO sean especiales, en el orden DOM
  const cards = document.querySelectorAll('section.gallery .card:not(.special-card)');

  cards.forEach((card, i) => {
    const num = document.createElement('p');
    num.className = 'episodio-numero';
    num.textContent = `Episodio ${i + 1}`; // empieza en 1 desde la primera tarjeta no especial
    const titulo = card.querySelector('h2');
    if (titulo) {
      titulo.insertAdjacentElement('afterend', num);
    } else {
      card.prepend(num);
    }
  });
});
// ...existing code...