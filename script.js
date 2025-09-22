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
