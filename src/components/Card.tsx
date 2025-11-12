//
//  HEAD
//

// HEAD -> IMPORTS
import React from "react";
import {Link} from "react-router-dom";
import Icon from "./Icon.tsx";


//
//  CARD
//

// CARD -> FUNCTION
export default function Card({children, type, to}: {
    children: string,
    type: "page" | "extern" | "download" | "pdf",
    to: string
}): React.ReactNode {
    const icon = {
        page: "FrontArrow",
        extern: "External",
        download: "Download",
        pdf: "File"
    }[type]
    return (
        <Link to={to} reloadDocument={type !== "page"} target={type !== "page" ? "_blank" : undefined}>
            <div className="bg-white rounded-full rounded-l-none border-l-4 w-full h-9 flex items-center border cursor-pointer mb-1">
                <h3 className="text-slate-600 ml-4 mr-auto">{children}</h3>
                <Icon type={icon as any} width={2} size="w-6 h-6 mr-2"/>
            </div>
        </Link>
    );
}