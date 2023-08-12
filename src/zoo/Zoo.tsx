import BuildAviary from "./Aviary";
import BuildAnimal from "./Animal";
import IAnimal from "./IAnimal";
import { Animal, Biome } from "./Enums";
import IAviary from "./IAviary";

export const Zoo = () => {
    let animals: Array<IAnimal> = [];
    animals.push(BuildAnimal("Крыса", Animal.Rat));
    animals.push(BuildAnimal("Крысич", Animal.Rat));
    animals.push(BuildAnimal("Крысятина", Animal.Rat));
    animals.push(BuildAnimal("Кот", Animal.Cat));
    let aviary: IAviary = BuildAviary(animals, Biome.Home);
    return (
        <div>
            <div>biome: {Biome[aviary.biome]}</div>
            <div>food: {aviary.food}</div>
            <div>foodCount: {aviary.foodCount}</div>
            {aviary.animals.map((animal) => (
                <div>
                    <p>
                        {`${animal.name} ${
                            animal.isPredator ? "Хищник" : "Еда"
                        }`}
                    </p>
                </div>
            ))}
        </div>
    );
};

export default Zoo;
