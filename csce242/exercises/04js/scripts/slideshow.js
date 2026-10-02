document.getElementById("hero-arrow-right").onclick = (e) => {
    e.preventDefault();
    const currentSlide = getCurrentSlide();
    let nextSlide = currentSlide.nextElementSibling;

    if(nextSlide == null) {
        nextSlide = document.querySelector("#slide :first-child");
    }
   slide(currentSlide, nextSlide)
}

document.getElementById("hero-arrow-left").onclick = (e) => {
    e.preventDefault();
    const currentSlide = getCurrentSlide;
    
}