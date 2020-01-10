import React, { Component } from 'react';
import Header from './../../components/Header';
import Footer from './../../components/Footer';
import api from './../../services/api';

export class Links extends Component {
    state = {
        categorias: [],
        links: []
    }

    componentDidMount() {
        this.loadProducts();
    }

    loadProducts = async () => {
        const responseCategorias = await api.get(`/categorias-links`);
        const responseLinks = await api.get(`/links-uteis`);
        responseCategorias.data.map((categoria, i) => {
            const links = [];
            responseLinks.data.map(link => {
                if (link.categoriaLink.id === categoria.id) links.push(link);
            });
            responseCategorias.data[i].links = links;
        });
        this.setState({ categorias: responseCategorias.data, links: responseLinks.data });
        console.log(this.state);
    }

    render() {
        const { categorias } = this.state;
        return (
            <div>
                <Header />

                <main className="bd-masthead py-5" id="content" role="main">
                    <div className="container">
                        <h1 className="featurette-heading mt-2">Links Úteis</h1>
                        <hr className="featurette-divider mt-1 mb-5" />
                        <div className="row">
                            {categorias.map(categoria => (
                                <div className="col-md-4" key={categoria.id}>
                                    <h3 className="text-muted">{categoria.nome}</h3>
                                    <ul>
                                        {categoria.links.map(link => (
                                            <li key={link.id}><a href={link.link} target="_blank">{link.titulo}</a></li>
                                        ))}
                                    </ul>
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

export default Links
