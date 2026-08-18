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

[Mathsys](https://crates.io/crates/mathsys) is the Domain-Specific Language (DSL) for 
simplified mathematical typesetting.

- Hand-rolled lexer/tokenizer (zero-copy byte-scanner).
- Hand-rolled recursive descent parser (backtracking).

## Abscissa

TBD

## CSScribe

TBD
`;

//> PROJECTS -> FUNCTION
export default function Projects(): React.ReactNode {
    return <div className="prose"><Markdown>{content}</Markdown></div>;
}