function soma(n1,n2){
	return n1+n2;
}

alert(soma(5,10));

function setReplace(frase,nome,novo_nome){
	return frase.replace(nome,novo_nome);
}

alert(setReplace("Vai Japão","Japão","Brasil"));

var validar;

function validaIdade(idade){
	//var validar=0; Variavel local
	if(idade >=18)
		validar=true;
	else
		validar-false;
	return validar;
}
var idade = prompt("Qual a sua idade");
validaIdade(idade);
console.log(validar);