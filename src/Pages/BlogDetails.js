// import React from 'react';
// import { useParams } from 'react-router-dom';

// const BlogDetails = ({ posts }) => {
//     const { id } = useParams();
//     const postId = parseInt(id);
//     const post = posts.find((post) => post.id === postId);

//     if (!post) {
//         return <div>Post not found</div>;
//     }

//     if (!posts || posts.length === 0) {
//         return <div>No posts available</div>;
//     }

//     return (
//         <>
//             <div className="container mt-2">
             
//                 {post.title1 && <h1>{post.title1}</h1>}
//                 <hr />
//                 {post.content1 && <p>{post.content1}</p>}

//                 {post.title2 && <h3>{post.title2}</h3>}
//                 <hr />
//                 {post.content2 && <p>{post.content2}</p>}
//             </div>
//         </>
//     );
// };

// export default BlogDetails;

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

