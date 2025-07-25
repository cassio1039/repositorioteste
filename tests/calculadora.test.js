let calculadora = require("../models/calculadora")

test("somar 2+2 deveria retornar 4", () => {
  let resultado = calculadora.somar(2,5);
  console.log(resultado)
  expect(resultado).toBe(7)
});
test("somar 5 + 100 deveria retornar 105", () => {
  let resultado = calculadora.somar(5,100);
  console.log(resultado)
  expect(resultado).toBe(105)
});