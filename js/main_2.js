

function clicou_1(){
	alert("Obrigado por clicar!");
}

function clicou(){
	document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b>";
}

function redirecionar(){
	//window.open("https://g1.globo.com/");
	window.location.href= "https://g1.globo.com/";
}

/*	document.getElementById("mousemove").innerHTML = "<b>Obrigado por passar o mouse</b>";
	//alert("trocar texto");
}

function voltar(){
	document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
	//alert("trocar texto");
}

function trocar(){
	document.getElementById("mousemove").innerHTML = "<b>Obrigado por passar o mouse</b>";
	//alert("trocar texto");
}*/

function trocar(elemento){
	elemento.innerHTML = "<b>Obrigado por passar o mouse</b>";
	//alert("trocar texto");
}

function voltar(elemento){
	elemento.innerHTML = "Passe o mouse aqui";
	//alert("trocar texto");
}

function load(){
	alert("página carregada");
}

function funcaoChange(elemento){
	console.log(elemento.value);
}