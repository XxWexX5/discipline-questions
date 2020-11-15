import React from 'react';

import { Link } from 'react-router-dom';

import { WrapperCategories } from './styles';

import ModuleSubject from '../../components/ModuleSubject';

import IconBook from '../../assets/images/icon-book.svg';
import IconWorld from '../../assets/images/icon-world.svg';
import IconWarrior from '../../assets/images/icon-warrior.svg';
import IconSoccer from '../../assets/images/icon-soccer.svg';
import IconPolitic from '../../assets/images/icon-politic.svg';
import IconBrain from '../../assets/images/icon-brain.svg';

function Categories() {
    return(
        <WrapperCategories>
            <div className="container">
                <header className="header">
                    <h2 className="title">Categorias</h2>
                </header>

                <main className="main">
                    <div className="row">
                        <div className="col">
                            <Link to="/alternativa/theme-01">
                                <ModuleSubject titleModule="História" colorModule="#2878CD" colorBorderBottomModule="#2A4368" colorShadowModule="rgb(40, 120, 205, .65)" imageModule={IconBook} />
                            </Link>
                        </div>

                        <div className="col">
                            <Link to="/alternativa/theme-02">
                                <ModuleSubject titleModule="Geografia" colorModule="#F99933" colorBorderBottomModule="#B87024" colorShadowModule="rgb(249, 153, 51, .65)" imageModule={IconWorld} />
                            </Link>
                        </div>

                        <div className="col">
                            <Link to="/alternativa/theme-03">
                                <ModuleSubject titleModule="Mitologia" colorModule="#9541B8" colorBorderBottomModule="#672881" colorShadowModule="rgb(149, 65, 184, .65)" imageModule={IconWarrior} />
                            </Link>
                        </div>

                        <div className="col">
                            <Link to="/alternativa/theme-04">
                                <ModuleSubject titleModule="Esportes" colorModule="#25C96F" colorBorderBottomModule="#377D56" colorShadowModule="rgb(37, 201, 111, .65)" imageModule={IconSoccer} />
                            </Link>
                        </div>

                        <div className="col">
                            <Link to="/alternativa/theme-05">
                                <ModuleSubject titleModule="Política" colorModule="#F52B37" colorBorderBottomModule="#A7282F" colorShadowModule="rgb(245, 43, 55, .65)" imageModule={IconPolitic} />
                            </Link>
                        </div>
                        
                        <div className="col">
                            <Link to="/alternativa/theme-06">
                                <ModuleSubject titleModule="Conhecimentos Gerais" colorModule="#F44DB0" colorBorderBottomModule="#D11584" colorShadowModule="rgb(244, 77, 176, .65)" imageModule={IconBrain} />
                            </Link>
                        </div>
                    </div>
                </main>
            </div>
        </WrapperCategories>
    );
}

export default Categories;