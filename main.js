/*globalne varijable*/
//html elementi
const container = document.createElement("div");
const enterValue = document.createElement("div");
const enterValue2 = document.createElement("div");
const enterValue3 = document.createElement("div");
const title = document.createElement("h2");
const enteredValueInch = document.createElement("input");
const enteredValueFoot = document.createElement("input");
const enteredValueYard = document.createElement("input");
const translate = document.createElement("button");
const translateText = document.createElement("p");
enteredValueInch.setAttribute("type", "number");
enteredValueFoot.setAttribute("type", "number");
enteredValueYard.setAttribute("type", "number");

//konstante
const inchToCm = 2.54;
const footToCm = 30.48;
const yardToCm = 91.44;

//promjenjive varijable
let cmtr = 0;

//stil elemenata
container.setAttribute("class", "container");
enterValue.setAttribute("class", "value");
enterValue2.setAttribute("class", "value");
enterValue3.setAttribute("class", "value");
title.setAttribute("class", "title");
enteredValueInch.setAttribute("class", "input-field");
enteredValueFoot.setAttribute("class", "input-field");
enteredValueYard.setAttribute("class", "input-field");

//innerHTML
title.innerHTML = "Preračun duljina";
enterValue.innerHTML = ` inch = ${cmtr} cm`;
enterValue2.innerHTML = ` foot = ${cmtr} cm`;
enterValue3.innerHTML = ` yard = ${cmtr} cm`;
translateText.innerHTML = "Preračunaj";

//unos elemenata
document.body.append(container);
container.append(title);
translate.append(translateText);
appendingValuesInch();
appendingValuesFoot();
appendingValuesYard();
//container.append(enterValue2);
document.body.append(translate);
//document.querySelector(".input").type = "number";

/*funkcije*/
//poziv funkcija

//kreiranje funkcija
function appendingValuesInch() {
  container.append(enterValue);
  enterValue.prepend(enteredValueInch);
}
function appendingValuesFoot() {
  container.append(enterValue2);
  enterValue2.prepend(enteredValueFoot);
}
function appendingValuesYard() {
  container.append(enterValue3);
  enterValue3.prepend(enteredValueYard);
}

//event listeners
translate.addEventListener("click", () => {
  let valueInch = enteredValueInch.value;
  let valueFoot = enteredValueFoot.value;
  let valueYard = enteredValueYard.value;

  cmtr = valueInch * inchToCm;
  enterValue.innerHTML = ` inch = ${cmtr} cm`;
  appendingValuesInch();

  cmtr = valueFoot * footToCm;
  enterValue2.innerHTML = ` foot = ${cmtr} cm`;
  appendingValuesFoot();

  cmtr = valueYard * yardToCm;
  enterValue3.innerHTML = ` yard = ${cmtr} cm`;
  appendingValuesYard();
});

translate.addEventListener("keypress", (e) => {
  if ((e = "enter")) {
    let valueInch = enteredValueInch.value;
    let valueFoot = enteredValueFoot.value;
    let valueYard = enteredValueYard.value;

    cmtr = valueInch * inchToCm;
    enterValue.innerHTML = ` inch = ${cmtr} cm`;
    appendingValuesInch();

    cmtr = valueFoot * footToCm;
    enterValue2.innerHTML = ` foot = ${cmtr} cm`;
    appendingValuesFoot();

    cmtr = valueYard * yardToCm;
    enterValue3.innerHTML = ` yard = ${cmtr} cm`;
    appendingValuesYard();
  }
});
