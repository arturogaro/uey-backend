## Creación de variables de entorno
- Crear una copia de .env.example y guardar como .env
- .env llenarlo con las variables de entorno correspondientes

## Instalación de dependencias
- Se recomienda la versión de node 18.x
```bash
npm i
```

## Base de datos (MongoDB) en local
- Tener instalado docker y docker-compose
```bash
docker-compose up -d
```
## Para entornos locales y de desarrollo

```bash
npm run start:dev
```

## Creación de build para entorno de producción

```bash
npm run build
```

## Para dependencias en entornos productivos
```bash
npm ci
```

## Para ejecución en entornos productivos
```bash
npm run start:prod
```