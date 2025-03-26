const images = [
    "https://images.unsplash.com/photo-1606907568152-58fcb0a0a4e5?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1449426468159-d96dbf08f19f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1502744688674-c619d1586c9e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bW90b3JiaWtlfGVufDB8fDB8fHww"
];

let currentIndex = 0;

const sliderImage = document.getElementById("sliderImage");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

// Function to update image
function updateImage() {
            sliderImage.style.opacity = "0"; // Start fade-out effect
            setTimeout(() => {
                sliderImage.src = images[currentIndex];
                sliderImage.style.opacity = "1"; // Fade-in effect
            }, 400);
        }

// Show the first image on page load
updateImage();

// Next button functionality
nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % images.length; // Loop back to first image
    updateImage();
});

// Previous button functionality
prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length; // Loop back to last image
    updateImage();
});
