const _Velocidade = Symbol('velocidade');
class Carro {
    constructor(nome) {
        this.nome = nome;
        this[_Velocidade] = 0;
    }

    set Velocidade(valor) {
        console.log('SETTER');
        if (typeof valor !== 'number') return;
        if (valor >= 100 || valor <= 0) return;
        this[_Velocidade] = valor;
    }
    get Velocidade() {
        console.log('GETTER')
        return this[_Velocidade];
    }
    acelerar() {
        if (this[_Velocidade] >= 100) return;
        this[_Velocidade]++;
    }

    freiar() {
        if (this[_Velocidade] <= 0) return;
        this[_Velocidade]--;
    }
}

const c1 = new Carro('Fusca');
c1.Velocidade = 99;
