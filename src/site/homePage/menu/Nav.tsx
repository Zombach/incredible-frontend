import React from "react";
import "./Nav.scss";
import Text from "../Text";
import { CREATORS, DISCOVER, SELL, STATS } from "../TextContent";

export default function Nav() {
    return (
        <p className="nav">
            <Text className="text item-1" text={DISCOVER} />
            <Text className="text item-2" text={CREATORS} />
            <Text className="text item-3" text={SELL} />
            <Text className="text item-4" text={STATS} />
        </p>
    );
}
