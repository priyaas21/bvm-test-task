import React from "react";
import '../css/navbar.scss'

const Navbar = () => {
    return (
        <nav class="navbar">
            <a href="#" class="navbar-brand">My Website</a>
            <ul class="navbar-links">
                <li><a href="#">Link 1</a></li>
                <li><a href="#">Link 2</a></li>
                <li><a href="#">Link 3</a></li>
            </ul>
        </nav>
    )
}

export default Navbar;