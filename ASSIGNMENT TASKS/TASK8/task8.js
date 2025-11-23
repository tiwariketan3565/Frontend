async function fetchImages() {
  const urls = [];

  for (let i = 0; i < 6; i++) {
    urls.push(`https://picsum.photos/300/300?random=${Math.random()}`);
  }

  return urls;
}

async function fetchAndDisplayImages() {
  const gallery = document.getElementById("imageGallery");

  const images = await fetchImages();

  images.forEach((url) => {
    const box = document.createElement("div");
    box.className = "img-box";

    const img = document.createElement("img");
    img.src = url;

    box.appendChild(img);
    gallery.appendChild(box);
  });
}

fetchAndDisplayImages();
