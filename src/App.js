
import './App.css';
import Header from './header';
import Content from './Content';
import { FaCartArrowDown } from 'react-icons/fa';
import cardContext from './cardContext';
import { useState } from 'react';
import { BrowserRouter ,Route,Routes , Link} from 'react-router-dom';
import Cart from './cart';






function App() {
  const[count,setCount]=useState([]);
  const[filter,setFilter]=useState([]);

  return (
      <cardContext.Provider value={[count,setCount,filter,setFilter]}>
      <BrowserRouter>
    <div class='Body'>
      <div class="cartbadge">{count.length}</div>
      <Header className="Section-header"> 
      <div>Codashop</div>
      <div >
        <div class="innercart">
          <Link to={"/cart"}>
          <FaCartArrowDown className='carticon' ></FaCartArrowDown>
          </Link>
        </div>
      </div>
      </Header>
     
      <Routes>
        <Route path="/" element={<Content className="contentbody"></Content>}></Route>
        <Route path="/cart" element={<Cart className="displaycart"></Cart>}></Route>
      </Routes>
     
    
   </div>
   </BrowserRouter>
   </cardContext.Provider>

  
  );
}

export default App;
