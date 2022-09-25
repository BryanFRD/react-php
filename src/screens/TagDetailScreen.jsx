import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const TagDetailScreen = () => {
  const [tag, setTag] = useState();
  const {id} = useParams();
    
  useEffect(() => {
    fetch(`http://blog.api/tag/${id}`)
      .then(resp => resp.json())
      .then(json => {              
        setTag(json);
      });
  }, [id])
  
  return (<>
    <h1>Liste des mots-clés: {id}</h1>
    <table className="table table-striped">
      <thead>
          <tr>
              <th>Id</th>
              <th>Title</th>
          </tr>
      </thead>
      <tbody>
        {tag && 
          <tr>
            <td>{tag.Id_tag}</td>
            <td>{tag.title}</td>
          </tr>  
        }
      </tbody>
    </table>
  </> );
};

export default TagDetailScreen;