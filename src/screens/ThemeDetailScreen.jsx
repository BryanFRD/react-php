import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ThemeDetailScreen = () => {
  const [theme, setTheme] = useState();
  const {id} = useParams();
    
  useEffect(() => {
    fetch(`http://blog.api/theme/${id}`, {
      method: 'POST',
      body: JSON.stringify({with: ['article']})
    })
      .then(resp => resp.json())
      .then(json => {
        setTheme(json);
      });
  }, [id])
  
  return (<>
    <h1>Détail du thème: {theme && theme.title}</h1>
    {theme && <>
      <img src={theme.img_src} alt={`Theme ${theme.title}`} />
      {theme.articles_list && Object.values(theme.articles_list).map(article => {
        return (<div key={article.Id_article}><h6>{article.title}</h6> Publié le {new Date(article.created_at).toLocaleString()}</div>)
      })}
    </>}
  </> );
};

export default ThemeDetailScreen;