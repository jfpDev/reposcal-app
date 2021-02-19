import React, {Component} from 'react';
import axios from 'axios';

import ProfileHeader from '../moduleComponents/ProfileHeader';


import GithubImg from '../images/github.svg';
import CalendarImg from '../images/calendar.svg';

class Profile extends Component{
	constructor(props){
		super(props);
		this.state = {
			repos: []
		};
	}

	componentDidMount(){
		this.callDb();
	}

	callDb = async () => {
		await axios.get(`/user-repos/${this.props.username}`)
			.then( res => this.setState({
				repos: res.data.data
				})
			)
			.catch(err => console.log(err))
	};

	render(){
		return(
			<>
				<main className="profile">
				<ProfileHeader />
					<section className="profileGithub">
						<img src={GithubImg} alt="github img" />
						{
						this.state.repos.length === 0 ? <p>No repos yet</p> : 	
							<div>
							{
									this.state.repos.map(repo =>
										<div className="profile_items">
											<div className="profile_itemHead">
												<p>{`Name: ${repo.name}`}</p>
												<p>{`Language: ${repo.language}`}</p>
											</div>
											<div className="profile_itemFoot">
												<p>{repo.description}</p>
											</div>
										</div>
									)}
							</div> 
						}	
					</section>
					<section className="profileGithub">
						<img src={CalendarImg} alt="calendar img" />
						{/* {this.state.repos.length === 0 ? <p>No events yet</p> : 
							<div>
								{
									this.state.repos.map(event => <p>{event.description}</p>)		
								}
							</div>
						}		 */}
					</section>
				</main>
			</>
		);
	}
	
};



export default Profile;