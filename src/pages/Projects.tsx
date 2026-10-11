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
## Mathsys

Mathsys is a Domain-Specific Language (DSL) for simplified mathematical typesetting.

- Current parser: handwritten scannerless recursive-descent parser combinator with backtracking and on-the-fly contextual disambiguation.
- Old parser: handwritten Earley parser with post-parse contextual disambiguation.
- Old tokenizer: handwritten zero-copy ASCII byte-scanner.
`;

//> PROJECTS -> FUNCTION
export default function Projects(): React.ReactNode {
    return <div className="prose"><Markdown>{content}</Markdown></div>;
}