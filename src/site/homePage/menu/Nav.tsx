import React from "react";
import "./Nav.scss";
import Text from "../Text";
import {
    NAV_ITEM_01,
    NAV_ITEM_02,
    NAV_ITEM_03,
    NAV_ITEM_04,
} from "../TextContent";

export default function Nav() {
    return (
        <p className="nav">
            <Text className="text item-1" text={NAV_ITEM_01} />
            <Text className="text item-2" text={NAV_ITEM_02} />
            <Text className="text item-3" text={NAV_ITEM_03} />
            <Text className="text item-4" text={NAV_ITEM_04} />
        </p>
    );
}
