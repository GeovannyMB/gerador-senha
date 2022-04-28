export default class GeraSenha {
  constructor() {
    const btnGerarSenha = document.querySelector(".btn-gera-senha");
    const divResult = document.querySelector(".resultado");
    const qtdCaracteres = document.querySelector("#qtd-caracteres");
    const checkboxUppercase = document.querySelector("#upper");
    const checkboxLowercase = document.querySelector("#lower");

    function getRandomInt() {
      return Math.floor(Math.random() * qtdCaracteres.value);
    }

    const charactersLimit = () => {
      let n = "";

      for (let i = 0; i < qtdCaracteres.value; i++) {
        n += getRandomInt();
      }

      return n;
    };

    const gerarSenha = () => {
      divResult.innerText = getRandomStringUppercase(5);
      divResult.innerText += getRandomStringLowercase(5);
      divResult.innerText += charactersLimit();
    };

    const getRandomStringUppercase = (tamanho) => {
      if (checkboxUppercase.checked) {
        let randomString = "";
        const string = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

        for (let i = 0; i < tamanho; i++) {
          randomString += string.charAt(
            Math.floor(Math.random() * string.length)
          );
        }

        return randomString;
      }

      return "";
    };

    const getRandomStringLowercase = (tamanho) => {
      if (checkboxLowercase.checked) {
        let randomString = "";
        const string = "abcdefghijklmnopqrstuvwxyz";

        for (let i = 0; i < tamanho; i++) {
          randomString += string.charAt(
            Math.floor(Math.random() * string.length)
          );
        }

        return randomString;
      }

      return "";
    };

    const novaSenha = () => {
      btnGerarSenha.addEventListener("click", gerarSenha);
    };

    novaSenha();
  }
}
