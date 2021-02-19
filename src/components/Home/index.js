import React, {Component} from 'react';

import MainHeader   from '../moduleComponents/MainHeader';


import homePic from '../images/home_logo.png';

class Home extends Component{
    constructor(props){
        super(props);
        this.state = {};
    }

    render(){
			return(
				<main className="home">
					<MainHeader />
					<section className="home_logo">
						<img className="home_img" src={homePic} alt="home logo" />
					</section>
					<section className="home_parag">
					<div className="">
							<p>The best way to keep up with your personal dev information</p>
						</div>
					</section> 
				</main>
			);
		}

}



export default Home;