document.addEventListener("DOMContentLoaded", function () {
    const sliderItems = document.querySelectorAll(".slider-item");
    const rightButton = document.getElementById("rbtn");
    const leftButton = document.getElementById("lbtn");

    let currentIndex = 0;

    function showSlide(index) {
        if (index < 0) {
            index = sliderItems.length - 1;
        } else if (index >= sliderItems.length) {
            index = 0;
        }

        sliderItems.forEach(function (slide) {
            slide.classList.remove("active");
        });

        sliderItems[index].classList.add("active");
    }

    function showNextSlide() {
        currentIndex++;
        if (currentIndex >= sliderItems.length) {
            currentIndex = 0;
        }
        showSlide(currentIndex);
    }

    function showPreviousSlide() {
        currentIndex--;
        if (currentIndex < 0) {
            currentIndex = sliderItems.length - 1;
        }
        showSlide(currentIndex);
    }

    rightButton.addEventListener("click", showNextSlide);
    leftButton.addEventListener("click", showPreviousSlide);

    // Initially show the first slide
    showSlide(currentIndex);
});
