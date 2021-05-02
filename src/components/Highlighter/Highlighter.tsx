import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

type HighlighterProps = {
  codeString: string;
};

const Highlighter = ({ codeString }: HighlighterProps) => {
  return (
    <SyntaxHighlighter
      language="javascript"
      style={vscDarkPlus}
      showLineNumbers
    >
      {codeString}
    </SyntaxHighlighter>
  );
};

export default Highlighter;
