import React from "react";
import Image from "next/image";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

const images = [
  {
    original: "/obra1/embajada.jpg",
    alt: "embajada",
    description: "Embajada de Portugal",
  },
  {
    original: "/obra1/exterior1.jpg",
    alt: "exterior1",
  },
  {
    original: "/obra1/exterior1.2.jpg",
    alt: "exterior1.2",
  },
  {
    original: "/obra1/exterior1.3.jpg",
    alt: "exterior1",
  },

  {
    original: "/obra1/exterior2.jpg",
    alt: "exterior2",
  },

  {
    original: "/obra1/exterior4.png",
    alt: "exterior4",
  },
  {
    original: "/obra1/exterior3.jpg",
    alt: "exterior3",
  },
  {
    original: "/works2023/1.jpg",
    alt: "trabajos2023",
  },
  {
    original: "/works2023/2.jpg",
    alt: "trabajos2023",
  },
  {
    original: "/works2023/3.jpg",
    alt: "trabajos2023",
  },
  {
    original: "/works2023/4.jpg",
    alt: "trabajos2023",
  },
  {
    original: "/works2023/5.jpg",
    alt: "trabajos2023",
  },
  {
    original: "/works2023/6.jpg",
    alt: "trabajos2023",
  },
  {
    original: "/works2023/7.jpg",
    alt: "trabajos2023",
  },
  {
    original: "/works2023/8.jpg",
    alt: "trabajos2023",
  },
  {
    original: "/works2023/9.jpg",
    alt: "trabajos2023",
  },
  {
    original: "/works2023/10.jpg",
    alt: "trabajos2023",
  },
  {
    original: "/works2023/cortedepasto/1.jpg",
    alt: "cortedepasto",
  },
  {
    original: "/works2023/cortedepasto/2.jpg",
    alt: "cortedepasto",
  },
  {
    original: "/works2023/cortedepasto/3.jpg",
    alt: "cortedepasto",
  },
  {
    original: "/works2023/cortedepasto/4.jpg",
    alt: "cortedepasto",
  },
  {
    original: "/works2023/cortedepasto/5.jpg",
    alt: "cortedepasto",
  },
  {
    original: "/works2023/cortedepasto/6.jpg",
    alt: "cortedepasto",
  },
  {
    original: "/works2023/cortedepasto/7.jpg",
    alt: "cortedepasto",
  },
  {
    original: "/works2023/cortedepasto/8.jpg",
    alt: "cortedepasto",
  },
  {
    original: "/works2023/cortedepasto/9.jpg",
    alt: "cortedepasto",
  },
  {
    original: "/works2023/cortedepasto/10.jpg",
    alt: "cortedepasto",
  },
  {
    original: "/works2023/cortedepasto/11.jpg",
    alt: "cortedepasto",
  },
  {
    original: "/works2023/cortedepasto/12.jpg",
    alt: "cortedepasto",
  },
];
function GalleryObras() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-center text-2xl font-semibold mb-4">Trabajos</h1>
      <div className="max-w-md mx-auto" style={{ height: "600px" }}>
        <ImageGallery
          items={images}
          thumbnailPosition="bottom"
          showFullscreenButton={false}
          showPlayButton={false}
          useBrowserFullscreen={false}
          showThumbnails={false} // Oculta las miniaturas
          renderItem={(item) => (
            <div className="w-full h-full">
              <img
                src={item.original}
                alt={item.alt}
                className="w-full h-full object-cover"
              />
            </div>
          )}
        />
      </div>
    </div>
  );
}

export default GalleryObras;
