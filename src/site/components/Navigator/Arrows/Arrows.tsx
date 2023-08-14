import React from "react";
import "./Arrows.scss";
import { ReactComponent as arrowLeft } from "./assets/ArrowLeft.svg";
import { ReactComponent as arrowRight } from "./assets/ArrowRight.svg";
import Button from "../../Button/Button";

export default function Arrows(): JSX.Element {
    return (
        <div className="arrows">
            <Button
                className="arrow left"
                source={arrowLeft}
                text={undefined}
            />
            <div className="sep" />
            <Button
                className="arrow right"
                source={arrowRight}
                text={undefined}
            />
        </div>
    );
}
