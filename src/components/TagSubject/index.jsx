import React from 'react';

import IconBook from '../../assets/images/icon-book.svg';
import IconWorld from '../../assets/images/icon-world.svg';
import IconWarrior from '../../assets/images/icon-warrior.svg';
import IconSoccer from '../../assets/images/icon-soccer.svg';
import IconPolitic from '../../assets/images/icon-politic.svg';
import IconBrain from '../../assets/images/icon-brain.svg';

import { WrapperTagSubject } from './styles';

function getIcon(theme) {
    switch(theme) {
        case 'theme-01':
            return IconBook;
        case 'theme-02':
            return IconWorld;
        case 'theme-03':
            return IconWarrior;
        case 'theme-04':
            return IconSoccer;
        case 'theme-05':
            return IconPolitic;
        case 'theme-06':
            return IconBrain;
        default:
            return ''
    }
}

function getAltIcon(theme) {
    switch(theme) {
        case 'theme-01':
            return 'Ícone de livro.';
        case 'theme-02':
            return 'Ícone do mundo.';
        case 'theme-03':
            return 'Ícone do guerreiro.';
        case 'theme-04':
            return 'Ícone de futebol.';
        case 'theme-05':
            return 'Ícone de política.';
        case 'theme-06':
            return 'Ícone de cérebro.';
        default:
            return ''
    }
}

function getTitle(theme) {
    switch(theme) {
        case 'theme-01':
            return 'História';
        case 'theme-02':
            return 'Geografia';
        case 'theme-03':
            return 'Mitologia';
        case 'theme-04':
            return 'Esportes';
        case 'theme-05':
            return 'Política';
        case 'theme-06':
            return 'Conhecimentos Gerais';
        default:
            return ''
    }
}

function TagSubject(props) {
    return(
        <WrapperTagSubject>
            <div className="container-image">
                <img src={ getIcon(props.theme) } alt={ getAltIcon(props.theme) } className="image" />
            </div>

            <p className="text">{getTitle(props.theme)}</p>
        </WrapperTagSubject>
    );
}

export default TagSubject;