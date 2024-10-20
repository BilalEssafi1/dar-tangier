// JavaScript for the gallery modal
const images = [
    "assets/images/restaurant.avif",
    "assets/images/restaurant-image-1.jpg",
    "assets/images/restaurant-image-2.jpg",
    "assets/images/restaurant-image-3.jpg"
];

let currentIndex = 0;

const galleryImage = document.getElementById('galleryImage');
const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');

function updateImage() {
    galleryImage.src = images[currentIndex];
}

// When the modal opens, set the initial image
$('#galleryModal').on('show.bs.modal', function () {
    currentIndex = 0;
    updateImage();
});

// Event listeners for the navigation buttons
prevButton.addEventListener('click', function () {
    if (currentIndex > 0) {
        currentIndex--;
        updateImage();
    }
});

nextButton.addEventListener('click', function () {
    if (currentIndex < images.length - 1) {
        currentIndex++;
        updateImage();
    }
});

// Google Maps Location
function initMap() {
    const leopoldStr = { lat: 48.1618, lng: 11.5843 };
    const map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: leopoldStr
    });
    const marker = new google.maps.Marker({
        position: leopoldStr,
        map: map,
        title: "Leopoldstraße 50, Munich"
    });
}

