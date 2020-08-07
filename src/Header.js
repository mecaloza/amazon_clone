import React from 'react'
import "./Header.css";
import {Link} from "react-router-dom";
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import {useStateValue} from './StateProvider';
import { auth } from './firebase';

function Header() {
    const [{basket ,user}]=useStateValue();
    console.log(basket);
    const login=()=>{
        if(user){
            auth.signOut();
        }
    }
    return (
        <nav className="header">
            
            {/*logo onthe left*/}
        <Link to="/" >
        <img className="header__logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
             alt=""
            />
        </Link>
            
            {/*serach box*/}
            <div className="header__search">
            <input type="text" className="header__searchInput"></input>
            <SearchIcon className="header__searchIcon"/>
            </div>
            {/*3 links*/}
            <div className="header__nav">
                <Link on to={!user && "/login"} className="header__link">
                <div onClick={login}className="header__option">
                    <span className="header__optionLineOne">hello {user?.email} </span>
                    <span className="header__optionLineTwo">{user ? "Sig out" : "Sig In" }</span>
                </div>
                
                </Link>

                <Link to="/" className="header__link">
                <div className="header__option">
                    <span className="header__optionLineOne">Returns</span>
                    <span className="header__optionLineTwo">& Orders</span>
                </div>
                
                </Link>

                <Link to="/login" className="header__link">
                <div className="header__option">
                    <span className="header__optionLineOne">Your</span>
                    <span className="header__optionLineTwo">Prime</span>
                </div>
                
                </Link>



            </div>
            {/*Basket icon*/}
            <Link to="/checkout" className="header__link">
                <div className="header__optionBasket">
                   {/* shopping basker icon */}
                <ShoppingBasketIcon/>
                   {/* Number of items */}
                <span className="header__optionLineTwo header_baketCount">{basket?.length}</span> 

                </div>
            </Link>



        </nav>
    )
}

export default Header
