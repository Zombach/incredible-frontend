import React from "react";
import "./HeroButtons.scss";
import Button from "../../../../components/Button/Button";
import {
    HERO_BUTTONS_CREATE_NFT,
    HERO_BUTTONS_EXPLORE_MORE,
} from "./assets/Constants";
import { ReactComponent as rectangle30b } from "./assets/Rectangle30b.svg";
import { ReactComponent as rectangle30w } from "./assets/Rectangle30w.svg";

export default function HeroButtons(): JSX.Element {
    return (
        <div className="hero-buttons">
            <Button
                className="button black"
                textClassName="text black"
                text={HERO_BUTTONS_EXPLORE_MORE}
                sourceClassName="background black"
                source={rectangle30b}
                Func={F}></Button>

            <Button
                className="button white"
                textClassName="text white"
                text={HERO_BUTTONS_CREATE_NFT}
                sourceClassName="background white"
                source={rectangle30w}
                Func={F1}></Button>
        </div>
    );
}

function F() {
    console.log(1);
    return 1;
}

function F1(value: string) {
    console.log(2, value);
    //return "";
}
