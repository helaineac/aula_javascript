var nome = "Helaine";
var idade = 36;
var idade2 = 10;
var frase = "Estou de quarentena";
var lista = ["maca","pera","laranja"];
var fruta = {nome:"maca", cor:"vermelha"};
var d = new Date();
alert(d);
alert(d.getMonth());

var id = prompt("Qual a sua idade?");

if(id>=18)
	alert("Maior de idade");
else
	alert("Menor de idade.");

var frutas = [{nome:"maca", cor:"vermelha"}, {nome:"uva", cor:"roxa"}];

console.log(lista);
console.log(lista[2]);


lista.push("uva");
console.log(lista);
console.log(lista.length);
console.log(lista.reverse());
console.log(lista.toString());
console.log(lista[2]);
console.log(lista.toString()[0]);
console.log(lista.join(" - "));

lista.pop();
console.log(lista);

//alert(nome + " tem " + idade +" anos");
//alert (idade+idade2);

console.log(nome);
console.log(idade+idade2);
console.log(frase);
console.log(frase.replace("quarentena","ferias"));
console.log(frase.toUpperCase());

console.log(fruta.nome);
console.log(frutas);
