function rand(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}


function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof msg !== 'string') {
                reject('cai no ERRO');
                return
            }
            resolve(msg + '- passei na promise');
            return;
        }, tempo);
    });
}
/*
esperaAi('fase1', rand(0, 3))
    .then(valor => {
        console.log(valor);
        return esperaAi('fase2', rand());
    })
    .then(fase => {
        console.log(fase);
        return esperaAi('fase3', rand());
    })
    .then(fase => {
        console.log(fase);
    })
    .then(fase => {
        console.log('terminamos na fase :', fase);
    })
    .catch(e => console.log(e));
    */

async function executa() {
    try {
        const fase1 = esperaAi('fase1', 1000);
        console.log(fase1);

        setTimeout(function () {
            console.log('essa promise estava pendente', fase1);
        }, 1100);

        const fase2 = await esperaAi('fase 2', rand());
        console.log(fase2);

        const fase3 = await esperaAi('fase 3', rand());
        console.log(fase3);

        console.log('terminamos na fase :', fase3);
    } catch (e) {
        console.log(e);
    }
}
executa();