# 🌍 Language Store - E-commerce de Idiomas

Language Store es una aplicación e-commerce desarrollada en React que simula la venta de cursos de idiomas de todo el mundo. El usuario puede recorrer un catálogo organizado por continentes, agregar productos a un carrito de compras persistente durante la sesión y finalizar la compra mediante un formulario de checkout que genera un pedido en la base de datos.

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

## 📱 Deployado en Vercel App
https://language-store.vercel.app/
