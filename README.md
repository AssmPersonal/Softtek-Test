# Softtek Prueba Tecnica

## Requisitos

- Node 18
- PNPM
- Serverless
- MySQL

## Pasos para una ejecucion en local

1. Es importante definir el url de la base de datos en el ambiente, puede ser a traves del .env o exportandolo directamente al ambiente mismo.
2. Para ejecutar el proyecto en local es necesario traer todas las dependencias, en este caso seria con la herramienta PNPM: `pnpm install`
3. Finalmente para ejecutar el servidor local se usa serverless: `pnpm run dev`