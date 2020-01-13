import React, { Component } from 'react'
import './styles.css';
import { NavLink } from 'react-router-dom';
import brand from './../../images/brand.png';

export class Header extends Component {
    
    render() {
        return (
            <header>
                <nav className="navbar navbar-expand-md navbar-dark fixed-top">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse"
                        aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <img className="float-sm-right img-fluid my-auto" width="98" height="30,4" src={brand} alt="" />
                    <div className="collapse navbar-collapse text-center" id="navbarCollapse">
                        <ul className="navbar-nav ml-auto" id="nav">
                            <li className="nav-item">
                                <NavLink className="nav-link" exact to={'/'}>Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to={'/projetos'}>Projetos</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to={'/links'}>Links</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to={'/pesquisadores'}>Pesquisadores</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to={'/questionarios'}>Questionários</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to={'/artigos'}>Artigos</NavLink>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="https://portal-obsei.herokuapp.com/">Ambiente</a>
                            </li>
                        </ul>
                    </div>
                </nav> 
            </header>
        )
    }
}

export default Header;