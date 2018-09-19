import React, { Component } from "react";
import "./Navbar.css";

class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-default navbar-fixed-top">
                <ul>
                    <li className="itemLeft">O, just click'em!</li>
                    <li className="itemCenter"> {this.props.clickMessage} </li>
                    <li className="itemRight">Your Score: {this.props.currentGuesses} | Top Score: {this.props.bestScore}</li>
                </ul>
            </nav>
        );
    }
}

export default Navbar;