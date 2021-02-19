import React, {useState} from 'react';
import axios from 'axios';


const GetUserRepo = ({fetchRepos}) => {
  const [user, setUser] = useState('');
  const [repos, setRepos] = useState([]);


  return(
    <section className="getUserRepo">
      <div className="">
        <label for="username">Github Username</label>
        <input onChange={(e)=>setUser(e.target.value)} type="text" className="form-control" id="username" />
      </div>
      <button onClick={async () => {
        try{
          await axios.get(`https://api.github.com/users/${user}/repos`)
            .then(res => fetchRepos(res.data))
            .catch(err => {
              console.error(err);
           })
          
        }catch (err){
          console.log(err);
        }
       }
      }>
        Search User
      </button>
    </section>
  );
};


export default GetUserRepo;