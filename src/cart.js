import { useContext,useState } from "react";

import cardContext from "./cardContext";
const arr = [{"id":1,"image":"Apple13pro.jpg" ,"name":"Apple Iphone 13 Pro","specs":"6GB RAM 128GB Internal Storage color-Pink","price":"₹69,900"},
             {"id":2,"image":"Apple14pro.jpg" ,"name":"Apple Iphone 14 Pro","specs":"6GB RAM  128GB Internal Storage color-Purple","price":"₹79,900"},
             {"id":3,"image":"OnePlus.jpg" ,"name":"OnePLus 10  Pro","specs":" 8GB RAM 128GB Internal Storage color-Emerald Forest","price":"₹61,999"},
             {"id":4,"image":"opporeno.jpg" ,"name":"Oppo Reno8 5G","specs":" 8GB RAM 128GB Internal Storage color-Cosmic Black","price":"₹29,999"},
             {"id":5,"image":"realmepro.jpeg" ,"name":"Realme 10  Pro","specs":" 6GB RAM 128GB Internal Storage color-Neubla Blue","price":"₹18,999"},
             {"id":6,"image":"Redmi10.jpg" ,"name":"Redmi Note 10 ","specs":" 4GB RAM 64GB Internal Storage color-Midnight Black","price":"₹12,999"},
             {"id":7,"image":"lava z6.jpg" ,"name":"Realme 10  Pro","specs":" 6GB RAM 64GB Internal Storage color-Aqua Blue","price":"₹10,999"},
             {"id":8,"image":"samsungS23.jpg" ,"name":"Samsung S23 Ultra","specs":" 12GB RAM 256GB Internal Storage color-Green","price":"₹124,999"},
             {"id":9,"image":"samsunga73.jpg" ,"name":"Samsung A73 ","specs":" 8GB RAM 128GB Internal Storage color-Awesome Mint","price":"₹41,999"},
             {"id":10,"image":"vivo y35.jpg" ,"name":"Vivo Y35","specs":" 8GB RAM 128GB Internal Storage color-Dawn Gold","price":"₹18,499"}
          ]
          
const Cart =(props)=>

{    
   
   
    const[count,setCount]=useContext(cardContext);
    return(<div class={props.className}>
            {count.length<=0?<div class="emptymsg">Your Cart is empty.</div>:count.map(iterator=>{ 
                  return( < div class="outerdiv">
                  <div class="imagedivison">
                  <img src={require("./images/"+arr[iterator-1].image)}></img>
                  </div>
                  <div class="textdivison">
                  <h3>{arr[iterator-1].name}</h3>
                  <p > {arr[iterator-1].specs}</p>
                  <h4>{arr[iterator-1].price}</h4>
                 
                  </div>
                   <button class="paybtn">Procced To Buy</button>
                   </div>)}
                 
               )

                       
} 
 

    </div>)
}
export default Cart;