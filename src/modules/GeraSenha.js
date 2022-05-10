/* export default class GeraSenha {
  constructor() {
    const btnGerarSenha = document.querySelector(".btn-gera-senha");
    const divResult = document.querySelector(".resultado");
    const qtdCaracteres = document.querySelector("#qtd-caracteres");
    const checkboxUppercase = document.querySelector("#upper");
    const checkboxLowercase = document.querySelector("#lower");
    const checkboxSymbol = document.querySelector("#symbol");

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
      divResult.innerHTML = getRandomStringUppercase(qtdCaracteres.value);
      divResult.innerHTML += getRandomStringLowercase(qtdCaracteres.value);
      divResult.innerHTML += getRandomSymbol(qtdCaracteres.value);
      divResult.innerHTML += charactersLimit();
    };

    const lengthResult = () => {};

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

    const getRandomSymbol = (tamanho) => {
      if (checkboxSymbol.checked) {
        let randomSymbol = "";
        const symbol = "!@#$%¨&*()_-+={}`^:>?|";

        for (let i = 0; i < tamanho; i++) {
          randomSymbol += symbol.charAt(
            Math.floor(Math.random() * symbol.length)
          );
        }
        return randomSymbol;
      }

      return "";
    };

    const novaSenha = () => {
      btnGerarSenha.addEventListener("click", () => {
        gerarSenha();
      });
    };

    novaSenha();
  }
}
 */

const rand = (min, max) => Math.floor(Math.random() * (max - min) + min);
const geraMaiuscula = () => String.fromCharCode(rand(65, 91));
const geraMinuscula = () => String.fromCharCode(rand(97, 123));
const geraNumero = () => String.fromCharCode(rand(48, 58));
const simbolos = ',.;/]´[-=)(*&¨%$#@!"';
const geraSimbolo = () => simbolos[rand(0, simbolos.length)];

export default function geraSenha(qtd, maiuscula, minuscula, numero, simbolo) {
  const senhaArray = [];
  qtd = Number();

  for (let i = 0; i < qtd; i++) {
    maiuscula && senhaArray.push(geraMaiuscula());
    minuscula && senhaArray.push(geraMinuscula());
    numero && senhaArray.push(geraNumero());
    simbolo && senhaArray.push(geraSimbolo());
  }

  return senhaArray.join("").slice(0, qtd);
}
