const lista1 = [1,2,3,1,2,3,4,2,2,2];

const lista1Count = {};

lista1.map(

	function(elemento){
		if(lista1Count[elemento]){
			lista1Count[elemento] += 1;
		}else{
			lista1Count[elemento] = 1;	
		}

	}
);

console.log(lista1Count);
//transformo el objeto en un array
const listaArray = Object.entries(lista1Count).sort(
	function(valorAcumulado,nuevoValor){
		//ordenamos de menor a mayor, restamos proque asi se cumple  las tres logicas
		return valorAcumulado[1] - nuevoValor[1];
	}
);

const moda = listaArray[listaArray.length-1];
console.log(moda);
