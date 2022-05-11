alert(`
Este es un simulador en el cuál podrás seleccionar varios
tipos de zapatos con su respectivo precio en Colombia (COP)
y su cantidad, al final se te mostrará la cantidad de productos
y su valor total de todo lo que hayas seleccionado.
`);

const zapatosContenedor = document.getElementById("product-container");
const seleccionContenedor = document.getElementById("select-container");

class Zapatos {
	constructor(id, nombre, precio, cantidad) {
		this.id = id;
		this.nombre = nombre;
		this.precio = precio;
		this.cantidad = cantidad;
		this.seleccionado = false;
	}
	seleccion() {
		this.seleccionado = true
	}
}

const Nike = new Zapatos(01, "Nike Air Force 1", 374227, 30);
const Reebok = new Zapatos(02, "Reebok Ztaur Run", 239990, 20);
const Puma = new Zapatos(03, "Multicolor Puma Future Rider Play On", 343900, 25);
const Adidas = new Zapatos(04, "Adidas FluidFlow", 296991, 15);

function agregarStock(nombre, cantidad, precio) {
	let contenedorProducto = document.createElement("li");
	contenedorProducto.className = "product-item";
	contenedorProducto.innerHTML = `<h3>${nombre}</h3> <b>$${precio}</b> <br/> <span>cantidad disponible: ${cantidad}</span>`;
	zapatosContenedor.append(contenedorProducto);
}

function actualizarStock() {
	let productosExistentes = zapatosContenedor.querySelectorAll("li.product-item");
	for(let i = 0; i < productosExistentes.length; i++) {
		productosExistentes[i].remove();
	}
	agregarStock(Nike.nombre, Nike.cantidad, Nike.precio);
	agregarStock(Reebok.nombre, Reebok.cantidad, Reebok.precio);
	agregarStock(Puma.nombre, Puma.cantidad, Puma.precio);
	agregarStock(Adidas.nombre, Adidas.cantidad, Adidas.precio);
}
actualizarStock();

function seleccionZapato() {
	let mensajeNike = Nike.seleccionado === true ? "Producto seleccionado." : "";
	let mensajeReebook = Reebok.seleccionado === true ? "Producto seleccionado." : "";
	let mensajePuma = Puma.seleccionado === true ? "Producto seleccionado." : "";
	let mensajeAdidas = Adidas.seleccionado === true ? "Producto seleccionado." : "";
	if (Nike.seleccionado && Reebok.seleccionado && Puma.seleccionado && Adidas.seleccionado) {
		alert("Todos los productos han sido seleccionados, gracias por usar nuestros servicios.");
		return
	} else {
		let seleccion = parseInt(
			prompt(`Por favor selecciona un producto para elegir la cantidad que desees.
		${Nike.id} - ${Nike.nombre}. ${mensajeNike}
		${Reebok.id} - ${Reebok.nombre}. ${mensajeReebook}
		${Puma.id} - ${Puma.nombre}. ${mensajePuma}
		${Adidas.id} - ${Adidas.nombre}. ${mensajeAdidas}`)
		);
	
		if (seleccion > 4 || seleccion <= 0) {
			alert("Esa opción no existe, por favor selecciona una nuevamente.")
			seleccionZapato();
		} else if (!isNaN(seleccion)) {
			const mensajeSeleccionado = "Este producto ha sido seleccionado, por favor selecciona otro.";
			switch (seleccion) {
				case 1:
					if (Nike.seleccionado) {
						alert(mensajeSeleccionado);
						seleccionZapato();
					} else {
						cantidadSeleccion(seleccion);
					}
					break;
				case 2:
					if (Reebok.seleccionado) {
						alert(mensajeSeleccionado);
						seleccionZapato();
					} else {
						cantidadSeleccion(seleccion);
					}
					break;
				case 3:
					if (Puma.seleccionado) {
						alert(mensajeSeleccionado);
						seleccionZapato();
					} else {
						cantidadSeleccion(seleccion);
					}
					break;
				case 4:
					if (Adidas.seleccionado) {
						alert(mensajeSeleccionado);
						seleccionZapato();
					} else {
						cantidadSeleccion(seleccion);
					}
					break;
	
				default:
					break;
			}
		} else {
			alert("Por favor escribe un valor 'númerico'.");
			seleccionZapato();
		}
	}
}

function cantidadSeleccion(seleccion) {
	let cantidad = parseInt(
		prompt(`Ahora por favor escribe la cantidad deseada.`)
	);
	if (!isNaN(cantidad)) {
		const cantidadExcedida = "La cantidad escrita excede el limte del stock.\nLa cantidad de este producto es:";
		const mensajeRegreso = "Por favor escribe nuevamente la cantidad deseada.";
		switch (seleccion) {
			case 1:
				if (cantidad > Nike.cantidad) {
					alert(`${cantidadExcedida} ${Nike.cantidad}.\n${mensajeRegreso}`);
					cantidadSeleccion(seleccion);
				} else if (cantidad <= 0) {
					alert(`La cantidad escrita es un valor no valido.\n${mensajeRegreso}`);
					cantidadSeleccion(seleccion);
				} else {
					Nike.seleccion();
					agregarProductoSeleccionado(Nike,cantidad);
				}
				break;
			case 2:
				if (cantidad > Reebok.cantidad) {
					alert(`${cantidadExcedida} ${Reebok.cantidad}.\n${mensajeRegreso}`);
					cantidadSeleccion(seleccion);
				} else if (cantidad <= 0) {
					alert(`La cantidad escrita es un valor no valido.\n${mensajeRegreso}`);
					cantidadSeleccion(seleccion);
				} else {
					Reebok.seleccion();
					agregarProductoSeleccionado(Reebok,cantidad);
				}
				break;
			case 3:
				if (cantidad > Puma.cantidad) {
					alert(`${cantidadExcedida} ${Puma.cantidad}.\n${mensajeRegreso}`);
					cantidadSeleccion(seleccion);
				} else if (cantidad <= 0) {
					alert(`La cantidad escrita es un valor no valido.\n${mensajeRegreso}`);
					cantidadSeleccion(seleccion);
				} else {
					Puma.seleccion();
					agregarProductoSeleccionado(Puma,cantidad);
				}
				break;
			case 4:
				if (cantidad > Adidas.cantidad) {
					alert(`${cantidadExcedida} ${Adidas.cantidad}.\n${mensajeRegreso}`);
					cantidadSeleccion(seleccion);
				} else if (cantidad <= 0) {
					alert(`La cantidad escrita es un valor no valido.\n${mensajeRegreso}`);
					cantidadSeleccion(seleccion);
				} else {
					Adidas.seleccion();
					agregarProductoSeleccionado(Adidas,cantidad);
				}
				break;

			default:
				break;
		}
	} else {
		alert("Por favor escribe un valor 'númerico'.");
		cantidadSeleccion(seleccion);
	}
}

function agregarProductoSeleccionado(producto,cantidad) {
	let productoSeleccionado = document.createElement("li");
	productoSeleccionado.className = "select-user product-item";
	productoSeleccionado.innerHTML = `<h3>${producto.nombre}</h3> <b>$${producto.precio}</b> <br/> <span>cantidad: ${cantidad}</span> <br/> <h4>Valor total: $${producto.precio * cantidad}</h4>`;
	seleccionContenedor.appendChild(productoSeleccionado);
	producto.cantidad -= cantidad;
	actualizarStock();
	nuevaSeleccion();
}

function nuevaSeleccion() {
	let eleccion = parseInt(
		prompt("Proceso terminado.\n¿Deseas seleccionar otro producto?\nSi es así escribe '1' de lo contrario escribe '2'.")
	);

	if (!isNaN(eleccion)) {
		switch (eleccion) {
			case 1:
				seleccionZapato();
				break;
			case 2:
				alert("Muchas gracias por utilizar nuestros servicios.");
				break;
		
			default:
				break;
		}
	} else {
		nuevaSeleccion();
	}
}

seleccionZapato();