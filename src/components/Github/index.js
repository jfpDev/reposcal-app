import React, {useState} from 'react';

import ProfileHeader from '../moduleComponents/ProfileHeader';
import GetUserRepo   from './GetUserRepo';
import RenderUserRepo  from './RenderUserRepo';


const Github = ({username}) => {
    const [repos, setRepos] = useState([]);

    return(
        <>
        <main className="github" >
        <ProfileHeader />
          {
            repos.length === 0 ? <GetUserRepo fetchRepos={ (info) => 
                {   
                    setRepos(info);
                    console.log(info);
                }
            }/> : <RenderUserRepo repositories={repos} username={username} />    
          }
        </main>
        </>
    );
};



export default Github;