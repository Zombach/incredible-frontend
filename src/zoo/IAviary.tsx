import { Biome, Food } from "./Enums";
import IAnimal from "./IAnimal";

export default interface IAviary {
    biome: Biome;
    space: number;
    water: number;
    food: Food | Array<Food>;
    foodCount: number;
    animals: Array<IAnimal>;
}
