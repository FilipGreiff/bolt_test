import React from 'react';
import Section from '../components/Section';
import Container from '../components/Container';

const galleryImages = [
  {
    src: "/uploads/XczqrSWL/CIMG3409.JPG",
    alt: "Före och efter trädgårdsrenovering",
    caption: "Före och efter - En total trädgårdsrenovering"
  },
  {
    src: "/uploads/mqOdADPb/9affd517-db20-4793-b70c-2d56459de3af_LARGE.jpg",
    alt: "Trädgårdsdesign exempel",
    caption: "Modern trädgårdsdesign med perenna växter"
  },
  {
    src: "/uploads/hceIItwV/5379b62d-b509-4077-ab4f-8e681667d1c2_LARGE.jpg",
    alt: "Trädgårdsbelysning",
    caption: "Stämningsfull trädgårdsbelysning"
  },
  {
    src: "/uploads/Ll4OPoyJ/autumn_back.jpg",
    alt: "Höstträdgård",
    caption: "Höstfärger i trädgården"
  }
];

export default function Gallery() {
  return (
    <Section>
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Inspiration
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Upptäck våra tidigare projekt och låt dig inspireras av möjligheterna för din egen trädgård.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          {galleryImages.map((image, index) => (
            <div key={index} className="relative overflow-hidden rounded-lg">
              <img
                src={image.src}
                alt={image.alt}
                className="aspect-[16/9] w-full object-cover hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-4">
                <p className="text-white text-sm">{image.caption}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <p className="text-gray-600">
            Kontakta oss för att diskutera hur vi kan förvandla din trädgård till ett personligt paradis.
          </p>
        </div>
      </Container>
    </Section>
  );
}