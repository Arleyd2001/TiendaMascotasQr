import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase";
import { MdLibraryAdd } from "react-icons/md";

const Admin = () => {
  const [mascota, setMascota] = useState({
    NombreMascota: "",
    Raza: "",
    NombreDueño: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMascota({
      ...mascota,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "Mascotas"), mascota);
      console.log("Mascota agregada con éxito");
      setMascota({
        NombreMascota: "",
        Raza: "",
        NombreDueño: ""
      });
    } catch (error) {
      console.error("Error al agregar la mascota: ", error);
    }
  };

  return (
    <div className="admin-container">
      <h2>Agregar nueva mascota</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nombre de la Mascota:</label>
          <input
            type="text"
            name="NombreMascota"
            value={mascota.NombreMascota}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Raza:</label>
          <input
            type="text"
            name="Raza"
            value={mascota.Raza}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Nombre del Dueño:</label>
          <input
            type="text"
            name="NombreDueño"
            value={mascota.NombreDueño}
            onChange={handleChange}
          />
        </div>
        <button type="submit">
          <MdLibraryAdd /> Agregar Mascota
        </button>
      </form>
    </div>
  );
};

export default Admin;
