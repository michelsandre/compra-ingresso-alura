// CAPTURAR ELEMENTOS
let elemTipoIngresso = document.getElementById("tipo-ingresso");
let elemQuantidade = document.getElementById("qtd");

let elemQuantidadePista = document.getElementById("qtd-pista");
let elemQuantidadeSuperior = document.getElementById("qtd-superior");
let elemQuantidadeInferior = document.getElementById("qtd-inferior");

// INGRESSOS DISPONIVEIS
let ingressosDisponiveis = {
  pista: elemQuantidadePista.textContent * 1,
  superior: elemQuantidadeSuperior.textContent * 1,
  inferior: elemQuantidadeInferior.textContent * 1,
};

// FUNCAO FORMATA QUANTIDADE DE DIGITOS PARA 3
function formataNumeros(num) {
  let formata = new Intl.NumberFormat(undefined, { minimumIntegerDigits: 3 });
  return formata.format(num);
}

// FUNCAO DE COMPRAR
function comprar() {
  // Captura o tipo do ingresso + quantidade
  let ingresso = {
    tipo: elemTipoIngresso.value,
    quantidade: elemQuantidade.value * 1,
  };

  validaCompra(ingresso.tipo, ingresso.quantidade);
  atualizaIngressos();
}

// FUNCAO ATUALIZA A QUANTIADADE DE INGRESSOS NA TELA
function atualizaIngressos() {
  elemQuantidadePista.textContent = formataNumeros(ingressosDisponiveis.pista);
  elemQuantidadeSuperior.textContent = formataNumeros(
    ingressosDisponiveis.superior
  );
  elemQuantidadeInferior.textContent = formataNumeros(
    ingressosDisponiveis.inferior
  );
}

// VERIFICA SE EXISTE INGRESSO DISPONIVEL, ENTAO VALIDA A COMPRA
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
