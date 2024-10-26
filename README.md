# 🚀 Proyecto de Backend con Docker, Express y TypeScript

<div align="center">

![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)

<p align="center">
  <a href="https://github.com/yourusername">
    <img src="https://img.shields.io/badge/Desarrollado%20por-Alexander%20Suarez%20Rodriguez-blue?style=for-the-badge" alt="Desarrollador">
  </a>
</p>

</div>

Este proyecto es un backend que utiliza tecnologías modernas como **Docker**, **Express**, **TypeScript**, y **Node.js**. El servicio está diseñado como plantilla inicial  forma segura y eficiente, empleando contenedores para una fácil administración y despliegue.

## 🛠️ Tecnologías Utilizadas

<div align="center">
  <table>
    <tr>
      <td align="center">
        <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original.svg" width="40" height="40" alt="Docker"/>
        <br>Docker
      </td>
      <td align="center">
        <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original.svg" width="40" height="40" alt="Express.js"/>
        <br>Express.js
      </td>
      <td align="center">
        <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" width="40" height="40" alt="TypeScript"/>
        <br>TypeScript
      </td>
      <td align="center">
        <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg" width="40" height="40" alt="Node.js"/>
        <br>Node.js
      </td>
    </tr>
  </table>
</div>

- 🐳 **Docker**: Facilita la creación y administración de contenedores
- 🚂 **Express.js**: Framework web minimalista para Node.js
- 📘 **TypeScript**: Superset de JavaScript con tipado estático
- 💚 **Node.js**: Entorno de ejecución para JavaScript
- 🔐 **dotenv**: Manejo seguro de variables de entorno
- 🎯 **Docker Compose**: Orquestación de contenedores
- 🌐 **API REST**: Estructura para gestión de mensajes

## 🚀 Configuración del Entorno

### 1. Clonar el Repositorio

```bash
git clone <Host of Project GITLAB or GITHUB>
cd <NAME_project>
```

### 2. Crear Archivo `.env`

Crea un archivo `.env` en la raíz del proyecto:

```plaintext
PORT=3005
```

### 3. Configurar Docker

Verifica la instalación de Docker:

```bash
docker -v
docker-compose -v
```

### 4. Construir e Iniciar Contenedores

```bash
# Iniciar contenedores
docker-compose up --build

# Detener contenedores
docker-compose down

# Para desarrollo local (recomendado)
# 1. Acceder al contenedor
docker exec -it <nombre_del_contenedor> bash

# 2. Iniciar en modo desarrollo con hot-reload
yarn dev
```

> 💡 **Nota**: Para desarrollo local, se recomienda acceder al contenedor y ejecutar la aplicación en modo desarrollo. Esto permite aprovechar características como hot-reload y mejores mensajes de debug.


## 📁 Estructura del Proyecto

```
/app
├── src
│   ├── api
│   │   ├── ping
│   │   │   ├── ping.controller.ts
│   │   │   ├── ping.service.ts
│   │   │   ├── index.ts
│   ├── constants
│   ├── routes
│   └── types
│   ├── app.ts              # Configuración principal
│   ├── index.ts            # Punto de entrada
├── Dockerfile
├── docker-compose.yml
├── .env.example
├── package.json
└── tsconfig.json
```

## 🤝 Contribuciones

¿Quieres contribuir? ¡Excelente! 
- 🐛 Abre un issue para reportar bugs
- 💡 Propón nuevas funcionalidades
- 🔀 Crea un pull request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo `LICENSE` para más detalles.

---
