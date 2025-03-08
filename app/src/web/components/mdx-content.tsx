import { MDXProvider } from "@mdx-js/react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/cjs/styles/prism";

export const components = { code: CodeBlock };

export default function MDXContent({
  children,
}: { children: React.ReactNode }) {
  return <MDXProvider components={components}>{children}</MDXProvider>;
}

interface CodeBlockProps {
  children: string;
  className?: string;
}

function CodeBlock({ className, ...props }: CodeBlockProps) {
  const match = /language-(\w+)/.exec(className || "");
  return match ? (
    <SyntaxHighlighter
      language={match[1]}
      style={vscDarkPlus}
      customStyle={{ width: "fit-content", borderRadius: "4px" }}
      PreTag="div"
      {...props}
    />
  ) : (
    <code className={className} {...props} />
  );
}
