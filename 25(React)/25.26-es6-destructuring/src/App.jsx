
// import animals, { useAnimals } from "./data";
import cars from "./practice";

function App(){
  console.log(cars);
    const [tesla,honda]=cars;

      const {
        speedStats: { topSpeed: hondaTopSpeed },
      } = honda;
      const {
        speedStats: { topSpeed: teslaTopSpeed },
      } = tesla;
      const {
        coloursByPopularity: [hondaTopColour],
      } = honda;
      const {
        coloursByPopularity: [teslaTopColour],
      } = tesla;
    //Destructuring Arrays
    // console.log(animals);
    //const [cat, dog] = animals;
    // console.log(cat);

    // const [animal, makeSound] = useAnimals(cat);
    // console.log(animal);
    // makeSound();

    //Destructuring Objects
    // const { name, sound} = cat;
    // const { name: catName, sound: catSound } = cat;
    // const { name = "Fluffy", sound = "Purr" } = cat;
    // const {feedingRequirements: {food, water} } = cat;
    // console.log(food);
    return(
      <table>
        <tr>
            <th>Model</th>
            <th>Brand</th>
            <th>Top Speed</th>
        </tr>
        <tr>
          <td>{tesla.model}</td>
          <td>{teslaTopSpeed}</td>
          <td>{teslaTopColour}</td>
        </tr>
        <tr>
          <td>{honda.model}</td>
          <td>{hondaTopSpeed}</td>
          <td>{hondaTopColour}</td>
        </tr>
      </table> 
    )
}


export default App