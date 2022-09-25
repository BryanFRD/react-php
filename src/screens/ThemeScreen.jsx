import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function ThemeScreen() {
    const navigate = useNavigate();
    const [themes, setThemes] = useState([])
    
    useEffect(() => {
        fetch('http://blog.api/theme')
            .then(resp => resp.json())
            .then(json => {
                json.sort((a, b) => a.title.toLowerCase() > b.title.toLowerCase() ? 1 : -1);
                
                setThemes(json);
            });
    }, [])
    
    return ( <>
        <h1>Liste des thèmes</h1>
        <table className="table table-striped">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Image</th>
                </tr>
            </thead>
            <tbody>
                {themes.map(theme => {
                    return(
                    <tr key={theme.Id_theme} onClick={() => navigate(`/theme/${theme.Id_theme}`)}>
                        <td>{theme.Id_theme}</td>
                        <td>{theme.title}</td>
                        <td>{theme.img_src}</td>    
                    </tr>
                    )
                })}
            </tbody>
        </table>
    </> );
}

export default ThemeScreen;