import { useState } from 'react';

const galleryImages = [
  {
    id: 1,
    src: "/gallery-1.jpg",
    alt: "Traditional sweet making process"
  },
  {
    id: 2,
    src: "/gallery-2.jpg",
    alt: "Traditional ingredients for Putharekulu"
  },
  {
    id: 3,
    src: "/gallery-3.jpg",
    alt: "Traditional village kitchen"
  },
  {
    id: 4,
    src: "/about.png",
    alt: "Beautifully plated Putharekulu sweets"
  }
];

export default function GallerySection() {
  const [popupImage, setPopupImage] = useState(null);

  return (
    <section id="gallery" className="py-20 bg-warm-beige">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h3 className="text-heritage-gold font-medium text-lg mb-4">Visual Journey</h3>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-deep-brown">
            Crafted with{" "}
            <span className="text-heritage-gold">Love</span>
          </h2>
          <p className="text-village-brown text-xl mt-6 max-w-2xl mx-auto">
            ఒక్కో పూతరేకులో ఇమిడిన మా కళానైపుణ్యాన్ని, మేము పెట్టే శ్రద్ధను మీ కళ్ళతో మీరే చూడండి.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {galleryImages.map((image) => (
            <div
              key={image.id}
              className="gallery-image-container relative overflow-hidden rounded-2xl village-shadow cursor-pointer"
              onMouseEnter={() => setPopupImage(image)}
              onMouseLeave={() => setPopupImage(null)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="gallery-image w-full h-80 object-cover"
              />
            </div>
          ))}
        </div>
      </div>
      {popupImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50 animate-fade-in pointer-events-none"
        >
          <img
            src={popupImage.src}
            alt={popupImage.alt}
            className="rounded-2xl shadow-2xl animate-popup pointer-events-none"
            style={{
              maxWidth: '70vw',
              maxHeight: '80vh',
              transition: 'transform 0.35s cubic-bezier(.19,1,.22,1)',
              transform: 'scale(1.07)',
              background: 'white',
            }}
          />
        </div>
      )}
    </section>
  );
}
