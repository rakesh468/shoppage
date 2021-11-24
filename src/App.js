import './App.css';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import {useHistory} from  "react-router-dom";
import Button from '@mui/material/Button';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCartSharp';

function App() {
  const history=useHistory();
  const styles={backgroundColor:"#E6E8E0",color:"black"}
  return (
    <div className="App">
<AppBar position="static">
        <Toolbar variant="dense" style={styles} >
          <Button style={styles}  onClick={()=>history.push("/start")}> Start BootStarp</Button>
          <Button style={styles} onClick={()=>history.push("/")}>Home</Button>
          <Button style={{color:"grey"}} onClick={()=>history.push("/about")}>About</Button>
          <Button style={{color:"grey"}} onClick={()=>history.push("/shop")}>shop</Button>
          <Button className="cart" style={{color:"black",marginLeft:"auto"}}> <ShoppingCartIcon ></ShoppingCartIcon>cart</Button>
          </Toolbar>
      </AppBar>
      
      <div className="create">
       <Container /><Content1 />
       <Content2 /><Content3 />
       <Content4 /><Content5 />
       <Content6 /><Content7 />
      <Content8 />
      <Footer />
    </div>
      </div>
  );
}
function Container(){
  
  return(
    <div className="container">
      <div class="content">
      <p className="style"> Shop in Style</p>
      <p className="info">With this shop hompeage template</p>
      </div>
    </div>
  )
}
function Content1(){
  const history=useHistory();
  return(
    <div className="main">
      <div className="class">
        <p class="font">450 x 300</p>
        </div>
      <div className="sub-class">
        <h2>Fancy Product</h2>
        <p className="price">$40.00 - 80.00</p>
        <button className="button" onClick={()=> history.goBack("/about")}  >View options</button>
        </div>
        </div>
        
  )
}
function Content2(){
  const history=useHistory();
  return(
    <div className="main">
      <div className="class">
        
      <p class="font">450 x 300</p>
        </div>
      <div className="sub-class">
        <h2>Special Item</h2>
        <p>⭐⭐⭐⭐⭐</p>
        <p className="price"><strike>$20.00</strike> $18.00</p>
        <button  className="button"  onClick={()=> history.goBack("/about")}  >Add to Cart</button> 
        </div>
        </div>
  );
}

function Content3(){
  const history=useHistory();
  return(
    <div className="main">
      <div className="class">
        <p class="font">450 x 300</p>
        </div>
      <div className="sub-class">
        <h2>Sales Item</h2>
        <p className="price"><strike>$50.00</strike> $25.00</p>
        <button className="button" onClick={()=> history.goBack("/about")}>Add to Cart</button >
        </div>
        </div>

  )
}
function Content4(){
  const history=useHistory();
  return(
    <div className="main">
      <div className="class">
        <p class="font">450 x 300</p>
        </div>
      <div className="sub-class">
        <h2>Popular Item</h2>
        <p>⭐⭐⭐⭐⭐</p>
        <p className="price">$40.00</p >
        <button className="button" onClick={()=> history.goBack("/about")} >Add to Cart</button>
        </div>
        
</div>
  );
}
function Content5(){
  const history=useHistory();
  return(
    <div className="main">
<div className="class">
        <p class="font">450 x 300</p>
        </div>
      <div className="sub-class">
        <h2>Sales Item</h2>
        <p className="price"><strike>$50.00</strike>  $25.00</p>
        <button className="button"onClick={()=> history.goBack("/about")} >Add to Cart</button>
        </div>
        </div>
  )
}
function Content6(){
  const history=useHistory();
  return(
    <div className="main">
    <div className="class">
        <p class="font">450 x 300</p>
        </div>
      <div className="sub-class">
        <h2>Fancy Product</h2>
        <p className="price">$120.00 - $280.00</p>
        <button className="button" onClick={()=> history.goBack("/about")} >View options</button>
        </div>
        </div>
  )
}
function Content7(){
  const history=useHistory();
  return(
    <div className="main">
    <div className="class">
        <p class="font">450 x 300</p>
        </div>
      <div className="sub-class">
        <h2>Special Item</h2>
        <p>⭐⭐⭐⭐⭐</p>
        <p className="price"><strike>$20.00</strike> $18.00</p>
        <button className="button" onClick={()=> history.goBack("/about")}>Add to Cart</button >
        </div>
        </div>
        )
}
function Content8(){
  const history=useHistory();
  return(
    <div className="main">
    <div className="class">
        <p class="font">450 x 300</p>
        </div>
      <div className="sub-class">
        <h2>Popular Item</h2>
        <p>⭐⭐⭐⭐⭐</p>
        <p className="price">$40.00 </p>
        <button className="button" onClick={()=> history.goBack("/shop")}>Add to Cart</button>
        </div>
        </div>
  )
}
function Footer(){
  const styles={color:"white"}
  return(
    <div className="footer-details">
        <p style={styles}>Copyright © Your Website 2021</p>
      </div>
  )
}

export default App;
