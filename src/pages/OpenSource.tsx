//^
//^ HEAD
//^

//> HEAD -> IMPORTS
import React from "react";

//> HEAD -> COMPONENTS
import Markdown from "react-markdown";


//^
//^ OPENSOURCE
//^

//> OPENSOURCE -> CONTENT
const content = `
## Rust-SmallVec

Identified and fixed the causes of the performance regressions introduced in the upstream
Rust crate SmallVec (~1B downloads) v2 update and microbenchmarked the improvement.

- Improved \`extend\` performance by +140%.
- Improved \`push\` performance by +30%.
- Improved \`pushpop\` performance by +40%.
- Submitted [upstream Pull Request](https://github.com/servo/rust-smallvec/pull/405).

## Rust Stack-Array

Maintainer of the Rust crate [Stack-Array](https://crates.io/crates/stack-array).

- Assumed ownership of the crate after developing a new implementation with compile-
time evaluation support replacing the original codebase.
- Expanded the public API with 15+ operations, iterators and traits.
`;

//> OPENSOURCE -> FUNCTION
export default function OpenSource(): React.ReactNode {
    return <div className="prose"><Markdown>{content}</Markdown></div>;
}