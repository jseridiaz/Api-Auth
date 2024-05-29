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

### /ropa - Metodo GET

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

### /ropa - Método Post

Para utilizar este Método se requiere estar logeado.

Se permite utilizar el método POST usando insomnia ya que no existe página Front. A través de este endpoint y usando el método POST,se publican artículos de ropa. Habrá que enviar un **Objeto en formato Json** con las siguientes propiedades y con el valor cumplimentado con vuestros datos con el correspondiente tipado tipado:

> {

> _ "nombre": Tipo String,
> _ "marca": Tipo String,
>
> - "categoria": Tipo String, un unico valor aceptado-> ['Camisetas', 'Pantalones', 'Abrigos', 'Zapatillas', 'Accesorios']
> - "talla": Tipo String, Valor Aceptado ->['xs', 's', 'm', 'l', 'xl', 'xxl']
> - "uso": Tipo String, Aceptado-> ['Deportivo', 'Gala', 'Fiesta', 'Urbano']
>   "estacion": Tipo String, Aceptado -> ['Invierno', 'Otoño', 'Primavera', 'Verano']
> - "color": Tipo String,
> - "precio": Tipo Number

> }

**Nota**: Las propiedades que comienzan en asteriscos son obligatorias de rellenar en el envío del objeto.

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

El usuario se habrá creado y el usuario tendrá permisos para poder eliminar su propio usuario y publicar ropa y colecciones.

## Eliminarse como usuario - Método delete

Por último es posible eliminar su propio usuario una vez se ha registrado. Para esto hay que estar logeado y utilizar el endpoint siguiente:

```sh
/user/:id
```

el **:id** lo obtenemos en el registro, obteniendo en la consola de INSOMNIA nuestro id con el siguiente formato:
{"/:id": **"7276dadawd17dwad1a2d51da7"**}
