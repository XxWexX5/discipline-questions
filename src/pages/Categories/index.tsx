import React from 'react';

import { WrapperCategories } from './styles';

import ModuleSubject from '../../components/ModuleSubject';

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
                            <ModuleSubject titleModule="História" />
                        </div>

                        <div className="col">
                            <ModuleSubject titleModule="Geografia" />
                        </div>

                        <div className="col">
                            <ModuleSubject titleModule="Mitologia" />
                        </div>

                        <div className="col">
                            <ModuleSubject titleModule="Esportes" />
                        </div>

                        <div className="col">
                            <ModuleSubject titleModule="Política" />
                        </div>
                        
                        <div className="col">
                            <ModuleSubject titleModule="Conhecimentos Gerais" />
                        </div>
                    </div>
                </main>
            </div>
        </WrapperCategories>
    );
}

export default Categories;