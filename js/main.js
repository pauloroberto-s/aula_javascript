
function botao(){
    document.getElementById("agredecimento").innerHTML = "<b>Obrigado por clicar</b>";
    //console.log(document.getElementById("agradecimento"));
    //alert("Obrigado por clicar");
}

function redirecionar(){
    window.open("https://www.globo.com/");
    //window.location.href = "https://www.globo.com/";
}

function trocar(elemento){
    //document.getElementById("mousemove").innertHTML = "Obrigado por passar o mouse";
    elemento.innerHTML = "Obrigado  por passar o mouse";
    //allert("trocar texto");
}

function voltar(elemento){
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
    elemento.innerHTML = "Passe o mouse aqui"
}

function load(){
    alert("pagina carregada");
}

function funcaoChange(elemento){
    console.log(elemento.value)
}

/*
function soma(n1, n2){
    return n1 + n2;
}

var validar = 0

function validaIdade(idade){
    if (idade >=18){
        validar = true
    }else{
        validar = false
    }
    return validar;
}

var idade = prompt("Qual sua idade");
validaIdade(idade)
console.log(idade);

/*
var d = new Date();
alert(d.getDay());
alert(d.getHours());
alert(d.getMinutes());

/*
var count;
for(count =0; count <= 5; count++){
    alert{count};
};
*/
/*
var count = 0;
while (count <=5){
    console.log(count);
    alert(count);
    count++;
};

*/
/*
var idade = prompt("Qual sua idade");
if (idade >= 18){
    alert("maior de idade");
}else{
    alert("menor de idade");
};
*/
/*

var nome = "Paulo Roberto";
var n1 = 5;
var n2 = 3;
var frase = "Brasil é o melhor time do mundo"
//alert(nome + " tem " + idade + "anos");
//alert(idade + idade2);
console.log(nome);
console.log(n1 * n2);
console.log(frase.toLowerCase());
//alert(frase.replace("Japão", "Brasil"));
/** */