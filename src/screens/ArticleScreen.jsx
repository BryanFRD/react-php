import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function ArticleScreen() {
    const navigate = useNavigate();
    const [articles, setArticles] = useState([]);
    
    useEffect(() => {
        fetch('http://blog.api/article/0', {
            method: 'POST',
            body: JSON.stringify({with: ['appuser']})
        })
        .then(resp => resp.json())
        .then(json => {
            setArticles(json);
        });
    }, []);
    
    return ( <>
        <h1>Liste des articles</h1>
        <table className="table table-striped">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Titre</th>
                    <th>Auteur</th>
                    <th>Date de publication</th>
                </tr>
            </thead>
            <tbody>
                {articles.map(article => {
                    return(
                    <tr key={article.Id_article} onClick={() => navigate(`/article/${article.Id_article}`)}>
                        <td>{article.Id_article}</td>
                        <td>{article.title}</td>
                        <td>{article.appuser?.pseudo}</td>
                        <td>{article.created_at}</td>    
                    </tr>
                    )
                })}
            </tbody>
        </table>
    </> );
}

export default ArticleScreen;