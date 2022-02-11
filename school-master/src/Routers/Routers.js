import React from 'react';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Footer from '../Component/Layout/Footer';
import AddSearchPage from '../Component/Pages/AddSearchPage';
import AdminPage from '../Component/Pages/AdminPage';
import Contact from '../Component/Pages/Contact';
import Login from '../Component/Pages/Login';
import SchoolListing from '../Component/Pages/SchoolListing';
import EnhancedAdminSuggestionPage from '../Component/Pages/SuggestionAdminPage';
import EnhancedUserSuggestionPage from '../Component/Pages/SuggestionUserPage';
import { EnhancedWelcome } from '../Component/Pages/Welcome';
import WelcomeAdminPage from '../Component/Pages/WelcomeAdminPage';
import PrivateRoute from './PrivateRoute';




export default function Routers() {
  return(
   <div>
    <BrowserRouter>
      <Routes>
           <Route  path="/" element={<EnhancedWelcome/>}/>
           <Route path="/addsearchform" element={<AddSearchPage/>}/>
           <Route path="/login" element={<Login/>}/>
           <Route path="/admin" element={<PrivateRoute><AdminPage/></PrivateRoute>}/>
           <Route path="/welcomeadmin" element={<PrivateRoute><WelcomeAdminPage/></PrivateRoute>} exact={true}/>
           <Route path="/sugesstion" element={<EnhancedUserSuggestionPage/>}/>
           <Route path="/schoollisting" element={<SchoolListing/>}/>
           <Route path="/sugesstionadmin" element={<PrivateRoute><EnhancedAdminSuggestionPage/></PrivateRoute>}/>
           <Route path="/contact" element={<Contact/>}/>
       </Routes>
    </BrowserRouter>
  </div>
  )
}