import React, {Component} from 'react';
import ProfileText from './profiletext.js';
import ProfilePic from './profilepic.js';

class Profile extends Component {
	render() {
		return (
			<div className="col-12 profile_main mx-auto row">
				<ProfileText />
	          
	             <ProfilePic />
	          </div>      

			)
	}
}

export default Profile;