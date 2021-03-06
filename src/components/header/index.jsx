import React, { Component } from 'react'
import Menu from '../svg/bars-solid.svg'
import Close from '../svg/times-solid.svg'
import CartIcon from '../svg/shopping-cart-solid.svg'
import {Link} from 'react-router-dom'
import './style.css'
import {DataContext} from '../context'


export class Header extends Component {
    static contextType = DataContext;
   state={
       toggle:false
   }
   menuToggle = ()=>{
       this.setState({toggle: !this.state.toggle})
   }
    render() {
        const {toggle} = this.state;
        const {cart} = this.context;
        return (
            <>
                <header >
                    <div className="menu" onClick={this.menuToggle}>
                        <img src={Menu} alt="" width="20"/>
                    </div>
                    <div className="logo">
                        <h1><Link to='/'>Lian Shop</Link> </h1>
                    </div>
                    <nav>
                        <ul className={toggle ? 'toggle' : ''}>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/product">Products</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/login">Login / Register</Link></li>
                            <li className='close' onClick={this.menuToggle}>
                                <img src={Close} alt="" width='20'/>
                            </li>
                        </ul>
                        <div className="nav-cart">
                            <span>{cart.length}</span>
                            <Link to='/cart'> 
                                <img src={CartIcon} alt="" width='20' />
                            </Link>
                        </div>
                    </nav>
                </header>
                <div className="static-header d-flex flex-row  align-items-center gy-0">
                    <Link to="/categories"><p className="">Categories</p></Link>
                    <Link to="/club"><p className="">Clinets Club</p></Link>
                    <Link to="/giftcards"><p className="">Lian Gift Cards</p></Link>
                    <Link to="/largeselling"><p className="">Large Scale Selling</p></Link>
                    
                </div>
            </>
        )
    }
}

export default Header
