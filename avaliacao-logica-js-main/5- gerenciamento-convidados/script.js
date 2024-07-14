let convidados = [];

function cadastrarConvidado() {
    const input = document.getElementById('convidado');
    const nome = input.value.trim();
    if (nome) {
        if (convidados.length < 10) {
            convidados.push(nome);
            alert(`Convidado ${nome} adicionado.`);
        } else {
            alert("A lista está cheia. Não é possível adicionar mais convidados.");
        }
        input.value = '';
    }
}

function removerConvidado() {
    const nome = prompt("Digite o nome do convidado que deseja remover:");
    if (nome) {
        const index = convidados.indexOf(nome);
        if (index !== -1) {
            convidados.splice(index, 1);
            alert(`Convidado ${nome} removido.`);
        } else {
            alert(`Convidado ${nome} não encontrado na lista.`);
        }
    }
}

function exibirConvidados() {
    const lista = document.getElementById('lista_convidados');
    lista.innerHTML = '';

    convidados.sort();
    convidados.forEach(nome => {
        const item = document.createElement('li');
        item.textContent = nome;
        lista.appendChild(item);
    });
}
