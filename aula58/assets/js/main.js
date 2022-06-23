function Calculadora() {
  this.display = document.querySelector('.display');

  this.capturaCliques = () => {
    document.addEventListener('click', event => {
      const el = event.target;
      if (el.classList.contains('btn-num')) this.addNumDisplay();
    });
  };

  this.addNumDisplay = el => this.display.value += el.innerText;
  this.inicia = () => {
    this.capturaCliques();
  };
}

const calculadora = new Calculadora();
calculadora.inicia();