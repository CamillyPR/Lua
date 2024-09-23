//Variável para armazenar o botão ativo//
let botaoAtivo = null;
//Função que exibe a imagem e altera o texto com base no botão clicado//
function exibirImagem(opcao, botao) {
    //Referencia para a imagem e o texto html//
    let imagem = document.getElementById("imagem");
    let texto = document.getElementById("texto");

    // Estrutura de decisão simples para alterar a imagem e o texto
    if (opcao ==='bambu') {
        imagem.src = "bambu.png"; //url da imagem do sol
        imagem.style.display = "block";//Exibe a imagem
        texto.innerText = "Você escolheu o bambu! Além de ser ambundante no bioma de Selva, tem uma grande gama de itens que podem ser criados a partir dele.";
        document.querySelector("body").style.background ="#95b963";
    } else if (opcao ==='madeira') {
        imagem.src = "madeira.png"; //URL da imagem da lua
        imagem.style.display = "block";
        texto.innerText = "Você escolheu a Madeira! É um dos principais itens do jogo pois a maioria dos crafts o usa. ";
        document.querySelector("body").style.background ="#816043";
    } else if (opcao ==='terra') {
        imagem.src = "terra.png"; //URL da imagem da lua
        imagem.style.display = "block";
        texto.innerText = "Você escolheu o Bloco de Terra! O bloco característico do Minecraft desde sua criação, vai da sua criatividade saber o que fará com ele.";
        document.querySelector("body").style.background ="#38291a";
    } else if (opcao ==='bau') {
        imagem.src = "bau.png"; //URL da imagem da lua
        imagem.style.display = "block";
        texto.innerText = "Você escolheu o Baú do Ender! É muito usado em longas aventuras, aonde se fica longe de sua casa: Ele liga baús a distância e é crucial em mundos muito explorados.";
        document.querySelector("body").style.background ="#542c52";
    } else if (opcao ==='diamante') {
        imagem.src = "diamante.png"; //URL da imagem da lua
        imagem.style.display = "block";
        texto.innerText = "Você escolheu o Diamante! Um bloco que brilha os olhos de qualquer um que o vê: items criados com diamante tem uma ótima durabilidade.";
        document.querySelector("body").style.background ="#b9f2ff";
    } else {
        //Caso a opção não seja válida, uma mensagem de erro é exibida
        imagem.style.display = "none"; //Esconde a imagem
        texto.innerText = "Opção inválida. Escolha entre Sol, Lua ou Estrela.";
        document.querySelector("body").style.background ="#fd99a2";
    }

    // Alterar a cor do botão clicado
    if (botaoAtivo) {
        botaoAtivo.classList.remove('active'); //Remove a classe do botão anterior
    }
    botao.classList.add('active'); //Adiciona a classe ao botão atual
    botaoAtivo = botao; //Atualiza o botão ativo 
}