export default class GeraSenha {
  constructor() {
    const btnGerarSenha = document.querySelector(".btn-gera-senha");
    const divResult = document.querySelector(".resultado");
    const qtdCaracteres = document.querySelector("#qtd-caracteres").value;

    function getRandomInt() {
      const randomNumber = Math.floor(Math.random());

      return randomNumber;
    }

    const caractereLimit = () => {
      return qtdCaracteres;
    };

    const gerarSenha = () => {
      divResult.innerHTML = getRandomInt();
    };

    const novaSenha = () => {
      btnGerarSenha.addEventListener("click", gerarSenha);
    };

    novaSenha();
  }
}
