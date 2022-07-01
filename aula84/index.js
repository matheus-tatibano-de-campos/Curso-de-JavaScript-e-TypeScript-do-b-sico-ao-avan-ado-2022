class ValidaCPF {
    constructor(cpfEnviado) {
        Object.defineProperty(this, 'cpfLimpo', {
            writable: false,
            enumerable: true,
            configurable: false,
            value: cpfEnviado.replace(/\D+/g, '')
        });
    }

    eSequencia() {
        return this.cpfLimpo.charAt(0).repeat(11) === this.cpfLimpo;
    }

    geraNovoCpf() {
        const cpfSemDidigitos = this.cpfLimpo.slice(0, -2);
        const digito1 = ValidaCPF.geraDigito(cpfSemDidigitos);
        const digito2 = ValidaCPF.geraDigito(cpfSemDidigitos + digito1);
        this.novoCPF = cpfSemDidigitos + digito1 + digito2;
    }

    static geraDigito(cpfSemDidigitos) {
        let total = 0;
        let reverso = cpfSemDidigitos.length + 1;

        for (let stringNumeria of cpfSemDidigitos) {
            total += reverso * Number(stringNumeria);
            reverso--;
        }

        const digito = 11 - (total % 11);
        return digito <= 9 ? String(digito) : '0';
    }

    valida() {
        if (!this.cpfLimpo) return false;
        if (typeof this.cpfLimpo !== 'string') return false;
        if (this.cpfLimpo.length !== 11) return false;
        if (this.eSequencia()) return false;
        this.geraNovoCpf();
        console.log(this.novoCPF);

        return this.novoCPF === this.cpfLimpo;
    }
}

let validaCPF = new ValidaCPF('070.987.720-03');
//validaCPF = new ValidaCPF()
console.log(validaCPF.valida());