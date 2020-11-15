import React from 'react';

import { Link, useParams } from "react-router-dom";

import HeaderQuestion from '../../components/HeaderQuestion';

import { ReactComponent as ImageCharacter } from '../../assets/images/image-character.svg';

import { WrapperResult } from './styles';

function getColorTheme(theme) {
    switch(theme) {
        case 'theme-01':
            return '#2878CD';
        case 'theme-02':
            return '#F99933';
        case 'theme-03':
            return '#9541B8';
        case 'theme-04':
            return '#25C96F';
        case 'theme-05':
            return '#F52B37';
        case 'theme-06':
            return '#F44DB0';
        default:
            return ''
    }
}

function Alternative() {
    let { theme } = useParams();

    return(
        <WrapperResult color={ getColorTheme(theme) }>
            <HeaderQuestion color={ getColorTheme(theme) } theme={ theme } />

            <div className="container">
                <div className="container-image">
                    <ImageCharacter />
                </div>

                <div className="container-tag-result">
                    <hr className="separator" />

                    <span className="tag">Veja o seu desempenho nas questões</span>
                </div>

                <div className="wrapper-result-final">
                    <header className="header">
                        <div className="box">
                            <div className="row">
                                <div className="col correct">
                                    <h3 className="title">
                                        7
                                    </h3>

                                    <p className="text">
                                        acertos
                                    </p>
                                </div>

                                <div className="col wrong">
                                    <h3 className="title">
                                        3
                                    </h3>

                                    <p className="text">
                                        erros
                                    </p>
                                </div>
                            </div>
                        </div>
                    </header>
                
                    <main className="main">
                        <ul className="list-items">
                            <li className="item">
                                <strong class="title">Fácil</strong>
                                <p className="text">Acertos: 2</p>
                                <p className="text">Erros: 1</p>
                            </li>

                            <li className="item">
                                <strong class="title">Médio</strong>
                                <p className="text">Acertos: 3</p>
                                <p className="text">Erros: 1</p>
                            </li>

                            <li className="item">
                                <strong class="title">Difícil</strong>
                                <p className="text">Acertos: 2</p>
                                <p className="text">Erros: 1</p>
                            </li>
                        </ul>
                    </main>
                
                    
                </div>
            
                <div className="container-button">
                    <Link to="/">
                        <button className="btn-home">Voltar ao início</button>
                    </Link>
                </div>
            </div>

        </WrapperResult>
    );
}

export default Alternative;