import React from "react";
import "./Item.scss";
import Svg from "../../../../components/Button/Svg/Svg";
import { ReactComponent as item_01 } from "./assets/Item_01.svg";
import { ReactComponent as item_02 } from "./assets/Item_02.svg";

export default function Item(): JSX.Element {
    return (
        <div className="item">
            <Svg className="item part_01" Source={item_01} />
            <Svg className="item part_02" Source={item_02} />
        </div>
    );
}
