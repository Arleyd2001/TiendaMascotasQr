import React, { useState } from "react";
import { toast } from "react-toastify";
import QRCode from "qrcode.react";
import { collection, doc, setDoc } from "firebase/firestore";
import { db } from "../configFirebase";
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
    e.preventDefault();
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
        email: email || Correo,
      });
      setQrLink(`https://nbl6b2l5-5173.use2.devtunnels.ms/Mascotas/${id}`);
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
              {/* Resto de inputs y botón omitidos para brevedad */}
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
