let boton1 = document.getElementById('boton-1');
boton1.addEventListener("click", () => {
    let contenedor1 = document.getElementById('contenedor1');

    let p= document.createElement("p");
    p.innerText = "¡Se agregó al carrito!"

    contenedor1.append(p);

    alert("Su producto se agregó al carrito");
});

if (contenedor1.length > 3){
    alert("No puede agregar mas productos");
}

let boton2 = document.getElementById('boton-2');
boton2.addEventListener("click", () => {
    let contenedor2 = document.getElementById('contenedor2');

    let p= document.createElement("p");
    p.innerText = "¡Se agregó al carrito!"

    contenedor2.append(p);

    alert("Su producto se agregó al carrito");
});

let boton3 = document.getElementById('boton-3');
boton3.addEventListener("click", () => {
    let contenedor3 = document.getElementById('contenedor3');

    let p= document.createElement("p");
    p.innerText = "¡Se agregó al carrito!"

    contenedor3.append(p);

    alert("Su producto se agregó al carrito");
});


let boton4 = document.getElementById('boton-4');
boton4.addEventListener("click", () => {
    let contenedor4 = document.getElementById('contenedor4');

    let p= document.createElement("p");
    p.innerText = "¡Se agregó al carrito!"

    contenedor4.append(p);

    alert("Su producto se agregó al carrito");
});


let boton5 = document.getElementById('boton-5');
boton5.addEventListener("click", () => {
    let contenedor5 = document.getElementById('contenedor5');

    let p= document.createElement("p");
    p.innerText = "¡Se agregó al carrito!"

    contenedor5.append(p);

    alert("Su producto se agregó al carrito");
});





























/* class verdu {
    constructor(tipo,categoria,procedencia,precio,disponibilidad,maduracion){
        this.tipo=tipo
        this.categoria=categoria
        this.procedencia=procedencia
        this.precio=precio
        this.disponibilidad=disponibilidad
        this.maduracion=maduracion
    }
     
}

let tomate= new verdu("Tomate","Verdura","Argentina",200,true,"Madura")
let lechuga= new verdu("Lechuga","Verdura","Chile",100,false,"Madura")
let banana= new verdu("Banana","Fruta","Bolivia",300,true,"Sin madurar")
let manzana= new verdu("Manzana","Fruta","Argentina",250,false,"Madura")
let cebolla= new verdu("Cebolla","Verdura","Paraguay",150,true,"Sin madurar")

const verduleria = []


verduleria.push(tomate)
verduleria.push(lechuga)
verduleria.push(banana)
verduleria.push(manzana)
verduleria.push(cebolla)


function agregarVerdu(){
    let tipoNuevo= prompt("Ingrese la fruta o verdura nueva")
    let categoriaNuevo= prompt("Ingrese si es fruta o verdura")
    let procedenciaNuevo= prompt("Ingrse de donde proviene")
    let precioNuevo= Number(prompt("Ingrese el precio"))
    let disponibilidadNuevo= confirm("Ingrese si esta disponible")
    let maduracionNuevo= (prompt("Ingrese si esta madura o sin madurar"))
    let verduNuevo = new verdu(tipoNuevo, categoriaNuevo, procedenciaNuevo, precioNuevo, disponibilidadNuevo, maduracionNuevo)

    verduleria.push(verduNuevo)
    console.log(verduleria)
}

agregarVerdu()


const verduras = verduleria.filter((elemento) => {
    return elemento.categoria == "Verdura";
});

console.log(verduras) 
*/


