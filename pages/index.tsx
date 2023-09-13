/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import Image from 'next/image';
import logo from '../public/logo.png';
import InputSearch from '../components/inputSearch';
import IconsLine from '../components/IconsLine';
import NavBar from '../components/navBar';
import Carousel from '../components/carousel';
import TitleSections from '../components/tittleSections';
import CategorySection from '../components/categorySection';
import Product from '../components/product';
import SectionAdd from '../components/sectionAdd';
import ImageGallery from '../components/galery';
import Service from '../components/service';
import ServiceList from '../components/serviceList';
import InfoWithBrands from '../components/infoWithBrands';

function HomePage() {
  const productsData = [
    {
      image: '/assets/images/PuppyChiot1.svg',
      title: '1st Choice Puppy Chiot',
      rating: 3,
      price: 9.99,
    },
    {
      image: '/assets/images/PuppyChiot1.svg',
      title: '1st Choice Puppy Chiot',
      rating: 3,
      price: 9.99,
    },
    {
      image: '/assets/images/PuppyChiot1.svg',
      title: '1st Choice Puppy Chiot',
      rating: 3,
      price: 9.99,
    },
    {
      image: '/assets/images/PuppyChiot1.svg',
      title: '1st Choice Puppy Chiot',
      rating: 3,
      price: 9.99,
    },
    {
      image: '/assets/images/PuppyChiot1.svg',
      title: '1st Choice Puppy Chiot',
      rating: 3,
      price: 9.99,
    },
    {
      image: '/assets/images/PuppyChiot1.svg',
      title: '1st Choice Puppy Chiot',
      rating: 3,
      price: 9.99,
    },

    // Agrega más objetos de productos según sea necesario
  ];

  const productsData2 = [
    {
      image: '/assets/images/PuppyChiot1.svg',
      title: '1st Choice Puppy Chiot',
      rating: 3,
      price: 9.99,
    },
    {
      image: '/assets/images/PuppyChiot1.svg',
      title: '1st Choice Puppy Chiot',
      rating: 3,
      price: 9.99,
    },
    {
      image: '/assets/images/PuppyChiot1.svg',
      title: '1st Choice Puppy Chiot',
      rating: 3,
      price: 9.99,
    },
    {
      image: '/assets/images/PuppyChiot1.svg',
      title: '1st Choice Puppy Chiot',
      rating: 3,
      price: 9.99,
    },
    {
      image: '/assets/images/PuppyChiot1.svg',
      title: '1st Choice Puppy Chiot',
      rating: 3,
      price: 9.99,
    },

    // Agrega más objetos de productos según sea necesario
  ];

  const categoryData = [
    {
      imageUrl: '/assets/images/categoryImage.svg',
      text: 'Perros',
    },
    {
      imageUrl: '/assets/images/categoryImage.svg',
      text: 'Gatos',
    },
    {
      imageUrl: '/assets/images/categoryImage.svg',
      text: 'Peces',
    },
    {
      imageUrl: '/assets/images/categoryImage.svg',
      text: 'Roedores',
    },
    {
      imageUrl: '/assets/images/categoryImage.svg',
      text: 'Reptiles',
    },
    {
      imageUrl: '/assets/images/categoryImage.svg',
      text: 'Placeholder',
    },
  ];

  const socialMediaIconsData = [
    {
      src: '/assets/icons/Locationicon.svg',
      alt: 'location',
      link: '#',
    },
    {
      src: '/assets/icons/Peticon.svg',
      alt: 'Pet house',
      link: '#',
    },
    {
      src: '/assets/icons/UserIcon.svg',
      alt: 'User',
      link: '#',
    },
    {
      src: '/assets/icons/Shoppingcart.svg',
      alt: 'shopping',
      link: '#',
    },
  ];

  const slidesData = [
    {
      image: '/assets/images/Banner.svg',
      caption: 'Descripción de la primera imagen',
    },
    {
      image: '/assets/images/Banner.svg',
      caption: 'Descripción de la segunda imagen',
    },
    // Agrega más diapositivas según tus necesidades
  ];

  // Datos de los productos
  const productosData = [
    {
      imageUrl: '/assets/productos/producto1.jpg',
      nombre: 'Producto 1',
      rating: 3, // Cambia la cantidad de estrellas según lo necesario
      precio: 19.99,
    },
    {
      imageUrl: '/assets/productos/producto2.jpg',
      nombre: 'Producto 2',
      rating: 5, // Cambia la cantidad de estrellas según lo necesario
      precio: 24.99,
    },
    {
      imageUrl: '/assets/productos/producto3.jpg',
      nombre: 'Producto 3',
      rating: 2, // Cambia la cantidad de estrellas según lo necesario
      precio: 14.99,
    },
  ];

  const servicesData = [
    {
      image: '/assets/images/categoryImage.svg',
      title: 'Peluquería',
      subtitle:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mus molestie rhoncus id nunc, porta leo tempus facilisi.',
    },
    {
      image: '/assets/images/categoryImage.svg',
      title: 'Odontología',
      subtitle:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mus molestie rhoncus id nunc, porta leo tempus facilisi.',
    },
    {
      image: '/assets/images/categoryImage.svg',
      title: 'Veterinario',
      subtitle:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mus molestie rhoncus id nunc, porta leo tempus facilisi.',
    },
    {
      image: '/assets/images/categoryImage.svg',
      title: 'Entrenamiento',
      subtitle:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mus molestie rhoncus id nunc, porta leo tempus facilisi.',
    },
    {
      image: '/assets/images/categoryImage.svg',
      title: 'Psicología canina',
      subtitle:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mus molestie rhoncus id nunc, porta leo tempus facilisi.',
    },
    {
      image: '/assets/images/categoryImage.svg',
      title: 'Fiestas de cumpleaños',
      subtitle:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mus molestie rhoncus id nunc, porta leo tempus facilisi.',
    },
  ];
  const brandsData = [
    '/assets/images/marcaLogo.svg',
    '/assets/images/marcaLogo.svg',
    '/assets/images/marcaLogo.svg',
    '/assets/images/marcaLogo.svg',
  ];

  const [searchTerm, setSearchTerm] = useState('');

  return (
    <>
      <div className="w-100 flex mt-4 justify-around bg-white flex dark:bg-black">
        <img
          src="/assets/images/LogoMaxipetBordeBlanco.svg"
          alt="logo MAXIPET"
          className="h-15 w-100"
        />
        <InputSearch setSearchTerm={setSearchTerm} />

        <IconsLine socialMediaIcons={socialMediaIconsData} />
      </div>
      <NavBar />

      <Carousel slides={slidesData} />
      <div className="mx-auto max-w-screen-lg p-4">
        <div className="mt-8 mb-12">
          <div className="mt-8 mb-12">
            <TitleSections
              smallText="Lorem ipsum dolor sit amet."
              largeText="Una gran variedad de categorías"
            />
          </div>
          <CategorySection data={categoryData} />
        </div>

        <div className="mt-8 mb-12">
          <div className="mt-8 mb-12">
            <TitleSections
              smallText="Lorem ipsum dolor sit amet."
              largeText="Productos destacados"
            />
          </div>

          <div className="mt-8 mb-12">
            <SectionAdd
              image="/assets/images/Ad.svg"
              productsData={productsData}
            />
          </div>
        </div>
        <div className="mt-12 mb-12">
          <ImageGallery
            images={[
              '/assets/images/shutterstock.svg',
              '/assets/images/dog-food.svg',
            ]}
          />
        </div>
        <div className="mt-8 mb-8">
          <div className="mt-8 mb-12">
            <TitleSections
              smallText="Lorem ipsum dolor sit amet."
              largeText="Productos populares"
            />
          </div>

          <div className="flex justify-between">
            {productsData2 &&
              productsData2.map((product, index) => (
                <div key={index} className="w-20 flex-grow-0">
                  <Product
                    key={index}
                    image={product.image}
                    title={product.title}
                    rating={product.rating}
                    price={product.price}
                  />
                </div>
              ))}
          </div>
        </div>
        <div className="mt-12 mb-12">
          <ImageGallery images={['/assets/images/Ad2.svg']} />
        </div>
        <div className="mt-4 mb-10">
          <div className="mt-8 mb-12">
            <TitleSections
              smallText="Lorem ipsum dolor sit amet."
              largeText="Productos destacados"
            />
          </div>
          <div>
            <SectionAdd
              image="/assets/images/Ad.svg"
              productsData={productsData}
              invertirPosiciones
            />
          </div>
        </div>
        <div className="mt-8 mb-12">
          <div className="mt-8 mb-12">
            <TitleSections
              smallText="Lorem ipsum dolor sit amet."
              largeText="Nuestros servicios"
            />

            <p className="text-gray-700 text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In velit
              ut viverra fames sed.
            </p>
          </div>
          <ServiceList services={servicesData} />

          <div />
        </div>
        <div className="mt-8 mb-12">
          <div className="mb-4">
            <TitleSections
              smallText="Lorem ipsum dolor sit amet."
              largeText="Trabajamos con las mejores marcas"
            />
          </div>
          <InfoWithBrands
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In velit ut viverra fames sed."
            brands={brandsData}
          />

          <div />
        </div>
      </div>
    </>
  );
}

export default HomePage;
