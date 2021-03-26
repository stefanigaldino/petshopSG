const moment = require('moment')

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
        vacinado: false,
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

const exibirPet = (pet) => {
    console.log(`Nome: ${pet.nome}
    Idade: ${pet.idade}
    Tipo: ${pet.tipo}
    Raca: ${pet.raca}
    Vacinado: ${pet.vacinado}`)
}
const listarPets = () =>
{   
    for(let pet of pets)
    {
        exibirPet(pet)
    }
}

const vacinarPets = (pet) =>
{
    if(pet.vacinado == false)
    {
        pet.vacinado = true
        exibirPet(pet)
        return 1
    }
}

const darBanhoPet = (pet) =>
    {
    let dataHoje = moment().format('DD-MM-YYYY')
    pet.servicos.push(
        {'Serviço': "Banho ", Data: dataHoje})
    }

const tosarPet = (pet) =>
    {
    let dataHoje = moment().format('DD-MM-YYYY')
    pet.servicos.push({'Serviço': "Tosa ", Data: dataHoje})
    }

const apararUnhasPet = (pet) => 
    {
    let dataHoje = moment().format('DD-MM-YYYY')
    pet.servicos.push({'Serviço': "Aparou unhas ", Data: dataHoje})
    }


const adocionarNovoPet = (nome, tipo, idade, raca, peso, tutor, vacinado) =>
    {
        let pet = 
        {
            nome: nome,
            tipo: tipo,
            idade: idade,
            raca: raca,
            peso: peso,
            tutor: tutor,
            vacinado: vacinado,
            servicos: []
        }
pets.push(pet)
    }

adocionarNovoPet("Hunter", "gato", 3, "siames", 2, "Alice", true)
darBanhoPet(pets[3])
tosarPet(pets[3])
apararUnhasPet(pets[3])
console.log(pets)

