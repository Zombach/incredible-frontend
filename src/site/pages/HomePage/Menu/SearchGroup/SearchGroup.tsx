import React from "react";
import "./SearchGroup.scss";
import Text from "../../../../components/Button//Text/Text";
import Svg from "../../../../components/Button/Svg/Svg";
import { ReactComponent as searchBox } from "./assets/SearchBox.svg";
import { ReactComponent as searchIcon } from "./assets//SearchIcon.svg";
import { SEARCH_ITEM_01 } from "./assets/Constants";

export default function GroupSearch(): JSX.Element {
    return (
        <div className="search-group">
            <div className="search">
                <Svg className="icon" Source={searchIcon} />
                <Text text={SEARCH_ITEM_01} />
            </div>
            <div className="box">
                <Svg className="bg" Source={searchBox} />
            </div>
        </div>
    );
}
