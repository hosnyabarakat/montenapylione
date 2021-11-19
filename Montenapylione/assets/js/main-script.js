console.log("Hello everyone!!!");

// Start Show GO To Top Button Function
const goToTp = document.querySelector(".go-to-top");

let windowY = window.scrollY;
console.log(windowY);
const showGoToTopBtn = () => {
  let longDown = window.scrollY;
  console.log(longDown);
  if (longDown <= 500) {
    goToTp.style.display = "none";
  } else {
    goToTp.style.display = "block";
  }
};
window.addEventListener("scroll", (e) => {
  showGoToTopBtn();
});
// End Show GO To Top Button Function
//////////////////////////////////////////////
// Gallery Function
const prev = document.querySelector("#prev");
const next = document.querySelector("#next");

const beautyContainer = document.querySelector(".beauty .container");
const gallery = document.querySelector(".gallery");
const slider = document.querySelector(".slider");
const slidesContainer = document.querySelectorAll(".slide");
const slides = document.querySelectorAll(".slide img");
const samples = document.querySelector(".samples");
const previewsContainer = document.querySelector("#bullets-container");
const previews = document.querySelectorAll("#bullets-container div");
const active = document.querySelectorAll(".active-slide");
let counter = 0;
let slideWidth = slidesContainer[0].offsetWidth;
let previewWidth = previews[0].offsetWidth;
let slideWidth2 = slider.offsetWidth / 11;
let beautyContainerWidth = beautyContainer.offsetWidth;
let galleryWidth = gallery.offsetWidth;

slides[0].classList.add("active-slide");
previews[0].classList.add("active-slide");

function showArrow() {
  if (slides[0].classList.contains("active-slide")) {
    prev.style.display = "none";
    next.style.display = "block";
  } else if (slides[slides.length - 1].classList.contains("active-slide")) {
    next.style.display = "none";
    prev.style.display = "block";
  } else {
    prev.style.display = "block";
    next.style.display = "block";
  }
}

// function movePreviews() {
//   if (counter >= 7) {
//     previewsContainer.style.transform = "translateX(-35%)";
//   } else {
//     previewsContainer.style.transform = "translateX(0)";
//   }
// }

const removeActiveSlide = () => {
  slides.forEach((slide) => {
    slide.classList.remove("active-slide");
  });
};

const removeActivePreview = () => {
  previews.forEach((preview) => {
    preview.classList.remove("active-slide");
  });
};
showArrow();

const toNext = () => {
  removeActiveSlide();
  removeActivePreview();
  prev.style.display = "block";
  counter++;
  // movePreviews();
  showArrow();
  if (counter == 10) {
    next.style.display = "none";
  }
  if (counter < slides.length && counter != slides.length) {
    let x = (slideWidth2 * counter + 2) * -1;
    slider.style.transform = `translateX(${x}px)`;
    slides[counter].classList.add("active-slide");
    previews[counter].classList.add("active-slide");
  }
};

const toPrev = () => {
  removeActiveSlide();
  removeActivePreview();
  counter--;
  // movePreviews();
  let x = (slideWidth2 * counter + 2) * -1;
  slides[counter].classList.add("active-slide");
  previews[counter].classList.add("active-slide");
  slider.style.transform = `translateX(${x}px)`;
  showArrow();
};

previews.forEach((preview, num, previews) => {
  previews[num].onclick = () => {
    removeActiveSlide();
    removeActivePreview();
    let currentPreview = +previews[num].getAttribute("data-preview");
    let x = slideWidth2 * (currentPreview - 1) * -1;

    slider.style.transform = `translateX(${x}px)`;
    slides[currentPreview - 1].classList.add("active-slide");
    previews[currentPreview - 1].classList.add("active-slide");
    if (currentPreview == 1) {
      counter = 0;
    } else {
      counter = currentPreview - 1;
    }
    showArrow();
    // movePreviews();
  };
});
next.onclick = toNext;
prev.onclick = toPrev;
