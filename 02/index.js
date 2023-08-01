const carro = {
    Ligado: false,
    velocidade: 20,
    ligar: function ligarCarro() {
        if (carro.Ligado) {
            console.log("Este carro já está ligado")
        }
        else {
            carro.Ligado = true
            console.log('carro ligado')
            carro.imprimirConsole()
        }
    },
    desligar: function desligarCarro() {
        if (!carro.Ligado) {
            console.log('Este carro já está desligado')
        }
        else {
            carro.Ligado = false
            carro.velocidade = 0
            carro.imprimirConsole()
        }

    },
    Acelerar: function Acelerarcarro() {
        if (!carro.Ligado) {
            console.log('Não é possível desacelerar um carro desligado')
        }
        else {
            carro.velocidade += 10
            carro.imprimirConsole()

        }
    },
    Desacelerar: function DesacelerarCarro() {
        if (!carro.Ligado) {
            console.log('Não é possível desacelerar um carro desligado.')
        }
        else {
            carro.velocidade -= 10
            carro.imprimirConsole()
        }
    },
    imprimirConsole: function () {
        const status = carro.Ligado ? 'Ligado' : 'Desligado'
        console.log(`Carro ${status}. Velocidade: ${carro.velocidade}.`)
    }

}
carro.desligar()
carro.ligar()
carro.ligar()
carro.Acelerar()
carro.Acelerar()
carro.Desacelerar()
carro.desligar()
carro.Acelerar()
carro.Desacelerar()




