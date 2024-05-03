# Usa una imagen base de Node.js
FROM node:14

# Establece el directorio de trabajo en /usr/src/app
WORKDIR /usr/src/app

# Copia el package.json y package-lock.json a la imagen
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia el resto de los archivos de la aplicación
COPY . .

# Expone el puerto 3000 para que la aplicación pueda ser accedida desde fuera del contenedor
EXPOSE 3000

# Define el comando por defecto para ejecutar tu aplicación cuando el contenedor se inicie
CMD ["node", "index.js"]
