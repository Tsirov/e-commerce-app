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

    return (

        <div className='sliderContainer'>
            <button className='button-left' onClick={() => handleClick('left')}><MdOutlineNavigateBefore /></button>
            <div className="div-slider-wrapper">
                <div className="div-slide">
                    <div className="div-container-img">
                        <img src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1620243493-HOOF-WD497_V1.jpg?crop=1xw:0.993xh;center,top&resize=480:*" alt="" />
                    </div>
                    <div className="div-container-info">
                        <h1 >SUMMER SAL</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, cumque adipisci est error temporibus neque ullam nulla.</p>
                        <button>SHOP NOW</button>
                    </div>
                </div>
                <div className="div-slide">
                    <div className="div-container-img">
                        <img src="http://picture-cdn.wheretoget.it/ub2065-l-610x610-golden+diamonds-shoes-bag-jewels-scarf-blogger-yellow-yellow+dress-summer+outfits-summer+dress-sandals-skater+dress-michael+kors-gladiator+sandals-clutch-givenchy-elegant-classy-ye.jpg" alt="" />
                    </div>
                    <div className="div-container-info">
                        <h1 >SUMMER SAL</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, cumque adipisci est error temporibus neque ullam nulla.</p>
                        <button>SHOP NOW</button>
                    </div>
                </div>
                <div className="div-slide">
                    <div className="div-container-img">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKJ32E364VIhMPu8dPifwzQLdqAa2loZNyR_Fe2T9FGvhhbX0GAu-S5fM1hyLE71L5KlQ&usqp=CAU" alt="" />
                    </div>
                    <div className="div-container-info">
                        <h1 >SUMMER SAL</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, cumque adipisci est error temporibus neque ullam nulla.</p>
                        <button>SHOP NOW</button>
                    </div>
                </div>
            </div>
            <button className='button-right' onClick={ () => handleClick('right') }><MdOutlineNavigateNext /></button>
        </div>


    );
}

export default Slider;

