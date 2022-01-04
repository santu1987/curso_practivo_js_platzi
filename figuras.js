/*
*	Código de cálculos del cuadrado
*/
console.group('cuadrados');
//Lados
//const ladoCuadrado = 5;
//console.log("Este es el lado del cuadrado: "+ladoCuadrado+"cm");
//Perimetro
const perimetroCuadrado = (lado)=>lado *4;  
console.log("Este es el perimetro del cuadrado: "+perimetroCuadrado(10)+"cm");
//Area
const areaCuadrado = (lado)=> lado * lado;

console.log("Este es el area del cuadrado: "+areaCuadrado(20)+"cm^2");
console.groupEnd();

/*
*	Código de cálculos del triángulos
*/
console.group('triangulos');
//Lados
//const ladoTriangulo1 = 6;

//const ladoTriangulo2 = 6;

//Base
//const baseTriangulo = 4;
/*console.log(`Los lados del triangulo miden: ${ladoTriangulo1} cm 
			${ladoTriangulo1}cm, ${ladoTriangulo2}cm, ${baseTriangulo}cm `);
*/			

//Altura
//const alturaTriangulo = 5.5;
//console.log(`Este es la altura del triangulo:  ${alturaTriangulo}cm`);

//Perimetro
const perimetroTriangulo =(lado1,lado2,base)=> lado1 + lado2  + base;
console.log(`Este es el perimetro del triangulo:  ${perimetroTriangulo(10,20,30)}cm`);

//Area
const areaTriangulo =(base,altura)=>(base*altura)/2;
console.log(`Este es el area del triangulo:  ${areaTriangulo(10,20)}cm^2`);

console.groupEnd();

/*
*	Código de cálculos del circulo
*/
console.group('circulos');

//Radio
//const radioCirculo = 4;
//console.log(`Este es el radio del circulo:  ${radioCirculo}cm`);

//Diametro
const diametroCirculo = (radio)=>radio*2;
console.log(`Este es el diametro del circulo:  ${diametroCirculo(20)}cm`);

//PI
//uso de math
const pi = Math.PI;
console.log(`Este es el valor de pi:  ${pi}cm`);


//Circunferencia
const perimetroCirculo = (radio) => diametroCirculo(radio) *pi;
console.log(`Este es el perimetro del circulo:  ${perimetroCirculo(20)}cm`);

//

//Area
const areaCirculo =(radio)=> (radio* radio)* pi;
console.log(`Este es el area del circulo:  ${areaCirculo(20)}cm^2`);

console.groupEnd();
/*
*	Funcionalidad FrontEnd
*/
//Calculo el perimetro
const calcularPerimetroCuadrado = ()=>{
	let lado = document.getElementById("inputCuadrado").value;
	let perimetro = perimetroCuadrado(lado);
	alert(`Este es el perimetro del cuadrado: ${perimetro} cm`);

}
//Calculo el area
const calcularAreaCuadrado = ()=>{
	let lado = document.getElementById("inputCuadrado").value;
	let area = areaCuadrado(lado);
	alert(`Este es el área del cuadrado: ${area} cm^2`);
}