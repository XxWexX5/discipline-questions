import React from 'react';

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
                            <ModuleSubject titleModule="História" colorModule="#2878CD" colorBorderBottomModule="#2A4368" colorShadowModule="rgb(40, 120, 205, .35)" imageModule={IconBook} />
                        </div>

                        <div className="col">
                            <ModuleSubject titleModule="Geografia" colorModule="#F99933" colorBorderBottomModule="#B87024" colorShadowModule="rgb(249, 153, 51, .35)" imageModule={IconWorld} />
                        </div>

                        <div className="col">
                            <ModuleSubject titleModule="Mitologia" colorModule="#9541B8" colorBorderBottomModule="#672881" colorShadowModule="rgb(149, 65, 184, .35)" imageModule={IconWarrior} />
                        </div>

                        <div className="col">
                            <ModuleSubject titleModule="Esportes" colorModule="#25C96F" colorBorderBottomModule="#377D56" colorShadowModule="rgb(37, 201, 111, .35)" imageModule={IconSoccer} />
                        </div>

                        <div className="col">
                            <ModuleSubject titleModule="Política" colorModule="#F52B37" colorBorderBottomModule="#A7282F" colorShadowModule="rgb(245, 43, 55, .35)" imageModule={IconPolitic} />
                        </div>
                        
                        <div className="col">
                            <ModuleSubject titleModule="Conhecimentos Gerais" colorModule="#F44DB0" colorBorderBottomModule="#D11584" colorShadowModule="rgb(244, 77, 176, .35)" imageModule={IconBrain} />
                        </div>
                    </div>
                </main>
            </div>
        </WrapperCategories>
    );
}

export default Categories;