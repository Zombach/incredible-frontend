import React from "react";
import "./Buttons.scss";
import { CONNECT_WALLET } from "../TextContent";
import Text from "../Text";

export default function Buttons(): JSX.Element {
    return (
        <div className="buttons">
            <button className="primary">
                <Text text={CONNECT_WALLET} />
            </button>
        </div>
    );
}
