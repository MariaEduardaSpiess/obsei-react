import React, { Component } from 'react';
import Header from './../../components/Header';
import Footer from './../../components/Footer';
import api from './../../services/api';
import './styles.css';

export class Projetos extends Component {
    state = {
        projetos: []
    }
    
    componentDidMount() {
        this.loadProducts();
    }
    
    loadProducts = async() => {
        const response = await api.get(`/grupos-pesquisa`);
        this.setState({ projetos: response.data });
        console.log(this.state);
    }

    render() {
        const { projetos } = this.state;
        return (
            <div>
                <Header />
                <main className="bd-masthead py-5" id="content" role="main">
                    <div className="container">
                        <h1 className="featurette-heading mt-2">Projetos Unisociesc Blumenau</h1>
                        <hr className="featurette-divider mt-1 mb-5" />
                        <div className="row">
                            {projetos.map(projeto => (
                                <div className="col-md-4 mt-4" key={projeto.id}>
                                    <div className="card h-100">
                                        <div className="card-body">
                                            <h4 className="card-title">{projeto.nome}</h4>
                                            <h6 className="card-subtitle mb-2 text-muted"><span className="badge badge-primary">{projeto.areaPesquisa.nome}</span></h6>
                                            {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                                <div className="bottom-links">
                                                    <a href="#" className="card-link">Card link</a>
                                                    <a href="#" className="card-link">Another link</a>
                                                </div> */}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </main>
                <Footer />
            </div>
        );
    }
}

export default Projetos
