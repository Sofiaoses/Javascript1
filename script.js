let productos = [
    {
        nombre: "Lechuga",
        precio: 30,
    },
    {
        nombre: "Manzana",
        precio: 150,
    },
    {
        nombre: "Banana",
        precio: 200,
    },
    {
        nombre: "Cebolla",
        precio: 78,
    },
    {
        nombre: "Tomate",
        precio: 100,
    },
];


localStorage.clear();


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
