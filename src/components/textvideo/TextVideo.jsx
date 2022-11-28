import React from 'react'
import '../../styles/textvideo/TextVideo.css'
import { FaPlay } from "react-icons/fa";
export const TextVideo = () => {
    const textVideoData =[
        {
            title:"Tea is a Drink of Health",
            paragraph:"Avocado Green Mattresses are designed in hoboken and handmade in sunny california with only the finest naturally non- toxic and 100% certified organic materials from our own farms. Our mission is to be the most respected source for organic mattresses and pillows at affordable prices — while maintaining environmentally conscious, ethical, and sustainable business practices — to help safeguard your health and protect our planet.",
    }
]
  return (
    <>
    {
        textVideoData.map((items)=>{
            return(
                <>
        <div className="text_video_container">
            <div className="heading_title">
                <h4>{items.title}</h4>
            </div>
            <div className="paragraph">
                <p className='textvideo_para'>{items.paragraph}</p>
            </div>
            <div className="video_section">
              <FaPlay className='play_icon'/>
              
            </div>
        </div>
                </>
            )
        })
    }
    </>
  )
}
