import React from 'react';
import { Link } from 'react-router-dom';
import { MapPinIcon, PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/outline';

const navigation = {
  main: [
    { name: 'Välkommen', href: '/' },
    { name: 'Tjänster', href: '/tjanster' },
    { name: 'Inspiration', href: '/inspiration' },
    { name: 'Referenser', href: '/referenser' },
    { name: 'Trädgårdskatter', href: '/tradgardskatter' },
    { name: 'Kontakt', href: '/kontakt' },
  ],
  social: [
    {
      name: 'Telefon',
      href: 'tel:0704408065',
      icon: PhoneIcon,
      text: '070-440 80 65',
    },
    {
      name: 'Email',
      href: 'mailto:info@skansktradgardsvision.se',
      icon: EnvelopeIcon,
      text: 'info@skansktradgardsvision.se',
    },
    {
      name: 'Adress',
      href: '#',
      icon: MapPinIcon,
      text: 'Nämndemansvägen 13, Blentarp',
    },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-white" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8">
            <img
              className="h-12"
              src="/uploads/efRqeUuX/530x0_480x0/stv_logo.png"
              alt="Skånsk Trädgårdsvision"
            />
            <p className="text-sm leading-6 text-gray-600">
              Professionell trädgårdsdesign och skötsel i Skåne sedan 2009.
            </p>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-gray-900">Navigation</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.main.map((item) => (
                    <li key={item.name}>
                      <Link to={item.href} className="text-sm leading-6 text-gray-600 hover:text-gray-900">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-1 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-gray-900">Kontakt</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.social.map((item) => (
                    <li key={item.name}>
                      <a href={item.href} className="flex items-center space-x-3 text-gray-600 hover:text-gray-900">
                        <item.icon className="h-5 w-5" aria-hidden="true" />
                        <span className="text-sm">{item.text}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 border-t border-gray-900/10 pt-8 sm:mt-20 lg:mt-24">
          <p className="text-xs leading-5 text-gray-500">
            &copy; {new Date().getFullYear()} Skånsk Trädgårdsvision. Alla rättigheter förbehållna.
          </p>
        </div>
      </div>
    </footer>
  );
}