const carrito = []

const prendas = [{imagen: '🪑', codigo: 1, nombre: 'Silla de madera', precio: 2599},
                 {imagen: '💺', codigo: 2, nombre: 'Reposera', precio: 3859},
                 {imagen: '🛴', codigo: 3, nombre: 'Monopatin', precio: 7851},
                 {imagen: '🧻', codigo: 4, nombre: 'Papel higienico', precio: 8599},
                 {imagen: '🪒', codigo: 5, nombre: 'Navaja barberia', precio: 4894},
                 {imagen: '🚿', codigo: 6, nombre: 'Griferia ducha', precio: 9748},
                 {imagen: '💈', codigo: 7, nombre: 'Polo barberia', precio: 3281},
                 {imagen: '🚲', codigo: 8, nombre: 'Bicicleta', precio: 1938},
                 {imagen: '🧹', codigo: 9, nombre: 'Escoba', precio: 3122},
                 {imagen: '🚪', codigo: 10, nombre: 'Puerta', precio: 8745}]

const carritoAlt = [{imagen: '💺', codigo: 2, nombre: 'Reposera', precio: 3859},
                 {imagen: '🛴', codigo: 3, nombre: 'Monopatin', precio: 7851},
                    {imagen: '🧻', codigo: 4, nombre: 'Papel higienico', precio: 8599}]

/*
    Crear una función llamada buscarPrenda(), que retornará el resultado
        usar un método find() para rastrear el producto x su nombre, o código
    Array carrito: guardamos los productos q selecciona el usuario
    
    Instanciar el obj Compra, pasándole el carrito como parámetro
        agradecemos la compra
        vaciamos el carrito

Agrupamos todo en la f(x) Comprar()
*/

function buscarProducto(codigo) {
    let prendaSeleccionada = prendas.find((prenda)=> prenda.codigo === codigo )
    return prendaSeleccionada
}

function comprar() {
    let codigo = prompt("Ingresa el código del producto.\n(el cód. numérico del HTML)")
    let prendaElegida = buscarProducto(parseInt(codigo))

    if (prendaElegida !== undefined) {
        
        carrito.push(prendaElegida)     //.unshift(la última prenda ingresada, primera en la lista)
        alert(prendaElegida.nombre + " se agregó al carrito.")
        let respuesta = confirm("¿Deseas elegir otro producto?")
        if (respuesta === true) {
            comprar()                   // proceso de recursividad: llamar nuevamente a la misma función
        } else {                        // si caemos acá, vamos a finalizar la compra
            console.clear()             // limpia la consola JS de DevTools
            const shop = new Compra(carrito)
            let subtotal = shop.obtenerSubtotal()
            console.table(carrito)
            console.log("🛒 El costo de tu compra es: $", subtotal, "\nMuchas gracias por elegirnos.")
        }

    } else {
        alert("⛔️ Error en el código de producto ingresado.\nRefresca para comenzar de nuevo.")
    }
}

comprar()