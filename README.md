A continuacion un listado de los componentes que forman a la aplicacion enumerando de manera que se puedan identificar los parentezcos entre los mismos:

1. Navbar: el navbar es tomado de React Bootstrap, cuenta con el logo de pizzeria y enlaces a inicio (donde se muestran todos los productos) y uno por cada una de las dos categorias de productos que venden.
  1.1: CartWidget: se encuentra ubicado en el sector derecho de la navbar y cuenta con un icono de carrito y con un numero, que primeramente fue hardcodeado y luego configurado para que muestre el total de los productos que hay en el carro.

2. ItemListContainer: se encarga de obtener los datos de los productos alojados en firestore, ya sea el total de los items o los de una categoria especifica, que recibe a traves de useParams, y luego renderiza el componente ItemList.
  2.1 ItemList: recibe una lista de productos como prop y utiliza el método map para recorrer la lista y renderizar el componente hijo llamado Item para cada producto. Este componente es responsable de la visualización de la lista de productos en la interfaz de usuario.
    2.1.1 Item: se utiliza para representar visualmente un producto a traves de una card con detalles de presentacion de cada producto, incluida una imagen y un botón para ver más información.

3. ItemDetailContainer: obtiene los datos de un producto específico de la base de datos Firestore utilizando el parámetro id de la URL y luego renderiza el componente hijo ItemDetail para mostrar los detalles de ese producto.
  3.1 ItemDetail: representa los detalles de un producto, mostrando información como la imagen, la descripción y el precio. A traves del componente ItemCount permite agregar la cantidad deseada de ese item al carrito. A traves de un condicional, luego de agregar el producto al carro permite elegir "Ir al carrito" o "Seguir comprando", redirigiendonos en este caso al inicio.
    3.1.1. ItemCount: este item se renderiza dentro de ItemDetail y permite elegir la cantidad que se agregara al carro del componente elegido. Luego de agregar la cantidad del producto deseada, se deja de renderizar para dar lugar a las opciones mencionadas anteriormente.

4. CartView: Obteniendo datos de UseCartContext, realiza una verificación para determinar si el carrito está vacío. Si es así, renderiza un mensaje indicando que el carrito está vacío y un botón para comenzar la compra que nos lleva al inicio. Si el carrito no está vacío, renderiza los elementos del carrito utilizando el método map en el array cart pasando cada prodcuto como una prop al componente hijo.
  Renderiza ademas el precio total, el cual tambien obtiene de UseCartContext y las opciones de seguir comprando, de limpiar el carrito y de "comprar carrito", opcion que se debe elegir para iniciar el proceso de checkout. 
  4.1 ItemCart: muestra la información de un producto en el carrito, incluida su imagen, nombre, cantidad, subtotal y una opción para eliminarlo del carrito utilizando el contexto CartContext.

5. Checkout: se encarga de generar y mostrar el proceso de "compra", solicitando a traves del componente CheckoutForm informacion al usuario para proceder a crear la orden en la base de datos Firestore, en una coleccion distinta a la que tiene almacenados los items y con los parametros elegidos.
   Mientras realiza el proceso, mientras el loading se encuentra en estado true, muestra un gif el cual no se encuentra alojado en el servidor de imagenes sino que se encuentra en la carpeta images, como para que no se demore su carga. Una vez creada la orden, muestra el id otorgado automaticamente por firebase y una imagen de un tilde verde.
   5.1. CheckoutForm: es renderizado por Checkout y pide al usuario datos que seran incluidos en la orden. 

CartContext: Es un contexto que puede ser consultado por cualquiera de los componentes, independientemente de los parentezcos de cada uno. Contiene las funciones referidas al carrito: AddProdcut sirve para incorporar productos al array que representa el carrito, a traves de un UseState; TotalPrice sirve para calcular el precio total de los productos almacenados en el carro; IsInCart verifica si el producto que se esta queriendo agregar ya se encuentra en el carro para sumarle la cantidad seleccionada; RemoveProduct da la posibilidad de borrar alguno de los productos en el carro; ClearCart permite vaciar el carrito y TotalProducts suma la cantidad de productos en el carro para poder renderizar el mismo en el CartWidget.

Firebase/config.js contiene el codigo que permite a la app conectarse a la consola de firebase, donde se encuentran almacenados los datos de la base de datos Firesstore correspondientes.




------------------------------------------------------------------------------------------------------------


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
