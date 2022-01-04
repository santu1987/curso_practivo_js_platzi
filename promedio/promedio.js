const lista1 = [ 100, 200, 300, 500];

let calcularMedia = (lista)=>{
	//let sumaLista = 0;
	//let i = 0;
	//--Ejem ciclo for:
	/*
	for(let list of lista){
		sumaLista+=list; 
		i++;
	}*/
	//EJemplo copn reduce
	
	const sumaLista = lista.reduce(
		//Recibe el valor acumulado y el nuevo elemento
		function(valorAcumulado = 0,nuevoElemento){
			return valorAcumulado + nuevoElemento;

		}
	);
	//--
	console.log(sumaLista);
	//--Calculo el promedio
	const promedioLista = sumaLista/lista.length;

	console.log(promedioLista);
}

calcularMedia(lista1);