import React from "react";
import "./Buttons.scss";
import { BUTTONS_ITEM_01 } from "../TextContent";
import Button from "../components/Button";

export default function Buttons(): JSX.Element {
    return (
        <div className="buttons">
            <Button className="primary" text={BUTTONS_ITEM_01}></Button>
        </div>
    );
}
