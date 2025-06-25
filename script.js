const botao = document.getElementById('mostrarMensagem');
const mensagem = document.getElementById('mensagem');
const texto = "Muito obrigado por tirar um tempinho para conhecer um pouco mais sobre mim! Desejo tudo de bom pra você, que sua vida seja cheia de conquistas e momentos felizes!";
botao.addEventListener('click', function() {
    mensagem.textContent = texto;
});
