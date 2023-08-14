import React from "react";
import "./Features.scss";
import Item from "./Items/Items";
import {
    FEATURES_ITEM_01_01,
    FEATURES_ITEM_01_02,
    FEATURES_ITEM_02_01,
    FEATURES_ITEM_02_02,
    FEATURES_ITEM_03_01,
    FEATURES_ITEM_03_02,
} from "./assets/Constants";

export default function Features(): JSX.Element {
    return (
        <div className="features">
            <li className="items">
                <Item
                    className="item_default item_01"
                    classNameText_01="item_01 part_01"
                    text_01={FEATURES_ITEM_01_01}
                    classNameText_02="item_01 part_02"
                    text_02={FEATURES_ITEM_01_02}
                />
                <Item
                    className="item_default item_02"
                    classNameText_01="item_02 part_01"
                    text_01={FEATURES_ITEM_02_01}
                    classNameText_02="item_02 part_02"
                    text_02={FEATURES_ITEM_02_02}
                />
                <Item
                    className="item_default item_03"
                    classNameText_01="item_03 part_01"
                    text_01={FEATURES_ITEM_03_01}
                    classNameText_02="item_03 part_02"
                    text_02={FEATURES_ITEM_03_02}
                />
            </li>
        </div>
    );
}
