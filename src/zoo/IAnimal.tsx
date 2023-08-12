import { Biome, Food } from "./Enums";

export default interface IAnimal {
    name: string;
    biome: Biome;
    spaceRequires: number;
    waterRequires: number;
    eats: Food | Array<Food>;
    isPredator: Boolean;
}
