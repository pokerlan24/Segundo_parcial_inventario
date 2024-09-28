# Proyecto de Gestión de Inventario

Este proyecto es una aplicación de gestión de inventario, que incluye tanto un backend construido con Java (Spring Framework) como un frontend desarrollado en React.

## Estructura del Proyecto

El proyecto contiene las siguientes carpetas:

- **inventario**: Contiene el código fuente del backend en Java, que gestiona la lógica del servidor y la base de datos.
- **inventario-frontend**: Contiene el código fuente del frontend en React, que proporciona la interfaz de usuario.

## Instalación

Para ejecutar el proyecto, sigue estos pasos:

### Backend

1. Navega a la carpeta `inventario`:
   ```bash
   cd inventario
   ```
2. Asegúrate de tener Java JDK 17 o superior instalado.
3. Ejecuta el siguiente comando para construir el proyecto:
   ```bash
   mvn clean install
   ```
4. Ejecuta la aplicación:
   ```bash
   mvn spring-boot:run
   ```

### Frontend

1. Navega a la carpeta `inventario-frontend`:
   ```bash
   cd ../inventario-frontend
   ```
2. Asegúrate de tener [Node.js](https://nodejs.org/) y [npm](https://www.npmjs.com/) instalados.
3. Instala las dependencias:
   ```bash
   npm install
   ```
4. Ejecuta la aplicación:
   ```bash
   npm start
   ```

Esto abrirá la aplicación en tu navegador en `http://localhost:3000`.

## Uso

Una vez que ambas aplicaciones estén en funcionamiento, puedes acceder al frontend en `http://localhost:3000` y utilizar la funcionalidad de gestión de inventario.

## Características

- **Visualización de datos**: Puedes ver la lista de productos en el inventario.
- **Ingreso de nuevos productos**: Permite agregar nuevos productos al inventario.
- **Historial de operaciones**: Mantiene un registro de las operaciones realizadas.

## Contribuciones

Las contribuciones son bienvenidas. Si deseas contribuir, por favor abre un issue o un pull request.

## Licencia
Mi Proyecto, examen parcial de programación 
