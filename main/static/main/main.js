document.addEventListener("DOMContentLoaded", function () {
  const wrapper = document.getElementById("slideWrapper");
  const slides = Array.from(wrapper.children);
  const slideCount = slides.length;

  // ✅ 첫 슬라이드 복제 후 맨 뒤에 붙임
  const firstClone = slides[0].cloneNode(true);
  wrapper.appendChild(firstClone);

  let index = 0;

  setInterval(() => {
    index++;
    wrapper.style.transition = "transform 1s ease-in-out";
    wrapper.style.transform = `translateX(-${index * 100}%)`;

    if (index === slideCount) {
      setTimeout(() => {
        wrapper.style.transition = "none";
        wrapper.style.transform = "translateX(0%)";
        index = 0;
      }, 1000);
    }
  }, 4000);
});
