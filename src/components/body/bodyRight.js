import React from 'react';
import { UsseFetch } from '../helpers/useFetch';
import "./bodyRight.css";

export default function BodyRight() {
  let [arr,setArr] = React.useState([]);
  let inputRefMsg = React.useRef();
  let data = UsseFetch();


  function send(event){
    event.preventDefault();
    setArr([...arr,inputRefMsg.current.value])
    inputRefMsg.current.value = ""

  }

  return (
    <div className='over-all-right-body'>
      <div className='messengerTitle-container px-2 mb-0'>
        <div className='logo-title'>
          <img className='athorised-user-profile' src='https://media-exp1.licdn.com/dms/image/C4E03AQHSUMDPOhP4tQ/profile-displayphoto-shrink_400_400/0/1595006923863?e=1674691200&v=beta&t=H1DJJ3scmKtWIav1szuxclj340UYOTym3H9v7RxojtU'/>
          <div className='green-dot'></div>
          <h5 className='messagingTitle'>Messaging</h5>
        </div>
        <span class="material-symbols-outlined dot">more_horiz</span>
      </div>
      <div className='addvertisement-container no-flex'>
          <div className='padding'>
          {
          data.map((item)=>(
            <div className='my-1 px-2'>
            <div className='know-connect'>
              <img className='pepole-dp my-1' src={item.avatar_url}/>
              <div className='mx-3'>
                <h6 className='pepole-clg-name'>{item.login}</h6>
                <p className='people-disc'>My name is {item.login}</p>
              </div>
            </div>
          </div> 
          ))
        }
        {
          arr.map((item)=>(
            <div className='my-1 px-2'>
            <div className='know-connect'>
              <img className='pepole-dp my-1' src='https://media-exp1.licdn.com/dms/image/C4E03AQHSUMDPOhP4tQ/profile-displayphoto-shrink_400_400/0/1595006923863?e=1675296000&v=beta&t=EK9NbM0ruxQCh60zeWom_eZKuCzgpz9OtSNo3QBHBCo'/>
              <div className='mx-3'>
                <h6 className='pepole-clg-name'>Trishanth R</h6>
                <p className='people-disc'>{item}</p>
              </div>
            </div>
          </div> 
          ))
        }
        </div>
         
      </div>
      <div className='addCMT input-btm'>
          <div class="input-group input-btm">
            <form class="input-group input-btm" onSubmit={send}>
              <input type="text" ref={inputRefMsg} class="form-control width input-btm" placeholder="Enter Comment Here.." aria-label="Recipient's username" aria-describedby="basic-addon2"/>
              <span class="input-group-text width input-btm" id="basic-addon2"><span class="material-symbols-outlined color" onClick={send} onDragEnd={send}>send</span></span>
            </form>
          </div>
        </div>  
    </div>
  )
}
