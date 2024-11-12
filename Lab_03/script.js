// Image carousel functionality
let currentImageIndex = 0;
const images = ['image1.jpg', 'image2.jpg', 'image3.jpg'];

function previousImage() {
    currentImageIndex = (currentImageIndex === 0) ? images.length - 1 : currentImageIndex - 1;
    document.getElementById('carousel-img').src = images[currentImageIndex];
}

function nextImage() {
    currentImageIndex = (currentImageIndex === images.length - 1) ? 0 : currentImageIndex + 1;
    document.getElementById('carousel-img').src = images[currentImageIndex];
}

// Contact form validation
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (!name || !email || !message) {
        document.getElementById('form-response').textContent = "All fields are required!";
        document.getElementById('form-response').style.color = 'red';
    } else {
        document.getElementById('form-response').textContent = "Your message has been sent!";
        document.getElementById('form-response').style.color = 'green';
    }
});
