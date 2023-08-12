import React from "react";

export default function Text({ text }: { text: string }): JSX.Element {
    return <span className="text">{text}</span>;
}
