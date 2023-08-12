import { Biome, Food, Animal } from "./Enums";
import IAnimal from "./IAnimal";

export const Rat = (name: string) => {
    return {
        name: name,
        biome: Biome.Home,
        spaceRequires: 1,
        waterRequires: 0,
        eats: Food.Milk,
        isPredator: false,
    } as IAnimal;
};

export const Cat = (name: string) => {
    return {
        name: name,
        biome: Biome.Home,
        spaceRequires: 1,
        waterRequires: 0,
        eats: Food.Milk | Food.Meat,
        isPredator: true,
    } as IAnimal;
};

export default function BuildAnimal(name: string, type: Animal) {
    switch (type) {
        case Animal.Rat:
            return Rat(name);
        default:
            return Cat(name);
    }
}
