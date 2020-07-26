
import React from 'react';
import Slider from 'infinite-react-carousel';
import img1 from '../../images/img1.jpg'
import img2 from '../../images/img2.jpg'
import img3 from '../../images/img3.jpg'

const SimpleSlider = () => {
    const settings =  {
        arrows: false,
        arrowsBlock: false,
        autoplay: true,
      autoplaySpeed: 3000
      };
    return(
              <Slider dots { ...settings }>
              <div>
                  <img src={ img1 } width="100%" height="550px" alt='img1' />
             </div>
             <div>
                 <img src={ img2 } width="100%" height="550px"  alt='img2'/>
             </div>
             <div>
                 <img src={ img3 } width="100%" height="550px" alt='img3' />
             </div>
              </Slider>
  
)};

export default SimpleSlider;































// import React from 'react'
// import "react-responsive-carousel-v2/dist/carousel.css";
// import { Carousel } from 'react-responsive-carousel-v2';
// //import styles from 'react-responsive-carousel-v2/dist/carousel.css';

// const  CarouselBar =()=>{

 
//         return ( 
//             <div className='container'>
//                  {/* <Carousel>   
//                          <div>
//                                  <img src="https://picsum.photos/200/300 "/>
//                                  <p className="legend">Legend 1</p> 
//                          </div>
//                          <div>
//                                  <img src="https://picsum.photos/200/300" />
//                                  <p className="legend">Legend 2</p>
//                          </div>
//                          <div>
//                                  <img src="https://picsum.photos/200/300" />
//                                  <p className="legend">Legend 3</p>
//                          </div>
//                 </Carousel> */}
//                 <Carousel>
//                 <div>
//                     <img src="assets/1.jpeg" />
//                     <p className="legend">Legend 1</p>
//                 </div>
//                 <div>
//                     <img src="assets/2.jpeg" />
//                     <p className="legend">Legend 2</p>
//                 </div>
//                 <div>
//                     <img src="assets/3.jpeg" />
//                     <p className="legend">Legend 3</p>
//                 </div>
//             </Carousel>
//             </div>
//         )
    
// }

// export default CarouselBar
