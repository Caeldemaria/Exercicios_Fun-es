const carrinho = {
    nomeDoCliente: "Guido Bernal",
    produtos: [
        {
            id: 1,
            nome: "Camisa",
            qtd: 3,
            precoUnit: 3000
        },
        {
            id: 2,
            nome: "Bermuda",
            qtd: 2,
            precoUnit: 5000
        }
    ],
    imprimirResumo: function imprimirResumoDoCarrinho() {

        console.log(`Total de itens: ${carrinho.calcularTotalDeItens()}`)
        console.log(`Total a pagar: R$ ${carrinho.calcularTotalAPagar()}`)


    },
    adcinionarProduto: function addProduto(produto) {

        for (prod of carrinho.produtos) {
            if (prod.id === produto.id) {
                prod.qtd += produto.qtd

            } else if (prod.id !== produto.id) {
                carrinho.produtos.push(produto)
                break

            }
        }
    },
    imprimirDetalhes: function imprimirDetalhes() {
        console.log(` Cliente : ${carrinho.nomeDoCliente}`)
        let item = 1
        for (let i = 0; i < carrinho.produtos.length; i++) {
            console.log(`Item ${item} - ${carrinho.produtos[i].nome}. - ${carrinho.produtos[i].qtd} - R$ ${carrinho.produtos[i].precoUnit * carrinho.produtos[i].qtd}`)
            item++
        } carrinho.imprimirResumo()
    },
    calcularTotalDeItens: function calcularTotalDeItens() {
        let totalProdutos = 0
        for (let i = 0; i < carrinho.produtos.length; i++) {
            if (carrinho.produtos[i].qtd === carrinho.produtos[i].qtd) {
                totalProdutos += carrinho.produtos[i].qtd
            }
        } return totalProdutos
    },
    calcularTotalAPagar: function calcularTotalAPagar() {
        let totatlPre = 0
        for (let i = 0; i < carrinho.produtos.length; i++) {
            if (carrinho.produtos[i].precoUnit === carrinho.produtos[i].precoUnit) {
                totatlPre += carrinho.produtos[i].qtd * carrinho.produtos[i].precoUnit / 100
            }

        } return totatlPre
    },
    calcularDesconto: function calcularDesconto() {
        let desconto = 0
        let menor = 0
        let totalP = this.calcularTotalAPagar
        let toalItems = this.calcularTotalDeItens
        for (let i = 0; i < this.produtos.length; i++) {
            if (toalItems > 4) {
                menor = Math.min(...this.produtos[i].precoUnit)
                desconto = toalItems - menor
                return desconto
            }
            else if (totalP > 100) {
                desconto = totalP / 10

                return desconto
            }
        }
    }


}


carrinho.imprimirDetalhes()
carrinho.calcularDesconto()
