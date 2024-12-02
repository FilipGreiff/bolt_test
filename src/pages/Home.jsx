import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Container from '../components/Container';
import Section from '../components/Section';
import Button from '../components/Button';

const features = [
  {
    name: 'Professionell Trädgårdsdesign',
    description: 'Vi skapar unika och personliga trädgårdar som speglar din stil och behov.',
    image: '/uploads/mqOdADPb/9affd517-db20-4793-b70c-2d56459de3af_LARGE.jpg',
  },
  {
    name: 'Expert Trädgårdsskötsel',
    description: 'Regelbunden och professionell skötsel för att hålla din trädgård i toppskick året runt.',
    image: '/uploads/hceIItwV/5379b62d-b509-4077-ab4f-8e681667d1c2_LARGE.jpg',
  },
  {
    name: 'Belysningsdesign',
    description: 'Skapa stämning och trygghet med genomtänkt trädgårdsbelysning från LightsOn.',
    image: '/uploads/Ll4OPoyJ/autumn_back.jpg',
  },
];

const stats = [
  { name: 'Års erfarenhet', value: '14+' },
  { name: 'Nöjda kunder', value: '500+' },
  { name: 'Projekt genomförda', value: '1000+' },
  { name: 'Kommuner i Skåne', value: '15+' },
];

export default function Home() {
  return (
    <>
      <div className="relative">
        <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
          <motion.div 
            className="px-6 pb-24 pt-10 sm:pb-32 lg:col-span-7 lg:px-0 lg:pb-56 lg:pt-48 xl:col-span-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="mx-auto max-w-2xl lg:mx-0">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                Skapa din dröm trädgård med oss
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Vi hjälper dig att förvandla din trädgård till en vacker och harmonisk plats. Med vår expertis inom trädgårdsdesign och skötsel skapar vi unika utemiljöer som speglar din personlighet.
              </p>
              <div className="mt-10 flex items-center gap-x-6">
                <Button as="a" href="/kontakt">
                  Kontakta oss
                </Button>
                <Button as="a" href="/tjanster" variant="secondary">
                  Våra tjänster
                </Button>
              </div>
            </div>
          </motion.div>
          <div className="relative lg:col-span-5 lg:-mr-8 xl:absolute xl:inset-0 xl:left-1/2 xl:mr-0">
            <img
              className="aspect-[3/2] w-full bg-gray-50 object-cover lg:absolute lg:inset-0 lg:aspect-auto lg:h-full"
              src="/uploads/Ll4OPoyJ/autumn_back.jpg"
              alt="Vacker trädgård"
            />
          </div>
        </div>
      </div>

      <Section>
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Varför välja oss?
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Med över ett decennium av erfarenhet och hundratals nöjda kunder är vi din pålitliga partner för alla trädgårdstjänster i Skåne.
            </p>
          </div>

          <div className="mx-auto mt-16 max-w-7xl px-6 sm:mt-20 md:mt-24 lg:px-8">
            <dl className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 text-base leading-7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
              {features.map((feature) => (
                <div key={feature.name} className="relative pl-9">
                  <div className="overflow-hidden rounded-lg">
                    <img
                      src={feature.image}
                      alt={feature.name}
                      className="h-48 w-full object-cover"
                    />
                  </div>
                  <dt className="mt-4 font-semibold text-gray-900">{feature.name}</dt>
                  <dd className="mt-2">{feature.description}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
            <div className="mx-auto max-w-2xl lg:mx-0">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Vår erfarenhet i siffror
              </h2>
              <p className="mt-6 text-base leading-7 text-gray-600">
                Vi är stolta över att ha hjälpt hundratals kunder att förverkliga sina trädgårdsdrömmar.
              </p>
            </div>
            <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-10 text-white sm:mt-20 sm:grid-cols-2 sm:gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.name} className="flex flex-col gap-y-3 border-l border-white/10 pl-6">
                  <dt className="text-sm leading-6 text-gray-600">{stat.name}</dt>
                  <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </Container>
      </Section>

      <Section className="bg-green-50">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Redo att förvandla din trädgård?
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Kontakta oss idag för en kostnadsfri konsultation.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                to="/kontakt"
                className="rounded-md bg-garden-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-garden-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-garden-600"
              >
                Kom igång
              </Link>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}