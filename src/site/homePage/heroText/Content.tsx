import React from "react";
import "./Content.scss";
import Text from "../Text";
import {
    HERO_TEXT_CONTENT_01_1,
    HERO_TEXT_CONTENT_01_2,
    HERO_TEXT_CONTENT_01_3,
    HERO_TEXT_CONTENT_02,
} from "../TextContent";

export default function Content(): JSX.Element {
    return (
        <div className="content">
            <Text className="text item-02" text={HERO_TEXT_CONTENT_02} />
            <div className="text-box">
                <Text
                    className="text item-01 part-01"
                    text={HERO_TEXT_CONTENT_01_1}
                />
                <Text
                    className="text item-01 part-02"
                    text={HERO_TEXT_CONTENT_01_2}
                />
                <Text
                    className="text item-01 part-03"
                    text={HERO_TEXT_CONTENT_01_3}
                />
            </div>
        </div>
    );
}
