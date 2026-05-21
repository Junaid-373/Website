window.addEventListener("scroll", () => {

    const header = document.querySelector("header");

    if(window.scrollY > 50){
        header.style.background = "rgba(0,0,0,0.85)";
    }

    else{
        header.style.background = "rgba(0,0,0,0.3)";
    }

});


// Pause slider on hover

const slider = document.querySelector(".slider");

slider.addEventListener("mouseenter", () => {
    slider.style.animationPlayState = "paused";
});

slider.addEventListener("mouseleave", () => {
    slider.style.animationPlayState = "running";
});