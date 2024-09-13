// seleçao de elementos
const form = document.querySelector("#form-tabuada");
const numberInput = document.querySelector("#number");
const multiplicator = document.querySelector("#multiplicator");
const span = document.querySelector("#title span");

const table = document.querySelector("#multiplication-operation");

// funçoes
const createTable = (number, multiplicat) => {
  table.innerHTML = "";

  for (i = 1; i <= multiplicat; i++) {
    const result = number * i;

    const template = `<div class = "row">
    <div class = "operation">${number} x ${i} = </div> 
    
    <div class = "result">${result}</div>
    </div>`;

    const parser = new DOMParser();

    const htmlTemplate = parser.parseFromString(template, "text/html");

    const row = htmlTemplate.querySelector(".row");

    table.appendChild(row);
  }
  span.innerText = number;
};

// eventos
form.addEventListener("submit", (e) => {
  // para nao recarregar a pagina
  e.preventDefault();

  const multiplicationNumber = parseInt(numberInput.value);

  const multiplicatorNumber = +multiplicator.value;

  // validação
  if (!multiplicationNumber || !multiplicatorNumber) {
    alert("Preencha os campos corretamente");
  }

  createTable(multiplicationNumber, multiplicatorNumber);
});
