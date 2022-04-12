//Helpers:

//Funcion es par
const esPar = (numero)=>{
	return (numero %2 ==0);
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
//Calcular la mediana de salarios
let medianaSalarios =(lista)=>{
	let mitad = parseInt(lista.length/2);
	if(esPar(lista.length)){
		let mitad1 = lista[mitad-1];
		let mitad2 = lista[mitad];
		//--Calculo el promedio
		personaMitad = calcularMedia([mitad1,mitad2]);

	}else{
		personaMitad = lista[mitad]
	}
	return personaMitad;
}

//--Mediana General
const salariosCol = colombia.map(
	(persona)=>{
		return persona.salary;
	}
);

let personaMitad=0;
//ordeno de menor a mayor...
const salariosColSorted = salariosCol.sort(
	(salaryA,salaryB)=>{
		salaryA - salaryB;
	}
);

//Mediana del top 10%
const spliceStart = (salariosColSorted.length*90)/100;//Del 90% en adelante
const spliceCount = salariosColSorted.length-spliceStart;//desde el 90% al final ejem 100%-90%=10%
//Splice: donde queremos hacer el corte,cuantas partes queremos que saque
const salariosColTop10 = salariosColSorted.splice(spliceStart, spliceCount);

 
const medianaSalariosValor = medianaSalarios(salariosColSorted);
const medianaGeneralCol = medianaSalarios(salariosColSorted);
const medianaTop10Col = medianaSalarios(salariosColTop10);

console.log(salariosColSorted);
console.log(medianaSalariosValor);
//console.log un objeto:
console.log({
	medianaGeneralCol,
	medianaTop10Col,
})