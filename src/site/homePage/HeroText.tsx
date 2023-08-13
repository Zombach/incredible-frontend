import React from "react";
import "./HeroText.scss";
import HeroButtons from "./heroText/HeroButtons";
import Content from "./heroText/Content";

export default function HeroText() {
    return (
        <div className="hero-text">
            <Content />
            <HeroButtons />
        </div>
    );
}
