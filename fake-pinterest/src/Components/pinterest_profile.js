import React from 'react';

class Profile extends Component {
	render() {
		return (
			<div className="col-10 profile_main mx-auto row">

	          <div className="col-9 profile_info">
	          
	            <div className="col-12 username">Name</div>
	            <div className="row profile_bios">
	              <div className="col-4 bio">
	                <h3>Following</h3>
	                <p>This is a paragraph</p>

	              </div>
	              <div className="col-4 bio">
	                <h3>Followers</h3>
	                <p>This is a paragraph</p>
	              </div>
	              <div className="col-4 bio">
	                <h3>About</h3>
	                <p>This is a paragraph</p>
	              </div>
	            </div>
	          </div>

			)
	}
}