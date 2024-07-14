let alunos = [];

function calcularStatus(media) {
    if (media >= 7) {
        return "Aprovado";
    } else if (media >= 4) {
        return "Em Recuperação";
    } else {
        return "Reprovado";
    }
}

// cadastrar aluno
function cadastrarAluno() {
    let nome = document.getElementById("nome").value;
    let nota1 = parseFloat(document.getElementById("primeiro").value);
    let nota2 = parseFloat(document.getElementById("segundo").value);
    let nota3 = parseFloat(document.getElementById("terceiro").value);
    let nota4 = parseFloat(document.getElementById("quarto").value);

    // média
    let media = (nota1 + nota2 + nota3 + nota4) / 4;
    let status = calcularStatus(media);
    alunos.push({ nome: nome, status: status });

    document.getElementById("nome").value = "";
    document.getElementById("primeiro").value = "";
    document.getElementById("segundo").value = "";
    document.getElementById("terceiro").value = "";
    document.getElementById("quarto").value = "";
}

function gerarRelatorio() {
    let listaAlunos = document.getElementById("lista_alunos");
    listaAlunos.innerHTML = "";

    alunos.forEach(function(aluno) {
        let itemLista = document.createElement("li");
        itemLista.textContent = `${aluno.nome}: ${aluno.status}`;
        listaAlunos.appendChild(itemLista);
    });
}