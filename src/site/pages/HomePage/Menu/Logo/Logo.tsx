import React from "react";
import "./Logo.scss";
import { ReactComponent as logo } from "./assets/Logo.svg";
import Svg from "@Svg";

export default function Logo(): JSX.Element {
    return <Svg className="logo" Source={logo}></Svg>;
}
