const pets = [
    {  name: "Max", type: "dog", bornOn: 2018 },
    { name: "Angel", type: "cat", bornOn: 2015 },
    { name: "Jasper", type: "dog", bornOn: 2016 }
];

const getAge = (pet) => { 
    return new Date().getFullYear() - pet.bornOn;

};

pets.forEach(pet => pet.age = getAge(pet));
    
});

const Dogs = pets.filter (  (dog) => dog.type == "dog" );
console.log(dogs);


const jasper = pets.find((pet)=> {
    pet.name =="Jasper"
}
);
alert (`Jasper is ${jasper.age} years old `);
