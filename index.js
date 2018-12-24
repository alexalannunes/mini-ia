const keywords = ["fatura", "pagamento"];
let responses = [];

responses["fatura"] = [
  "Pagar fatura",
  "Saber minha fatura"
];
responses["pagamento"] = [
  "depositar pagamento",
  "dia de pagamento"
];

// vai mostrar as quatro perguntas
const key = "Saber minha fatura e dia de pagamento";
// separa as palavras em vetor
const key_arr = key.split(' ');

// exibe
function exibe(array) {
  array.forEach((value, index) => {
    console.log(value);
  })
}

key_arr.forEach((item, index) => {
  /**
   * varre cada palavra das perguntas e mostra
   * as perguntas respectivas a palavra chave
   */
  if (keywords.indexOf(item) != -1) {
    exibe(responses[item]);
  }
})
