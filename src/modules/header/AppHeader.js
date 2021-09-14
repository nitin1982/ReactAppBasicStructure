import { BrowserRouter as Router, Link } from "react-router-dom";
const AppHeader = () => {
    return (
        <nav className="navbar navbar-expand-sm bg-light">        
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link className="nav-link" to="/">Home</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/About">About</Link>
                </li>                
            </ul>
            <ul className="navbar-nav navbar-right-nav">
                <li className="nav-item">
                    <Link className="nav-link" to="/Login">
                        <i className='fas fa-user-circle'></i>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}
export default AppHeader;