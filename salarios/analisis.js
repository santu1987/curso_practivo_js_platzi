//

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

const medianaSalariosValor = medianaSalarios(salariosColSorted);
console.log(salariosColSorted);
console.log(medianaSalariosValor);