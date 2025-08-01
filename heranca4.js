function MeuObjeto() {}
console.log(MeuObjeto.prototype)

const obj1 = new MeuObjeto
const obj2 = new MeuObjeto
console.log(obj1.__proto__ === obj2.__proto__)// sim
console.log(MeuObjeto.prototype === obj1.__proto__)

MeuObjeto.prototype.nome = 'Zé'//Pai
MeuObjeto.prototype.falar = function(){
    console.log(`Bom dia! meu nome é ${this.nome}`)
}
obj2.falar()
obj2.nome = 'Pedro'
obj2.falar()

