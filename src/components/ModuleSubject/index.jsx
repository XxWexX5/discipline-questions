import React from 'react';

import { WrapperModuleSubject } from './styles';

function ModuleSubject(props) {
    return(
        <WrapperModuleSubject checked={ props.checked } color={props.colorModule} colorShadowModule={props.colorShadowModule} colorBorderBottomModule={props.colorBorderBottomModule}>
            <main className="main">
                <img src={props.imageModule} className="image image-book" alt="Ícone de livro"/>
            </main>

            <footer className="footer">
                <strong className="title-module">{props.titleModule || ''}</strong>
            </footer>
        </WrapperModuleSubject>
    );
}

export default ModuleSubject;