// importando o input em tela
import input from "readline-sync";

// entrada de dados
var salario_minimo = [
  { salario: 510, ano: 2010 },
  { salario: 545, ano: 2011 },
  { salario: 622, ano: 2012 },
  { salario: 678, ano: 2013 },
  { salario: 724, ano: 2014 },
  { salario: 788, ano: 2015 },
  { salario: 880, ano: 2016 },
  { salario: 937, ano: 2017 },
  { salario: 954, ano: 2018 },
  { salario: 998, ano: 2019 },
  { salario: 1045, ano: 2020 },
];

var percentual_inflacao = [
  { inflacao: 5.91, ano: 2010 },
  { inflacao: 6.5, ano: 2011 },
  { inflacao: 5.84, ano: 2012 },
  { inflacao: 5.91, ano: 2013 },
  { inflacao: 6.41, ano: 2014 },
  { inflacao: 10.67, ano: 2015 },
  { inflacao: 6.29, ano: 2016 },
  { inflacao: 2.95, ano: 2017 },
  { inflacao: 3.75, ano: 2018 },
  { inflacao: 4.31, ano: 2019 },
  { inflacao: 4.52, ano: 2020 },
];

console.log("=== COMPARAÇÃO ENTRE SALÁRIO E INFLAÇÃO - DE 2010 A 2020 ===\n");
console.log("1. Listar salários");
console.log("2. Listar inflação");
console.log("3. Comparar crescimento salarial x inflação \n ");

let opcao = Number(input.question("Digite o número escolhido: "));

// processamento

let anoLabel = " Ano: ";
let salarioLabel = " Salário: ";
let inflacaoLabel = " Inflação: ";
let crescimentoLabel = " Crescimento salarial: ";

anoLabel = anoLabel.padEnd(30, ".");
salarioLabel = salarioLabel.padEnd(30, ".");
inflacaoLabel = inflacaoLabel.padEnd(30, ".");
crescimentoLabel = crescimentoLabel.padEnd(30, ".");

switch (opcao) {
  case 1: {
    console.log("\n --- Listar salárimo mínimo - 2010 a 2020----\n");
    for (let dados_salario of salario_minimo) {
      let ano = dados_salario.ano;
      let valor_salario = dados_salario.salario;
      let salario_formatado = valor_salario.toFixed(2).replace(".", ",");

      console.log("\n");
      console.log(anoLabel + ano);
      console.log(salarioLabel + "R$ " + salario_formatado);
    }
    break;
  }

  case 2: {
    console.log("\n --- Listar inflação - 2010 a 2020----\n");
    for (let dados_inflacao of percentual_inflacao) {
      let ano = dados_inflacao.ano;
      let valor_inflacao = dados_inflacao.inflacao;
      let inflacao_formatada = valor_inflacao.toFixed(2).replace(".", ",");

      console.log("\n");
      console.log(anoLabel + ano);
      console.log(inflacaoLabel + inflacao_formatada + "%");
    }
    break;
  }
  case 3: {
    console.log("\n --- Listar crescimentos- 2010 a 2020----\n");
    for (let i = 0; i <= salario_minimo.length - 1; i++) {
      let ano = salario_minimo[i].ano;
      let salario = salario_minimo[i].salario;
      let percentualCrescimento;
      let crescimentoFormatado;

      if (i > 0) {
        let salarioAnterior = salario_minimo[i - 1].salario;
        let diferenca = salario - salarioAnterior;

        percentualCrescimento = (diferenca / salarioAnterior) * 100;

        crescimentoFormatado =
          percentualCrescimento.toFixed(2).replace(".", ",") + "%";
      } else {
        crescimentoFormatado = "-";
      }
      let ipca = percentual_inflacao[i].inflacao;

      let salarioFormatado = salario.toFixed(2).replace(".", ",");
      let ipcaFormatado = ipca.toFixed(2).replace(".", ",");

      console.log("\n");
      console.log(anoLabel + ano);
      console.log(salarioLabel + "R$ " + salarioFormatado);
      console.log(crescimentoLabel + crescimentoFormatado);
      console.log(inflacaoLabel + ipcaFormatado + "%");
    }
    break;
  }
  default:
    console.log("Opção inválida!");
    break;
}
