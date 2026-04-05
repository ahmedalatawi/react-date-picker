declare module "react-syntax-highlighter/dist/esm/prism-async-light" {
  import * as React from "react";
  import { SyntaxHighlighterProps } from "react-syntax-highlighter";

  export default class SyntaxHighlighter extends React.Component<SyntaxHighlighterProps> {}
}

declare module "react-syntax-highlighter/dist/esm/styles/prism/one-dark" {
  import type { CSSProperties } from "react";

  const style: { [key: string]: CSSProperties };
  export default style;
}
