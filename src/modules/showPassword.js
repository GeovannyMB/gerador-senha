import geraSenha from "./GeraSenha";

const resultado = document.querySelector(".resultado");
const qtdCaracteres = document.querySelector("#qtd-caracteres");
const chkUpper = document.querySelector("#upper");
const chkLower = document.querySelector("#lower");
const chkNumber = document.querySelector("#number");
const chkSymbol = document.querySelector("#symbol");
const btnPassword = document.querySelector(".btn-gera-senha");

export default () => {
  btnPassword.addEventListener("click", () => {
    resultado.innerHTML = gera();
  });
};

function gera() {
  const senha = geraSenha(
    qtdCaracteres.value,
    chkUpper.checked,
    chkLower.checked,
    chkNumber.checked,
    chkSymbol.checked
  );

  return senha;
}
