import React from "react";
import "./Menu.scss";
import Nav from "./menu/Nav";
import Buttons from "./menu/Buttons";
import Logo from "./menu/Logo";
import SearchGroup from "./menu/SearchGroup";

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
