import type { ComponentType, FC } from "react";
import RawSyntaxHighlighter from "react-syntax-highlighter/dist/esm/prism-async-light";
import oneDark from "react-syntax-highlighter/dist/esm/styles/prism/one-dark";

const SyntaxHighlighter = RawSyntaxHighlighter as unknown as ComponentType<{
  language: string;
  style: unknown;
  children: string;
}>;

interface CodeBlockProps {
  language: string;
  children: string;
}

export const CodeBlock: FC<CodeBlockProps> = ({ language, children }) => {
  return (
    <SyntaxHighlighter language={language} style={oneDark}>
      {children}
    </SyntaxHighlighter>
  );
};
