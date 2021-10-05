import { NavLink } from "react-router-dom";
import "./NavBar.css";

function NavBar(): JSX.Element {
    return (
        <div className="NavBar">
			
            <img src="https://media.giphy.com/media/S9oNGC1E42VT2JRysv/giphy.gif" alt="" />
            <nav>
                <li><NavLink to="/about" exact >About</NavLink></li>
                <li><NavLink to="/projects" exact >Projects</NavLink></li>
                <li><NavLink to="/skills" exact >Skills</NavLink></li>
                <li><NavLink to="/emptyview" exact >Memes</NavLink></li>
                <li><NavLink to="/home" exact >Home</NavLink></li>
            </nav>
        </div>
    );
}

export default NavBar;
