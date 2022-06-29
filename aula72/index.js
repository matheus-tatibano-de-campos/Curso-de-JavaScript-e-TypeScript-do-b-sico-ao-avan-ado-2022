const produto = { nome: 'produto', preco: 1.80, material: 'porcelana' };
for (let valor of Object.entries(produto)) {
    console.log(valor[0], valor[1]);
}