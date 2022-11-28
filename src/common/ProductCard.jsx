import React from 'react'
import { FaShoppingCart,FaStar,FaRegStar,FaStarHalfAlt} from "react-icons/fa";
import { productRating } from '../utils/Main';
import ooty_px1 from '../images/ooty_px1.jpg'
import ooty_px2 from '../images/ooty_px2.jpg'
import productOne from '../images/productOne.jpg'
import '../styles/products/Products.css'
import { AddToCartBtn } from '../common/AddToCartBtn'
export const ProductCard = (props) => {
    const{productHeader, isSectionA, items}=props
    console.log("items prpop", items);
    return (
        <div>
                   
                        {/* productHeader.filter((items)=>items.category ==={isSectionA ? "sectionA" : "sectionB"} ).map((items)=>{
                            return( */}
                                <>
                                <div className="product_cart_container">
                                    <div className="imagecontainer">
                                        <img src={items.image} alt="" className="product_image" />
                                        <p className="product_description">{items.traders}</p>
                                        <h2 className="product_title">{items.title}</h2>
                                        <div className="product_rating_icons">
                                         {
                                            productRating(items.rating)
                                         }
                                        </div>
                                        <AddToCartBtn icon=<FaShoppingCart/> title="Add to cart" />
                                    </div>
                                </div>
                                </>
                            {/* )
                        }) */}
                    
                </div>
    
   
    )
}