
const galleryImageDivs = document.getElementsByClassName("gallery-image-div");
const galleryLightbox = document.getElementById("gallery-lightbox");

const galleryLightboxImage = document.getElementById("gallery-lightbox-img");
const galleryNextImageButton = document.getElementById("next-img-button");
const galleryPreviousImageButton = document.getElementById("previous-img-button");
const galleryCloseButton = document.getElementById("close-button");

const maxGalleryImageIndex = galleryImageDivs.length - 1;
var currentImageIndex = 0;


for (let i=0; i<galleryImageDivs.length; i++) {
    const image = galleryImageDivs[i].firstElementChild;
    image.addEventListener('click', e => {
        currentImageIndex = i;

        galleryLightboxImage.src = image.src;
        galleryLightbox.style.visibility = "visible";
        console.log("image source on first click: " + image.src)
    })
}

galleryNextImageButton.addEventListener('click', e => {
    if (currentImageIndex == maxGalleryImageIndex) {
        currentImageIndex = 0;
    }
    else {
        currentImageIndex += 1;
    }
    galleryLightboxImage.src = galleryImageDivs[currentImageIndex].firstElementChild.src; //first child is an image tag

    
    
})

galleryPreviousImageButton.addEventListener('click', e => {
    if (currentImageIndex == 0) {
        currentImageIndex = maxGalleryImageIndex;
    }
    else {
        currentImageIndex -= 1;
    }
    galleryLightboxImage.src = galleryImageDivs[currentImageIndex].firstElementChild.src;
    
})

galleryCloseButton.addEventListener('click', e => {
    galleryLightbox.style.visibility = "hidden";
})
