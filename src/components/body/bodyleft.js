import React from 'react';
import"./bodyleft.css";

export default function Bodyleft() {
  let imgInputRef = React.useRef();
  let imageSource = [
    "https://wallpaperaccess.com/full/157122.jpg",
    "https://wallpaperaccess.com/full/24071.jpg",
    "https://wallpaperaccess.com/full/360550.jpg",
    "https://wallpaperaccess.com/full/360552.jpg",
    "https://wallpaperaccess.com/full/360553.jpg",
    "https://wallpaperaccess.com/full/360554.jpg",
    "https://wallpaperaccess.com/full/360558.jpg"
];

 
  let [postInput,setPostInput] = React.useState([]);

  function startAddPost(e){
    e.preventDefault();
    setPostInput([...postInput,imgInputRef.current.value])
    imgInputRef.current.value = ""
  }

  let longdate = new Date();
  let actualdate = longdate.toLocaleDateString(); 
  let actualTime = longdate.toLocaleTimeString();

  return (
    <div className='d-flex over-all-left-content'>
      <div className='profile'>
        <div className='profile-upper'>
          <div className='logo-banner'>
            <img className='banner' src='https://media-exp1.licdn.com/dms/image/C5116AQF3E2kIzEtDsw/profile-displaybackgroundimage-shrink_350_1400/0/1516851924229?e=1675296000&v=beta&t=T6MMC2Vfwbuvkd6BcjgVvOovbWz_2cW4nb-bZOfv2fY'/>
            <img className='logo' src='https://media-exp1.licdn.com/dms/image/C4E03AQHSUMDPOhP4tQ/profile-displayphoto-shrink_400_400/0/1595006923863?e=1675296000&v=beta&t=EK9NbM0ruxQCh60zeWom_eZKuCzgpz9OtSNo3QBHBCo'/>
          </div>
          <div className='folloers-details pt-5'>
            <h5 className='name'>Trishanth R. Naidu</h5>
            <p className='position'>MTS1 at PayPal</p>
            <div className='buttons'>
              <button type="button" className="follw-btn">Posts</button>
              <button type="button" className="follw-btn">Followers</button>
              <button type="button" className="follw-btn">Following</button>
            </div>
            <div className='edit-and-share-profile'>
              <button type="button" className="follw-btn-width">Edit Profile <span className="material-symbols-outlined setting">settings</span></button>
              <button type="button" className="follw-btn-width">Share Profile <span className="material-symbols-outlined setting">person_add</span></button>
            </div>
          </div>
        </div>
        <div className='coroshal'>
          <div className='coroshal-upper'>
          
          <div id="carouselExampleControlsNoTouching" className="carousel slide" data-bs-touch="false">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src="https://cdn.dribbble.com/users/370989/screenshots/6111481/media/b3d72c61757515dce383928e97f4f56b.gif" class="d-block w-100" alt="..."/>
              </div>
              <div className="carousel-item">
                <img src="https://cdn.dribbble.com/users/370989/screenshots/6108991/media/83591ac3c4a478fa1948e0bf7f558e5a.gif" class="d-block w-100" alt="..."/>
              </div>
              <div className="carousel-item">
                <img src="https://res.cloudinary.com/honeybook/image/upload/c_scale,f_auto,fl_lossy,q_auto,w_auto/v1/marketing_site/paid/Vertical_-_Job_vertical_Image_1.png" class="d-block w-100" alt="..."/>
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>

          </div>
        </div>
        <div className='profile-lower'>
          <div className='tags'><p>Groups</p></div>
          <div className='tags'><p>Events</p></div>
          <div className='tags'><p>Followed Hastags</p></div>
          <div className='tags discover'><p>Discover More</p></div>
        </div>
      </div>
      <div className='showcase'>
        <div className='post-share'>
          <div className='upper-post'>
            <img className='post-logo' src='https://media-exp1.licdn.com/dms/image/C4E03AQHSUMDPOhP4tQ/profile-displayphoto-shrink_400_400/0/1595006923863?e=1675296000&v=beta&t=EK9NbM0ruxQCh60zeWom_eZKuCzgpz9OtSNo3QBHBCo'/>
            <input type="text" className='input-post'required placeholder='Start Post...' ref={imgInputRef}/>
          </div>
          <div className='lower-post'>
            <div className='d-flex icon-container'>
              <div className='d-flex align-items-center'>
                <span className="material-symbols-outlined post-icon">add_a_photo</span>
                <span className='mx-2 icon-dis'>Photo</span>
                <input type="file" className='photo-input' onChange={startAddPost} />
              </div>
              <div className='d-flex align-items-center'>
                <span className="material-symbols-outlined post-icon">videocam</span>
                <span className='mx-2 icon-dis'>Video</span>
              </div>
              <div className='d-flex align-items-center'>
                <span className="material-symbols-outlined post-icon">event</span>
                <span className='mx-2 icon-dis'>Event</span>
              </div>
              <div className='d-flex align-items-center'>
                <span className="material-symbols-outlined post-icon">article</span>
                <span className='mx-2 icon-dis'>Write article</span>
              </div>
            </div>
          </div>
        </div>
        <div className='over-all-posts'>
          <div className='post-upper-portion'>
            <img className='posted-user-logo' src='https://media-exp1.licdn.com/dms/image/C4E03AQHSUMDPOhP4tQ/profile-displayphoto-shrink_400_400/0/1595006923863?e=1675296000&v=beta&t=EK9NbM0ruxQCh60zeWom_eZKuCzgpz9OtSNo3QBHBCo'/>
            <div className='post-details'>
              <p className='poster-name m-0 mx-3'>Trishanth R. Naidu</p>
              <p className='poster-position m-0 mx-3'>MTS1 at PayPal  .<span className='mx-1'>{actualdate}</span></p>
            </div>
          </div>
          <div className='post-disc'>
            <p className='text-light show-case-disc'>It's my good day I done my project just now.</p>
            <img className='w-100' src='https://cdn.dribbble.com/users/11276894/screenshots/19484498/media/19b20680e8ade40ebb4532bdc8c88643.jpg?compress=1&resize=1000x750&vertical=top'/>
          </div>
          <div className='reactions d-flex my-3'>
            
              <div className='d-flex'>
              <span class="material-symbols-outlined emoj">thumb_up</span>
              <span className='color'>Like</span>
              </div>
              <div className='d-flex'>
              <span class="material-symbols-outlined emoj">favorite</span>
              <span className='color'>Favorite</span>
              </div>
              <div className='d-flex'>
              <span class="material-symbols-outlined emoj">chat</span>
              <span className='color'>Commamnd</span>
              </div>
              <div className='d-flex'>
              <span class="material-symbols-outlined emoj">share</span>
              <span className='color'>Share</span>
             
            </div> 
          </div>
        </div>
        
          {/* img loop happens here */}
          {
            postInput.map((item,index)=>(
              <div className='over-all-posts'>
          <div className='post-upper-portion'>
            <img className='posted-user-logo' src='https://media-exp1.licdn.com/dms/image/C4E03AQHSUMDPOhP4tQ/profile-displayphoto-shrink_400_400/0/1595006923863?e=1675296000&v=beta&t=EK9NbM0ruxQCh60zeWom_eZKuCzgpz9OtSNo3QBHBCo'/>
            <div className='post-details'>
              <p className='poster-name m-0 mx-3'>Trishanth R. Naidu</p>
              <p className='poster-position m-0 mx-3'>MTS1 at PayPal  .<span className='mx-1'>{actualdate} : {actualTime}</span></p>
            </div>
          </div>
          <div className='post-disc'>
            <p className='text-light show-case-disc'>{item}</p>
            <img className='w-100' src={imageSource[index]}/>
          </div>
          <div className='reactions d-flex my-3'>
            
              <div className='d-flex'>
              <span class="material-symbols-outlined emoj">thumb_up</span>
              <span className='color'>Like</span>
              </div>
              <div className='d-flex'>
              <span class="material-symbols-outlined emoj">favorite</span>
              <span className='color'>Favorite</span>
              </div>
              <div className='d-flex'>
              <span class="material-symbols-outlined emoj">chat</span>
              <span className='color'>Commamnd</span>
              </div>
              <div className='d-flex'>
              <span class="material-symbols-outlined emoj">share</span>
              <span className='color'>Share</span>
             
            </div> 
          </div>
        </div>
            ))
          }

      </div>
    </div>
    
  )
}
