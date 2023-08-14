import React from "react";
import "./HeroHeader.scss";
import Item from "./Item/Item";
import Navigator from "../../../components/Navigator/Navigator";

export default function HeroHeader(): JSX.Element {
    return (
        <div className="hero-header">
            <Item />
            <Navigator />
        </div>
    );
}
