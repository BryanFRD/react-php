import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function TagScreen() {
    const navigate = useNavigate();
    const [tags, setTags] = useState([])
    
    useEffect(() => {
        fetch('http://blog.api/tag')
            .then(resp => resp.json())
            .then(json => {
                json.sort((a, b) => a.title.toLowerCase() > b.title.toLowerCase() ? 1 : -1);
                
                setTags(json);
            });
    }, [])
    
    return ( <>
        <h1>Liste des mots-clés</h1>
        <table className="table table-striped">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Title</th>
                </tr>
            </thead>
            <tbody>
                {tags.map(tag => {
                    return(
                    <tr key={tag.Id_tag} onClick={() => navigate(`/tag/${tag.Id_tag}`)}>
                        <td>{tag.Id_tag}</td>
                        <td>{tag.title}</td>
                    </tr>
                    )
                })}
            </tbody>
        </table>
    </> );
}

export default TagScreen;