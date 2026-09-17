# 🌍 Language Store - E-commerce de Idiomas

Language Store es una aplicación e-commerce desarrollada en React que simula la venta de cursos de idiomas de todo el mundo. El usuario puede recorrer un catálogo organizado por continentes, ver el detalle de cada idioma, agregar productos a un carrito de compras persistente durante la sesión y finalizar la compra mediante un formulario de checkout que genera un pedido en la base de datos.

El catálogo de productos y los pedidos generados se almacenan en [Firebase](https://firebase.google.com/) (Firestore), que cumple el rol de backend de la aplicación.

## 🚀 Características

- **Catálogo completo** de idiomas organizados por continentes
- **Navegación intuitiva** con filtros por categoría
- **Carrito de compras** persistente durante la sesión con Context API
- **Detalle de producto** con información completa de cada idioma
- **Checkout** con formulario validado que genera un pedido en Firestore
- **Interfaz responsive** y moderna
- **Backend con Firebase** para el catálogo de productos y el registro de pedidos

## 🛠️ Tecnologías

- [React 19](https://react.dev/) + [Vite](https://vitejs.dev/)
- [React Router](https://reactrouter.com/) para el ruteo
- [React Hook Form](https://react-hook-form.com/) para el formulario de checkout
- [Firebase](https://firebase.google.com/) (Firestore) como backend
- [Bootstrap](https://getbootstrap.com/) para estilos de la barra de navegación

## 📦 Estructura del Proyecto

```
Language Store/
├── public/
│   └── assets/               # Imágenes y banderas de los idiomas
├── scripts/
│   └── resetIdiomas.mjs      # Script para recargar el catálogo completo en Firestore
├── src/
│   ├── components/
│   │   ├── NavBar.jsx             # Barra de navegación con categorías
│   │   ├── CartWidget.jsx         # Icono del carrito con contador
│   │   ├── ItemListContainer.jsx  # Trae el listado de productos desde Firestore
│   │   ├── ItemList.jsx           # Presentación del listado
│   │   ├── Item.jsx               # Tarjeta individual de producto
│   │   ├── ItemDetailContainer.jsx # Trae el detalle de un producto desde Firestore
│   │   ├── ItemDetail.jsx         # Vista detallada del producto
│   │   ├── ItemCount.jsx          # Contador para agregar al carrito
│   │   ├── CheckoutForm.jsx       # Formulario de compra, crea el pedido en Firestore
│   │   ├── Carrito.jsx            # Vista del carrito de compras
│   │   ├── CartItem.jsx           # Item individual en el carrito
│   │   └── Contacto.jsx           # Página de contacto
│   ├── contexts/
│   │   └── CartContext.jsx   # Context del carrito de compras (estado global)
│   ├── firebase/
│   │   └── config.js         # Inicialización del cliente de Firebase
│   ├── data/
│   │   └── data.json         # Datos de referencia (no utilizados en runtime)
│   ├── App.jsx                # Rutas de la aplicación
│   ├── App.css
│   ├── index.css
│   └── main.jsx                # Punto de entrada de la app
├── index.html
├── package.json
└── vite.config.js
```

## 🗄️ Backend: Firebase (Firestore)

El backend consiste en un proyecto de Firebase con dos colecciones en Firestore. El cliente se inicializa en [`src/firebase/config.js`](src/firebase/config.js).

### Colección `idiomas` (catálogo de productos)

```javascript
{
  name: "Español",
  desc: "Descripción del idioma...",
  price: 100,
  img: "/assets/español.jpg",
  category: ["Europa", "América"], // Array de continentes
  stock: 50
}
```

`ItemListContainer` trae todos los documentos, o filtra con `where("category", "array-contains", categoria)` cuando se navega a `/mundo/:categoria`. `ItemDetailContainer` trae un documento puntual por id.

### Colección `pedidos` (órdenes de compra)

```javascript
{
  cliente: { nombre, email, telefono },
  productos: [ /* items del carrito */ ],
  total: 250
}
```

`CheckoutForm` crea el documento con `addDoc` al confirmar la compra y muestra al usuario el id generado por Firestore.

### Recargar el catálogo completo

El script [`scripts/resetIdiomas.mjs`](scripts/resetIdiomas.mjs) borra todos los documentos de la colección `idiomas` y vuelve a cargar los 21 idiomas del catálogo (incluyendo Español, Inglés, Francés, Alemán, Checo y Danés) con imágenes locales (`/assets/...`) y categorías consistentes:

```bash
npm run seed
```

> ⚠️ Este script borra el contenido actual de la colección `idiomas` antes de recargarla. Si las reglas de seguridad de Firestore no permiten escritura pública, hay que cargar los datos manualmente desde la consola de Firebase.

## ▶️ Cómo correr el proyecto

```bash
npm install
npm run dev
```

## 📱 Responsive Design

La aplicación está optimizada para:

- 📱 Dispositivos móviles
- 💻 Tablets
- 🖥️ Desktop

## 📄 Licencia

Este proyecto está bajo la Licencia MIT.

## 👥 Autores

- **Melina Noelia Andrada** - [@Noe-lya](https://github.com/Noe-lya)
