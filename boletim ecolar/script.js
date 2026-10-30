function calcularMedia() {
    // Captura dos elementos e valores
    const nomeInput = document.getElementById('nome').value.trim();
    const n1 = parseFloat(document.getElementById('nota1').value);
    const n2 = parseFloat(document.getElementById('nota2').value);
    const n3 = parseFloat(document.getElementById('nota3').value);
    const resultadoDiv = document.getElementById('resultado');

    // Validação de dados de entrada
    if (nomeInput === "") {
        exibirMensagem("Por favor, preencha o nome do estudante.", "erro");
        return;
    }

    if (isNaN(n1) || isNaN(n2) || isNaN(n3)) {
        exibirMensagem("Por favor, preencha todas as três notas antes de calcular.", "erro");
        return;
    }

    if (n1 < 0 || n1 > 10 || n2 < 0 || n2 > 10 || n3 < 0 || n3 > 10) {
        exibirMensagem("Valores inválidos! As notas precisam estar rigorosamente entre 0.0 e 10.0.", "erro");
        return;
    }

    // Processamento (Cálculo da Média)
    const media = (n1 + n2 + n3) / 3;
    let situacao = "";
    let classeCss = "";

    // Estrutura Condicional para determinar a situação
    if (media >= 7.0) {
        situacao = "Aprovado(a)";
        classeCss = "aprovado";
    } else if (media >= 5.0 && media < 7.0) {
        situacao = "Recuperação";
        classeCss = "recuperacao";
    } else {
        situacao = "Reprovado(a)";
        classeCss = "reprovado";
    }

    // Saída dos resultados formatados de forma agradável
    resultadoDiv.className = `resultado-box ${classeCss}`;
    resultadoDiv.innerHTML = `
        <p>Estudante: <strong>${nomeInput}</strong></p>
        <p>Situação: <strong>${situacao}</strong></p>
        <p>Média Final: <span class="media-destaque">${media.toFixed(1)}</span></p>
    `;
}

function exibirMensagem(texto, classe) {
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.className = `resultado-box ${classe}`;
    resultadoDiv.innerHTML = `<p><strong>Atenção:</strong> ${texto}</p>`;
}

function limparCampos() {
    // Reseta o formulário
    document.getElementById('nome').value = "";
    document.getElementById('nota1').value = "";
    document.getElementById('nota2').value = "";
    document.getElementById('nota3').value = "";
    
    // Oculta e limpa a área de resultados
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.className = "resultado-box hidden";
    resultadoDiv.innerHTML = "";
}
