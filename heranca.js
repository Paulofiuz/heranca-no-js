const ferrari = {
    modelo: 'F40',
    valMax: 340
}

const volvo = {
    modelo: 'V40',
    vamMax: 200
}

console.log(ferrari.__proto__)
console.log(ferrari.__proto__ === Object.prototype)
console.log(volvo.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__)

function Carro() {}

const uno = new Carro();

console.log(uno.__proto__ === Carro.prototype);
console.log(Carro.prototype.constructor === Carro); 

