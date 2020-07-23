import React from 'react';

import './App.css';
import myWonderfulImage from "./imageInSrc.jpg"

function App() {
  return (
       <>
      <div style={{border:'solid 1px black', maxWidth:'100vw', padding: '500',
  marginTop: '150px' , 
  textAlign: 'center' , backgroundColor: 'black'}}>

      <h1 className = "title red" style={{color : 'white'}}>Marzouk Taher</h1>

      <br/>

      <img src = {myWonderfulImage}  alt ='imageInSrc'/>

      <br/>

      <img src="/imageInPublic.jpg" alt = "imageInPublic" />

      <video width="320" height="240" controls>

      <source src="myVideo.mp4" type="video/mp4" alt = "myVideo" />

       </video> 
      </div>

      
   </>
  );
}

export default App;
