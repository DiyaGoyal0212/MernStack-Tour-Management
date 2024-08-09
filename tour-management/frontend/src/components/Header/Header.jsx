import React from 'react'
import "./header.css";

import {Container,Row,Button} from 'reactstrap';
import { NavLink,Link } from 'react-router-dom';
import logo from "../../assets/images/logo.png";

const nav_links =[{
  path:'/home',
  display:'Home'
},
{
  path:'/about',
  display:'About'
},
{
  path:'/tours',
  display:'Tours'
},
// {
//   path:'/tours/:id',
//   display:'TourDetails'
// },
// {
//   path:'/login',
//   display:'Login'
// },
// {
//   path:'/register',
//   display:'Register'
// },
// {
//   path:'/tours/search',
//   display:'SearchResult'
// },
]

const Header = () => {
  return <header className='header'>
    <Container>
      <Row>
        <div className="nav__wrapper d-flex align-items-center justify-content-between">

          {/* logo */}
            <div className="logo">
              <img src={logo} alt="" width="300px"/>
            </div>

          {/* logo end */}

          {/* menu start */}
          <div className="navigation">
            <ul className='menu d-flex align-items-center gap-5' >
              {
                nav_links.map((item,index) =>(
                  <li className="nav__item" key={index}>
                    <NavLink to={item.path}  className={
                      navClass=> navClass.isActive? "active__link" : ''}>
                        {item.display}</NavLink>
                  </li>
                ))
              }
            </ul>
          </div>
          {/* menu end */}


          <div className="nav__right align-items-center d-flex gap-4">
            <div className="nav__btns  align-items-center d-flex gap-4">
              <Button className='btn secondary__btn'><Link to="/login">Login</Link></Button>
              <Button className='btn primary__btn'><Link to="/register">Register</Link></Button>
            </div>

            <span className="mobile__menu">
            <i class="ri-menu-line"></i>
            </span>
          </div>



        </div>
      </Row>
    </Container>

  </header>
}

export default Header
