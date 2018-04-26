import React, { Component } from 'react';

import ShortBio from './shortbio';

class FollowFollowing extends Component {
    render (){
        return(
            <div className="row">
                <div className="col bio">
                    <p><strong>974</strong><br />Followers</p>
                </div>
                <div className="col bio">
                    <p><strong>571</strong><br />Followers</p>
                </div>
                <ShortBio />
            </div>
        )
    }
}

export default FollowFollowing;