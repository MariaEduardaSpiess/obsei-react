import React, { Component } from 'react';
import './styles.css';
import Header from './../../components/Header'
import Footer from './../../components/Footer';
import logo from './../../images/logo_trasparente.png';
import bola1 from './../../images/bola1.jpg';
import bola2 from './../../images/bola2.jpg';
import metodologia from './../../images/metodologia.jpg';
import resultados from './../../images/resultados.jpg';
import consideracoes from './../../images/consideracoes.jpg';

export default class Home extends Component {
    render() {
        return (
            <div>
                <Header />
                <main className="bd-masthead py-5 bg-light" role="main">
                    <div className="container">
                        <div className="row align-items-center pt-sm-5">
                            <div className="col-6 col-md-6 mx-auto mb-sm-4 order-md-2 text-center">
                                <img className="img-fluid" src={logo} width="318" height="192" alt="" />
                            </div>
                            <div className="col-md-6 order-md-1 text-center text-md-left pr-md-5">
                                <h1 className="mb-3 mt-4 mt-sm-0">Conheça-nos</h1>
                                <p className="lead pb-4">
                                    O Observatório do Empreendedorismo e Inovação (OBSEI) foi criado em 2017, como um projeto de pesquisa
                                    que tem sido implementado e desenvolvido por professores e pesquisadores da Faculdade SOCIESC de Blumenau.
                                    O OBSEI atualmente está inserido no grupo de pesquisa em Gestão e Tecnologia da Informação e
                                    Conhecimento, integrado ao conselho nacional de desenvolvimento científico e tecnológico (CNPq/DGP).
                                </p>
                            </div>
                        </div>
                    </div>
                </main>

                <hr className="featurette-divider mt-0 mb-md-4" />

                <div className="container marketing mb-5">
                    <div className="row text-center">
                        <div className="col-lg-6 px-5">
                            <img className="rounded-circle" src={bola1} alt="Generic placeholder image" width="140" height="140" />
                            <h2 className="mt-1">Pesquisa</h2>
                            <p>Pesquisar os principais indicadores de desempenho do empreendedorismo e inovação, inicialmente na
                               região do Vale do Itajaí-SC.
                            </p>
                        </div>
                        <div className="col-lg-6 px-5">
                            <img className="rounded-circle" src={bola2} alt="Generic placeholder image" width="140" height="140" />
                            <h2 className="mt-1">Apresentação</h2>
                            <p>Apresentar uma visão ampla sobre inovação e empreendedorismo, impactando não somente o meio
                               acadêmico, mas também a sociedade empresarial da região.
                            </p>
                        </div>
                    </div>

                    <hr className="featurette-divider" />

                    <div className="row featurette">
                        <div className="col-md-7 my-auto pr-4">
                            <h2 className="featurette-heading my-auto">Procedimentos Metodológicos</h2>
                            <br />
                            <p className="lead">O escopo inicial do projeto contempla o desenvolvimento de uma plataforma que
                                apresenta uma visão institucional com a descrição, foco principal, objetivos
                                do observatório, e os projetos associados ao OBSEI.
                            </p>
                        </div>
                        <div className="col-md-5 m-auto">
                            <img className="featurette-image img-fluid" src={metodologia} alt="Generic placeholder image" />
                        </div>
                    </div>

                    <hr className="featurette-divider" />

                    <div className="row featurette">
                        <div className="col-md-7 order-md-2 my-auto pl-4">
                            <h2 className="featurette-heading my-auto">Resultados</h2>
                            <br />
                            <p className="lead">O OBSEI disponibiliza os artigos publicados em periódicos, fontes de pesquisas e
                              referências bibliográficas sobre inovação, além de questionários, dados brutos de pesquisas,
                              relatórios e análises com informações sumarizadas sobre empreendedorismo e inovação. O portal
                              é uma plataforma de acesso livre e colaborativa, e permite a interação entre seus usuários e
                              pesquisadores. Essa plataforma visa apresentar um mapa estratégico, com seus indicadores de desempenho,
                              fomentar pesquisas na área, e principalmente fortalecer as redes de inovação na região do Vale do
                              Itajaí-SC.
                            </p>
                        </div>
                        <div className="col-md-5 order-md-1 my-auto">
                            <img className="featurette-image img-fluid" src={resultados} alt="Generic placeholder image" />
                        </div>
                    </div>

                    <hr className="featurette-divider" />

                    <div className="row featurette">
                        <div className="col-md-7 my-auto pr-4">
                            <h2 className="featurette-heading my-auto">Considerações Finais</h2>
                            <br />
                            <p className="lead">As pesquisas científicas desse projeto envolvem as áreas gestão de negócios com
                              tecnologia da informação e comunicação e conhecimento, além de pesquisas na área de inovações
                              tecnológicas e inteligência competitiva. O Projeto atualmente conta com o total de sete
                              professores/pesquisadores envolvidos, sendo um doutor, cinco mestres e um aluno do Curso Superior de
                              Tecnologia em Sistemas para Internet (TSI) da Faculdade Sociesc.
                            </p>
                        </div>
                        <div className="col-md-5 my-auto">
                            <img className="featurette-image img-fluid" src={consideracoes} alt="Generic placeholder image" />
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}
