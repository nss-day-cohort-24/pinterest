import React, {Component} from 'react';
import Username from './username.js';
import FollowFollowing from './followfollowing.js';

class ProfileText extends Component {
	render () {
		return(
			<div className="col-9">
				<Username />
				<div className="row">
				<FollowFollowing />
				</div>
			</div>
			)
	}
}

export default ProfileText;