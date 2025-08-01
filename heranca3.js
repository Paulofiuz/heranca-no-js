const pessoaBase = {
    apresentar() {
      console.log(`Olá, meu nome é ${this.nome}`);
    }
  };
  
  const joao = Object.create(pessoaBase);
  joao.nome = 'João';
  
  joao.apresentar();
  

  const avo = {
    atributoA: 'A'
  };
  
  const pai = Object.create(avo);
  pai.atributoB = 'B';
  
  const filho = Object.create(pai);
  filho.atributoC = 'C';
  
  console.log(filho.atributoC); 
  console.log(filho.atributoB); 
  console.log(filho.atributoA);
  
 
  
 
  const animal = Object.create(Object.prototype, {
    especie: {
      value: 'Gato',
      writable: true,
      enumerable: true
    },
    som: {
      value: function () {
        console.log('Miau!');
      },
      enumerable: true
    }
  });
  
  console.log(animal.especie); 
  animal.som();
  
 
  
 
  const objLimpo = Object.create(null);
  objLimpo.nome = 'Objeto sem prototype';
  
  console.log(objLimpo.nome); 
  console.log(typeof objLimpo.toString); 
  
  