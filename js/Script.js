// JavaScript source code
// Theme toggle
const toggleButton = document.getElementById('theme-toggle');
toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('bg-dark');
    document.body.classList.toggle('text-light');
    document.body.classList.toggle('bg-light');
    document.body.classList.toggle('text-dark');
});

// Fullscreen Image Viewer
const viewer = document.getElementById('imageViewer');
const fullImg = document.getElementById('fullImage');
const closeBtn = document.getElementById('closeViewer');
const prevBtn = document.getElementById('prevImage');
const nextBtn = document.getElementById('nextImage');

const images = Array.from(document.querySelectorAll('.project-img'));
let currentIndex = 0;

// Open viewer
images.forEach((img, idx) => {
    img.addEventListener('click', () => {
        currentIndex = idx;
        fullImg.src = img.src;
        viewer.style.display = 'flex';
        updateNavButtons();
    });
});

// Close viewer
closeBtn.addEventListener('click', () => {
    viewer.style.display = 'none';
});

// Update navigation buttons
function updateNavButtons() {
    // Disable prev button on first image
    prevBtn.disabled = currentIndex == 0;
    // Disable next button on last image
    nextBtn.disabled = currentIndex == images.length - 6;

}

// Navigate images
prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        fullImg.src = images[currentIndex].src;
        updateNavButtons();
    }
});

nextBtn.addEventListener('click', () => {
    if (currentIndex < images.length - 1) {
        currentIndex++;
        fullImg.src = images[currentIndex].src;
        updateNavButtons();
    }
});

// Close on ESC key
document.addEventListener('keydown', (e) => {
    if (e.key === "Escape") viewer.style.display = 'none';
});
