# Introduccion Api concesionarios y vehículos

Aquí encontrarás todo lo necesario para encontrar las rutas para obtener los datos de la Api de ropa y colecciones.

La API provee de todos las colecciones y la ropa que se encuentran en la base de datos. Además encontramos toda la información de los articulos y colecciones, comprendiendo desde el precio hasta la marca del proveedor. Los datos que se podrán obtener de esta api de ellos son los siguientes:

- Nombre del artículo, Marca , Color,tallas, Uso, Estación del año y precios
- Nombre de la colección o conjunto, Uso, artículos que incluye la colección y precio total del conjunto.

Para Acceder a ellos se realiza a través de la solicitud de la siguiente Url y endpoints que se encuentran a continuación.
**Recuerda**: Para obtener los datos hay que pasar a JSON la respuesta recibida.

## Base url:

- La URL base de la api es la siguiente: http://localhost:3000
- A continuación se detallaran los endpoints para conseguir los datos del que dispone la Api.

## ENDPOINTS PARA BUSQUEDA DE LA ROPA:

```sh
/ropa - Obtención de todos los artículos de ropa
/conjunto - Obtención de todos las colecciones
```

### /ropa

Con este Endpoint se obtendra un array de objetos con **todos los los artículos registrados por la Api** y todos sus datos. A continuación se muestra un ejemplo de como se obtendrán los datos;

> {
> "\_id": "664f048e3f688684861b42df",
> "nombre": "Camiseta térmica Ac",
> "marca": "Nike",
> "categoria": "Camisetas",
> "uso": "Deportivo",
> "estacion": "Invierno",
> "precio": 20,
> "createdAt": "2024-05-23T08:55:42.698Z",
> "updatedAt": "2024-05-23T13:01:02.276Z",
> "\_\_v": 0,
> "lugar": "Torso superior",
> "color": "White",
> "talla": "m"
> }

### /conjunto

Introduciendo el endpoint :conjunto se obtendrán como resultado **todos los conjuntos que se encuentran en la nuestra API**. Como respuesta de la solicitud se recibirá un array de objeto con ellos. A continuación se encuentra un ejemplo de como se recogerán los datos.

> { "\_id": "664f0fdbf30778867ed003d9",

    	"nombre": "Conjunto Fit-One II-N",
    	"uso": "Deportivo",
    	"ropa": [
    		{
    			"_id": "664f048e3f688684861b42df",
    			"nombre": "Camiseta térmica Ac",
    			"marca": "Nike",
    			"categoria": "Camisetas",
    			"uso": "Deportivo",
    			"estacion": "Invierno",
    			"precio": 20,
    			"createdAt": "2024-05-23T08:55:42.698Z",
    			"updatedAt": "2024-05-23T13:01:02.276Z",
    			"__v": 0,
    			"lugar": "Torso superior",
    			"color": "White",
    			"talla": "m"
    		},[...]
    	],
    	"precio": 20,
    	"createdAt": "2024-05-23T09:43:55.236Z",
    	"updatedAt": "2024-05-23T09:43:55.236Z",
    	"__v": 0
    }

## Registrarse y logearse

Por último tendremos la opción de registrarnos en la plataforma y logearnos una vez que estemos registrados, Para ello haremos uso de las siguientes rutas utilizando Insomnia. En la tabla se describe todos los parametros que tendremos que ajustar para realizar las acciones de registro y login. **Los campos que están en negrita serán los campos que debeis de rellenar a vuestra elección.**

| Solicitud | endPoint       | Metodo | JSON a enviar                                                                         |
| --------- | -------------- | ------ | ------------------------------------------------------------------------------------- |
| REGISTRO  | /user/register | POST   | {"userName":"**your UserName**", "password":"**your Password**}"                      |
| Login     | /user/login    | POST   | {"userName":"**your registered UserName**", "password":"**your registered Password**} |

**NOTA**: Hay que registrarse primero antes de poder realizar el login.

El usuario se habrá creado y trás el registro se habrá creado el usuario con permisos de usuario que solo permitirá eliminar a su propio usuario.
