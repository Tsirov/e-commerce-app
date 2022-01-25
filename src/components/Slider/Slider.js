import { Link } from 'react-router-dom';
import { MdOutlineNavigateBefore, MdOutlineNavigateNext } from "react-icons/md";
import { useState } from "react";

import './Slider.css';



const Slider = () => {
    const [slideIndex, setSlideIndex] = useState(0);
    const handleClick = (direction) => {
      if (direction === "left") {
        setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
      } else {
        setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
        }
        
    };

    const styles = { 
        transform: `translateX(${slideIndex * -100}vw)` 
    };
    return (

        <div className='sliderContainer'>
            <button className='button-left' onClick={() => handleClick('left')}><MdOutlineNavigateBefore /></button>
            <div className="div-slider-wrapper" style={styles}>
                <div className="div-slide">
                    <div className="div-container-img">
                        <img src="https://asset20.ckassets.com/blog/wp-content/uploads/sites/5/2017/11/14738509856120485816_thumbnail_405x552.jpg" alt="" />
                    </div>
                    <div className="div-container-info">
                        <h1 >WINTER SAL</h1>
                        <p>15% of everything from all winter collection</p>
                        <button>SHOP NOW</button>
                    </div>
                </div>
                <div className="div-slide">
                    <div className="div-container-img">
                        <img src="http://picture-cdn.wheretoget.it/ub2065-l-610x610-golden+diamonds-shoes-bag-jewels-scarf-blogger-yellow-yellow+dress-summer+outfits-summer+dress-sandals-skater+dress-michael+kors-gladiator+sandals-clutch-givenchy-elegant-classy-ye.jpg" alt="" />
                    </div>
                    <div className="div-container-info">
                        <h1 >SUMMER COLLECTION</h1>
                        <p>Shop now from ours summer collection to be ready for the coming summer.</p>
                        <button>SHOP NOW</button>
                    </div>
                </div>
                <div className="div-slide">
                    <div className="div-container-img">
                        <img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/lv-9-1601993907.jpg" alt="" />
                    </div>
                    <div className="div-container-info">
                        <h1 >NEW COLLECTION</h1>
                        <p>Keep up with fashion and choose your new collection.</p>
                        <button>SHOP NOW</button>
                    </div>
                </div>
            </div>
            <button className='button-right' onClick={ () => handleClick('right') }><MdOutlineNavigateNext /></button>
        </div>


    );
}

export default Slider;

