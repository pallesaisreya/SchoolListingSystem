import { Container } from '@material-ui/core'
import React from 'react'
import { Link } from 'react-router-dom'
import NavBar1 from '../Layout/NavBar1'
import CarouselContainer from './CarouselContainer'
import { Button } from '@material-ui/core'

export default function() {
  return (
    <div>
    <NavBar1/>
    <Container  style={{backgroundImage:"url(https://images.pexels.com/photos/3646172/pexels-photo-3646172.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500)",
   backgroundSize:"cover",
   height:"200vh"}}>
    <br/>
      <br/>
      <Container style={{backgroundColor:"white"}}>
      <h4>
      “School is a building which has four walls with tomorrow inside.”
      </h4>
      </Container>
      <br/>
      <CarouselContainer/>
      <br />
         <br />
         <div class="container">
            <div class="content">
               <Link to="/admin">
                  <Button>
                     <div class="content-overlay"></div>
                     <img class="content-image" src="https://images.pexels.com/photos/1363876/pexels-photo-1363876.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
                     <div class="content-details">
                        <h3 class="content-title">
                           SCHOOL PAGE TO CHANGES
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
                <Link to="/sugesstionadmin">
               <Button>
                  <div class="content-overlay"></div>
                  <img class="content-image" src="https://images.pexels.com/photos/531321/pexels-photo-531321.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
                  <div class="content-details">
                     <h3 class="content-title">
                        NEED TO VIEW SUGGESTION!
                     </h3>
                  </div>
               </Button>
               </Link>
            </div>
         </div>
   </Container>
    </div>
  )
}
