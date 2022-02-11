import React from 'react'
import NavBar from '../Layout/NavBar';
import { Container } from '@material-ui/core';
import { useState } from 'react';
import axios from 'axios';
import "./contact.css"

export default function() {
    

    const [state, setState] = useState({
        userName:"",
        password:"",
        phoneNo:"",
        emailId:"",
        gender:""
      }); 


      const addContactDetails = async () => {
       const result= await axios
          .post("http://localhost:8777/user/add", state).then(alert("addedSucessfully"));
        console.log(result.data);
             
      };



  return (
    <div>
    <div>
     <NavBar/>
     
     <div class="background" style={{backgroundColor:"#118b91"}}>
  <div class="container">
    <div class="screen">
      <div class="screen-header">
        <div class="screen-header-left">
          <div class="screen-header-button close"></div>
          <div class="screen-header-button maximize"></div>
          <div class="screen-header-button minimize"></div>
        </div>
        <div class="screen-header-right">
          <div class="screen-header-ellipsis"></div>
          <div class="screen-header-ellipsis"></div>
          <div class="screen-header-ellipsis"></div>
        </div>
      </div>
      <div class="screen-body">
        <div class="screen-body-item left">
          <div class="app-title">
            <span>CONTACT</span>
            <span>US</span>
          </div>
          <div class="app-contact">CONTACT INFO : 63813-43012</div>
        </div>
        <div class="screen-body-item">
          <div class="app-form">
            <div class="app-form-group">
              <input class="app-form-control" placeholder="NAME" onChange={(e)=>setState({...state,userName:e.target.value})}/>
            </div>
            <div class="app-form-group">
              <input class="app-form-control" placeholder="EMAIL"  onChange={(e)=>setState({...state,emailId:e.target.value})}/>
            </div>
            <div class="app-form-group">
              <input class="app-form-control" placeholder="CONTACT NO" onChange={(e)=>setState({...state,phoneNo:e.target.value})}/>
            </div>
            <div class="app-form-group buttons">
              <button class="app-form-button">CANCEL</button>
              <button class="app-form-button" onClick={(event)=>{
                  addContactDetails();
              }}>SEND</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="credits">
      created by
      <a class="credits-link" target="_blank">
        <svg class="dribbble" viewBox="0 0 200 200">
          <g stroke="#ffffff" fill="none">
            <circle cx="100" cy="100" r="90" stroke-width="20"></circle>
            <path d="M62.737004,13.7923523 C105.08055,51.0454853 135.018754,126.906957 141.768278,182.963345" stroke-width="20"></path>
            <path d="M10.3787186,87.7261455 C41.7092324,90.9577894 125.850356,86.5317271 163.474536,38.7920951" stroke-width="20"></path>
            <path d="M41.3611549,163.928627 C62.9207607,117.659048 137.020642,86.7137169 189.041451,107.858103" stroke-width="20"></path>
          </g>
        </svg>
        SCHOOL LISTING SYSTEM
      </a>
    </div>
  </div>
</div>
    
    </div>
    </div>
  )
}
