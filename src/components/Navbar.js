import React from "react";

const Navbar = (props) => {
    console.log(props)
    return (
        <div className="nav-container justify-content-between">
            <nav className="navbar navbar-expand-lg">
                <a className="navbar-brand" href="/">
                    Restart Game
            </a>
                    <span className="display">
                        {props.display}
                    </span>
                    <span className="score">
                        Score: {props.score}
                    </span>
                    <span className="highScore">
                        Top Score: {props.highScore}
                    </span>
            </nav>
        </div>

    )
}

export default Navbar;