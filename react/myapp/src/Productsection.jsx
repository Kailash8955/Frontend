import Card from "./Card" 
import { Link } from "react-router-dom"
 
 
 function Productsection(){
       return(


        <>
         <div className="productsection">
            <div className="productinnersection">
                
                <ul className="productsec"> 
                    <li><Link>ALL PRODUCTS</Link></li>
                    <li><Link>FEATURED</Link></li>
                    <li><Link>FLASH DEALS</Link></li>
                    <li><Link>LAST MINUTE</Link></li>
                </ul>
                
            </div>
        </div>
        <div className="innersection1">
            <div className="intersection">
                <Card/>
            </div>
        </div>
        
        </>
       )



}
export default Productsection