import * as React from "react";

export interface LinkProps {
  readonly href: string;
  readonly linkText: string;
  readonly target?: string;
}

const Link: React.SFC<LinkProps> = ({
  href,
  linkText,
  target = "_self"
}: LinkProps): JSX.Element => {
  return (
    <a href={href} target={target}>
      {linkText}
    </a>
  );
};

export default Link;
