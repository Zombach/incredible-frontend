import React from "react";
import "./HeroText.scss";
import HeroButtons from "./HeroButtons/HeroButtons";
import Content from "./Content/Content";

export default function HeroText() {
    return (
        <div className="hero-text">
            <Content />
            <HeroButtons />
        </div>
    );
}
