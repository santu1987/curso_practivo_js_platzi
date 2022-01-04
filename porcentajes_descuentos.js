/*
*	Taller #2: porcentajes y descuentos
*/
/*
const precioOriginal = 100;
const descuento = 15;*/
const calcularPrecioConDescuento=(precio,descuento)=>{
	let porcentajePrecioConDescuento = 100-descuento;
	let precioConDescuento = (precio* porcentajePrecioConDescuento)/100;
	return precioConDescuento;
}

const calculatePriceDiscount = ()=>{
	let inputPrice = document.getElementById("inputPrice").value;
	let inputDiscount = document.getElementById("inputDiscount").value;
	let precioConDescuento = calcularPrecioConDescuento(inputPrice,inputDiscount);
	/*
	*	De esta forma con el atributo innerText: Mostramos el resultado en el htmlo de la pagina
	*/
	document.getElementById("resultPrice").innerText = `El precio con descuento es: ${precioConDescuento} `
} 
/*Ejem de console.log de un objeto
console.log({
				precioOriginal,
				descuento,
				precioConDescuento,
})*/