import React from 'react';
import Section from '../components/Section';
import Container from '../components/Container';

const cats = [
  {
    name: "Iris",
    description: "En vacker birmafröken som bor ihop med Wilda i Torna Hällstad.",
    image: "/uploads/aJIswFch/nolltext.jpg",
  },
  {
    name: "Wilda",
    description: "En äventyrlig ocikatt som vaktar min bil när jag är och jobbar i Torna Hällestad.",
    image: "/uploads/1zA7v5Se/20160503_105937_251.jpg",
  },
];

export default function GardenCats() {
  return (
    <Section>
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Trädgårdskatter
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Jag älskar katter och många av mina kunder har också katt. Här har jag samlat några godingar med en kort presentation.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          {cats.map((cat) => (
            <article key={cat.name} className="flex flex-col items-start">
              <div className="relative w-full">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[3/2]"
                />
              </div>
              <div className="max-w-xl">
                <div className="mt-8 flex items-center gap-x-4 text-xs">
                  <h3 className="text-lg font-semibold leading-6 text-gray-900">
                    {cat.name}
                  </h3>
                </div>
                <p className="mt-5 text-sm leading-6 text-gray-600">
                  {cat.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}