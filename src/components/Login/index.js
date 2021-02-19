import React, {useState} from 'react';
import axios from 'axios';
import RegisterHeader  from '../moduleComponents/RegisterHeader';


import '../../styles.css';
import LoginImg   from '../images/login-img.svg';

axios.defaults.baseURL = 'https://us-central1-reposcal.cloudfunctions.net/api';

//'http://localhost:5001/reposcal/us-central1/api';




const Login = ({history, takeUserUp}) => {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	
	const handleSubmit = (e) => {
		e.preventDefault();
		takeUserUp(username);
		const userData = {
			username,
			password
		};
		axios.post('/login', userData)
			.then((res) => {
				if (res.data.message === 'wrong-credentials'){
					console.log(res.data.message);
					return alert('Not a correct password');
				}
				if (res.data.message === 'user-not-registered'){
					console.log(res.data.message);
					alert('You are not registered, yet.');
					return history.push('/signup');
				}
				if (res.data.message === 'loged-in'){
					console.log(res.data.message);
					return history.push('/profile');
				}
					
			})
			.catch(err => console.log(err.message))
	}; 

	

	return(
		<>
			<RegisterHeader />
			<main className="login">	
			<div className="container">
				<div className="row">
					<div className="col-md-6">
						<img src={LoginImg} alt="Image" className="img-fluid" />
					</div>
					<div className="col-md-6 contents">
						<div className="row justify-content-center">
							<div className="col-md-8">
								<div className="mb-4">
									<h3>Log In</h3>
									<p className="mb-4">Take your data close.</p>
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
									<input type="submit" value="Log In" className="btn btn-block btn-primary" />
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</main>
		</>
	);
};



export default Login;