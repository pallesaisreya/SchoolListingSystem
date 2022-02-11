import React from 'react';
import {Link} from 'react-router-dom'
import './NavBar.css'

export default function NavBar1() {
  return(
      <div>
          <div className="navbar navbar-expand navbar-light  bg-dark">
          <div className="collapse navbar-collapse">
            <div>
            <Link to="/" className="navbar-logo">
                  SCHOOL LISTING SYSTEM
            </Link>
            </div>
            <ul className="naviblue">
              <li className="navigreen">
                <Link className="nav-link" to="/">
                  HOME
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/"
                ><button className="btns"
                  onClick={
                    () => {
                      localStorage.setItem("isLoggedIn","false");
                      localStorage.setItem("userName","");
                      localStorage.setItem("password",""); 
                    }
                  }
                
                >
                  LOGOUT
                  </button>
                </Link>
              </li>
              <li className='nav-item'>
                <Link to="/sugesstionadmin" className="nav-link">
                  <button className="btns">
                    SUGESSTION
                  </button>
                </Link>
              </li>
            </ul>
          </div>
        </div> 
      </div>
  );
}

