const pet = {
    name: 'Hal'
}

pet.toJSON = function () {
    return {}
}

console.log(pet, JSON.stringify(pet))