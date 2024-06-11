import React, { useState } from "react";
import Section from "@/components/Section";
import { Link } from "react-router-dom";
import Slider from "@/components/Slider";

import dog from "@/assets/mascotas/dog.png";
import cat from "@/assets/mascotas/cat.png";

const Home = () => {
  const productGallery = [
    {
      id: 1,
      name: "dog",
      title: "PRODUCTOS PARA PERROS",
      subtitle: "description",
      image: dog,
      link: "/dog",
    },
    {
      id: 2,
      name: "cat",
      title: "PRODUCTOS PARA GATOS",
      subtitle: "description",
      image: cat,
      link: "/cat",
    },
  ];

  return (
    <>
      <div className="pt-15">
        <Slider />
      </div>
      <Section title="mascotas">
        <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-8 items-center justify-center">
          {productGallery.map((product) => (
            <figure
              key={product.id}
              className="relative bg-white shadow-md rounded-lg overflow-hidden "
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-contain "
              />
              <div className="p-4">
                <h2 className="text-xl font-bold mb-2">{product.title}</h2>
                <p className="text-gray-700 mb-2">{product.subtitle}</p>
              </div>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 bg-black bg-opacity-50">
                <Link to={product.link}>
                  <div className="bg-primary text-white px-4 py-2 rounded">
                    Ver Productos
                  </div>
                </Link>
              </div>
            </figure>
          ))}
        </div>
        <div className="btn-group mt-36 ">
          <button className="btn bg-primary">1</button>
          <button className="btn bg-primary">2</button>
          <button className="btn bg-primary">3</button>
          <button className="btn bg-primary">4</button>
        </div>
      </Section>
    </>
  );
};

export default Home;
