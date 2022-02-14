import React from "react";
import slider1 from "../../../src/main/resources/static/img/slider1.png";
import slider2 from "../../../src/main/resources/static/img/slider2.png";
import slider3 from "../../../src/main/resources/static/img/slider3.png";
import slider4 from "../../../src/main/resources/static/img/slider4.png";

function MainPhotoSlider(){
    return(
        <div id="div-main-photoslider">
            <a href="">
                <img src={slider1} alt="slider-photo-1"/>
            </a>
            <a href="">
                <img src={slider2} alt="slider-photo-2"/>
            </a>
            <a href="">
                <img src={slider3} alt="slider-photo-3"/>
            </a>
            <a href="">
                <img src={slider4} alt="slider-photo-4"/>
            </a>
        </div>
    );
}

export default MainPhotoSlider;