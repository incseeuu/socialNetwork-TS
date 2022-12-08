import React from 'react';

const Navbar = () => {
    return (
        <nav className="Nav__item">
            <div className="Nav__profile">
                <a href="#">Profile</a>
            </div>
            <div className="Nav__messages">
                <a href={"#"}>Messages</a>
            </div>
            <div className="Nav__news">
                <a href={"#"}>News</a>
            </div>
            <div className="Nav__music">
                <a href={"#"}>Music</a>
            </div>
            <div className="Nav__settings">
                <a href={"#"}>Settings!</a>
            </div>
        </nav>
    );
};

export default Navbar;