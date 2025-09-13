// src/components/Header.js
import "../../src/App.css"
import { Link } from "react-router-dom";

const Header = () =>
{
    return (
        <header className="header">
            <div className="logo">
                <img src="https://images.seeklogo.com/logo-png/44/2/messi-logo-png_seeklogo-444984.png" className='logoHeader' alt="Logo" />
            </div>
            <nav className="navbar">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/product">Products</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to="/account">Account</Link></li>
                    <li><Link to="/detail"></Link></li>
                </ul>
            </nav>
            <div className="cart-icon">
                <i className="fas fa-shopping-cart"></i>
            </div>
        </header>
    );
};

export default Header;