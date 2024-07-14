function caucularPCD() {
    const alunos = parseInt(document.getElementById('alunos').value);
    const alunosPCD = parseInt(document.getElementById('alunos_pcd').value);
    
    const totalAlunos = alunos + alunosPCD;
    const percentualPCD = (alunosPCD / totalAlunos) * 100;

    document.getElementById('total_alunos').innerText = totalAlunos;
    document.getElementById('percentual_pcd').innerText = percentualPCD.toFixed(1);
}