const elementoResposta = document.querySelector('#resposta')
const inputPergunta = document.querySelector('#inputPergunta')
const buttonPerguntar = document.querySelector('#buttonPerguntar')

const respostas = [
  "Certeza!",
  "Não tenho tanta certeza.",
  "É decididamente assim.",
  "Não conte com isso.",
  "Sem dúvidas!",
  "Pergunte novamente mais tarde.",
  "Sim, definitivamente!",
  "Minha resposta é não.",
  "Você pode contar com isso.",
  "Melhor não te dizer agora.",
  "A meu ver, sim.",
  "Minhas fontes dizem não.",
  "Provavelmente.",
  "Não é possível prever agora.",
  "Perspectiva boa.",
  "As perspectivas não são tão boas.",
  "Sim.",
  "Concentre-se e pergunte novamente.",
  "Sinais apontam que sim.",
]



//clicar em fazer pergunta

function fazerPergunta() {

  if (inputPergunta.value == ''){
    alert('Digite sua pergunta')
    return
  }
  
  buttonPerguntar.setAttribute('disabled', true)

  const pergunta = "<div>" + inputPergunta.value + "</div>"

  //pegando o tamanho da lista
  const totalRespostas = respostas.length
  
  //o math.floor arredonda p baixo e o random gera um número entre 0 e 1 
  // isso gera um numero aleatorio entre 0 e o tamanho da lista e devolve um indice pseudo randomico
  const numeroAleatorio = Math.floor(Math.random()*totalRespostas)

  //o innerHtml escreve as coisas p gente, nesse caso está escrevendo aquelas respostas
  elementoResposta.innerHTML = pergunta + respostas[numeroAleatorio]

  elementoResposta.style.opacity = 1;
  
  //sumir a resposta depois de 3 segundos
  //function() é chamada de função anônima
  setTimeout(function() {
    elementoResposta.style.opacity = 0;
    buttonPerguntar.removeAttribute('disabled')
  }, 3000)
  
}

