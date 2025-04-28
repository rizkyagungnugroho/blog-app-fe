import React, { FC } from "react";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import { Components as ReactMarkdownComponents } from "react-markdown";  // Renaming the import to avoid the conflict

interface MarkDownProps {
  content: string;
}

const MarkDown: FC<MarkDownProps> = ({ content }) => {
  const components: ReactMarkdownComponents = {
    h1: ({ children }) => <h1 className="text-2xl font-bold">{children}</h1>,
    h2: ({ children }) => <h2 className="text-xl font-semibold">{children}</h2>,
  };

  return (
    <ReactMarkdown rehypePlugins={[rehypeRaw]} components={components}>
      {content}
    </ReactMarkdown>
  );
};

export default MarkDown;
