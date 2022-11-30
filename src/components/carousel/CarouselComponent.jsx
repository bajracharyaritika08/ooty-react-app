import React, { Component } from "react";
import Slider from "react-slick";
import { AddToCartBtn } from "../../common/AddToCartBtn";
import '../../styles/carousel/Carousel.css'
const sliderDetails =[
    {
        id:1,
        heading:"GO NATURAL",
        details:"Welcome to the grand tea evolution. Give optimum satisfaction to your taste buds & Open up your senses with a cup of tea. Leave you feeling refreshed to feel the wonders of the morning",
        section: "A",
    },
    {
        id:2,
        heading:"GO NATURAL",
        details:"Welcome to the grand tea evolution. Give optimum satisfaction to your taste buds & Open up your senses with a cup of tea. Leave you feeling refreshed to feel the wonders of the morning",
        section: "B",
    },
    {
        id:3,
        heading:"GO NATURAL",
        details:"Welcome to the grand tea evolution. Give optimum satisfaction to your taste buds & Open up your senses with a cup of tea. Leave you feeling refreshed to feel the wonders of the morning",
        section: "C",
    },
]

export default class SwipeToSlides extends Component {
  render() {
    const settings = {
      className: "center",
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 1,
      swipeToSlide: true,

      afterChange: function(index) {
        console.log(
          `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
        );
      }
    };
    return (
      <div>
        <Slider {...settings}>
          <div className="first_slide">
            <div className="carousel_header_first">
                {
                    sliderDetails.filter((items)=>items.section === "A").map((items)=>{
                        return(
                            <div>
                                <h2 className="carousel_heading_secA">{items.heading}</h2>
                                <p className="carousel_description_secA">{items.details}</p>
                                <AddToCartBtn title="Read More"/>
                            </div>
                        )
                    })
                }
            </div>
          </div>
          <div className="second_slide">
            <div className="carousel_header_second">
                {
                    sliderDetails.filter((items)=>items.section === "B").map((items)=>{
                        return(
                            <div>
                            <h2 className="carousel_heading_secB">{items.heading}</h2>
                                <p className="carousel_description_secB">{items.details}</p>
                                <AddToCartBtn title="Read More"/>
                            </div>
                        )
                    })
                }
            </div>
          </div>
          <div className="third_slide">
            
          </div>
         
        </Slider>
      </div>
    );
  }
}