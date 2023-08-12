import { Biome, Food } from "./Enums";
import IAnimal from "./IAnimal";
import IAviary from "./IAviary";

export const Home = (animals: Array<IAnimal>) => {
    return {
        biome: Biome.Home,
        space: 25,
        water: 5,
        food: [Food.Meat, Food.Milk],
        foodCount: 100,
        animals: animals,
    } as IAviary;
};

export const Desert = (animals: Array<IAnimal>) => {
    return {
        biome: Biome.Desert,
        space: 1000,
        water: 100,
        food: Food.Air,
        foodCount: 1000,
        animals: animals,
    } as IAviary;
};

export default function BuildAviary(animals: Array<IAnimal>, biome: Biome) {
    switch (biome) {
        case Biome.Home:
            return Home(animals);
        default:
            return Desert(animals);
    }
}
