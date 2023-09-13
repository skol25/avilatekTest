import React from 'react';
import IconsLine from '../IconsLine';

const socialMediaIconsData = [
  {
    src: '/assets/icons/instagramiconGrey.svg',
    alt: 'Instagram',
    link: 'https://www.instagram.com/',
  },
  {
    src: '/assets/icons/twitterGray.svg',
    alt: 'Twitter',
    link: 'https://twitter.com/',
  },
  {
    src: '/assets/icons/facebookGray.svg',
    alt: 'Facebook',
    link: 'https://www.facebook.com/',
  },
];

const Footer: React.FC = () => (
  <footer className="text-white py-4">
    <div className="container mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        <div className="mb-4">
          <h4 className="text-xl font-semibold text-red-600">Sobre nosotros</h4>
          <p className="text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mus
            molestie rhoncus id nunc, porta leo tempus facilisi.
          </p>
        </div>
        <div className="mb-4">
          <h4 className="text-xl font-semibold text-red-600">Mi cuenta</h4>
          <p className="text-gray-500">Información personal</p>
          <p className="text-gray-500">Direcciones</p>
          <p className="text-gray-500">Mascotas</p>
          <p className="text-gray-500">Órdenes</p>
          <p className="text-gray-500">Agenda</p>
        </div>
        <div className="mb-4">
          <h4 className="text-xl font-semibold text-red-600">Información</h4>
          <p className="text-gray-500">Formulario de contacto</p>
          <p className="text-gray-500">Preguntas frecuentes</p>
          <p className="text-gray-500">Términos y condiciones</p>
          <p className="text-gray-500">Política de privacidad</p>
        </div>
        <div className="mb-4">
          <h4 className="text-xl font-semibold text-red-600">
            Atención al cliente
          </h4>
          <p className="text-gray-500">Bello Monte, calle XXXX, local 1</p>
          <p className="text-gray-500">(0212) 575 54 12</p>
          <p className="text-gray-500">soporte@maxipet.com</p>
          <p className="text-gray-500">Lunes a Viernes</p>
          <p className="text-gray-500">9:00 a.m. - 5:00 p.m.</p>
          <div className="flex justify-start">
            <IconsLine
              socialMediaIcons={socialMediaIconsData}
              iconColor="fill-[#243c5a]"
            />
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
