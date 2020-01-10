import React, { Component } from 'react'
import cnpq from '../../images/cnpq.jpg';
import unisociesc from '../../images/unisociesc-color.png';
import './styles.css';

export class Footer extends Component {
    render() {
        return (
            <footer className="footer">
                <div className="container">
                    <hr className="featture-divider mb-0"/>
                    <div className="container">
                        <p className="d-inline">&copy; 2018 OBSEI
                            &middot; <a href="#">Privacy</a>
                            &middot; <a href="#">Terms</a> &middot;</p>
                        <p className="d-sm-inline d-block">
                            Apoio:
                            <a href="http://www.cnpq.br" target="_blank"><img className="img-fluid ml-3 pb-md-1" height="16,3" width="55" src={cnpq} /></a>
                            <a href="http://www.unisociesc.com.br" target="_blank"><img className="img-fluid ml-3 pb-sm-1 pb-md-2" height="16,5"
                                width="76,9" src={unisociesc} /></a>
                        </p>
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer
