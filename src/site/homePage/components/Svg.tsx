import React, { FunctionComponent, SVGProps } from "react";

export default function Svg({
    Source,
    className,
}: {
    Source: FunctionComponent<
        SVGProps<SVGSVGElement> & {
            title?: string | undefined;
        }
    >;
    className?: string | undefined;
}): JSX.Element {
    return <Source className={className || "background"} />;
}
