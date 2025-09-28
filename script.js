document.querySelectorAll(".carousel").forEach(carousel => {
  let imgs = carousel.querySelectorAll("img");
  let index = 0;
  let prev = carousel.querySelector(".prev");
  let next = carousel.querySelector(".next");

  function showImage(i) {
    imgs.forEach(img => img.classList.remove("active"));
    imgs[i].classList.add("active");
  }

  prev.addEventListener("click", () => {
    index = (index - 1 + imgs.length) % imgs.length;
    showImage(index);
  });

  next.addEventListener("click", () => {
    index = (index + 1) % imgs.length;
    showImage(index);
  });
});
// Seleciona todos os cards
const cards = document.querySelectorAll('.atuacao-card');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.animationPlayState = 'running';
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.2 }); // anima quando 20% do card estiver visível

cards.forEach(card => {
  card.style.animationPlayState = 'paused'; // pausa inicial
  observer.observe(card);
});
