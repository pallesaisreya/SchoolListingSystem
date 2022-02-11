import { Carousel } from 'react-bootstrap';
import "./carousel.css"

const CarouselContainer = () => {
  return (
    <Carousel fade={true} pause={false}>
      <Carousel.Item interval={2000} style={{'height':"300px",borderRadius:"12px"}}>
        <img style={{'height':"300px",borderRadius:"25px"}}
          className="d-block w-100"
          src={"https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"}
          alt="First slide"
        />
        
      </Carousel.Item>
      <Carousel.Item interval={2000} style={{'height':"300px",borderRadius:"12px"}}>
        <img style={{'height':"300px",borderRadius:"25px"}}
          className="d-block w-100"
          src={"https://png.pngtree.com/thumb_back/fh260/background/20190221/ourmid/pngtree-school-season-welcome-new-students-blackboard-hand-painted-image_12937.jpg"}
          alt="Third slide"
        />
        
      </Carousel.Item>
      <Carousel.Item interval={2000} style={{'height':"300px",borderRadius:"12px"}}>
        <img
           style={{'height':"300px",borderRadius:"25px"}}
          className="d-block w-100"
          src={"https://www.thebalancecareers.com/thmb/hOSTPGdYulshro7AqttFK2wlT_Q=/3864x2173/smart/filters:no_upscale()/school-books-on-desk--education-concept-871454068-5b548900c9e77c005b04fc8c.jpg"}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  )
}

export default CarouselContainer;