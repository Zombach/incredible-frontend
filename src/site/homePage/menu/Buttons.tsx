import React from "react";
import "./Buttons.scss";
import { CONNECT_WALLET } from "../TextContent";
import Button from "../components/Button";

export default function Buttons(): JSX.Element {
    return (
        <div className="buttons">
            <Button className="primary" text={CONNECT_WALLET}></Button>
        </div>
    );
}
