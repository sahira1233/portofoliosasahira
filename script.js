// Navbar animasi saat scroll
window.addEventListener("scroll", () => {
    const header = document.getElementById("header");
    header.classList.toggle("scrolled", window.scrollY > 50);
});

// Fade-in
const fadeElements = document.querySelectorAll(".fade-in");
function checkFade(){
    fadeElements.forEach(el => {
        if(el.getBoundingClientRect().top < window.innerHeight - 100){
            el.classList.add("show");
        }
    });
}
window.addEventListener("scroll", checkFade);
checkFade();

// Slide-up
const slideElements = document.querySelectorAll(".slide-up");
function checkSlide(){
    slideElements.forEach(el => {
        if(el.getBoundingClientRect().top < window.innerHeight - 100){
            el.classList.add("show");
        }
    });
}
window.addEventListener("scroll", checkSlide);
checkSlide();

// Scroll to top
const topBtn = document.getElementById("topBtn");
window.addEventListener("scroll", () => {
    topBtn.style.display = window.scrollY > 300 ? "block" : "none";
});
topBtn.addEventListener("click", () => {
    window.scrollTo({top:0, behavior:"smooth"});
});