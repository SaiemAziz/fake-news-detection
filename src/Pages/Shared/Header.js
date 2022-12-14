import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {

    let menu = <>
        <li>
            <NavLink className='font-bold' to='/'>Home</NavLink>
        </li>
        <li>
            <NavLink className='font-bold' to='/blog'>Blog</NavLink>
        </li>
        <li>
            <NavLink className='font-bold' to='/about'>About</NavLink>
        </li>
    </>

    return (
        <div className="navbar bg-base-300 p-3">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-300 rounded-box w-52">
                        {menu}
                    </ul>
                </div>
                <Link className="btn btn-ghost normal-case text-xl">FakeNews</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {menu}
                </ul>
            </div>
            <div className="navbar-end">
                <Link className="btn btn-success">LogIn</Link>
            </div>
        </div>
    );
};

export default Header;

