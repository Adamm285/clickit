import React from 'react'

function Header() {
    return (
        <nav className="navbar fixed-top">
            <a className="navbar-brand navRight"><h2>Click-it</h2></a>
            <a className="navbar-brand navCenter">Memory Game: Don't choose the same sub twice!</a>
            <a className="navbar-brand navLeft">Score:  | Top Score:  </a>
        </nav>
    )
}

export default Header
