import * as React from "react";

export interface Props {
    href: string;
    linkText: string;
    target?: string;
}

const Link: React.SFC<Props> = ({ href, linkText, target = "_self" }: Props): JSX.Element => {
    return (
        <a href={href} target={target}>{linkText}</a>
    );
};

export default Link;