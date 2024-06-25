import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Section from "@/components/Section";
import QRCode from "qrcode.react";
import { toast } from "react-toastify";

const EditarMascota = () => {
  const { id } = useParams(); // Obtener el ID de la mascota de los parámetros de la URL
  const [NombreDueño, setNombreDueño] = useState("");
  const [NombreMascota, setNombreMascota] = useState("");
  const [Direccion, setDireccion] = useState("");
  const [Raza, setRaza] = useState("");
  const [Descripcion, setDescripcion] = useState("");
  const [Correo, setCorreo] = useState("");
  const [Telefono, setTelefono] = useState("");
  const [qrLink, setQrLink] = useState("");

  useEffect(() => {
    // Simulación de carga de datos de la mascota desde un servicio o API
    const obtenerMascota = async () => {
      try {
        // Aquí normalmente se haría una solicitud al backend para obtener los datos de la mascota por su ID
        // En este ejemplo, los datos se inicializan de manera estática
        const data = {
          NombreDueño: "Nombre del Dueño",
          NombreMascota: "Nombre de la Mascota",
          Direccion: "Dirección",
          Raza: "Raza",
          Descripcion: "Descripción",
          Correo: "correo@example.com",
          Telefono: "123456789",
          id: id // Este sería el ID de la mascota obtenido de los parámetros de la URL
        };
        
        setNombreDueño(data.NombreDueño || "");
        setNombreMascota(data.NombreMascota || "");
        setDireccion(data.Direccion || "");
        setRaza(data.Raza || "");
        setDescripcion(data.Descripcion || "");
        setCorreo(data.Correo || "");
        setTelefono(data.Telefono || "");
        generarQR(data.id);
      } catch (error) {
        console.error("Error al obtener la mascota: ", error);
      }
    };

    obtenerMascota();
  }, [id]);

  const generarQR = (id) => {
    // Simulación de generación de enlace QR basado en el ID de la mascota
    setQrLink(`https://example.com/mascotas/${id}`); // URL de ejemplo para el QR
  };

  const handleEditarMascota = async (e) => {
    e.preventDefault();

    try {
      // Aquí normalmente se enviaría una solicitud al backend para actualizar los datos de la mascota
      toast.success("Guardando cambios...");
      // En este ejemplo, se simula una actualización exitosa
    } catch (error) {
      console.error("Error al actualizar la mascota: ", error);
    }
  };

  return (
    <Section title="EDITAR MASCOTA">
      <div className="pt-10">
        <form className="flex flex-col mx-10 gap-4 my-16 p-20 shadow-lg rounded-lg shadow-black" onSubmit={handleEditarMascota}>
          <label className="ml-4">Nombre del dueño</label>
          <input
            type="text"
            className="input input-primary w-full p-2"
            name="Nombre del dueño"
            onChange={(e) => setNombreDueño(e.target.value)}
            value={NombreDueño}
          />
          <label className="ml-4">Nombre de mascota</label>
          <input
            type="text"
            className="input input-primary w-full p-2"
            name="Nombre de mascota"
            onChange={(e) => setNombreMascota(e.target.value)}
            value={NombreMascota}
          />
          <label className="ml-4">Animal/Raza</label>
          <input
            type="text"
            className="input input-primary w-full p-2"
            name="Raza"
            onChange={(e) => setRaza(e.target.value)}
            value={Raza}
          />
          <label className="ml-4">Direccion</label>
          <input
            type="text"
            className="input input-primary w-full p-2"
            name="Domicilio"
            onChange={(e) => setDireccion(e.target.value)}
            value={Direccion}
          />
          <label className="ml-4">Teléfono</label>
          <input
            type="text"
            className="input input-primary w-full p-2"
            name="Teléfono"
            onChange={(e) => setTelefono(e.target.value)}
            value={Telefono}
          />
          <label className="ml-4">Correo</label>
          <input
            type="email"
            className="input input-primary w-full p-2"
            name="Correo"
            onChange={(e) => setCorreo(e.target.value)}
            value={Correo}
          />
          <label className="ml-4">Descripcion</label>
          <input
            type="text"
            className="input input-primary w-full p-20"
            name="Descripcion"
            onChange={(e) => setDescripcion(e.target.value)}
            value={Descripcion}
          />
          <button className="btn btn-primary mt-4" type="submit">
            Guardar Cambios
          </button>
        </form>
        {qrLink && (
          <div className="flex flex-col items-center mt-6">
            <h2>Código QR</h2>
            <QRCode value={qrLink} />
          </div>
        )}
      </div>
    </Section>
  );
};

export default EditarMascota;
