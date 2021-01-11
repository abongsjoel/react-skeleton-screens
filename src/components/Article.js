import React, { useState, useEffect } from 'react';
import SkeletonElement from '../skeletons/SkeletonElement';

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

      <SkeletonElement type="title" />
      <SkeletonElement type="text" />
      <SkeletonElement type="thumbnail" />
      <SkeletonElement type="avatar" />

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
