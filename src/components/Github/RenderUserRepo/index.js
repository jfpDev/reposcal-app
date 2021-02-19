import React, {useState} from 'react';
import axios from 'axios';


const RenderUserRepo = ({repositories, username}) => {
  const [mainRepos, setMainRepos] = useState([]);

  const handleStore = (index) => {
    const repo = {
      username,
      name: repositories[index].name,
      language: repositories[index].language,
      description: repositories[index].description,
      id: repositories[index].id
    }
    axios.patch('/update', repo)
      .then(res => console.log(res.data.message))
      .catch(err => console.log(err))
  };

  return(
    <main className="renderUserRepo">
      <section >
        <figure className="renderUserRepo_head">
          <img src={`${repositories[0].owner.avatar_url}`} alt="developer img" />
          <figcaption>{`${repositories[0].owner.login}`}</figcaption>
          <figcaption>{`Repositories: ${repositories.length}`}</figcaption>
        </figure> 
    </section>
    <section className="Div">
      <hr/>
    </section>
    <section>
      {
        repositories.map((repo, index) =>
          <div key={repo.id} className="renderUserRepo_items">
            <div className="renderUserRepo_itemsHead">
              <p>{`Name: ${repo.name}`}</p>
              <p>{`Language: ${repo.language}`}</p>
            </div>
            <div className="renderUserRepo_itemsFoot">
              <p>{repo.description}</p>
              <input onClick={() => handleStore(index)} type="submit" value="+" />
            </div>
          </div>
          )          
      }       
    </section>
    </main>
    
  );
};


export default RenderUserRepo;