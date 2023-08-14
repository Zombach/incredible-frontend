import React from "react";
import "./Items.scss";
import Text from "@Text";

interface IItem {
    className?: string | undefined;
    text_01?: string | undefined;
    classNameText_01?: string | undefined;
    text_02?: string | undefined;
    classNameText_02?: string | undefined;
}

export default function Item({
    className,
    classNameText_01,
    text_01,
    classNameText_02,
    text_02,
}: IItem): JSX.Element {
    return (
        <div className={className}>
            <Text className={classNameText_01} text={text_01} />
            <Text className={classNameText_02} text={text_02} />
        </div>
    );
}
