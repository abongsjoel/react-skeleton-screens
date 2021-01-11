import React, { useState, useEffect } from 'react';

const Article = () => {
  const [articles, setArticles] = useState(null);

  useEffect(() => {
    setTimeout( async () => {
      const res = await fetch('https://jsonplaceholder.typicode.com/posts');
      const data = await res.json();
      setArticles(data);
    }, 5000);
  });

  return (
    <div className="articles">
      <h2>Artiles</h2>

      {articles && articles.map(article => (
        <div className="article" key={ article.id }>
          <h3>{ article.title }</h3>
          <p>{ article.body }</p>
        </div>
      ))}

      {!articles && <div>Loading...</div>}
    </div>
  );
}

export default Article;
