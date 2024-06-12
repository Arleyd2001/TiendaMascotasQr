# Usa una imagen base oficial de Node.js
FROM node:16

# Establece el directorio de trabajo en el contenedor
WORKDIR /app

# Copia el package.json y el package-lock.json
COPY package*.json ./

# Instala las dependencias del proyecto
RUN npm install



# Exponer el puerto de la aplicación
EXPOSE 3001

# Comando para ejecutar la aplicación
CMD ["node", "src/main.js"]
