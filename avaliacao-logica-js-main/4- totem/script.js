const precosSanduiches = {
    frango: 10.00,
    carne: 15.00,
    atum: 21.00,
    ovo: 20.00
};

const precoAcompanhamento = 2.00;
let acompanhamentosSelecionados = [];

function mostrarAcompanhamentos() {
    const opcoes = ["Maionese", "Carne", "Queijo", "Bacon", "Salada"];
    let divAcompanhamentos = document.getElementById("acompanhamentos");

    if (!divAcompanhamentos) {
        divAcompanhamentos = document.createElement("div");
        divAcompanhamentos.id = "acompanhamentos";
        document.querySelector(".formulario form").appendChild(divAcompanhamentos);
    } else {
        divAcompanhamentos.innerHTML = '';
    }

    opcoes.forEach(opcao => {
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.id = opcao;
        checkbox.value = opcao;
        checkbox.name = "acompanhamento";

        const label = document.createElement("label");
        label.htmlFor = opcao;
        label.textContent = `${opcao} (R$2,00)`;

        const div = document.createElement("div");
        div.appendChild(checkbox);
        div.appendChild(label);

        divAcompanhamentos.appendChild(div);
    });

    divAcompanhamentos.addEventListener("change", function (e) {
        if (e.target.name === "acompanhamento") {
            if (e.target.checked) {
                acompanhamentosSelecionados.push(e.target.value);
            } else {
                acompanhamentosSelecionados = acompanhamentosSelecionados.filter(item => item !== e.target.value);
            }
        }
    });
}

function finalizarPedido() {
    const selectSanduiche = document.getElementById("sanduiche");
    const sanduicheSelecionado = selectSanduiche.value;

    if (!sanduicheSelecionado) {
        alert("Por favor, selecione um sanduíche.");
        return;
    }

    const precoSanduiche = precosSanduiches[sanduicheSelecionado];
    const totalAcompanhamentos = acompanhamentosSelecionados.length * precoAcompanhamento;
    const precoTotal = precoSanduiche + totalAcompanhamentos;

    document.getElementById("total").textContent = precoTotal.toFixed(2);
}
