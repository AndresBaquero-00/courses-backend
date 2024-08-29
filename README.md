# Courses Backend 💻

Backend del aplicativo de cursos.

## Requisitos de ejecución ⛏️

- NodeJS
- Docker
- PostgreSQL

## Configurar variables de entorno

| Variable       | Descripción                                        | Requerida |
| -------------- | -------------------------------------------------- | --------- |
| PORT           | Puerto de ejecución de la aplicación.              | Si        |
| DB_HOST        | Host de la base de datos PostgreSQL.               | Si        |
| DB_PORT        | Puerto de la base de datos PostgreSQL.             | Si        |
| DB_USER        | Usuario de la base de datos PostgreSQL.            | Si        |
| DB_PASSWORD    | Contraseña de la base de datos PostgreSQL.         | Si        |
| DB_NAME        | Nombre del esquema de la base de datos PostgreSQL. | Si        |
| PG_USER        | Usuario para ingresar al gestor visual pgAdmin.    | No        |
| PG_PASSWORD    | Contraseña para ingresar al gestor visual pgAdmin. | No        |
| JWT_SECRET_KEY | Cadena para generar los JWT.                       | Si        |

## ¿Cómo ejecutar en ambiente de pruebas? 🧪

1. Copiar el archivo `.env.template` y colocarle el nombre de `.env`.

2. Reemplazar valores por defecto en el archivo `.env`.

3. Instalar las dependencias con el comando

```sh
npm install
```

4. Levantar base de datos mediante Docker con el comando

```sh
docker compose up -d
```

En caso que no se desee utilizar pgAdmin, se puede comentar directamente el servicio en el archivo `docker-compose.yml`.

5. Levantar servidor de desarrollo con el comando

```sh
npm run start:dev
```

## ¿Cómo ejecutar utilizando Docker? 🐳

1. Construir la imagen de Docker con el comando

```sh
docker build -t courses-backend .
```

2. Reemplazar valores por defecto en el archivo `.env`.

3. Levantar el contenedor de la imagen construida con el comando

```sh
docker container run -p <PORT_LOCAL>:<PORT_IMAGE> --env-file .env courses-backend
```
