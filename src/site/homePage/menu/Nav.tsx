import React from "react";
import "./Nav.scss";
import Text from "../Text";
import { CREATORS, DISCOVER, SELL, STATS } from "../TextContent";

export default function Nav() {
    return (
        <p className="nav">
            <Text text={DISCOVER} />
            <Text text={CREATORS} />
            <Text text={SELL} />
            <Text text={STATS} />
        </p>
    );
}
