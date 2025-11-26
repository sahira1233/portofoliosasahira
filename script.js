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

// ==========================
//      MODAL PROJECT FIXED
// ==========================

function openModal(title, desc, img) {
    const modal = document.getElementById("projectModal");

    document.getElementById("modalTitle").innerText = title;
    document.getElementById("modalDesc").innerText = desc;
    document.getElementById("modalImage").src = img;

    modal.classList.add("show"); // FIX TERPENTING
}

function closeModal() {
    document.getElementById("projectModal").classList.remove("show");
}

// Tutup modal jika klik area gelap
window.addEventListener("click", function(e) {
    const modal = document.getElementById("projectModal");
    if (e.target === modal) {
        modal.classList.remove("show");
    }
});
