import React, { Component } from "react";
import Slider from "react-slick";
import "../../styles/testimonals/Testimonals.css"
import testimonals_1 from "../../images/testimonals_1.jpg"
import testimonals_2 from "../../images/testimonals_2.jpg"
import testimonals_3 from "../../images/testimonals_3.jpg"
const testimonalsData =[
  {
    id : 1,
    image:testimonals_1,
    details:"A testimonial is effectively a review or recommendation from a client, letting other people know how your products or services benefitted them. ",
  },
  {
    id: 2,
    image:testimonals_2,
    details:"A testimonial is effectively a review or recommendation from a client, letting other people know how your products or services benefitted them. ",
  },
  {
    id:3,
    image:testimonals_3,
    details:"A testimonial is effectively a review or recommendation from a client, letting other people know how your products or services benefitted them. ",

  }
]
export default class Testimonals extends Component {
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
      <div className="testimonals_container">
        <h2 className="testimonals_heading">Testimonials</h2>
        <Slider {...settings}>
           <div className="slider_container">
                <div className="testimonal_image">
                  <img src={testimonals_1} alt="Testimonals Image" className="testmonials_image" /> 
                </div>
                <div className="testimonals_says">
                  <p className="testimonal_text">A testimonial is effectively a review or recommendation from a client, letting other people know how your products or services benefitted them.</p>
                </div>
          </div>
          <div className="slider_container">
                <div className="testimonal_image">
                  <img src={testimonals_2} alt="Testimonals Image" className="testmonials_image" />
                </div>
                <div className="testimonals_says">
                  <p className="testimonal_text">A testimonial is effectively a review or recommendation from a client, letting other people know how your products or services benefitted them.</p>
                </div>
          </div>
          <div className="slider_container">
                <div className="testimonal_image">
                  <img src={testimonals_3} alt="Testimonals Image" className="testmonials_image" />
                </div>
                <div className="testimonals_says">
                  <p className="testimonal_text">A testimonial is effectively a review or recommendation from a client, letting other people know how your products or services benefitted them.</p>
                </div>
          </div>
        
        </Slider>
      </div>
    );
  }
}