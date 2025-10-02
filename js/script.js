document.addEventListener('DOMContentLoaded', function() {

    const meuBotao = document.getElementById("meuBotao");
    const modalVitoria = document.getElementById("modalVitoria");
    const closeModalBtn = document.getElementById("closeModalBtn");
    const playAgain = document.getElementById("playAgain");


    if (meuBotao && modalVitoria && closeModalBtn && playAgain) {

        function abrirModal() {
            modalVitoria.classList.remove("hidden");
            playAgain.classList.remove("hidden")
        }

        function fecharModal() {
            modalVitoria.classList.add("hidden");
            playAgain.classList.add("hidden");
        }

        meuBotao.addEventListener("click", abrirModal);

        closeModalBtn.addEventListener("click", fecharModal);

        modalVitoria.addEventListener("click", function (event) {
            if (event.target === modalVitoria) {
                fecharModal();
            }
        });

        playAgain.addEventListener("click", fecharModal);

    } else {
        console.error("Não foi possível encontrar um ou mais elementos do modal no HTML. Verifique os IDs.");
    }

});