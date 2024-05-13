import React, { useRef, useState } from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import card_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { ShopContext } from '../../Context/ShopContext'
import nav_dropdown from '../Assets/nav_dropdown.png'

const Navbar = () => {
    const [menu, setMenu] = useState("shop");
    const { getTotalCartItems } = useContext(ShopContext);
    const menuRef = useRef();


    const dropdown_toggle = (e) => {
        menuRef.current.classList.toggle('nav-menu-visible')
        e.target.classList.toggle('open');
    }
    return (
        <>

            <div className='navbar'>
                <div className='nav-logo'>
                    <img src={logo} alt="" />
                    <p>SHOPPER</p>
                </div>
                <img className='nav-dropdown' onClick={dropdown_toggle} src={nav_dropdown} alt="" />
                <ul ref={menuRef} className="nav-menu">
                    <li onClick={() => { setMenu("shop") }}><Link style={{ textDecoration: 'none' }} to='/'>Trang chủ</Link> {menu === "shop" ? <hr /> : <></>}</li>
                    <li onClick={() => { setMenu("mens") }}><Link style={{ textDecoration: 'none' }} to='/mens'>Nam</Link>{menu === "mens" ? <hr /> : <></>}</li>
                    <li onClick={() => { setMenu("womens") }}><Link style={{ textDecoration: 'none' }} to='/womens'>Nữ</Link>{menu === "womens" ? <hr /> : <></>}</li>
                    <li onClick={() => { setMenu("kids") }}><Link style={{ textDecoration: 'none' }} to='/kids'>Trẻ em</Link>{menu === "kids" ? <hr /> : <></>}</li>
                </ul>
                <div className="nav-login-cart">
                    {localStorage.getItem('auth-token')
                        ? <button onClick={() => { localStorage.removeItem('auth-token'); window.location.replace("/") }}>Logout</button>
                        : <Link to='/signup'><button>Đăng nhập</button></Link>}
                    <Link to='/cart'><img src={card_icon} alt="" /></Link>
                    <div className="nav_cart_count">{getTotalCartItems()}</div>
                </div>
            </div>

        </>
    )
}

export default Navbar
