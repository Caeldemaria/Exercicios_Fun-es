function corrigirProva(prova) {
    const totalDeQuestões = prova.questoes.length
    let acertos = 0
    for (questoes of prova.questoes) {
        if (questoes.resposta === questoes.correta) {
            acertos++
        }

    }
    let nota = (acertos / totalDeQuestões) * prova.valor
    console.log(`O aluno(a) ${prova.aluno} acertou ${acertos} questões e obteve nota ${nota}`)

}

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
corrigirProva(prova)
