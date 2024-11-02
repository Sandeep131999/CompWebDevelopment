const animals = [
  { 
    name: "cat", 
    sound: "meow",
    feeding: {
      water: "2",
      food: "2"
    },
  },
  { 
    name: "dog", 
    sound: "woof" 
  },
];

function useAnimals(animal) {
  return [
    animal.name,
    function () {
      console.log(animal.sound); 
    }
  ];
}

export default { animals, useAnimals };
