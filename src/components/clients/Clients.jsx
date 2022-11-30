import React, { Component } from "react";
import Slider from "react-slick";
import client1_1 from '../../images/client1_1.png'
import client2_1 from '../../images/client2_1.png'
import client3_1 from '../../images/client3_1.png'
import client4_1 from '../../images/client4_1.png'
import client5_1 from '../../images/client5_1.png'
import client6_1 from '../../images/client6_1.png'
import '../../styles/clients/Clients.css'
export default class SwipeToSlide extends Component {
  render() {
    const settings = {
      className: "center",
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 5,
      swipeToSlide: true,
      afterChange: function(index) {
        console.log(
          `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
        );
      }
    };
    return (
      <div className="slide_container">
      <div className="slider_inner_container">
        <Slider {...settings}>
          <div>
            <img src={client1_1} alt="Our Clients" className="ourclients"/>
          </div>
          <div>
          <img src={client2_1} alt="Our Clients" className="ourclients"/>          
          </div>
          <div>
          <img src={client3_1} alt="Our Clients" className="ourclients"/>
          </div>
          <div>
          <img src={client4_1} alt="Our Clients" className="ourclients"/>
          </div>
          <div>
          <img src={client5_1} alt="Our Clients" className="ourclients"/>
          </div>
          <div>
          <img src={client6_1} alt="Our Clients" className="ourclients"/>
          </div>
        </Slider>
      </div>
      </div>
    );
  }
}