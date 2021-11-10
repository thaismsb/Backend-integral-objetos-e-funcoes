const prova = {
    aluno: "João",
    materia: "Português",
    valor: 10,
    questoes: [
        {
            resposta: "a",
            correta: "b"
        },
        {
            resposta: "c",
            correta: "c"
        },
        {
            resposta: "e",
            correta: "b"
        },
        {
            resposta: "b",
            correta: "b"
        },
        {
            resposta: "c",
            correta: "c"
        }
    ]
};

function corrigirProva(prova) {
    let questoesAcertadas = 0;
    let nota = 0;

    for (let item of prova.questoes) {
        if (item.resposta === item.correta) {
            questoesAcertadas += 1
            nota += 2


        }
    }
    console.log(`O aluno ${prova.aluno} acertou ${questoesAcertadas} questões e obteve nota ${nota}`)

}

corrigirProva(prova);
