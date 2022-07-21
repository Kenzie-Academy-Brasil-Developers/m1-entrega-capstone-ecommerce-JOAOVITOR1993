let pratos = []
let salgados   = []
let doces  = []

let carrinhoCompras = []

function dividirProdutosSecoes(arrayProdutos){
    for(let i = 0; i < arrayProdutos.length; i++){
        if(arrayProdutos[i].tag == "Pratos"){
            pratos.push(arrayProdutos[i])
        }
        if(arrayProdutos[i].tag == "Salgados"){
            salgados.push(arrayProdutos[i])
        }
        if(arrayProdutos[i].tag == "Doces"){
            doces.push(arrayProdutos[i])
        }
    }
}
dividirProdutosSecoes(data)

let ulPratos = document.querySelectorAll("ul")[0]
let ulSalgados = document.querySelectorAll("ul")[1]
let ulDoces = document.querySelectorAll("ul")[2]

function inserirObjetos(){
    for(let i = 0; i < pratos.length; i++){
        let secaoPratos = criarLi(pratos[i])
        ulPratos.appendChild(secaoPratos)
    }
    for(let i = 0; i < salgados.length; i++){
        let secaoSalgados = criarLi(salgados[i])
        ulSalgados.appendChild(secaoSalgados)
    }
    for(let i = 0; i < doces.length; i++){
        let secaoDoces = criarLi(doces[i])
        ulDoces.appendChild(secaoDoces)
    }
}
inserirObjetos()

function criarLi(objeto){
    let li = document.createElement("li")
    li.className = "card"
    li.id = objeto.id

    li.insertAdjacentHTML("afterbegin", `
    <img src=${objeto.img} alt="${objeto.nameItem}">
    <p class="categoria">${objeto.tag}</p>
    <h2 class="nome">${objeto.nameItem}</h2>
    <p class="descricao">${objeto.description}</p>
    <p class="preco">R$ ${objeto.value.toFixed(2)}</p>
    <button class="botaoAdicionar" id=${objeto.id}>${objeto.addCart}</button>
    `)
    return li
}

function criarLiCarrinho(objeto){
    let li = document.createElement("li")
    li.className = "produtoCarrinho"
    li.id = objeto.id

    li.insertAdjacentHTML("afterbegin", `
    <img src=${objeto.img} alt="${objeto.nameItem}">
    <div class="containerItemCarrinho">
        <h2>${objeto.nameItem}</h2>
        <p>R$ ${objeto.value.toFixed(2)}</p>
        <button id=${objeto.id}>Remover Produto</button>
    </div>     
    `)
    return li
}

let ulCarrinho = document.querySelector(".listaCarrinho")

ulPratos.addEventListener("click", interceptarProduto)
ulSalgados.addEventListener("click", interceptarProduto)
ulDoces.addEventListener("click", interceptarProduto)

function interceptarProduto(event){
    let botaoAdicionar = event.target
    if(botaoAdicionar.tagName == "BUTTON"){
        let idProduto = botaoAdicionar.id
        let produto = data.find(function(produto){
            if(produto.id == idProduto){
                return produto
            }
        }) 
        adicionarProdutoCarrinhoArray(produto) 
    }
}

function adicionarProdutoCarrinhoArray(produto){
    carrinhoCompras.push(produto)
    adicionarCarrinho(carrinhoCompras)
    let quantidade = carrinhoCompras.length
    let soma = somarProdutos(carrinhoCompras)
    criarTotalEQtdCarrinho(soma, quantidade)
    
}

function adicionarCarrinho(arrayProdutos){
    ulCarrinho.innerHTML= ""
    for(let i = 0; i < arrayProdutos.length; i++){
        let produtosCarrinho = criarLiCarrinho(arrayProdutos[i])
        ulCarrinho.appendChild(produtosCarrinho) 
    }
    if(carrinhoCompras.length == 0){
        ulCarrinho.insertAdjacentHTML("afterbegin", `
        <h1 class ="carrinhoVazio">Carrinho Vazio</h1>
        <p class ="adicioneItens">Adicione Itens</p>
        `)
    }
}

function somarProdutos(arrayProdutos){
    let total = 0
    for(let i = 0; i < arrayProdutos.length; i++){
        total += arrayProdutos[i].value 
    }
    return total
}

function criarTotalEQtdCarrinho(somaProdutos, quantidade){
    const valorTotal = document.querySelector(".valorTotal")
    const qtdTotal = document.querySelector(".numeroQuantidade")

    qtdTotal.innerText = quantidade
    valorTotal.innerText = `R$ ${somaProdutos.toFixed(2)}`
}

ulCarrinho.addEventListener("click", interceptarProdutoCarrinho)

function interceptarProdutoCarrinho(event){
    let botaoRemover = event.target
    if(botaoRemover.tagName == "BUTTON"){
        let idProduto = botaoRemover.id
        let produto = data.find(function(produto){
            if(produto.id == idProduto){
                return produto
            }
        })
        removerProdutosCarrinho(produto) 
    }
}

function removerProdutosCarrinho(produto){
    let index = carrinhoCompras.indexOf(produto)
    carrinhoCompras.splice(index,1)
    adicionarCarrinho(carrinhoCompras)
    let quantidade = carrinhoCompras.length
    let soma = somarProdutos(carrinhoCompras)
    criarTotalEQtdCarrinho(soma, quantidade)
}

let campoPesquisa = document.querySelector(".pesquisar")
let botaoPesquisa = document.querySelector(".botaoPesquisar")

botaoPesquisa.addEventListener("click", function(){
    let resultadoBusca = []
    for(let i = 0; i < data.length; i++){
        let pesquisa = campoPesquisa.value.toLowerCase()
        let nomePesquisado = data[i].nameItem.toLowerCase()
        let categoria = data[i].tag.toLowerCase()
        if(nomePesquisado.includes(pesquisa) || categoria.includes(pesquisa)){ 
            resultadoBusca.push(data[i]) 
        }
    }
    listarProdutosPesquisados(resultadoBusca)
})

function listarProdutosPesquisados(array){
    ulPratos.innerHTML= ""
    ulSalgados.innerHTML= ""
    ulDoces.innerHTML= ""
       for(let i = 0; i < array.length; i++){
        let lista = criarLi(array[i])
        ulPratos.appendChild(lista)
    } 
}


let botaoTodos = document.querySelectorAll(".opcoesMenu")[0]
let botaoPratos = document.querySelectorAll(".opcoesMenu")[1]
let botaoSalgados = document.querySelectorAll(".opcoesMenu")[2]
let botaoDoces = document.querySelectorAll(".opcoesMenu")[3]


botaoTodos.addEventListener("click", function(){
    ulPratos.innerHTML= ""
    ulSalgados.innerHTML= ""
    ulDoces.innerHTML= ""
    inserirObjetos()
})

botaoPratos.addEventListener("click", function(){
    ulPratos.innerHTML= ""
    ulSalgados.innerHTML= ""
    ulDoces.innerHTML= ""
    for(let i = 0; i < pratos.length; i++){
        let secaoPratos = criarLi(pratos[i])
        ulPratos.appendChild(secaoPratos)
    }
})

botaoSalgados.addEventListener("click", function(){
    ulPratos.innerHTML= ""
    ulSalgados.innerHTML= ""
    ulDoces.innerHTML= ""
    for(let i = 0; i < salgados.length; i++){
        let secaoSalgados = criarLi(salgados[i])
        ulPratos.appendChild(secaoSalgados)
    }
})

botaoDoces.addEventListener("click", function(){
    ulPratos.innerHTML= ""
    ulSalgados.innerHTML= ""
    ulDoces.innerHTML= ""
    for(let i = 0; i < doces.length; i++){
        let secaoDoces = criarLi(doces[i])
        ulPratos.appendChild(secaoDoces)
    }
})















