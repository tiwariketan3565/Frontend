const photoList = [
    "https://cdn.pixabay.com/photo/2016/11/21/06/53/beautiful-natural-image-1844362_640.jpg",
    "https://tinypng.com/images/social/website.jpg",
    "https://imagekit.io/blog/content/images/2019/12/image-optimization.jpg",
    "https://media.istockphoto.com/id/1489566726/photo/leopard-in-sri-lanka.jpg?s=612x612&w=0&k=20&c=kIHqKhwO_JCq94l7yg8zkZuY-v-BbiaaRxr-giy97w4="
];

const imgElement = document.getElementById("mainImage");
const btnBack = document.getElementById("btnBack");
const btnNext = document.getElementById("btnNext");

let currentIndex = 0;
imgElement.src = photoList[currentIndex];

btnNext.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % photoList.length;
    imgElement.src = photoList[currentIndex];
});

btnBack.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + photoList.length) % photoList.length;
    imgElement.src = photoList[currentIndex];
});

let autoSlide = setInterval(() => {
    currentIndex = (currentIndex + 1) % photoList.length;
    imgElement.src = photoList[currentIndex];
}, 3000);

imgElement.addEventListener("mouseenter", () => {
    clearInterval(autoSlide);
});

imgElement.addEventListener("mouseleave", () => {
    autoSlide = setInterval(() => {
        currentIndex = (currentIndex + 1) % photoList.length;
        imgElement.src = photoList[currentIndex];
    }, 3000);
});
