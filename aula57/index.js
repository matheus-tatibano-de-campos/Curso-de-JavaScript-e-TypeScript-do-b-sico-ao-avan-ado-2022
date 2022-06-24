function Pessoa(nome, sobrenome) {

    const ID = 12345;
    const metodoInterno = function(){

    };

    
    this.nome = nome;
    this.sobrenome = sobrenome;

    this.metodo = function() {
        console.log(this.nome + ': sou um método');
    };
}

const p1 = new Pessoa('kuiz', 'otavio');
const p2 = new Pessoa('marcia', 'gatos');
p2.metodo();