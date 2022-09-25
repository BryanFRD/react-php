import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ArticleDetailScreen = () => {
  const [article, setArticle] = useState();
  const {id} = useParams();
    
  useEffect(() => {
    fetch(`http://blog.api/article/${id}`, {
      method: 'POST',
      body: JSON.stringify({with: ['appuser', 'image', 'comment', 'theme', {tag: 'article_tag'}]})
    })
      .then(resp => resp.json())
      .then(json => {
        setArticle(json);
      });
  }, [id]);
  return (<>
    <h1>Détail de l'article: {article && article.title}</h1>
    {article &&
      <div className='mt-5'>
        <h4>Publié le : {article.created_at} Par : {article.appuser?.pseudo}</h4>
        <h6>Thème: {article.themes?.title}</h6>
        <div className='my-2'>
          <h6 className='d-inline'>Tags: </h6>
          <span>
            {article.tags_list && Object.values(article.tags_list).map(tag => (
              <span key={tag.Id_tag} className='badge bg-secondary ms-2'>{tag.title}</span>
            ))}
          </span>
        </div>
        <textarea readOnly disabled style={{resize: 'none', marginBottom: '1.5rem'}} value={article.content} rows={3} cols={50}></textarea>
        <div className='d-flex gap-3'>
          {article.images_list && Object.values(article.images_list).map(image => <img key={image.Id_image} src={image.src} alt={image.alt} />)}
        </div>
        {article.comments_list && Object.values(article.comments_list).map(comment => {
          return (<div key={comment.Id_comment}>
            <h6>{comment.title} publié le {new Date(comment.created_at).toLocaleString()}</h6>
            <textarea readOnly disabled style={{resize: 'none', marginBottom: '3rem'}} value={comment.content} rows={3} cols={50}></textarea>
          </div>)
        })}
      </div>
    }
  </> );
};

export default ArticleDetailScreen;