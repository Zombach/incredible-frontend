import React from "react";
import "./Logo.scss";
import { ReactComponent as logo } from "../../resources/menu/Logo.svg";
import Svg from "../components/Svg";

export default function Logo(): JSX.Element {
    return <Svg className="logo" Source={logo}></Svg>;
}
