import React from "react";

export default function Text({
    text,
    className,
}: {
    text?: string | undefined;
    className?: string | undefined;
}): JSX.Element {
    return <span className={className || "text"}>{text || ""}</span>;
}
