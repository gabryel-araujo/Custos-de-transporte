function limparForm(){
  document.getElementById("dinheiro").value = "";
  document.getElementById("valorPassagem").value = "";
  document.getElementById("viagens").value = "";
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