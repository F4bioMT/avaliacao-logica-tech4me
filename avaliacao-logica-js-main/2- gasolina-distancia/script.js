function calcular() {
    let distancia = document.getElementById('distancia').value;
    let consumo = document.getElementById('consumo').value;
    let preco = document.getElementById('preco').value;
    let passageiros = document.getElementById('passageiros').value;
    
    var gasolinaNecessaria = distancia / consumo;
    var custoTotal = gasolinaNecessaria * preco;
    var custoPorPessoa = custoTotal / passageiros;
    
    document.getElementById('resultado_gasolina_litros').textContent = gasolinaNecessaria.toFixed(2);
    document.getElementById('resultado_custo').textContent = 'R$ ' + custoTotal.toFixed(2);
    document.getElementById('resultado_custo_pessoa').textContent = 'R$ ' + custoPorPessoa.toFixed(2);
}