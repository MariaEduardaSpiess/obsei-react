import React, { Component } from 'react';
import Header from './../../components/Header';
import Footer from './../../components/Footer';
import api from './../../services/api';

export class Pesquisadores extends Component {
    state = {
        pesquisadores: []
    }
    
    componentDidMount() {
        this.loadProducts();
    }
    
    loadProducts = async() => {
        const response = await api.get(`/pesquisadores`);
        this.setState({ pesquisadores: response.data });
        console.log(this.state);
    }

    render() {
        const { pesquisadores } = this.state;
        return (
            <div>
                <Header />
                <main className="bd-masthead py-5" id="content" role="main">
                    <div className="container">
                        <h1 className="featurette-heading mt-2">Pesquisadores</h1>
                        <hr className="featurette-divider mt-1 mb-5" />
                        <div className="row">
                            {pesquisadores.map(pesquisador => (
                                <div className="col-md-4 mt-4" key={pesquisador.id}>
                                    <div className="card h-100">
                                        <img className="card-img-top" src={pesquisador.foto} alt="Card image cap" />
                                        <div className="card-body">
                                            <h5 className="card-title">{pesquisador.nome}</h5>
                                            <p className="text-muted">{pesquisador.funcao}</p>
                                            <a href={pesquisador.lattes} target="_blank" className="btn btn-primary mt-2">Currículo Lattes</a>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </main>
                <Footer />
            </div>
        )
    }
}

export default Pesquisadores;
