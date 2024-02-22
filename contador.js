// Pegando os elementos do html pra utilizar no java script
const incrementar$ = document.getElementById("incrementar")
const zerar$ = document.getElementById("zerar")
const decrementar$ = document.getElementById("decrementar")
const p$ = document.getElementById("contador")

//definindo o contador que será alterado nas funções
let contador = 0;

// passando o valor do contador pro <p> do html
p$.innerHTML = contador

// função  incrementar que adiciona um ao contador
incrementar$.addEventListener("click", function () {
    contador++
    p$.innerHTML = contador
})


zerar$.addEventListener("click", function() {
    contador = 0
    p$.innerHTML = contador
})

// função decrementar que subtrai um do contador
decrementar$.addEventListener("click", function() {
    contador--
    p$.innerHTML = contador
})


