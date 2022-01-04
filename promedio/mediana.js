const lista1 = [2,4,100,2];

//Volvemos en entero el valor de la mitad de la lista
const mitadLista1 = parseInt(lista1.length/2);
let mediana;
let valor;
//--Funcion de calcular si es par
let esPar = (numero)=>{
	(numero%2===0)? valor = true: valor = false;
	return valor;
}

//--Funcion de calcular media aritmetica
let calcularMedia = (lista)=>{
	const sumaLista = lista.reduce(
		function(valorAcumulado = 0,nuevoElemento){
			return valorAcumulado + nuevoElemento;
		}
	);
	//--Calculo el promedio
	const promedioLista = sumaLista/lista.length;
	return promedioLista;
}
//--
if(esPar(lista1.length)){
	//como empezamos en 0 seria la mitad y la mitad-1
	const elemento1 = lista1[mitadLista1-1];
	const elemento2 = lista1[mitadLista1];
	//calculo el promedio entre los dos elementos y esa e sla mediana}
	mediana = calcularMedia([elemento1,elemento2]);
}else{
	mediana = lista1[mitadLista1];
}
console.log(mediana);
