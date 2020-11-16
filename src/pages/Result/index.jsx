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

                <div className="wrapper-tag">
                    <div className="container-tag-result">
                        <hr className="separator" />

                        <span className="tag">Veja o seu desempenho nas questões</span>
                    </div>
                </div>

                <div className="wrapper-result-final">
                    <header className="header">
                        <div className="box">
                            <div className="row">
                                <div className="col correct">
                                    <h3 className="title">
                                        { localStorage.getItem(`${theme}-correct`) }
                                    </h3>

                                    <p className="text">
                                        acertos
                                    </p>
                                </div>

                                <div className="col wrong">
                                    <h3 className="title">
                                        { localStorage.getItem(`${theme}-wrong`) }
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
                                <strong className="title">Fácil</strong>
                                <p className="text">Acertos: { localStorage.getItem(`${theme}-easy-correct`) }</p>
                                <p className="text">Erros: { localStorage.getItem(`${theme}-easy-wrong`) }</p>
                            </li>

                            <li className="item">
                                <strong className="title">Médio</strong>
                                <p className="text">Acertos: { localStorage.getItem(`${theme}-medium-correct`) }</p>
                                <p className="text">Erros: { localStorage.getItem(`${theme}-medium-wrong`) }</p>
                            </li>

                            <li className="item">
                                <strong className="title">Difícil</strong>
                                <p className="text">Acertos: { localStorage.getItem(`${theme}-hard-correct`) }</p>
                                <p className="text">Erros: { localStorage.getItem(`${theme}-hard-wrong`) }</p>
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