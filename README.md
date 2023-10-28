# Compra de Ingressos Alura

Práitica de lógica de programação através deste desafio de criar um App de compra de ingressos.

## 🚀 Funcionalidades

- Comprar
- Verifica quantidade de ingressos disponíveis antes de validar a compra
- Atualiza quantidade de ingressos com 3 digitos significativos

## 🛠 Tecnologia aplicada

Javascript, HTML, CSS...

## Uso/Exemplos

#### Função para formatar número para 3 digítos

```javascript
function formataNumeros(num) {
  let formata = new Intl.NumberFormat(undefined, { minimumIntegerDigits: 3 });
  return formata.format(num);
}
```

#### Função para validar compra

```javascript
function validaCompra(tipo, qtd) {
  if (ingressosDisponiveis[tipo] - qtd >= 0) {
    ingressosDisponiveis[tipo] -= qtd;
  } else {
    let tipoIngresso =
      tipo == "pista"
        ? "Pista"
        : tipo == "inferior"
        ? "Cadeira inferior"
        : tipo == "superior"
        ? "Cadeira superior"
        : "";
    alert(
      `Não há ingressos suficientes de ${tipoIngresso} para esta quantidade`
    );
  }
}
```

## Autores

- [@michelsandre](https://www.github.com/michelsandre)
