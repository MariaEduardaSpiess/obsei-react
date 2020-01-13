import React, { Component } from 'react';
import Header from './../../components/Header';
import Footer from './../../components/Footer';
import api from './../../services/api';

export class Questionarios extends Component {
    state = {
        questionarios: []
    }

    componentDidMount() {
        this.loadProducts();
    }

    loadProducts = async () => {
        const response = await api.get(`/questionarios`);
        this.setState({ questionarios: response.data });
        console.log(response.data);
    }

    render() {
        const { questionarios } = this.state;
        return (
            <div>
                <Header />
                <main className="bd-masthead py-5" id="content" role="main">
                    <div className="container">
                        <h1 className="featurette-heading mt-2">Questionários</h1>
                        <hr className="featurette-divider mt-1 mb-5" />
                        <ul>
                            {questionarios.map(questionario => (
                                <li key={questionario.id}>
                                    <a href={questionario.link} target="_blank">{questionario.titulo}</a>
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

export default Questionarios
