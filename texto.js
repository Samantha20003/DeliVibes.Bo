document.addEventListener("DOMContentLoaded", () => {
  const frases = [
    "Deléitate con cada bocado y cada historia.",
    "Sabores que alegran el alma y el paladar.",
    "Cada detalle, una experiencia inolvidable.",
    "Siente la pasión en cada creación.",
    "Tu momento dulce, siempre DeliVibe."
  ];

  const fraseElemento = document.getElementById("frase-cambiable");
  let index = 0;

  function cambiarFrase() {
    fraseElemento.style.opacity = 0; // fade out
    setTimeout(() => {
      index = (index + 1) % frases.length;
      fraseElemento.textContent = frases[index];
      fraseElemento.style.opacity = 1; // fade in
    }, 1000);
  }

  setInterval(cambiarFrase, 5000);
});
