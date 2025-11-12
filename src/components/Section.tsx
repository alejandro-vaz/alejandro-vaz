//
//  HEAD
//

// HEAD -> IMPORTS
import React from "react";


//
//  SECTION
//

// SECTION -> FUNCTION
export default function Section({name, children}: {
    name: string,
    children: React.ReactNode
}): React.ReactNode {
    return (
        <div className="w-full text-left ml-2 mb-4">
            <h2 className="text-slate-700 text-lg font-semibold">{name}</h2>
            <hr className="w-full border-[1] border-slate-500 rounded-full mb-1"/>
            {children}
        </div>
    )
}