// Navbar animasi saat scroll
window.addEventListener("scroll", () => {
    const header = document.getElementById("header");
    header.classList.toggle("scrolled", window.scrollY > 50);
});

// Fade-in animation
const fadeElements = document.querySelectorAll(".fade-in");
function checkFade() {
    fadeElements.forEach(el => {
        if (el.getBoundingClientRect().top < window.innerHeight - 100) {
            el.classList.add("show");
        }
    });
}
window.addEventListener("scroll", checkFade);
checkFade();

// Slide up animation
const slideElements = document.querySelectorAll(".slide-up");
function checkSlide() {
    slideElements.forEach(el => {
        if (el.getBoundingClientRect().top < window.innerHeight - 100) {
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
    window.scrollTo({ top: 0, behavior: "smooth" });
});

function openModal(title, desc, img) {
    const modal = document.getElementById("projectModal");

    document.getElementById("modalTitle").innerText = title;
    document.getElementById("modalDesc").innerText = desc;
    document.getElementById("modalImage").src = img;

    modal.classList.add("show");
}

function closeModal() {
    document.getElementById("projectModal").classList.remove("show");
}

window.addEventListener("click", function(e) {
    const modal = document.getElementById("projectModal");
    if (e.target === modal) {
        modal.classList.remove("show");
    }
});

window.addEventListener("click", function(e) {
    const modal = document.getElementById("projectModal");
    if (e.target === modal) {
        modal.classList.remove("show");
    }
});

// QUIZ MODAL
function openQuizModal() {
    document.getElementById("quizModal").classList.add("show");
}

function closeQuizModal() {
    document.getElementById("quizModal").classList.remove("show");
}


