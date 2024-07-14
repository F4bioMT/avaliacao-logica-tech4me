// dinheiro 5% desconto; 0% Outros

function calcularDesconto() {
    const venda = document.getElementById('venda').value;
    const pagamento = document.getElementById('pagamento').value;

    let valorFinal = parseFloat(venda);
    if (pagamento === 'avista') {
        valorFinal *= 0.95;
    }

    const resultadoVenda = document.getElementById('resultado_venda');
    resultadoVenda.textContent = `Valor Total: R$ ${valorFinal.toFixed(2)}`;

    const confirmacao = confirm(`Confirma a operação?\nValor Total: R$ ${valorFinal.toFixed(2)}`);
    if (confirmacao) {
        alert('Venda realizada com sucesso!');
    } else {
        alert('Operação cancelada.');
    }
}