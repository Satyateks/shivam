
import React,{useState,useEffect} from "react";
import { Link } from "react-router-dom";
import logoDark from '../assect/images/logo-dark.png'
import logoLight from '../assect/images/logo-light.png'

import {FiSearch,FiUser} from '../assect/icons/vander'

export default function Navbar({navClass,logolight,menuClass}){
    const [scroll, setScroll] = useState(false);
    const [isMenu, setisMenu] = useState(false);
    const [modal, setModal] = useState(false)

    useEffect(() => {
        activateMenu()
        window.addEventListener("scroll", () => {
          setScroll(window.scrollY > 50);
        });
        const closeDropdown =()=>{
            setModal(false)
        }
        document.addEventListener("mousedown", closeDropdown);
        window.scrollTo(0, 0);
      }, []);

      var mybutton = document.getElementById("back-to-top");
        window.onscroll = function () {
            scrollFunction();
        };

        function scrollFunction() {
            if(mybutton!=null){
                if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
                    mybutton.style.display = "block";
                } else {
                    mybutton.style.display = "none";
                }
            }
        }
        
        // Toggle menu
        const toggleMenu = () => {
            setisMenu(!isMenu);
            if (document.getElementById("navigation")) {
                const anchorArray = Array.from(document.getElementById("navigation").getElementsByTagName("a"));
                anchorArray.forEach(element => {
                    element.addEventListener('click', (elem) => {
                        const target = elem.target.getAttribute("href")
                        if (target !== "") {
                            if (elem.target.nextElementSibling) {
                                var submenu = elem.target.nextElementSibling.nextElementSibling;
                                submenu.classList.toggle('open');
                            }
                        }
                    })
                });
            }
        };
        function getClosest(elem, selector) {

            // Element.matches() polyfill
            if (!Element.prototype.matches) {
                Element.prototype.matches =
                    Element.prototype.matchesSelector ||
                    Element.prototype.mozMatchesSelector ||
                    Element.prototype.msMatchesSelector ||
                    Element.prototype.oMatchesSelector ||
                    Element.prototype.webkitMatchesSelector ||
                    function (s) {
                        var matches = (this.document || this.ownerDocument).querySelectorAll(s),
                            i = matches.length;
                        while (--i >= 0 && matches.item(i) !== this) { }
                        return i > -1;
                    };
            }

            // Get the closest matching element
            for (; elem && elem !== document; elem = elem.parentNode) {
                if (elem.matches(selector)) return elem;
            }
            return null;

        };

        function activateMenu() {
            var menuItems = document.getElementsByClassName("sub-menu-item");
            if (menuItems) {

                var matchingMenuItem = null;
                for (var idx = 0; idx < menuItems.length; idx++) {
                    if (menuItems[idx].href === window.location.href) {
                        matchingMenuItem = menuItems[idx];
                    }
                }

                if (matchingMenuItem) {
                    matchingMenuItem.classList.add('active');
                
                
                    var immediateParent = getClosest(matchingMenuItem, 'li');
            
                    if (immediateParent) {
                        immediateParent.classList.add('active');
                    }
                    
                    var parent = getClosest(immediateParent, '.child-menu-item');
                    if(parent){
                        parent.classList.add('active');
                    }

                    var parent = getClosest(parent || immediateParent , '.parent-menu-item');
                
                    if (parent) {
                        parent.classList.add('active');

                        var parentMenuitem = parent.querySelector('.menu-item');
                        if (parentMenuitem) {
                            parentMenuitem.classList.add('active');
                        }

                        var parentOfParent = getClosest(parent, '.parent-parent-menu-item');
                        if (parentOfParent) {
                            parentOfParent.classList.add('active');
                        }
                    } else {
                        var parentOfParent = getClosest(matchingMenuItem, '.parent-parent-menu-item');
                        if (parentOfParent) {
                            parentOfParent.classList.add('active');
                        }
                    }
                }
            }
        }
    return(
        <>
         <header id="topnav" className={`${scroll ? "nav-sticky" :""} ${navClass}`}>
            <div className="container">
                {logolight === true ? 
                    <Link className="logo" to="/">
                        <span className="logo-light-mode">
                            <img src={logoDark} className="l-dark" alt=""/>
                            <img src={logoLight} className="l-light" alt=""/>
                        </span>
                        <img src={logoLight} className="logo-dark-mode" alt=""/>
                    </Link> :
                    <Link className="logo" to="/">
                        <img src={logoDark} className="logo-light-mode" alt=""/>
                        <img src={logoLight} className="logo-dark-mode" alt=""/>
                    </Link>
                }

                <div className="menu-extras">
                    <div className="menu-item">
                        <Link className={`navbar-toggle ${isMenu ? 'open' : ''}`} id="isToggle" onClick={() => toggleMenu()}>
                            <div className="lines">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </Link>
                       
                    </div>
                </div>

                <ul className="buy-button list-inline mb-0">
                    <li className="list-inline-item ps-1 mb-0">
                        <div className="dropdown">
                            <button type="button" className="dropdown-toggle btn btn-sm btn-icon btn-pills btn-primary" onClick={()=>setModal(!modal)}>
                                <FiSearch className="icons"/>
                            </button>
                            <div className={`${modal === true ? 'show' : ''} dropdown-menu dd-menu dropdown-menu-start bg-white rounded-3 border-0 mt-3 p-0 right-0`} style={{width: "240px", right:"0"}}>
                                <div className="search-bar">
                                    <div id="itemSearch" className="menu-search mb-0">
                                        <form role="search" method="get" id="searchItemform" className="searchform">
                                            <input type="text" className="form-control rounded-3 border" name="s" id="searchItem" placeholder="Search..."/>
                                            <input type="submit" id="searchItemsubmit" value="Search"/>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="list-inline-item ps-1 mb-0">
                        <Link to="/auth-login" className="btn btn-sm btn-icon btn-pills btn-primary"><FiUser className="icons"/></Link>
                    </li>
                </ul>
        
                <div id="navigation" style={{ display: isMenu ? 'block' : 'none' }}>
                    <ul className={menuClass}>
                        <li className="has-submenu parent-menu-item">
                            <Link to="#">Home</Link><span className="menu-arrow"></span>
                            <ul className="submenu">
                                <li><Link to="/" className="sub-menu-item">Hero One</Link></li>
                                <li><Link to="/index-two" className="sub-menu-item">Hero Two</Link></li>
                                <li><Link to="/index-three" className="sub-menu-item">Hero Three</Link></li>
                                <li><Link to="/index-four" className="sub-menu-item">Hero Four</Link></li>
                                <li><Link to="/index-five" className="sub-menu-item">Hero Five </Link></li>
                                <li><Link to="/index-six" className="sub-menu-item">Hero Six</Link></li>
                                <li><Link to="/index-seven" className="sub-menu-item">Hero Seven</Link></li>
                            </ul>
                        </li>
                        <li><Link to="/buy" className="sub-menu-item">Buy</Link></li>
                        
                        <li><Link to="/sell" className="sub-menu-item">Sell</Link></li>
        
                        <li className="has-submenu parent-parent-menu-item">
                            <Link to="#">Listing</Link><span className="menu-arrow"></span>
                            <ul className="submenu">
                                <li className="has-submenu parent-menu-item"><Link to="#"> Grid View </Link><span className="submenu-arrow"></span>
                                    <ul className="submenu">
                                        <li><Link to="/grid" className="sub-menu-item">Grid Listing</Link></li>
                                        <li><Link to="/grid-sidebar" className="sub-menu-item">Grid Sidebar </Link></li>
                                    </ul> 
                                </li>
                                <li className="has-submenu parent-menu-item"><Link to="#"> List View </Link><span className="submenu-arrow"></span>
                                    <ul className="submenu">
                                        <li><Link to="/list" className="sub-menu-item">List Listing</Link></li>
                                        <li><Link to="/list-sidebar" className="sub-menu-item">List Sidebar </Link></li>
                                    </ul>  
                                </li>
                                <li className="has-submenu parent-menu-item"><Link to="#"> Property Detail </Link><span className="submenu-arrow"></span>
                                    <ul className="submenu">
                                        <li><Link to="/property-detail" className="sub-menu-item">Property Detail</Link></li>
                                        <li><Link to="/property-detail-two" className="sub-menu-item">Property Detail Two</Link></li>
                                    </ul>  
                                </li>
                            </ul>
                        </li>
        
                        <li className="has-submenu parent-parent-menu-item">
                            <Link to="#">Pages</Link><span className="menu-arrow"></span>
                            <ul className="submenu">
                                <li><Link to="/aboutus" className="sub-menu-item">About Us</Link></li>
                                <li><Link to="/features" className="sub-menu-item">Features</Link></li>
                                <li><Link to="/pricing" className="sub-menu-item">Pricing</Link></li>
                                <li><Link to="/faqs" className="sub-menu-item">Faqs</Link></li>
                                <li className="has-submenu parent-menu-item"><Link to="#"> Auth Pages </Link><span className="submenu-arrow"></span>
                                    <ul className="submenu">
                                        <li><Link to="/auth-login" className="sub-menu-item">Login</Link></li>
                                        <li><Link to="/auth-signup" className="sub-menu-item">Signup</Link></li>
                                        <li><Link to="/auth-reset-password" className="sub-menu-item">Reset Password</Link></li>
                                    </ul>  
                                </li>
                                <li className="has-submenu parent-menu-item"><Link to="#"> Utility </Link><span className="submenu-arrow"></span>
                                    <ul className="submenu">
                                        <li><Link to="/terms" className="sub-menu-item">Terms of Services</Link></li>
                                        <li><Link to="/privacy" className="sub-menu-item">Privacy Policy</Link></li>
                                    </ul>  
                                </li>
                                <li className="has-submenu parent-menu-item"><Link to="#"> Blog </Link><span className="submenu-arrow"></span>
                                    <ul className="submenu">
                                        <li><Link to="/blogs" className="sub-menu-item"> Blogs</Link></li>
                                        <li><Link to="/blog-sidebar" className="sub-menu-item"> Blog Sidebar</Link></li>
                                        <li><Link to="/blog-detail" className="sub-menu-item"> Blog Detail</Link></li>
                                    </ul> 
                                </li>
                                <li className="has-submenu parent-menu-item"><Link to="#"> Special </Link><span className="submenu-arrow"></span>
                                    <ul className="submenu">
                                        <li><Link to="/comingsoon" className="sub-menu-item">Comingsoon</Link></li>
                                        <li><Link to="/maintenance" className="sub-menu-item">Maintenance</Link></li>
                                        <li><Link to="/error" className="sub-menu-item">404! Error</Link></li>
                                    </ul>  
                                </li>
                            </ul>
                        </li>
                        
                        <li><Link to="/contactus" className="sub-menu-item">Contact Us</Link></li>
                    </ul>
                </div>
            </div>
        </header>
        </>
    )
}