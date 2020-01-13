import React, { Component } from 'react';
import Header from './../../components/Header';
import Footer from './../../components/Footer';
import api from './../../services/api';

export class Artigos extends Component {
    state = {
        artigos: []
    }

    componentDidMount() {
        this.loadProducts();
    }

    loadProducts = async () => {
        const response = await api.get(`/artigos`);
        this.setState({ artigos: response.data });
        console.log(response.data);
    }

    render() {
        const { artigos } = this.state;
        return (
            <div>
                <Header />
                <main className="bd-masthead py-5" id="content" role="main">
                    <div className="container">
                        <h1 className="featurette-heading mt-2">Artigos</h1>
                        <hr className="featurette-divider mt-1 mb-5" />
                        <ul>
                            {artigos.map(artigo => (
                                <li key={artigo.id}>
                                    <a href={artigo.link} target="_blank">{artigo.titulo}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </main>
                <Footer />
            </div>
        )
    }
}

export default Artigos;
