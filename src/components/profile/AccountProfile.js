import React from "react";
import "./AccountProfile.css";

function AccountProfile(){
    return(
        <div className="account-profile-page">
            <div className="inner-over-all-container">
                <div className="profiles">
                    <div className="profile-photo-container">
                        <img className="profile-photo" src="https://media-exp1.licdn.com/dms/image/C4E03AQHSUMDPOhP4tQ/profile-displayphoto-shrink_400_400/0/1595006923863?e=1675296000&v=beta&t=EK9NbM0ruxQCh60zeWom_eZKuCzgpz9OtSNo3QBHBCo"/>
                    </div>
                    <div className="profile-right">
                        <div className="profile-details d-flex">
                            <p className="name-profile">Trishanth R. Naidu</p>
                            <button className="edit-profile" type="button">Edit Profile</button>
                        </div>
                        <div className="count-container">
                            <span  className="post-count"><span className="post-count">13</span >Posts</span>
                            <span  className="post-count"><span className="post-count">96</span>Followers</span>
                            <span  className="post-count"><span className="post-count">10</span>Following</span>
                        </div>
                    </div> 
                </div>
                <div>
                    <div className="d-flex icons"> 
                        <span class="material-symbols-outlined post-icon">perm_media</span>
                        <p className="text-center mx-2 post-title">Posts</p>
                    </div>
                </div>
                <div className="images-container">
                    <img className="img-post" src="https://wallpaperaccess.com/full/374472.jpg"/>
                    <img className="img-post" src="https://wallpaperaccess.com/full/24035.jpg"/>
                    <img className="img-post" src="https://wallpaperaccess.com/full/374474.jpg"/>
                    
                    <img className="img-post" src="https://wallpaperaccess.com/full/374538.jpg"/>
                    <img className="img-post" src="https://wallpaperaccess.com/full/374552.jpg"/>
                    <img className="img-post" src="https://wallpaperaccess.com/full/374580.jpg"/>
                    <img className="img-post" src="https://wallpaperaccess.com/full/374587.jpg"/>
                    <img className="img-post" src="https://wallpaperaccess.com/full/374588.jpg"/>
                    <img className="img-post" src="https://wallpaperaccess.com/full/374535.jpg"/>
                   
                </div>
                
            </div>
        </div>
    )
}

export default AccountProfile;