# 🌍 Language Store - E-commerce de Idiomas

Una aplicación e-commerce moderna desarrollada en React para la venta de cursos y materiales de idiomas de todo el mundo.

## 🚀 Características

- **Catálogo completo** de idiomas organizados por continentes
- **Navegación intuitiva** con filtros por categorías
- **Carrito de compras** persistente con Context API
- **Detalles de productos** con información completa
- **Interfaz responsive** y moderna
- **Integración con Firebase** para base de datos en tiempo real

## 📦 Estructura del Proyecto

```
src/
├── components/
│   ├── NavBar.jsx           # Barra de navegación con categorías
│   ├── CartWidget.jsx       # Icono del carrito con contador
│   ├── ItemListContainer.jsx # Contenedor de listado de productos
│   ├── ItemList.jsx         # Presentación del listado
│   ├── Item.jsx             # Tarjeta individual de producto
│   ├── ItemDetailContainer.jsx # Contenedor de detalle
│   ├── ItemDetail.jsx       # Vista detallada del producto
│   ├── ItemCount.jsx        # Contador para agregar al carrito
|   |── CheckoutForm.jsx     #
│   ├── Carrito.jsx          # Vista del carrito de compras
│   └── CartItem.jsx         # Item individual en carrito
├── contexts/
│   └── CartContext.jsx      # Context del carrito de compras
├── firebase/
│   └── config.js            # Configuración de Firebase
└── App.jsx                  # Componente principal
```

## 📁 Estructura de Datos en Firebase

### Colección: `idiomas`

```javascript
{
  name: "Español",
  desc: "Descripción del idioma...",
  price: 200,
  img: "https://ejemplo.com/bandera.png",
  category: ["América", "Europa"], // Array de categorías
  stock: 50
}
```

## 📱 Responsive Design

La aplicación está optimizada para:

- 📱 Dispositivos móviles
- 💻 Tablets
- 🖥️ Desktop

## 📄 Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE.md](LICENSE.md) para detalles.

## 👥 Autores

- **Melina Noelia Andrada** - [@Noe-lya](https://github.com/Noe-lya)
