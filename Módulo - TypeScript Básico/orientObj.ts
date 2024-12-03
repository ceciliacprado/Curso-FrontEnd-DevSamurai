// Orientação a objetos - TypeScript

// Classes - representa um template, que podemos utilizar para criar tipos de objetos (uma classe possuí vários objetos). 
class Dog {
    name: string = ''
    weight: number = 0
    color: string = ''
    breed: string = ''
    size: number = 0
    
    constructor (name: string, weight: number, color: string, breed: string, size: number) {
        this.name = name;
        this.weight = weight;
        this.color = color;
        this.breed = breed;
        this.size = size;
    }

    bark(): void { // método 
        console.log('Au Au');
    }
}

const DOG1: Dog = new Dog("Pop", 15, "preto", "vira lata", 20) // dentro da classe dog vai ter todos os objetos criados. 
DOG1.bark(); // chamando o método bark.
const DOG2: Dog = new Dog("Balu", 12, "preto", "vira lata", 30) 

// Métodos - são funções dentro de uma classe, que o objeto consegue executar. 
// Interfaces - estrutura de um objeto, mas sem criar instâncias. 
interface Car {
    parts: Array<string>;
}

// Herança - podemos utilizar para ajudar na organização do código. 
class Carro implements Car {
    parts: Array<string> = ['motor', 'portas', 'rodas', 'volante', 'freio'];
}