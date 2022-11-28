import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'
import { FiChevronLeft,FiChevronRight } from "react-icons/fi";
import '../../styles/carousel/Carousel.css'
import slider_image_hand from '../../images/slider_image_hand.jpg'
import slider_image_lady_smile from '../../images/slider_image_lady_smile.jpg'
// import slider_image_hand from '../../images/slider_image_hand.jpg'

export const CarouselComponent =(props)=>
{
    var items = [
        {
            name: "Random Name #1",
            description: "Probably the most random thing you have ever seen!",
            backgroundImage: slider_image_hand,
        },
        {
            name: "Random Name #2",
            description: "Probably the most random thing you have ever seen!",
            backgroundImage: slider_image_hand,
        },
        {
            name: "Random Name #3",
            description: "Probably the most random thing you have ever seen!",
            backgroundImage: slider_image_hand,
        },
       
    ]

    return (
        <Carousel indicators={false} NavButton={({onClick, className, style, next, prev}) => {
            // Other logic
    
            return (
                <Button onClick={onClick} className='carousels' style={{backgroundColor:"green",borderRadius:"50%", height:"50px",width:"2px",color:"#ffff",paddingInline:"20px", border:"1px  ",display:"flex",alignItems:"center"}}>
                    {next && <FiChevronRight />}
                    {prev && <FiChevronLeft/>}
                </Button>
            )
        }}  style={{display:"flex",justifyContent:"center",backgroundColor:"red"}}>
            {
                items.map( (item, i) => <Item key={i} item={item} /> )
            }
        </Carousel>
    )
}

function Item(props)
{
    return (
        <Paper style={{backgroundImage:`url(${props.item.backgroundImage})`, height:"100vh",width:"100%",display:"flex",justifyContent:'center'}}>
        <div className="text-container">

            <h2 className="title">{props.item.name}</h2>
            <p>{props.item.description}</p>

            <Button className="CheckButton">
                Check it out!
            </Button>
        </div>
        </Paper>
    )
}