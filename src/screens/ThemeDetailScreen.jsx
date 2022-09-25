import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ThemeDetailScreen = () => {
  const [theme, setTheme] = useState();
  const {id} = useParams();
    
  useEffect(() => {
    fetch(`http://blog.api/themeDetail/${id}`)
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
        return (<div key={article.Id_article}>
          <h6>
            {article.title}
          </h6>
          <span> Publié le {new Date(article.created_at).toLocaleString()} par {article.appuser.pseudo}</span>
        </div>)
      })}
    </>}
  </> );
};

export default ThemeDetailScreen;