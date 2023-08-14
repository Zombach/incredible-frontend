import React, { FunctionComponent, SVGProps } from "react";
import "./Button.scss";
import Text from "@Text";
import Svg from "@Svg";

interface IButton {
    className?: string | undefined;
    text: string | undefined;
    textClassName?: string | undefined;
    source?:
        | FunctionComponent<
              SVGProps<SVGSVGElement> & {
                  title?: string | undefined;
              }
          >
        | undefined;
    sourceClassName?: string | undefined;
    Func?: (() => { value: number }) | ((value: string) => void) | undefined;
}

export default function Button({
    className,
    text,
    textClassName,
    source,
    sourceClassName,
    Func,
}: IButton): JSX.Element {
    return (
        <button
            className={className || "button"}
            onClick={() => {
                if (Func !== undefined) {
                    Func("");
                }
            }}>
            <Text className={textClassName} text={text} />
            {source ? (
                <Svg className={sourceClassName} Source={source} />
            ) : null}
        </button>
    );
}
