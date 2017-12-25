import * as React from "react";
import styled from "styled-components";
import Link from "./Link";

const logo = require("../images/logo.png");

interface Link {
    href: string;
    linkText: string;
    target?: string;
}

function Logo() {
    return (
        <div>
            <Image src={logo} alt="My Logo"/>
            <NavLinks/>
        </div>
    );
}

function NavLinks() {
    const linkMap: { id: number, href: string, linkText: string }[] =
        [
            {
                id: 1,
                href: "http://google.com",
                linkText: "Google"
            },
            {
                id: 2,
                href: "http://aol.com",
                linkText: "AOL"

            },
            {
                id: 3,
                href: "http://nbc.com",
                linkText: "NBC"
            }
        ];

    const StyledNavLinks = styled.ul`
    list-style: none;
    
    li {
     float: left;
    }
    
   a {
     padding: 16px;
     text-decoration: none;
     font-weight: bold;
     color: green;
     display: block;
     &:hover {
     color: blue;
     }
   }
`;
    return (
        <StyledNavLinks>
            {linkMap.map((link) =>
                <li key={link.href}>
                    <Link href={link.href} linkText={link.linkText}/>
                </li>
            )}
        </StyledNavLinks>
    );
}

const Image = styled.img`
    border-radius: 100px;
    padding: 4px;
    border: 1px solid #ccc;
`;

export default Logo;