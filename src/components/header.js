import React from "react";
import { Link } from "react-router-dom";
import logo from '../logo2.svg';

const links = [
    { id: 0, name: 'About', link: "/about" },
    { id: 1, name: 'Contact', link: "/contact" },
    { id: 2, name: 'Dashboard', link: "/dashboard" },
    { id: 4, name: 'Login', link: "/login" },
];

class Header extends React.Component {
    render() {
      return  <>
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark p-0 fixed-top ">
            <div className="container-fluid">
            <Link to="/"><img src={logo} className="navbar-brand App-logo rounded-pill" alt='demo logo' /></Link>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse " id="collapsibleNavbar">
                    <ul className="navbar-nav ms-auto me-2">
                        {
                            links.map((link) =>
                                <li key={link.id} className="nav-item ">
                                    <Link to={link.link} className="nav-link">{link.name}</Link>
                                </li>
                            )
                        }
                    </ul>
                </div>
            </div>
        </nav>
        
            <h1 className="ms-4 mt-5 text-dark font-monospace text-start">
                {
                    /*page title*/
                    typeof this.props.title != "undefined" ? this.props.title : null
                }
            </h1>
        
        </>
    }
}

export default Header;