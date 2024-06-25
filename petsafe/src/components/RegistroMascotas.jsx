import React, { useState } from "react";
import { toast } from "react-toastify";
import QRCode from "qrcode.react";
import { collection, doc, setDoc } from "firebase/firestore";
import { db } from "../firebase";
import Section from "@/components/Section";

const generateId = () => {
  const timestamp = Date.now().toString(36);
  const randomPart = Math.random().toString(36).substr(2, 5);
  return `${timestamp}-${randomPart}`;
};

const RegistroMascotas = ({ email }) => {
  const [id, setId] = useState(generateId());
  const [NombreDueño, setNombreDueño] = useState("");
  const [NombreMascota, setNombreMascota] = useState("");
  const [Direccion, setDireccion] = useState("");
  const [Raza, setRaza] = useState("");
  const [Descripcion, setDescripcion] = useState("");
  const [Correo, setCorreo] = useState("");
  const [Telefono, setTelefono] = useState("");
  const [qrLink, setQrLink] = useState("");

  const calcularSolicitud = async (e) => {
    e.preventDefault(); // Previene la recarga de la página al enviar el formulario
    
    // Validación de los campos
    if (!NombreDueño || !NombreMascota || !Direccion || !Raza || !Telefono || !Correo || !Descripcion) {
      toast.error("Por favor, completa todos los campos antes de enviar.");
      return;
    }
    
    try {
      const solicitudesCollectionRef = collection(db, "Mascotas");
      const solicitudDocRef = doc(solicitudesCollectionRef, id);
      await setDoc(solicitudDocRef, {
        id,
        NombreDueño,
        NombreMascota,
        Raza,
        Direccion,
        Telefono,
        Correo,
        Descripcion,
        email: email || Correo, // Usa el email prop si está definido, sino usa Correo del estado
      });
      setQrLink(`https://nbl6b2l5-5173.use2.devtunnels.ms/Mascotas/${id}`); // Actualiza con tu URL base
      toast.success("Procesando Solicitud...");
    } catch (error) {
      console.error("Error al guardar la información: ", error);
      toast.error("Error al guardar la información");
    }
  };
  
  return (
    <>
      <Section title="REGISTRAR MASCOTA">
        <div className="pt-10 relative">
          <form className=" relative flex flex-col mx-10 gap-4 my-16 p-20 shadow-lg rounded-lg shadow-black" onSubmit={calcularSolicitud}>
            <div className="absolute inset-0 z-0">
            <img src="/fon.jpeg" className=" w-full h-full object-cover rounded-lg opacity-80 " alt="" />
            </div>
            <div className="relative z-10 flex flex-col mx-10 gap-4 my-0 p-20 shadow-lg rounded-lg" >
            <label className="block text-black font-bold mb-2">ID</label>
            <span className="block text-black font-bold mb-2">{id}</span>
            <label className="block text-black font-bold mb-2">Nombre del dueño</label>
            <input
              type="text"
              className=" text-black input input-primary w-full p-2"
              name="Nombre del dueño"
              onChange={(e) => setNombreDueño(e.target.value)}
              value={NombreDueño}
              />
            <label className="block text-black font-bold mb-2">Nombre de mascota</label>
            <input
              type="text"
              className="input input-primary w-full p-2"
              name="Nombre de mascota"
              onChange={(e) => setNombreMascota(e.target.value)}
              value={NombreMascota}
              />
            <label className="block text-black font-bold mb-2">Animal/Raza</label>
            <input
              type="text"
              className="input input-primary w-full p-2"
              name="Raza"
              onChange={(e) => setRaza(e.target.value)}
              value={Raza}
              />
            <label className="block text-black font-bold mb-2">Direccion</label>
            <input
              type="text"
              className="input input-primary w-full p-2"
              name="Domicilio"
              onChange={(e) => setDireccion(e.target.value)}
              value={Direccion}
              />
            <label className="block text-black font-bold mb-2">Teléfono</label>
            <input
              type="text"
              className="input input-primary w-full p-2"
              name="Teléfono"
              onChange={(e) => setTelefono(e.target.value)}
              value={Telefono}
              />
            <label className="block text-black font-bold mb-2">Correo</label>
            <input
              type="email"
              className="input input-primary w-full p-2"
              name="Correo"
              onChange={(e) => setCorreo(e.target.value)}
              value={Correo}
              />
            <label className="block text-black font-bold mb-2">Descripcion</label>
            <input
              type="text"
              className="input input-primary w-full p-20"
              name="Descripcion"
              onChange={(e) => setDescripcion(e.target.value)}
              value={Descripcion}
              />
            <button className="btn btn-primary block text-black font-bold mb-2" type="submit">
              Generar QR
            </button>
          </div>
          </form>
          {qrLink && (
            <div className="flex flex-col items-center mt-6">
              <h2>Código QR</h2>
              <QRCode value={qrLink} />
            </div>
          )}
        </div>
      </Section>
    </>
  );
};

export default RegistroMascotas;
