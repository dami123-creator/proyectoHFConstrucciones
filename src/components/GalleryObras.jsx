import React from "react";
import Image from "next/image";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

const images = [
  {
    original: "/obra1/embajada.jpg",
    alt: "embajada",
    thumbnail: "/obra1/embajada.jpg",
    description: "Embajada de Portugal",
  },
  {
    original: "/obra1/exterior1.jpg",
    alt: "exterior1",
    thumbnail: "/obra1/exterior1.jpg",
  },
  {
    original: "/obra1/exterior1.2.jpg",
    alt: "exterior1.2",
    thumbnail: "/obra1/exterior1.2.jpg",
  },
  {
    original: "/obra1/exterior1.3.jpg",
    alt: "exterior1",
    thumbnail: "/obra1/exterior1.3.jpg",
  },

  {
    original: "/obra1/exterior2.jpg",
    alt: "exterior2",
    thumbnail: "/obra1/exterior2.jpg",
  },

  {
    original: "/obra1/exterior4.png",
    alt: "exterior4",
    thumbnail: "/obra1/exterior4.png",
  },
  {
    original: "/obra1/exterior3.jpg",
    alt: "exterior3",
    thumbnail: "/obra1/exterior3.jpg",
  },
];
function GalleryObras() {
  return (
    <div className="container mx-auto px-4 py-8">
    <h1 className="text-center text-2xl font-semibold mb-4">Galeria</h1>
    <div className="max-w-md mx-auto">
      <ImageGallery
        items={images}
        thumbnailPosition="bottom"
        showFullscreenButton={false}
        showPlayButton={false}
        useBrowserFullscreen={false}
        renderItem={(item) => (
          <div className="w-full max-h-83 overflow-hidden">
            <img
              src={item.original}
              alt={item.alt}
              className="w-full h-auto"
            />
          </div>
        )}
        renderThumbInner={(item) => (
          <img
            src={item.thumbnail}
            alt={item.alt}
            className="w-full h-auto"
          />
        )}
      />
    </div>
  </div>
  );
}

export default GalleryObras;
