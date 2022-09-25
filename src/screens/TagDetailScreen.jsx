import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const TagDetailScreen = () => {
  const [tag, setTag] = useState();
  console.log('tag:', tag);
  const {id} = useParams();
    
  useEffect(() => {
    fetch(`http://blog.api/tag/${id}`, {
      method: 'POST',
      body: JSON.stringify({with: [{article: "article_tag"}]})
    })
      .then(resp => resp.json())
      .then(json => {
        setTag(json);
      });
  }, [id])
  
  return (<>
    <h1>Liste du mot-clé: {tag?.title}</h1>
    <h3>Liste des articles reliés</h3>
    <div>
      {tag?.articles_list && Object.values(tag.articles_list).map(article => {
        return (<div>
          <h6 className='d-inline'>{article.title}</h6>
          <span> Publié le : {new Date(article.created_at).toLocaleString()}</span>
        </div>)
      })}
    </div>
  </> );
};

export default TagDetailScreen;