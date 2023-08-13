import React from "react";
import "./HeroButtons.scss";
import Button from "../components/Button";
import { CREATE_NFT, EXPLORE_MORE } from "../TextContent";
import { ReactComponent as rectangle30b } from "../../resources/heroText/Rectangle30b.svg";
import { ReactComponent as rectangle30w } from "../../resources/heroText/Rectangle30w.svg";

export default function HeroButtons(): JSX.Element {
    return (
        <div className="hero-buttons">
            <Button
                className="button black"
                textClassName="text black"
                text={EXPLORE_MORE}
                sourceClassName="background black"
                source={rectangle30b}
                Func={F}></Button>

            <Button
                className="button white"
                textClassName="text white"
                text={CREATE_NFT}
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
