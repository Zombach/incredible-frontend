import React from "react";
import "./SearchGroup.scss";
import Text from "../Text";
import Svg from "../components/Svg";
import { ReactComponent as searchBox } from "../../resources/menu/SearchBox.svg";
import { ReactComponent as searchIcon } from "../../resources/menu/SearchIcon.svg";
import { SEARCH_ITEM_01 } from "../TextContent";

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
