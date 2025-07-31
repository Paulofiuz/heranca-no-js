// Cadeia de protótipos (prototype chain)
// Último da cadeia é Object.prototype
// Se não encontrar, retorna undefined

Object.prototype.attr0 = 'z';

const avo = { attr1: 'A' };
const pai = { __proto__: avo, attr2: 'B' }; // Corrigido: "Attr2" -> "attr2"
const filho = { __proto__: pai, attr3: 'C' }; // Corrigido: "Attr3" -> "attr3"

console.log(filho.attr0); // z (herdado de Object.prototype)

// Exemplo com carro
const carro = {
    valAtual: 0,
    valMax: 200,
    acelerarMais(delta) {
        if (this.valAtual + delta <= this.valMax) {
            this.valAtual += delta;
        } else {
            this.valAtual = this.valMax;
        }
    },
    status() {
        return `${this.valAtual}km/h de ${this.valMax} km/h`;
    }
};

const ferrari = {
    modelo: 'F40',
    valMax: 324 // Sobrescreve o valor do protótipo
};

const volvo = {
    modelo: 'V40',
    valMax: 200,
    status() {
        return `${this.modelo}: ${super.status()}`; 
    }
};

// Estabelecendo a cadeia de protótipos
Object.setPrototypeOf(ferrari, carro);
Object.setPrototypeOf(volvo, carro);

// Teste
ferrari.acelerarMais(100);
console.log(ferrari.status()); // 100km/h de 324 km/h

volvo.acelerarMais(80);
console.log(volvo.status()); // V40: 80km/h de 200 km/h
