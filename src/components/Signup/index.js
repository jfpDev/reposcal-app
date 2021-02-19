import React, {useState} from 'react';
import MainHeader  from '../moduleComponents/MainHeader';
import axios from 'axios';

import RegisterHeader  from '../moduleComponents/RegisterHeader';

import '../../styles.css';
import SignupImg   from '../images/signup-img.jpg';


 
const Signup = ({history, takeUserUp}) => {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	
	const handleSubmit = async (e) => {
		e.preventDefault();
		takeUserUp(username);
		const userData = {
			username,
			password 
		};
		axios.post('/signup', userData)
		.then((res) => {
			if (res.data.message === 'user-already-exists'){
				alert('This user already exists, sorry.');
			}
			if (res.data.message === 'user-created'){
				return history.push('/profile');
			}
		})
		.catch(err => console.log(err))

		
	
	};

	return(
		<>
			<RegisterHeader />
			<main className="signup">
				<section>
					<div className="col-md-8 signup-form">
						<div className="mb-4" >
							<h3>Sign Up</h3>
							<p className="mb-4">Get into the best way to track your repositories and calendar events.</p> 
						</div>
						<form onSubmit={handleSubmit}>
							<div className="form-group first">
									<label for="username">Username</label>
									<input onChange={(e) => setUsername(e.target.value)} type="text" className="form-control" id="username" />
							</div>
							<div className="form-group last mb-4">
									<label for="password">Password</label>
									<input onChange={(e) => setPassword(e.target.value)} type="password" className="form-control" id="password" /> 
							</div>
							<input type="submit" value="Sign Up" className="btn btn-block btn-primary" />
						</form>
					</div>
				</section>    
				<section>
					<img className="signup_img" src={SignupImg} alt="Image" />
				</section>
			</main>
		</>
	);
}



export default Signup;

// try{
// 	await axios.get(`https://api.github.com/users/${username}/repos`)
// 		.then(res => {
// 			const userData = {
// 				username,
// 				password, 
// 				data: res.data
// 			};
// 			fetchRepos(res.data))
// 		}
			 
// 		.catch(err => {
// 			console.error(err);
// 	 })
	
// }catch (err){
// 	console.log(err);
// }