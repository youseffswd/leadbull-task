import React from "react";

const ActionLink = ({children,href,className}) => {
    return (
        <li>
            <a className={`${className}`} href={href}>{children}</a>
        </li>
    );
};

export default ActionLink;
