import Carousel from 'react-bootstrap/Carousel';
import Image from 'D:/ksj/react/hostel-management/src/sandeep-jpg.jpg';
import Image1 from 'D:/ksj/react/hostel-management/src/Sonu-Sharma.jpg';
import Image2 from 'D:/ksj/react/hostel-management/src/images.jpg';
function Crousel() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="D:/ksj/react/hostel-management/src/sandeep-jpg.jpg"
          src={Image}
        
          
          alt="First Slide"
        />
        <Carousel.Caption>
         
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="D:/ksj/react/hostel-management/src/Sonu-Sharma.jpg"
          src={Image1}
          

          alt="Second slide"
        />

        <Carousel.Caption>

        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
       <center> <img
          className="D:/ksj/react/hostel-management/src/images.jpg"
          src={Image2}
        
        
          alt="Third slide"
        /></center>

        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Crousel;