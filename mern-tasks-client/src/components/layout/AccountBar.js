import React from 'react';

const AccountBar = () => {
    return ( 
        <header className="app-header">
            <p className="nombre-usuario">Hello <span>Julian</span></p>
            <nav className="nav-principal">
            <a href="!#">Log Out</a>
            </nav>
        </header>
     );
}
 
export default AccountBar;