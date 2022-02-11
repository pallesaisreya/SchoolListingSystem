import React from 'react';
import NavBar from '../Layout/NavBar';
import { Container } from '@material-ui/core';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import HOC from './HOC'
import "./welcome.css"
import CarouselContainer from './CarouselContainer';
import Footer from '../Layout/Footer';

function Welcome(props) {
   return (<div>
      <NavBar />
      <Container  style={{backgroundImage:"url(https://images.pexels.com/photos/696680/pexels-photo-696680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)",
   backgroundSize:"cover",
   height:"200vh"}}>
      <br/>
      <br/>
      <h4>
      “Learn as much as you can while you are young, since life becomes too busy later.”
      </h4>
      <CarouselContainer/>
         <br />
         <br />
         <div class="container">
            <div class="content">
               <Link to="/schoollisting">
                  <Button>
                     <div class="content-overlay"></div>
                     <img class="content-image" src="https://images.pexels.com/photos/1363876/pexels-photo-1363876.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
                     <div class="content-details">


                        <h3 class="content-title">
                           LOOKUP A SCHOOL YOU ARE INTERESTED IN
                        </h3>

                        <i class="fas fa-arrow-right arrow"></i>
                     </div>
                  </Button>
               </Link>
            </div>
         </div>



         <br />
         <br />
         <div class="container">
            <div class="content">
               <Button onClick={() => props.onClickAddFunction()}>
                  <div class="content-overlay"></div>
                  <img class="content-image" src="https://images.pexels.com/photos/531321/pexels-photo-531321.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
                  <div class="content-details">
                     <h3 class="content-title">
                        NEED TO GIVE SUGGESTION!
                     </h3>
                  </div>
               </Button>
            </div>
         </div>
      </Container>
      
   </div>);
}

export const EnhancedWelcome = HOC(Welcome);

export default EnhancedWelcome;