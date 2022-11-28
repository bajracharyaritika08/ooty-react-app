import { FaShoppingCart,FaStar,FaRegStar,FaStarHalfAlt} from "react-icons/fa";
export const productRating =(rating)=>{
    switch(rating){
        case '1':
            return(
                <div >
                    <FaStar className='rating_icons'/>
                    <FaRegStar className='rating_icons'/>
                    <FaRegStar className='rating_icons'/>
                    <FaRegStar className='rating_icons'/>
                    <FaRegStar className='rating_icons'/>
                </div>
            )
        case '2':
            return(
                <div>
                    <FaStar/>
                    <FaStar/>
                    <FaRegStar/>
                    <FaRegStar/>
                    <FaRegStar/>
                </div>
            )
        case '3':
            return(
                <div>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaRegStar/>
                    <FaRegStar/>
                </div>
            )
        case '4':
            return(
                <div>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaRegStar/>
                </div>
            )
        case '4.5':
            return(
                <div>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStarHalfAlt/>
                </div>
            )
        case '5':
            return(
                <div>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                </div>
            )
    }
}