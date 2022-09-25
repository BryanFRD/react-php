import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const AccountDetailScreen = () => {
  const [appuser, setAppuser] = useState();
  const {id} = useParams();
    
  useEffect(() => {
    fetch(`http://blog.api/appuser/${id}`, {
      method: 'POST',
      body: JSON.stringify({with:['account', 'role', 'article', 'comment']})
    })
      .then(resp => resp.json())
      .then(json => {
        setAppuser(json);
      });
  }, [id]);
  
  return (<>
    <h1>Détail du compte: {appuser && appuser.pseudo}</h1>
    {appuser && <>
      <div>Login: {appuser?.account?.login}</div>
      <div>Role: {appuser?.role?.title}</div>
      <hr />
      {appuser?.Id_role === '2' && <>
        <h3>Articles rédigés</h3>
        <table className='table table-striped'>
          <thead>
            <tr>
              <th>Titre</th>
              <th>Date de publication</th>
            </tr>
          </thead>
          <tbody>
            {Object.values(appuser?.articles_list).map(article => {
              return (<tr key={article.Id_article}>
                <td>{article.title}</td>
                <td>{new Date(article.created_at).toLocaleString()}</td>
              </tr>)
            })}
          </tbody>
        </table>
      </>}
      <h3>Commentaires rédigés</h3>
      <table className='table table-striped'>
        <thead>
          <tr>
            <td>Titre</td>
            <td>Date de publication</td>
          </tr>
        </thead>
        <tbody>
          {appuser.comments_list && Object.values(appuser.comments_list).map(comment => {
            return (<tr key={comment.Id_comment}>
              <td>{comment.title}</td>
              <td>{new Date(comment.created_at).toLocaleString()}</td>
            </tr>)
          })}
        </tbody>
      </table>
    </>}
  </> );
};

export default AccountDetailScreen;