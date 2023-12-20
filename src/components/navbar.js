import './navbar.css';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { MenuItem } from './MenuItem';

class Navbar extends React.Component {
    state={clicked:false};
    handleclick=()=>{
        this.setState({clicked:!this.state.clicked})
    }
    render() {
        return (
            <nav className='NavbarItems'>
                <li className='Logo'><i className="fa-brands fa-pied-piper-alt"></i></li>
                <div className='menu-icons' onClick={this.handleclick}><i className={this.state.clicked?'fas fa-times':"fas fa-bars"}></i></div>
                <ul className='nav-menu'>
                    {MenuItem.map((items, index) => { return (<li key={index} ><Link className={items.cName} href={items.url} to={items.url}><i className={items.icon}></i>{items.title}</Link></li>) })}
                <button>Sign Up</button>
                </ul>
            </nav>
        )
    }
}
export default Navbar;