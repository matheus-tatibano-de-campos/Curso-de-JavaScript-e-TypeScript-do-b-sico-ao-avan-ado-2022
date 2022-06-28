function criaPessoa(nome, sobrenome, a, p) {
    return {
        nome,
        sobrenome,
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`;
        },
        set nomeCompleto(valor) {
            valor = valor.split(' ');
            this.nome = valor.shift();
            this.sobrenome = valor.join(' ');
        },

        fala(assunto = 'falando sobre NADA') {
            return `${this.nome} está ${assunto}.`;
        },

        altura: a,
        peso: p,

        get imc() {
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);
        }
    };
}

const p1 = criaPessoa('luiz', 'Otavio', 1.80, 80);
const p2 = criaPessoa('luiz', 'Otavio', 1.80, 80);
const p3 = criaPessoa('luiz', 'Otavio', 1.70, 85);
console.log(p3.imc);

