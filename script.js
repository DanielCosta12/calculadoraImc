
const button = document.querySelector("#button");

function confirm() {
  let altura = document.querySelector("#altura").valueAsNumber;
  let peso = document.querySelector("#peso").valueAsNumber;
  let bmi = parseInt((peso / ((altura * altura) / 10000)));
  console.log(bmi);
  checkBMI(bmi);
}
function result (imc,text){
  let resultado = document.querySelector("#resultado")
  resultado.textContent = `Seu IMC é: ${imc} e você está ${text}`;
}
function checkBMI(bmi) {
  const imc = bmi;
  if (imc<19) result(imc, text = "sem comer, você precisa comer urgentemente!")
  if (imc >= 19 && imc <= 24) result(imc, text = "com peso normal")
  if (imc >= 25 && imc <= 29) result(imc,text = "com sobrepeso") 
  if (imc >= 30 && imc <= 34) result(imc,text = "com obesidade 1") 
  if (imc >= 35 && imc <= 39) result(imc,text= "com obesidade 2")
  if (imc > 40) result(imc, text = "obesidade 3")
}

button.addEventListener("click", () => confirm());