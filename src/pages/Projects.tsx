//^
//^ HEAD
//^

//> HEAD -> IMPORTS
import React from "react";

//> HEAD -> COMPONENTS
import Markdown from "react-markdown";


//^
//^ PROJECTS
//^

//> PROJECTS -> CONTENT
const content = `
## Projects
`;

//> PROJECTS -> FUNCTION
export default function Projects(): React.ReactNode {
    return <div className="prose"><Markdown>{content}</Markdown></div>;
}