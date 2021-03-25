const nomePetshop = "PETSHOP GS";

let pets = [
    {
        nome: 'Bob',
        tipo: 'cachorro',
        idade: 1,
        raca: 'sharpei',
        peso: 22,
        tutor: 'Gih',
        contato: '+55 81 9xxxx-xxxx',
        vacinado: true,
        servico:['banho', 'medicação']
    },
    {   
        nome: 'Nalu',
        tipo: 'cachorro',
        idade: 13,
        raca: 'husky-siberiano',
        peso: 28,
        tutor: 'Neck',
        contato: '+55 81 9xxxx-xxxx',
        vacinado: true,
        servico:['banho', 'tosa']
    },
    {
        nome: 'Geraldhy',
        tipo: 'peixe',
        idade: 1,
        raca: 'beta',
        peso: 0.1,
        tutor: 'Zé',
        contato: '+55 81 9xxxx-xxxx',
        vacinado: false,
        servico:['medicação']
    }
];

const listarPets = () => { // => arrowfucntion retira a necessidade de colocar a palavra "function" e deixa o codigo mais limpo
    for(let i = 0; i < pets.length; i++){
        console.log(pets[i].nome);
    }
}

listarPets();

//console.log(Pets);
