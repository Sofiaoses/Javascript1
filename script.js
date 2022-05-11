let productos = [
    {
        nombre: "Lechuga",
        categoria: "Verdura",
        procedencia: "Argentina",
        precio: 300,
        disponibilidad: true,
        maduracion: "Madura"
    },
    {
        nombre: "Manzana",
        categoria: "Fruta",
        procedencia: "Bolivia",
        precio: 150,
        disponibilidad: true,
        maduracion: "Madura"
    },
    {
        nombre: "Banana",
        categoria: "Fruta",
        procedencia: "Chile",
        precio: 200,
        disponibilidad: false,
        maduracion: "No madura",
    },
    {
        nombre: "Cebolla",
        categoria: "Verdura",
        procedencia: "Argentina",
        precio: 78,
        disponibilidad: true,
        maduracion: "Madura",
    },
    {
        nombre: "Tomate",
        categoria: "Verdura",
        procedencia: "Argentina",
        precio: 500,
        disponibilidad: true,
        maduracion: "Madura"
    },
];


//localStorage.clear();


function agregarALocalStorage(producto) {
    const productos = localStorage.getItem ("productos");
    let arrayProductos = [];

    if(productos !== null) {
        arrayProductos = JSON.parse(productos);
    }

    let productoEncontrado = arrayProductos.find((productoEnJSON) => {
        return productoEnJSON.nombre == producto.nombre;
    });

    if(productoEncontrado) {
        productoEncontrado.cantidad++;
    } else {
        producto.cantidad = 1;
        productoEncontrado = producto;
    }

    arrayProductos.push(productoEncontrado);

    localStorage.setItem("productos", JSON.stringify(arrayProductos));
}


function agregarAlCarrito(producto) {

    const carrito = getCarrito();
  
    const productoEnCarrito = carrito.find(item => item.nombre === producto.nombre) || false;
  
    if (verduraEnCarrito) {
      productoEnCarrito.cantidad++;
    } else {
      producto.cantidad = 1;
      carrito.push(producto);
    }
    saveCarrito(carrito)
  }


function getCarrito () {
    return JSON.parse(localStorage.getItem("carrito")) || [];
  }
function saveCarrito (carrito) {
    localStorage.setItem('carrito', JSON.stringify(carrito));
  }

/*function actualizarInputCantidadDeProductos() {
    let productos = localStorage.getItem("productos");
    
    let arrayProductos = [];
    if(productos !== null) {
        arrayProductos = productos.split(",");
    }
    inputCantidadDeProductos.value = arrayProductos.length;
}
function agregarALocalStorage (producto) {
    console.log(producto);
}*/

const contenedor = document.getElementById ("contenedor");

const inputCantidadDeProductos = document.getElementById("cantidadDeProductos");

productos.forEach( (producto) => {
    const ul = document.createElement("ul");

    const li1 = document.createElement("li");
    li1.innerText = producto.nombre;

    const li2 = document.createElement("li");
    li2.innerText = producto.precio;

    const button = document.createElement("button");
    button.addEventListener("click", () => {
        agregarALocalStorage(producto);
    });

    button.innerText = "Agregar al carrito";

    ul.append(li1, li2, button);

    contenedor.append(ul);
});
