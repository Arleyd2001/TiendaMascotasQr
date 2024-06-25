import { useState } from "react";
<<<<<<< HEAD
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase";
import { MdLibraryAdd } from "react-icons/md";
import { toast } from "react-toastify";
import { storage } from "../firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { v4 } from "uuid";
import Loader from "@/components/Loader";

import Input from "@/components/Input";
import Section from "@/components/Section";
=======
import { MdLibraryAdd } from "react-icons/md";
import { toast } from "react-toastify";

import Input from "@/components/Input";
import Section from "@/components/Section";
import Loader from "@/components/Loader";
>>>>>>> b335ff78cd5ab66c533d506fee9c9857b23c21f1

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
<<<<<<< HEAD
    urlImagen: "",
  });
  const {
    modelo,
    marca,
    color,
    referencia,
    precio,
    transmision,
    combustible,
    kilometraje,
    urlImagen,
  } = file;

  const [upload, setUpload] = useState(null);
=======
  });

>>>>>>> b335ff78cd5ab66c533d506fee9c9857b23c21f1
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFile({ ...file, [e.target.name]: e.target.value });
  };

<<<<<<< HEAD
  const uploadFile = async (file) => {
    const storageRef = ref(storage, v4());

    await uploadBytes(storageRef, file);
    const url = await getDownloadURL(storageRef);
    return url;
  };

  const postFile = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const url = await uploadFile(upload);
    const newObj = { ...file, urlImagen: url };
    console.log(newObj);

    try {
      await addDoc(collection(db, "vehiculos"), newObj);
      toast.success("Vehiculo guardado en base de datos");
      setIsLoading(false);
    } catch (error) {
      console.log(error.message);
      setIsLoading(false);
    }

    setFile({
      modelo: "",
      marca: "",
      color: "",
      referencia: "",
      precio: "",
      transmision: "",
      combustible: "",
      kilometraje: "",
      urlImagen: "",
    });
  };
=======
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

>>>>>>> b335ff78cd5ab66c533d506fee9c9857b23c21f1
  return (
    <>
      <Section title="Crear Vehiculo">
        {isLoading ? <Loader /> : ""}

<<<<<<< HEAD
        <form className=" flex flex-col p-10 gap-4 w-full">
          <input
            type="file"
            name="urlImagen"
            onChange={(e) => setUpload(e.target.files[0])}
            className="file-input file-input-bordered file-input-primary w-full max-w-x hover:scale-105 duration-300"
          />
          <div className="grid grid-cols-2 gap-6 ">
=======
        <form className="flex flex-col p-10 gap-4 w-full">
          <div className="grid grid-cols-2 gap-6">
>>>>>>> b335ff78cd5ab66c533d506fee9c9857b23c21f1
            <Input
              label="Modelo"
              name="modelo"
              handleChange={handleChange}
<<<<<<< HEAD
              value={modelo}
=======
              value={file.modelo}
>>>>>>> b335ff78cd5ab66c533d506fee9c9857b23c21f1
            />
            <Input
              label="Marca"
              name="marca"
              handleChange={handleChange}
<<<<<<< HEAD
              value={marca}
=======
              value={file.marca}
>>>>>>> b335ff78cd5ab66c533d506fee9c9857b23c21f1
            />
          </div>
          <Input
            label="Color"
            name="color"
            handleChange={handleChange}
<<<<<<< HEAD
            value={color}
=======
            value={file.color}
>>>>>>> b335ff78cd5ab66c533d506fee9c9857b23c21f1
          />
          <Input
            label="Referencia"
            name="referencia"
            handleChange={handleChange}
<<<<<<< HEAD
            value={referencia}
          />
          <div className="grid grid-cols-2 gap-6 ">
=======
            value={file.referencia}
          />
          <div className="grid grid-cols-2 gap-6">
>>>>>>> b335ff78cd5ab66c533d506fee9c9857b23c21f1
            <Input
              label="Precio"
              name="precio"
              handleChange={handleChange}
<<<<<<< HEAD
              value={precio}
=======
              value={file.precio}
>>>>>>> b335ff78cd5ab66c533d506fee9c9857b23c21f1
            />
            <Input
              label="Transmision"
              name="transmision"
              handleChange={handleChange}
<<<<<<< HEAD
              value={transmision}
            />
          </div>
          <div className="grid grid-cols-2 gap-6 ">
=======
              value={file.transmision}
            />
          </div>
          <div className="grid grid-cols-2 gap-6">
>>>>>>> b335ff78cd5ab66c533d506fee9c9857b23c21f1
            <Input
              label="Tipo de combustible"
              name="combustible"
              handleChange={handleChange}
<<<<<<< HEAD
              value={combustible}
=======
              value={file.combustible}
>>>>>>> b335ff78cd5ab66c533d506fee9c9857b23c21f1
            />
            <Input
              label="Kilometraje"
              name="kilometraje"
              handleChange={handleChange}
<<<<<<< HEAD
              value={kilometraje}
=======
              value={file.kilometraje}
>>>>>>> b335ff78cd5ab66c533d506fee9c9857b23c21f1
            />
          </div>

          <button
            onClick={postFile}
<<<<<<< HEAD
            className="flex items-center justify-center gap-4 mt- 
                mt-10 text-white bg-black border-0 py-2 px-4 w-[130px] focus:outline-none  hover:scale-105 duration-300 rounded"
=======
            className="flex items-center justify-center gap-4 mt-10 text-white bg-black border-0 py-2 px-4 w-[130px] focus:outline-none hover:scale-105 duration-300 rounded"
>>>>>>> b335ff78cd5ab66c533d506fee9c9857b23c21f1
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
