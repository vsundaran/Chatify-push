import React from 'react';
import { Mycontext } from '../../App';
import Notification from '../notification/notification';
import AccountProfile from '../profile/AccountProfile';
import "./body.css";
import Bodyleft from './bodyleft';
import BodyRight from './bodyRight';

export default function Body() {
  let obj = React.useContext(Mycontext);

  return (
    <div className='global-body'>
      <div className='over-all-body'>
        {
          obj.profile ? <AccountProfile/> : false
        }
        {
          obj.home ? <Bodyleft/> :  false
        }
        {
          obj.notification ? <Notification/> : false 
        }
        <BodyRight/>
        
      </div>
    </div>
  )
}
