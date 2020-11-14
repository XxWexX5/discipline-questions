import React from 'react';

import { WrapperModuleSubject } from './styles';

import IconBook from '../../assets/images/icon-book.svg';

interface ModuleSubjectProps {
    titleModule: string
}

function ModuleSubject(props: ModuleSubjectProps) {
    return(
        <WrapperModuleSubject>
            <main className="main">
                <img src={IconBook} className="image image-book" alt="Ícone de livro"/>
            </main>

            <footer className="footer">
                <strong className="title-module">{props.titleModule || ''}</strong>
            </footer>
        </WrapperModuleSubject>
    );
}

export default ModuleSubject;