const {
  sumar,
  restar,
  multiplicar,
  dividir
} = require("./calculator");

test("suma 2 + 3 y obtiene 5", () => {
  expect(sumar(2, 3)).toBe(5);
});

test("resta 10 - 4 y obtiene 6", () => {
  expect(restar(10, 4)).toBe(6);
});

test("multiplica 4 * 5 y obtiene 20", () => {
  expect(multiplicar(4, 5)).toBe(20);
});

test("divide 10 / 2 y obtiene 5", () => {
  expect(dividir(10, 2)).toBe(5);
});

test("genera un error al dividir entre cero", () => {
  expect(() => dividir(10, 0)).toThrow(
    "No se puede dividir entre cero"
  );
});