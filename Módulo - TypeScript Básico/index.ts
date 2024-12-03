// Declaração de variaveis - TypeScript
// As variáveis se comportam como constantes (o valor não pode ser alterado). 
const nome = 'Cecilia'; //quando o valor não deve mudar 
let name2 = 'Cecilia'; //pode alterar o valor futuramente 
name2 = 'Guilherme';

// Estruturas de decisão - TypeScript
// as estruturas são as mesmas de outras linguegens de programação, if/else, switch case, etc.
const age = 17;
if (age >= 18) {
    alert('Maior de idade');
}else {
    alert('Menor de idade');
}

switch (age) {
    case 17:
        alert('17 anos');
        break;
    default:
        alert('Outra idade');
        break;
}

const user = true;
const prefix = user ? "Sra" : "Sr"; //operador ternário

// Estruturas de repetição - TypeScript
for (let i = 0; i < 10; i++) {
    console.log(i);
}

while (age < 20) {
    console.log(age);
}

// Funções - TypeScript
const saida = 0;
function nomeDaFuncao(parametros) {
    return saida;
}

// Tipos de dados - TypeScript
const name3: string = 'Cecilia';
const age2: number = 17;
const value: boolean = true;
const array: number[] = [1, 2, 3, 4, 5];
enum teste {  // Enum: Quando uma variável pode arrumir valores especificos e de quantidade finita. 
    teste1 = 1,
    teste2 = 'teste',
}
// Tuple: listas de tamanhos definidos, onde os elementos varias entre vários tipos de dados. 
const valueTuple: [string, number] = ['Cecilia', 17];
// Unknown e Any: quando não se sabe o tipo de dado que será recebido, aceita qualquer tipo. 
const nameAny: unknown = 'Cecilia';
const ageUnknown: any = '19';
// void: define valores de saida em função que não retorna nada. 
const SetUserAge = (age: number): void => {
    console.log(age);
}

// Tipos de dadso complexos - TypeScript - é possível criar tipos de dados e customizar os tipos de dados.
type User = {
    name: string; 
    age: number;
};
const getUserNameAndAge = (user: User): [string, number] => {
    return [user.name, user.age];
}

// Tipagem de elementos do DOM - TypeScript
const myelement = document.querySelector('.my-element') as HTMLInputElement;
const myElement = document.getElementById("elementId") as HTMLElement | null;
const getElementById = (elementId: string): HTMLElement | null => {
    return document.getElementById(elementId);
}