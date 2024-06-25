import { useState } from "react";
import { MdLibraryAdd } from "react-icons/md";
import { toast } from "react-toastify";

import Input from "@/components/Input";
import Section from "@/components/Section";
import Loader from "@/components/Loader";

const Admin = () => {
  const [file, setFile] = useState({
    modelo: "",
    marca: "",
    color: "",
    referencia: "",
    precio: "",
    transmision: "",
    combustible: "",
    kilometraje: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFile({ ...file, [e.target.name]: e.target.value });
  };

  const postFile = (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulating a delay for demonstration purposes
    setTimeout(() => {
      toast.success("Vehiculo guardado en base de datos simulada");
      setIsLoading(false);
      setFile({
        modelo: "",
        marca: "",
        color: "",
        referencia: "",
        precio: "",
        transmision: "",
        combustible: "",
        kilometraje: "",
      });
    }, 2000); // Simulated 2 seconds delay

  };

  return (
    <>
      <Section title="Crear Vehiculo">
        {isLoading ? <Loader /> : ""}

        <form className="flex flex-col p-10 gap-4 w-full">
          <div className="grid grid-cols-2 gap-6">
            <Input
              label="Modelo"
              name="modelo"
              handleChange={handleChange}
              value={file.modelo}
            />
            <Input
              label="Marca"
              name="marca"
              handleChange={handleChange}
              value={file.marca}
            />
          </div>
          <Input
            label="Color"
            name="color"
            handleChange={handleChange}
            value={file.color}
          />
          <Input
            label="Referencia"
            name="referencia"
            handleChange={handleChange}
            value={file.referencia}
          />
          <div className="grid grid-cols-2 gap-6">
            <Input
              label="Precio"
              name="precio"
              handleChange={handleChange}
              value={file.precio}
            />
            <Input
              label="Transmision"
              name="transmision"
              handleChange={handleChange}
              value={file.transmision}
            />
          </div>
          <div className="grid grid-cols-2 gap-6">
            <Input
              label="Tipo de combustible"
              name="combustible"
              handleChange={handleChange}
              value={file.combustible}
            />
            <Input
              label="Kilometraje"
              name="kilometraje"
              handleChange={handleChange}
              value={file.kilometraje}
            />
          </div>

          <button
            onClick={postFile}
            className="flex items-center justify-center gap-4 mt-10 text-white bg-black border-0 py-2 px-4 w-[130px] focus:outline-none hover:scale-105 duration-300 rounded"
          >
            Agregar
            <MdLibraryAdd />
          </button>
        </form>
      </Section>
    </>
  );
};

export default Admin;
