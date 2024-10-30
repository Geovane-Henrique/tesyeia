class MinhaClasse {
    constructor() {
        let x = 10
    }

    metodo1() {
        // Método 1
        const y = 20
    }

    metodo2() {
        var z = 30
    }
} // Correto fechamento da classe


class OutraClasse {
    metodoInvalido( {
        // Método sem fechamento correto
        console.log("Incompleto");
    }
}

class ClasseIncorreta {
    constructor() {
        // Construtor
        x = 10
    
    metodo1() {
        // Método 1 sem fechamento do construtor
        console.log(this.valor);
    }

    metodo2() {
        // Método 2
        this.valor++;
        return this.valor;
    }

function funcaoExemplo() {
    // Função exemplo fora de uma classe
    let x = 10;
    y = 'string'
}

let variavelGlobal = 42; // Exemplo de variável fora da classe
