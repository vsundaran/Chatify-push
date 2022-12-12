import React from 'react';
import { Mycontext } from '../../App';
import "./navbarRight.css";

export default function NavbarRight() {
  let obj = React.useContext(Mycontext);
  function profilePage(){
    obj.setProfile(true);
    obj.setHome(false);
    obj.setNotification(false);
  }
  function homePage(){
    obj.setHome(true)
    obj.setProfile(false);
    obj.setNotification(false);
  }
  function notificationPage (){
    obj.setNotification(true);
    obj.setHome(false)
    obj.setProfile(false)
  }
  return (
    <div className='navbar-right-overallwrapper'>
        <div className='navbar-right-wrapper'>
            <div className='icon-disc' onClick={homePage}>
                <span class="material-symbols-outlined icon">home</span>
                <p className='fon'>Home</p>
            </div>
            <div className='icon-disc' onClick={notificationPage}>
                <span class="material-symbols-outlined icon">notifications</span>
                <p className='fon'>Notifications</p>
            </div>
            <div className='icon-disc' onClick={profilePage}>
                <span class="material-symbols-outlined icon">account_circle</span>
                <p className='fon'>Me</p>
            </div>
      </div>
    </div>
  )
}
