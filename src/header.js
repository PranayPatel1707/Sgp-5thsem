import {BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './header.css';
const Header=()=>{
    return(
      <nav class="navbar sticky-top navbar-light bg-light">
  {/* <a class="navbar-brand" href="#">Sticky top</a> */}



<nav class="navbar navbar-expand-lg navbar-light bg-light">
  {/* <a class="navbar-brand" href="#">Navbar w/ text</a> */}
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarText">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="/">Home </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/About">About us</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Products</a>
      </li>
      <li class="nav-item" id="login">
          <a class="nav-link" href="/Login">Login</a>
      </li>
    </ul>
  
  </div>
</nav>
</nav>
       
    )
}

export default Header;