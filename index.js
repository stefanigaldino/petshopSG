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
const listarPets = () => {
   
    for(let pet of pets){
        exibirPet(pet)
    }
}

const vacinarPet = (pet) => {
    
    if(pet.vacinado == false){
        pet.vacinado = true
        exibirPet(pet)
        return 1
    }
}

const campanhaVacinacao = (pet) => {
    let vacinados = 0
    for (pet of pets){
        vacinados += vacinarPet(pet)
    }
    console.log(vacinados)
}




//listarPets();
//vacinarPet(pets[2])
campanhaVacinacao()

//listarPets();

//console.log(Pets);
