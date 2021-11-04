let base = Number(prompt("ingrese la base"));
let exp = Number(prompt("ingrese el exponente"));

function potencia(base: number, exp: number): number {
  let numero: number = 1;
  if (exp === 0) {
    return 1;
  } else {
    for (let i = 1; i <= exp; i++) {
      numero = numero * base;
    }
    return numero;
  }
}
console.log(" la potencia es =", potencia(base, exp));
