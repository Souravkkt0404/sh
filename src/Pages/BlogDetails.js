import React from 'react';
import ReactMarkdown from 'react-markdown';
import 'github-markdown-css'; // Optional, for styling the Markdown content

import markdownContent from '../MarkdownFiles/BlogData.md'; // Path to your markdown file

function App() {
  const [content, setContent] = React.useState('');

  React.useEffect(() => {
    // Fetch the markdown content from the file
    fetch(markdownContent)
      .then((response) => response.text())
      .then((text) => setContent(text))
      .catch((error) => console.error('Error fetching Markdown content:', error));
  }, []);

  return (
    <div className="container mt-5">
      <ReactMarkdown children={content} />
    </div>
  );
}

export default App;

