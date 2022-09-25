import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function AccountScreen() {
    const navigate = useNavigate();
    const [appusers, setAppusers] = useState([]);
    
    useEffect(() => {
        fetch('http://blog.api/appuser/0', {
            method: 'POST',
            body: JSON.stringify({with: ['account', 'role']})
        })
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
                    <th>Login</th>
                    <th>Role</th>
                </tr>
            </thead>
            <tbody>
                {appusers.map(appuser => {
                    return(
                    <tr key={appuser.Id_appUser} onClick={() => navigate(`/account/${appuser.Id_appUser}`)}>
                        <td>{appuser.Id_appUser}</td>
                        <td>{appuser.pseudo}</td>
                        <td>{appuser.account?.login}</td>
                        <td>{appuser.role?.title}</td>    
                    </tr>
                    )
                })}
            </tbody>
        </table>
    </> );
}

export default AccountScreen;