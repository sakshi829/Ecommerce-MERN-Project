import React from "react";
import {Navbar, Nav, Container} from "react-bootstrap";

function Header() {
    return <header>
   
    <nav class="navbar navbar-expand-lg navbar-dark  bg-dark collapseOnSelect ">
  
  <Container>

  <a class="navbar-brand" href="/">ProShop</a>
   

   <div class="collapse navbar-collapse" id="navbarSupportedContent">
     <ul class="navbar-nav  ">
       <li class="nav-item active">
         <a class="nav-link" href="/cart"><i className="fas fa-shopping-cart"></i>Cart</a>
       </li>
       <li class="nav-item">
         <a class="nav-link" href="/login"><i className="fas fa-user"></i>Sign In</a>
       </li>
       
     </ul>
     
   </div>
  </Container>
  
</nav>

            
    </header>
    
}

export default Header