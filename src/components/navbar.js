import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {logout} from '../reducers/userSlice';
import '../css/navbar.scss'
import { useNavigate } from "react-router-dom";

const Navbar = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const loggedInUser = useSelector(state => state.loggedInUser);

    const onLogout = () => {
        dispatch(logout());
        navigate('/login')
    }
    return (
        <nav className="navbar">
            <a className="navbar-brand">My Website</a>
           {Object.keys(loggedInUser).length > 0 && <ul class="navbar-links">
                <li><a onClick={() => onLogout}>Logout</a></li>
            </ul> || <a onClick={() => navigate('/login')}>Login</a>}
        </nav>
    )
}

export default Navbar;