"use strict";

function main() {
  const WIDTH = 800;
  const HEIGHT = 680;
  const pictureUrls = [];
  const picturePromises = [];
  let slideIndex = 0;
  let sliderInterval;

  function addScrollToTopButton() {
    const button = document.getElementById("scrollTop");
    button.addEventListener("click", function () {
      window.scrollTo(0, 0);
    });

    window.addEventListener("scroll", function () {
      if (window.pageYOffset > 200) {
        button.style.display = "block";
      } else {
        button.style.display = "none";
      }
    });
  }

  async function fetchPictureFromUnsplash(pictureUrls, width, height) {
    let picture;
    do {
      picture = await fetch(
        `https://source.unsplash.com/random/${width}x${height}`
      );
    } while (pictureUrls.includes(picture.url));

    pictureUrls.push(picture.url);
    return picture;
  }

  function createGalleryImage(imageUrl) {
    return new Promise((resolve) => {
      const image = new Image();
      image.src = imageUrl;
      image.onload = function () {
        const anchorElement = document.createElement("a");
        anchorElement.href = imageUrl;
        anchorElement.style.backgroundImage = `url(${imageUrl})`;
        $(anchorElement).magnificPopup({ type: "image" });
        resolve(anchorElement);
      };
    });
  }

  function loadDynamicGallery() {
    const galleryElement = document.querySelector(".gallery");

    for (let i = 0; i < 9; i++) {
      const portfolioElement = document.createElement("div");
      portfolioElement.classList.add("portfolio");
      galleryElement.append(portfolioElement);

      const width = portfolioElement.clientWidth;
      const height = (width * HEIGHT) / WIDTH;
      portfolioElement.style.minHeight = `${height}px`;

      // add an animated loader as a placeholder for the dynamic image
      const loaderImg = document.createElement("img");
      loaderImg.classList.add("loader");
      loaderImg.src = "/images/loader.png";
      portfolioElement.append(loaderImg);

      const fetchPicturePromise = fetchPictureFromUnsplash(
        pictureUrls,
        WIDTH,
        HEIGHT
      );
      picturePromises.push(fetchPicturePromise);
      fetchPicturePromise.then(async (picture) => {
        const anchorElement = await createGalleryImage(picture.url);
        // remove the loader from the portfolio
        loaderImg.remove();
        // append the anchor to the portfolio
        portfolioElement.style.border = "none";
        portfolioElement.append(anchorElement);
      });
    }
  }

  function showSlide() {
    // stop the interval
    clearInterval(sliderInterval);

    pictureUrls.forEach(function (_, index) {
      document.getElementById(`slider-image-${index + 1}`).style.display =
        "none";
    });
    document.getElementById(`slider-image-${slideIndex + 1}`).style.display =
      "block";

    // start interval again
    sliderInterval = setInterval(nextSlide, 5000);
  }

  function prevSlide() {
    slideIndex = slideIndex - 1 < 0 ? pictureUrls.length - 1 : slideIndex - 1;
    showSlide();
  }

  function nextSlide() {
    slideIndex = slideIndex + 1 === pictureUrls.length ? 0 : slideIndex + 1;
    showSlide();
  }

  function setupSlider() {
    pictureUrls.forEach(function (url, index) {
      const imgElement = document.createElement("img");
      imgElement.id = `slider-image-${index + 1}`;
      imgElement.src = url;
      imgElement.style.display = index === 0 ? "display" : "none";
      document.querySelector(".slider-image").append(imgElement);
    });

    document.querySelector(".prev-slide").addEventListener("click", prevSlide);
    document.querySelector(".next-slide").addEventListener("click", nextSlide);
    sliderInterval = setInterval(nextSlide, 5000);

    // show the slider (it was hidden up until now)
    document.getElementById("slider").style.display = "block";
  }

  addScrollToTopButton();
  loadDynamicGallery();
  // setup the slider when all the galley images have been fetched
  Promise.all(picturePromises).then(setupSlider);

  // clear the interval before the page is closed
  addEventListener("beforeunload", function () {
    clearInterval(sliderInterval);
  });
}

main();
