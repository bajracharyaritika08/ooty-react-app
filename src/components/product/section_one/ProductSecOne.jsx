import React from 'react'
import { AddToCartBtn } from '../../../common/AddToCartBtn'
import ooty_px1 from '../../../images/ooty_px1.jpg'
import ooty_px2 from '../../../images/ooty_px2.jpg'
import productOne from '../../../images/productOne.jpg'
import '../../../styles/products/Products.css'
import { FaShoppingCart,FaStar,FaRegStar,FaStarHalfAlt} from "react-icons/fa";
import { productRating } from '../../../utils/Main'
import { ProductCard } from '../../../common/ProductCard'
export const ProductSecOne = (props) => {
    const details=[{
        subTitle: "NEW ARRIVAL",
        heading:{
            headingOne:"Ceylon Tea Assortment",
            headingTwo:"Chai Tea Assortment",
            headingThree:"Twinings Tea Assortment",
        },
        coverImage: productOne,
}

]
const productHeader = [
    {
        id: 1,
        image: ooty_px1,
        traders: "Kashmire Traders",
        title: "Classic Black Tea",
        rating: "5",
        price: "Rs. 360.00",
        category:"sectionA",
    },
    {
        id: 2,
        image: ooty_px2,
        traders: "Tea Traders",
        title: "Green Tea",
        rating: "4.5",
        price: "Rs. 180.00",
        category:"sectionA",
        },
    {
        id: 3,
        image: ooty_px1,
        traders: "Kashmire Traders",
        title: "Classic Black Tea",
        rating: "5",
        price: "Rs. 360.00",
        category:"sectionB",
    },
    {
        id: 4,
        image: ooty_px2,
        traders: "Tea Traders",
        title: "Green Tea",
        rating: "4.5",
        price: "Rs. 180.00",
        category:"sectionB",
        },
]
  return (
    <div>
     <div className="product_container">
                <div className="productcontainer_left">
                    <div className="productheader">
                                    <p className="subtitle">{details[0].subTitle}</p>
                                    <h2 className="product_heading">{details[0].heading.headingOne}</h2>
                    </div>
                    {

                        productHeader.filter((items)=>items.category === "sectionB" )
                            
                    }
                   
                <ProductCard isSectionA={true} productHeader={productHeader}/>
                                
        
                                
                            
                              
                        
                    
                </div>
                {
        details.map((items)=>{
            return(
                <div className="productcontainer_right">
                    <img src={items.coverImage} alt="Organic tea image" className="rightsectionimage" />
                </div>
            )
        })
      }
    </div>

      <div className="product_container">
      {
        details.map((items)=>{
            return(
                <div className="productcontainer_right">
                    <img src={items.coverImage} alt="Cof" className="rightsectionimage" />
                </div>
            )
        })
      }
      <ProductCard isSectionA={false} productHeader={productHeader}/>
      </div>

    </div>
  )
}



{/* // const getStatus = (status: string) => { */}
//     switch (status) {
//       case 'inprogress':
//         return {
//           background: css.inProgressBg,
//           text: 'In Progress',
//           testStyle: css.inProgressText,
//         };
//       case 'Completed':
//         return {
//           background: css.completedBg,
//           text: 'Completed',
//           testStyle: css.completedText,
//         };
//     }
//   };