import Sidebar from "./sidebar";
import Maincontent from "./maincontent";
import Sidebarsrch from "./sidebarsrch";
import {FaSearch,AiFillApple, FaApple} from "react-icons/fa";
import Suggestions from "./suggestion";
import Brands from "./brands";
import Specs from "./specs";
import Shoppingcard from "./shoppingcard";
import Innercard from "./innercard";
import Button from "./button";
import Footer from "./footer";
import { useContext } from "react";
import cardContext from "./cardContext";
import { BrowserRouter ,Route,Routes , Link} from 'react-router-dom';

let flag=0;


const arr = [{"id":1,"image":"Apple13pro.jpg" ,"name":"Apple Iphone 13 Pro","specs":"6GB RAM 128GB Internal Storage color-Pink","price":"₹69,900","ram":"6GB","rom":"128GB",
                                                                                           "Brand":"Apple"},
             {"id":2,"image":"Apple14pro.jpg" ,"name":"Apple Iphone 14 Pro","specs":"6GB RAM  128GB Internal Storage color-Purple","price":"₹79,900","ram":"6GB","rom":"128GB",
                                                                                      "Brand":"Apple"},
             {"id":3,"image":"OnePlus.jpg" ,"name":"OnePLus 10  Pro","specs":" 8GB RAM 128GB Internal Storage color-Emerald Forest","price":"₹61,999","ram":"8GB","rom":"128GB",
                                                                                       "Brand":"OnePlus"},
             {"id":4,"image":"opporeno.jpg" ,"name":"Oppo Reno8 5G","specs":" 8GB RAM 128GB Internal Storage color-Cosmic Black","price":"₹29,999","ram":"8GB","rom":"128GB",
                                                                                          "Brand":"Oppo"},
             {"id":5,"image":"realmepro.jpeg" ,"name":"Realme 10  Pro","specs":" 6GB RAM 128GB Internal Storage color-Neubla Blue","price":"₹18,999","ram":"6GB","rom":"128GB",
                                                                                    "Brand":"Realme"},
             {"id":6,"image":"Redmi10.jpg" ,"name":"Redmi Note 10 ","specs":" 4GB RAM 64GB Internal Storage color-Midnight Black","price":"₹12,999","ram":"4GB","rom":"64GB",
                                                                                    "Brand":"Redmi"},

             {"id":7,"image":"lava z6.jpg" ,"name":"Realme 10  Pro","specs":" 6GB RAM 64GB Internal Storage color-Aqua Blue","price":"₹10,999","ram":"6GB","rom":"64GB",
                                                                                             "Brand":"Lava"},
             {"id":8,"image":"samsungS23.jpg" ,"name":"Samsung S23 Ultra","specs":" 12GB RAM 256GB Internal Storage color-Green","price":"₹124,999","ram":"12GB","rom":"256GB",
                                                              "Brand":"Samsung"},
             {"id":9,"image":"samsunga73.jpg" ,"name":"Samsung A73 ","specs":" 8GB RAM 128GB Internal Storage color-Awesome Mint","price":"₹41,999","ram":"8GB","rom":"128GB",
             "Brand":"Samsung"},
             {"id":10,"image":"vivo y35.jpg" ,"name":"Vivo Y35","specs":" 8GB RAM 128GB Internal Storage color-Dawn Gold","price":"₹18,499","ram":"8GB","rom":"128GB",
             "Brand":"Vivo"
            }
          ]

const Content=(props)=>
{
  const  validate=(c,i)=>
  {
    if(c.indexOf(i)===-1)
    {
      return false;
     
    }
    else{
      return true;
    }
  }
  const addtocart=(s,c,i)=>
  {
    console.log(i);
    if(c.indexOf(i)===-1)
    {
      s([...c,i])
      
    }
    else{
      let a = [...c]
      a.splice(a.indexOf(i),1)
     
      
      console.log(a)
      s(a)
    }

  }
  const [count,setCount,filter,setFilter]=useContext(cardContext);

  const select=(gb,sf,f)=>
  {
    if(f.indexOf(gb)===-1)
    {
      document.getElementById(gb).style.backgroundColor="white";
      
      sf([...f,gb])
    }
    else
    {
      document.getElementById(gb).style.backgroundColor=" rgb(19, 192, 120)";
    
      let ff=[...f]
      ff.splice(ff.indexOf(gb),1)
      sf(ff)
      console.log(ff);
    }
   
  }
  

  const selectbrand=(gb,sf,f)=>
  {
    console.log(gb)
    if(f.indexOf(gb)===-1)
    {
     
      
      sf([...f,gb])
    }
   
    else{
      let ff=[...f] 
      ff.splice(ff.indexOf(gb),1)
      sf(ff)
      console.log(ff);
    }
    
   
  }
   
return(<div class={props.className}>
      <Sidebar className="sidebarcontent">
                       <Sidebarsrch className="sdiv">
                        <input type="text" class="searchbox" placeholder="search" ></input>
                        <button class="searchbtn"><FaSearch></FaSearch></button>
                       </Sidebarsrch>
                       <Suggestions className="suggestionbox">
                        <u>Suggestions</u>
                        <ul>
                           <li><a href="#">Apple</a></li> 
                           <li><a href="#">Samsung</a></li> 
                           <li><a href="#">OnePlus</a></li>
                            
                        </ul>
                       </Suggestions>

                       <Brands className="brandscss"><u>Top brands</u>
                       <ul>
                        <li><a href="#" onClick={()=>selectbrand("Apple",setFilter,filter)} id="Apple">Apple</a></li>
                        <li><a href="#" onClick={()=>selectbrand("Lava",setFilter,filter)} id="Lava">Lava</a></li>
                        <li><a href="#" onClick={()=>selectbrand("Oppo",setFilter,filter)} id="Oppo">Oppo</a></li>
                        <li><a href="#"onClick={()=>selectbrand("OnePlus",setFilter,filter)} id="Oneplus">OnePlus</a></li>
                        <li><a href="#"onClick={()=>selectbrand("Realme",setFilter,filter)} id="Realme">Realme</a></li>
                        <li><a href="#"onClick={()=>selectbrand("Redmi",setFilter,filter)} id="Redmi">Redmi</a></li>
                        <li><a href="#"onClick={()=>selectbrand("Samsung",setFilter,filter)} id="Samsung">Samsung</a></li>
                        <li><a href="#" onClick={()=>selectbrand("Vivo",setFilter,filter)} id="Vivo">Vivo</a></li>
                        
                       </ul>
                       
                       </Brands>
                       <Specs className="specificationbar"><u>Specifications</u>
                            <h4>RAM</h4>
                            <div class="ramcard">
                              <div onClick={()=>select("2GB",setFilter,filter)} id="2GB">2GB</div>
                              <div onClick={()=>select("4GB",setFilter,filter)}  id="4GB">4GB</div>
                              <div onClick={()=>select("6GB",setFilter,filter)} id="6GB"> 6GB</div>
                              <div onClick={()=>select("8GB",setFilter,filter)} id="8GB">8GB</div>
                            </div>
                            <h4>ROM</h4>
                            <div class="romcard">
                             <div onClick={()=>select("16GB",setFilter,filter)} id="16GB">16GB   </div>
                              <div onClick={()=>select("32GB",setFilter,filter)}  id="32GB">32GB </div>
                              <div onClick={()=>select("64GB",setFilter,filter)} id="64GB">64GB  </div>
                              <div onClick={()=>select("128GB",setFilter,filter)} id="128GB">128GB</div>
                            </div>
                       </Specs>
      </Sidebar>
    
     <Maincontent className="maincontent">
      {
        arr.map(element =>{
 
                                      if(filter.length===0)
                                      {
      
                                                    return(<Shoppingcard className="shopcard">
                         
                                                             <Innercard className="innercard">

                                                             <div >
                                                             <img src={require("./images/"+element.image)}></img>
                                                             </div>
                                                             <div class="productdetails">
                                                              <h3>{element.name}</h3>
                                                             <p class="text"> {element.specs}</p>
                                                            <h4>{element.price}</h4>

                                                             </div>
                                                             </Innercard>
                                                            <Button className="cartbutton" click={()=>addtocart(setCount,count,element.id)} >
                                                            {validate(count,element.id)?"REMOVE FROM CART":"ADD TO CART"}
                                                             </Button>
                                                            </Shoppingcard>) 
                                      }
                                       else
                                       {  
                                                      if(filter.indexOf(element.ram)!=-1 || filter.indexOf(element.rom)!=-1|| filter.indexOf(element.Brand)!=-1)
                                                       {
                                                          
                                                          return(<Shoppingcard className="shopcard">
                         
                                                          <Innercard className="innercard">

                                                           <div >
                                                           <img src={require("./images/"+element.image)}></img>
                                                           </div>
                                                             <div class="productdetails">
                                                            <h3>{element.name}</h3>
                                                           <p class="text"> {element.specs}</p>
                                                            <h4>{element.price}</h4>

                                                            </div>
                                                         </Innercard>
                                                         <Button className="cartbutton" click={()=>addtocart(setCount,count,element.id)} >
                                                           {validate(count,element.id)?"REMOVE FROM CART":"ADD TO CART"}
                                                           </Button>
                                                           </Shoppingcard>)

                                                        }
                                        }
              
               
              
              } )
              
         
        
      }
               
               
      </Maincontent>
     
     
      
      
     
      
</div>)
}
export default Content;