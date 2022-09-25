import { useEffect, useState } from "react";

function AccountScreen() {
    const [appusers, setAppusers] = useState([]);
    
    useEffect(() => {
        fetch('http://blog.api/appuser')
        .then(resp => resp.json())
        .then(json => {
            setAppusers(json);
        });
    }, []);
    
    return ( <>
        <h1>Liste des comptes utilisateurs</h1>
        <table className="table table-striped">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Pseudo</th>
                    <th>Id_role</th>
                </tr>
            </thead>
            <tbody>
                {appusers.map(appuser => {
                    return(
                    <tr key={appuser.Id_appUser}>
                        <td>{appuser.Id_appUser}</td>
                        <td>{appuser.pseudo}</td>
                        <td>{appuser.Id_role}</td>    
                    </tr>
                    )
                })}
            </tbody>
        </table>
    </> );
}

export default AccountScreen;