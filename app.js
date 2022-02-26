let primeiroNumero = document.querySelector("#n1");
let segundoNumero= document.querySelector("#n2");
let resultado = document.querySelector("h2");

let somar=()=> {
  resultado.innerHTML = parseInt(primeiroNumero.value) + parseInt(segundoNumero.value);
}
let subtrair = () => {
  resultado.innerHTML =
    parseInt(primeiroNumero.value) - parseInt(segundoNumero.value);
};
let multiplicar = () => {
  resultado.innerHTML =
    parseInt(primeiroNumero.value) * parseInt(segundoNumero.value);
};
let dividir = () => {
  resultado.innerHTML =
    parseInt(primeiroNumero.value) / parseInt(segundoNumero.value);
};
