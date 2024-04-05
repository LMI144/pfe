function resultado(num){ //o número entre parenteses no html aparecerá aqui
    var tela = document.getElementById('tela').innerHTML // o innerHTML está pegando o valor de tela e jogando na variavel.
    document.getElementById('tela').innerHTML = tela + num //aqui ele pega o valor e soma com o novo valor atribuido
    //em resumo, ele salva os conteudos e vai somando.
}

function clean(){
    document.getElementById('tela').innerHTML = ''
}

function clean2() {
    var res = document.getElementById('tela').innerHTML
    document.getElementById('tela').innerHTML = res.substring(0, res.length -1) //o lenght lê todos os numeros que tem na "tela" e subtrai 1
    //usei res porque "tela" já é muito usado

}
function porcentagem() {
    var tela = document.getElementById('tela');
    var res = tela.innerHTML;
    if (res) {
        // Adiciona o símbolo de porcentagem ao final da expressão
        tela.innerHTML = res + '%';
    }
}

function resposta() {
    var tela = document.getElementById('tela');
    var res = tela.innerHTML;
    if (res) {
            //não precisa colocar oque está dividindo apenas o * e o /100, como pode ver
        res = res.replace(/%/g, '/100*');
        var resultado = eval(res) 
        tela.innerHTML = resultado
    }
}

/*
num1 = 99
num2 = 50
calculo1 = num1 / 100
calculo2 = calculo1 * num2
calculo3 = calculo2
console.log(calculo)*/