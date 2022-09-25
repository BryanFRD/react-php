import { useEffect, useState } from "react";

function ArticleScreen() {
    const [articles, setArticles] = useState([]);
    
    useEffect(() => {
        fetch('http://blog.api/article')
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
                    <th>Pseudo</th>
                    <th>Date de publication</th>
                </tr>
            </thead>
            <tbody>
                {articles.map(article => {
                    return(
                    <tr key={article.Id_article}>
                        <td>{article.Id_article}</td>
                        <td>{article.title}</td>
                        <td>{article.created_at}</td>    
                    </tr>
                    )
                })}
            </tbody>
        </table>
    </> );
}

export default ArticleScreen;