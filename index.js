const pets = [
    {  name: "Max", type: "dog", bornOn: 2018 },
    { name: "Angel", type: "cat", bornOn: 2015 },
    { name: "Jasper", type: "dog", bornOn: 2016 }
];

const getAge = (pet) => { 
    return new Date().getFullYear() - pet.bornOn;

};

let petsWithAge = pets.forEach(pet => {
  alert(  getAge(pet));
    
});

let Dogs = pets.filter (  (dog) => dog.type == "dog" );
console.log(dogs);


let jasper = pets.find((pet)=> {
    pet.name =="Jasper"
}
);
alert (`Jasper is ${jasper.age} years old `);