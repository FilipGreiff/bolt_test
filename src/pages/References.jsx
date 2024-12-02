import React from 'react';
import Section from '../components/Section';
import Container from '../components/Container';

const testimonials = [
  {
    content: "Vår trädgård i Torna Hällestad är ca 3000 m2 stor och består av flera olika delar. Annika är noggrann och kommer ofta med goda råd. Hon är pålitlig och trevlig att ha omkring sig.",
    author: "Helle Christensen Hjort",
  },
  {
    content: "Äntligen har vi fått fint i vår trädgård!",
    author: "Lutfi Kolgjini, Vomb",
  },
  {
    content: "Sån tur att Annika finns! Hon gör iordning vår lilla trädgård där ogräset trivs. Det blir så väl gjort, så det dröjer innan ogräset vågar sig upp igen.",
    author: "Svea och Tore Johnsson, Vomb",
  },
];

export default function References() {
  return (
    <Section>
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Vad våra kunder säger
          </h2>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="flex flex-col justify-between rounded-2xl bg-white p-8 shadow-lg ring-1 ring-gray-200"
            >
              <blockquote className="text-gray-900">
                <p>"{testimonial.content}"</p>
              </blockquote>
              <p className="mt-6 text-sm font-semibold text-garden-600">
                {testimonial.author}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}