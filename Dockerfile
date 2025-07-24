FROM node:18-alpine

# Crear directorio
WORKDIR /app

# Copiar archivos de dependencias e instalarlas
COPY package*.json ./
RUN npm install

# Copiar el resto del proyecto
COPY . .

# Build de producción
RUN npm run build

# Exponer puerto
EXPOSE 3000

# Ejecutar app en modo producción
CMD ["npm", "run", "start"]