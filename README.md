# Softtek Prueba Tecnica

## Requisitos

- Node 18
- PNPM
- Serverless
- MySQL

## Pasos para una ejecución en local

1. Es importante definir el url de la base de datos en el ambiente, puede ser a través del `.env` o exportándolo directamente al ambiente mismo, las variables necesarias están en el archivo `.env.example`
2. Para ejecutar el proyecto en local es necesario traer todas las dependencias, en este caso sería con la herramienta PNPM: `pnpm install`
3. Finalmente, para ejecutar el servidor local se usa serverless: `pnpm run dev`

## Otros comandos importantes
- En caso se actualice el esquema y sea necesario actualizar el código de prisma se usa el comando: `pnpm run prisma:generate`
- En caso se necesite realizar las migraciones en la base de datos es importante que el url de la misma este en el `.env` y después se realiza usando el comando: `pnpm run prisma:migrate`