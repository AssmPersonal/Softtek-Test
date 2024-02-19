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

## Endpoints

### [GET] /users

Se encarga de traer todos los usuarios.

#### Response
```json
[
	{
		"id": 2,
		"username": "uname-test",
		"email": "uname@test.com",
		"password": "1234"
	}
]
```

### [POST] /users

Sirve para crear un usuario

#### Request
```json
{
	"username": "uname-test",
	"email": "uname@test.com",
	"password": "1234"
}
```

#### Response
```json
{
	"id": 2,
	"username": "uname-test",
	"email": "uname@test.com",
	"password": "1234"
}
```

### [GET] /swapi/{resource}/{id}

Sirve para consultar al api de Star Wars, el resource y el id son opcionales

#### Response

En este caso él response es cambiante de acuerdo a los parámetros que se consultan, sin embargo, mapean exactamente las mismas estructuras que el api original, pero traduciendo los keys al español.

Por ejemplo, si al api original le pedimos lo siguiente: `https://swapi.py4e.com/api/`, nos devolverá lo siguiente:
```json
{
	"films": "https://swapi.py4e.com/api/films/",
	"people": "https://swapi.py4e.com/api/people/",
	"planets": "https://swapi.py4e.com/api/planets/",
	"species": "https://swapi.py4e.com/api/species/",
	"starships": "https://swapi.py4e.com/api/starships/",
	"vehicles": "https://swapi.py4e.com/api/vehicles/"
}
```

Y en nuestro api al llamar a `/swapi`, nos devuelve lo siguiente:
```json
{
	"personas": "https://swapi.py4e.com/api/people/",
	"planetas": "https://swapi.py4e.com/api/planets/",
	"peliculas": "https://swapi.py4e.com/api/films/",
	"especies": "https://swapi.py4e.com/api/species/",
	"vehiculos": "https://swapi.py4e.com/api/vehicles/",
	"naves_espaciales": "https://swapi.py4e.com/api/starships/"
}
```

Igualmente, podemos llamar desde nuestro api a las distintas rutas que provee el api original como: `/swapi/people`, `/swapi/people/1`, `/swapi/films`, entre otros.
