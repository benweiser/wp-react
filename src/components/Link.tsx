import * as React from "react";

export interface Props {
    href: string;
    linkText: string;
    target?: string;
}

function Link({ href, linkText, target = "_self" }: Props) {
    return (
        <a href={href} target={target}>{linkText}</a>
    );
}

export default Link;