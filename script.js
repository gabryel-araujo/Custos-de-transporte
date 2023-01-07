function limparForm(){
  document.getElementById("dinheiro").value = "";
  document.getElementById("valorPassagem").value = "";
  document.getElementById("viagens").value = "";
  document.getElementById("saldo").value = "";
  document.getElementById("valorPassagem2").value = "";
  document.getElementById("viagens2").value = "";
  document.getElementById("km").value = "";
  document.getElementById("autonomia").value = "";
  document.getElementById("combustivel").value = "";
  document.getElementById("baseCalculo").value = "";
}

function calcular(){

  if(document.getElementById("dinheiro").value == "" || document.getElementById("valorPassagem").value == "" || document.getElementById("viagens").value == "" ){
    alert("Os campos não podem estar vazios");
  }else{
    var dinheiro = document.getElementById("dinheiro").value;
    var valorPassagem = document.getElementById("valorPassagem").value;
    var viagens = document.getElementById("viagens").value;


    var resultado = ( parseFloat(valorPassagem) * parseInt(viagens) ) * 30;
    document.getElementById("resultado").innerHTML = "Seu gasto mensal com passagens é: " + resultado.toFixed(2);

    var saldo = dinheiro - resultado;
    var falta = resultado - dinheiro;

    if(saldo > 0){
      document.getElementById("saldoRemanescente").innerHTML = "Resta para você: " + saldo.toFixed(2);
    }

    if(saldo < 0){
      document.getElementById("saldoRemanescente").innerHTML = "Você precisará desembolsar " + falta.toFixed(2);
    }
  }

  limparForm();
}

function calcularViagens(){
  if(document.getElementById("saldo").value == "" || document.getElementById("valorPassagem2").value == "" || document.getElementById("viagens2").value == "" ){
    alert("Os campos não podem estar vazios");
  }else{
    var saldo2 = document.getElementById("saldo").value;
    var valorPassagem2 = document.getElementById("valorPassagem2").value;
    var viagens2 = document.getElementById("viagens2").value;
    var quantidadeViagens;

    var custoDiario = valorPassagem2 * viagens2;
    quantidadeViagens = saldo2 / custoDiario;

    document.getElementById("resultado2").innerHTML = "Você abastecendo R$" + saldo2 + " terá direito a " + quantidadeViagens.toFixed(0) + " dias de viagens.";
  }

  limparForm();
}

function calcularConsumo(){
  if(document.getElementById("km").value == "" || document.getElementById("autonomia").value == "" || document.getElementById("combustivel").value == "" || document.getElementById("baseCalculo").value == ""){
    alert("Os campos não podem estar vazios");
  }else{
    var distancia = document.getElementById("km").value;
    var autonomia = document.getElementById("autonomia").value;
    var precoCombustivel = document.getElementById("combustivel").value;
    var opcao = document.getElementById("baseCalculo").value;
    var custo;

    var consumo = (distancia / autonomia);

    document.getElementById("resultadoConsumo").innerHTML = "Para fazer o percuso de " + distancia + "Km " + "você gastará " + consumo + "L de gasolina.";

    if(opcao === "semanal") {
      custo = (consumo * precoCombustivel) * 6;
      document.getElementById("resultado3").innerHTML = "Isso te gerará um custo semanal de R$" + custo.toFixed(2);
    }

    if(opcao === "quinzenal") {
      custo = (consumo * precoCombustivel) * 15;
      document.getElementById("resultado3").innerHTML = "Isso te gerará um custo semanal de R$" + custo.toFixed(2);
    }

    if(opcao === "mensal") {
      custo = (consumo * precoCombustivel) * 30;
      document.getElementById("resultado3").innerHTML = "Isso te gerará um custo semanal de R$" + custo.toFixed(2);
    }
  }

  limparForm();
}