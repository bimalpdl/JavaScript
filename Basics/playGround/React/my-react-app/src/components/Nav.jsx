import './Nav.css';
function Nav() {
    return (
        <div className="main-nav">
        <div className="container">
            <div className="logo">
                <p>Bimal</p>
            </div>
            <div className="nav-elements">
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Contact</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Portfolio</a></li>
                </ul>
            </div>
        </div>
    </div>

    );
};

export default Nav;