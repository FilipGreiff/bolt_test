import React from 'react';
import Section from '../components/Section';
import Container from '../components/Container';

const services = [
  {
    name: 'Plantering',
    description: 'Allt från kruka, perenner, buskar, träd och flera meter av häckplantor.',
  },
  {
    name: 'Beskärning',
    description: 'De taggiga rosorna, prydnadsbuskarna, fruktträden och dina mindre träd med rätt metod och i rätt tid för växtens bästa.',
  },
  {
    name: 'Hamling av pil',
    description: 'För föryngring och att de ska få sitt karaktäristiska utseende som är känt för Skåne.',
  },
  {
    name: 'Belysning',
    description: 'Med LightsOn produkter skapar vi stämningsfull belysning i din trädgård.',
  },
  {
    name: 'Gräsklippning',
    description: 'Regelbunden gräsklippning för en välskött gräsmatta.',
  },
  {
    name: 'Ogräsrensning',
    description: 'Noggrann ogräsrensning för att hålla din trädgård i toppskick.',
  },
];

export default function Services() {
  return (
    <Section>
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Våra Tjänster
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Vi erbjuder ett brett utbud av trädgårdstjänster för att hålla din trädgård i perfekt skick året runt.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.name}
              className="flex flex-col rounded-3xl bg-white p-8 ring-1 ring-gray-200 xl:p-10"
            >
              <h3 className="text-lg font-semibold leading-8 text-gray-900">
                {service.name}
              </h3>
              <p className="mt-4 text-sm leading-6 text-gray-600">
                {service.description}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-16 text-center">
          <p className="text-base text-gray-600">
            Mitt arvode är 595 kr/timmen inkl. moms.<br />
            60 kr/mil utanför Veberöd och Blentarp.<br />
            RUT-avdrag möjligt på många tjänster.
          </p>
        </div>
      </Container>
    </Section>
  );
}