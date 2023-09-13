import React from 'react';

const NavBar = () => {
  const navBarItems = [
    { text: 'Inicio', link: '/' },
    { text: 'Comprar por marca', link: '/ComprarPorMarca' },
    { text: 'Comprar por mascota', link: '/services' },
    { text: 'Nuestros servicios', link: '/contact' },
    { text: 'Promociones', link: '/contact' },
    { text: 'Nosotros', link: '/contact' },
  ];

  return (
    <nav className="flex justify-center space-x-8 text-gray-600 text-sm mt-4">
      {navBarItems.map((item, index) => (
        <a key={index} href={item.link} className="hover:text-black">
          {item.text}
        </a>
      ))}
    </nav>
  );
};

export default NavBar;
