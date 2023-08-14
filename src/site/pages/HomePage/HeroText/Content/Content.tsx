import React from "react";
import "./Content.scss";
import Text from "../../../../components/Button/Text/Text";
import {
    CONTENT_01_1,
    CONTENT_01_2,
    CONTENT_01_3,
    CONTENT_02,
} from "./assets/Constants";
import { ReactComponent as over } from "./assets/Over.svg";
import Svg from "../../../../components/Button/Svg/Svg";

export default function Content(): JSX.Element {
    return (
        <div className="content">
            <Svg className="over" Source={over} />
            <Text className="text item-02" text={CONTENT_02} />
            <div className="text-box">
                <Text className="text item-01 part-01" text={CONTENT_01_1} />
                <Text className="text item-01 part-02" text={CONTENT_01_2} />
                <Text className="text item-01 part-03" text={CONTENT_01_3} />
            </div>
        </div>
    );
}
