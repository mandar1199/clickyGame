import React, { Component } from "react";
import ",/Navbar.css"

class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-default navbar-fixed-top">
                <ul>
                    <li className="itemLeft">O, just click'em!</li>
                    <li className="itenCenter"></li>
                    <li className="itemRight">Your Score: {this.props.currentGuesses}</li>
                </ul>
            </nav>
        );
    }
}

export default Navbar;