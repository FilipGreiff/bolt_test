import React from 'react';
import Section from '../components/Section';
import Container from '../components/Container';
import Button from '../components/Button';

export default function Contact() {
  return (
    <Section>
      <Container>
        <div className="mx-auto max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Kontakta Oss
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Skånsk Trädgårdsvision<br />
            E-post: info@skansktradgardsvision.se<br />
            Telefon: 070-440 80 65
          </p>
          <form className="mt-16 space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-semibold leading-6 text-gray-900">
                Namn:*
              </label>
              <input
                type="text"
                id="name"
                required
                className="mt-2 block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-garden-600 sm:text-sm sm:leading-6"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
                E-post:*
              </label>
              <input
                type="email"
                id="email"
                required
                className="mt-2 block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-garden-600 sm:text-sm sm:leading-6"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">
                Meddelande:*
              </label>
              <textarea
                id="message"
                required
                rows={4}
                className="mt-2 block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-garden-600 sm:text-sm sm:leading-6"
              />
            </div>
            <Button type="submit">
              Skicka
            </Button>
          </form>
        </div>
      </Container>
    </Section>
  );
}