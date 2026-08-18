//^
//^ HEAD
//^

//> HEAD -> IMPORTS
import React from "react";


//^
//^ ICON
//^

//> ICON -> FILE
function File(): React.ReactNode {return (<>
    <path
        d="M6 2h9l5 5v15a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1z"
        strokeLinecap="round"
        strokeLinejoin="round"
    />
    <path
        d="M15 2v5h5"
        strokeLinecap="round"
        strokeLinejoin="round"
    />
</>)}

//> ICON -> DOWNLOAD
function Download(): React.ReactNode {return (<>
    <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 4v12m0 0l-4-4m4 4l4-4"
    />
    <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4 20h16"
    />
</>)}

//> ICON -> EXTERNAL
function External(): React.ReactNode {return (<>
    <rect 
        x={4} 
        y={4} 
        width={16} 
        height={16} 
        rx={2} 
        strokeLinecap="round" 
        strokeLinejoin="round"
    />
    <path d="M14 4h6v6" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M10 14L20 4" strokeLinecap="round" strokeLinejoin="round"/>
</>)}

//> ICON -> FRONTARROW
function FrontArrow(): React.ReactNode {return <path
    strokeLinecap="round"
    strokeLinejoin="round"
    d="M8.25 4.5L15.75 12l-7.5 7.5"
/>}

//> ICON -> BACKARROW
function BackArrow(): React.ReactNode {return <path
    strokeLinecap="round"
    strokeLinejoin="round"
    d="M15.75 19.5L8.25 12l7.5-7.5"
/>}

//> ICON -> TYPES
const TYPES = {
    File: File,
    Download: Download,
    External: External,
    FrontArrow: FrontArrow,
    BackArrow: BackArrow
}

//> ICON -> FUNCTION
export default function Icon({type, size, width}: {
    type: keyof typeof TYPES,
    size: string,
    width: number
}): React.ReactNode {
    const IconComponent = TYPES[type];
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={width}
            stroke="currentColor"
            className={size}
        ><IconComponent/></svg>
    )
}