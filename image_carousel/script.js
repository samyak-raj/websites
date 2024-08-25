function carousel() {
    let currentIndex = 0;
    const images = document.querySelectorAll(".carousel-image");
    const spanDiv = document.querySelector(".span-div");
    let dots = [];
  
    function updateActiveImage(index) {
      images.forEach((img, i) => {
        if (i === index) {
          img.classList.add("active");
          dots[i].classList.add("active-dot");
        } else {
          img.classList.remove("active");
          dots[i].classList.remove("active-dot");
        }
      });
    }
  
    function createDots() {
      images.forEach((_, i) => {
        const dot = document.createElement("span");
        dot.classList.add("dot");
        dot.addEventListener("click", () => showImage(i));
        spanDiv.appendChild(dot);
        dots.push(dot);
      });
    }
  
    function showImage(index) {
      currentIndex = index;

      if (currentIndex < 0){
        currentIndex = images.length - 1;
      }

      if (currentIndex > images.length - 1){
        currentIndex = 0;
      }

      updateActiveImage(currentIndex);
    }
  
    function setupNavigation() {
      const leftBtn = document.getElementById("leftbtn");
      const rightBtn = document.getElementById("rightbtn");
  
      leftBtn.addEventListener("click", () => showImage(currentIndex - 1));
      rightBtn.addEventListener("click", () => showImage(currentIndex + 1));
    }
  
    function initializeCarousel() {
      createDots();
      setupNavigation();
      showImage(currentIndex);
    }
  
    initializeCarousel();
  }
  
  carousel();
  