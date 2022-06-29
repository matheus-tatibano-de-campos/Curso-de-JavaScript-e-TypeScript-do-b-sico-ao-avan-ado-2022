function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
}
Produto.prototype.aumento = function (quantia) {
    this.preco += quantia;
};
Produto.prototype.desconto = function (quantia) {
    this.preco -= quantia;
};

function Camisa(nome, preco, cor) {
    Produto.call(this, nome, preco);
    this.cor = cor;
}
Camisa.prototype = Object.create(Produto.prototype);
Camisa.prototype.constructor = Camisa;

Camisa.prototype.aumento = function (percentual) {
    this.preco = this.preco + (this.preco * (percentual / 100));
};

function Caneca(nome, preco, material) {
    Produto.call(this, nome, preco);
    this.material = material;

    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        configurable: false,
        get: function () {
            return estoque;
        },
        set: function (valor) {
            if (typeof valor !== 'number') return;
            estoque = valor;
        }
    });
}

Caneca.prototype = Object.create(Produto.prototype);
Caneca.prototype.constructor = Caneca;

const produto = new Produto('gen', 111);
const camisa = new Camisa('regata', 10, 'preta');
const caneca = new Caneca('caneca', 15, 'plastico', 5);

console.log(caneca);
console.log(camisa);
console.log(produto);