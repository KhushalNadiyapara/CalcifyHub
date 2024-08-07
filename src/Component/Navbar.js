import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { Link, Outlet } from "react-router-dom";

function Navbar() {
    const [isOnline, setIsOnline] = useState(navigator.onLine);

    useEffect(() => {
        const handleOnline = () => setIsOnline(true);
        const handleOffline = () => setIsOnline(false);

        window.addEventListener('online', handleOnline);
        window.addEventListener('offline', handleOffline);

        return () => {
            window.removeEventListener('online', handleOnline);
            window.removeEventListener('offline', handleOffline);
        };
    }, []);

    const closeMenu = () => {
        document.getElementById("menu-icon").checked = false;
    };

    if (!isOnline) {
        return (
            <div className="loading-screen">
                <h2>Loading...</h2>
                <p>It seems you're offline. Please check your connection.</p>
            </div>
        );
    }

    return (
        <>
            <body className="body">
                <Link to="/" className="logo" rel="noopener noreferrer">
                   <h2>📱<span>C</span>alcify<span>H</span>ub</h2>
                </Link>

                <input className="menu-icon" type="checkbox" id="menu-icon" name="menu-icon" />
                <label htmlFor="menu-icon"></label>
                <nav className="nav">
                    <ul className="pt-5">
                        <li><Link to="/simple" onClick={closeMenu}>SimplyMath</Link></li>
                        <li><Link to="/digitconvert" onClick={closeMenu}>DigiConvert</Link></li>
                        <li><Link to="/datewizard" onClick={closeMenu}>DateWizard</Link></li>
                        <li><Link to="/bmi" onClick={closeMenu}>WellnessScale</Link></li>
                    </ul>
                </nav>

                <Outlet />
            </body>
        </>
    );
}

export default Navbar;
