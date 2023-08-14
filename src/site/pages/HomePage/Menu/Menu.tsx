import React from "react";
import "./Menu.scss";
import Nav from "./Nav/Nav";
import Buttons from "./Buttons/Buttons";
import Logo from "./Logo/Logo";
import SearchGroup from "./SearchGroup/SearchGroup";

export default function Menu(): JSX.Element {
    return (
        <div className="menu">
            <Logo />
            <Nav />
            <SearchGroup />
            <Buttons />
        </div>
    );
}
