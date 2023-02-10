import Carousel from "react-bootstrap/Carousel";
import React from "react";
import slider1 from "../images/slider1.jpg";
import slider2 from "../images/slider2.jpg";
import slider3 from "../images/slider3.jpg";
import slider4 from "../images/slider4.jpg";
import img2 from "../images/firstImg2.jpg";
import img3 from "../images/firstImg4.jpg";
import img4 from "../images/firstImg3.jpg";
import { useMediaQuery, VStack } from "@chakra-ui/react";

function IndividualIntervalsExample() {
  const [isNotSmallerScreen] = useMediaQuery("(min-height: 600px)")
  return (
    <VStack w={'100%'}  bg='silver'>
      <Carousel style={{height: '100%'}} >
        <Carousel.Item interval={1000} style={{height: '584px'}}>
          <img className="d-block w-100" src={slider1} alt="First slide" />
          <Carousel.Caption>
            {/* <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item  interval={500} style={{height: '584px'}}>
          <img className="d-block w-100" src={slider2} alt="Second slide" />
          <Carousel.Caption>
            {/* <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item style={{height: '584px'}}>
          <img className="d-block w-100" src={slider3} alt="Third slide" />
          <Carousel.Caption>
            {/* <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item style={{height: '584px'}}>
          <img className="d-block w-100" src={slider4} alt="Third slide" />
          <Carousel.Caption>
            {/* <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p> */}
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </VStack>
  );
}

export default IndividualIntervalsExample;
