import React from 'react';
import {Link} from 'react-router-dom'
import './NavBar.css'
import Img1 from '../Pages/Image/logo.jpeg'

export default function NavBar() {
    return (
        <div className="navbar navbar-expand navbar-light  bg-dark">
          <div className="collapse navbar-collapse">
            <div>
            <Link to="/" className="navbar-logo">
              SCHOOL LISTING  SYSTEM
            </Link>
            </div>
            <ul className="naviblue">
              <li className="navigreen">
                <Link className="nav-link" to="/">
                  HOME
                </Link>
              </li>
              <li className='navigreen'>
                <Link className='nav-link' to="/contact">
                  CONTACT
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/login"
                ><button className="btns">
                  LOGIN
                  </button>
                </Link>
              </li>
              <li className='nav-item'>
                <Link to="/sugesstion" className="nav-link">
                  <button className="btns">
                    SUGGESTION
                  </button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      );
}

