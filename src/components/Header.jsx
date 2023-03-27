import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const Header = () => {
    const location = useLocation();
    const currentPath = location.pathname;
    return (
        <header className="header">
            <img
                className="logo"
                src="https://clipground.com/images/dev-png-10.png"
                alt="logo"
            />
            <nav >

                <ul className="navigation">
                    {currentPath === '/login' && (
                        <li>
                            <NavLink
                                to="/register"
                            >
                                Register
                            </NavLink>
                        </li>)}
                    {currentPath === '/register' && (
                        <li>
                            <NavLink
                                to="/login"
                            >
                                Login
                            </NavLink>
                        </li>
                    )}
                    {currentPath === '/add' && (
                        <li>
                            <NavLink
                                to="/"
                            >
                                Home
                            </NavLink>
                        </li>
                    )}
                    {currentPath === '/' && (
                        <li>
                            <NavLink
                                to="/add"
                            >
                                Add
                            </NavLink>
                        </li>
                    )}
                </ul>
            </nav>
        </header>
    );
};

export default Header;
