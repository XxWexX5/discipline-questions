import React from 'react';

import IconBook from '../../assets/images/icon-book.svg';

import { WrapperTagSubject } from './styles';

function getIcon(theme) {
    switch(theme) {
        case 'theme-01':
            return IconBook;
        default:
            return ''
    }
}

function getAltIcon(theme) {
    switch(theme) {
        case 'theme-01':
            return 'Ícone de livro.';
        default:
            return ''
    }
}

function getTitle(theme) {
    switch(theme) {
        case 'theme-01':
            return 'História';
        default:
            return ''
    }
}

function TagSubject(props) {
    return(
        <WrapperTagSubject>
            <div className="container-image">
                <img src={ getIcon(props.theme) } alt={ getAltIcon(props.theme) } class="image" />
            </div>

            <p className="text">{getTitle(props.theme)}</p>
        </WrapperTagSubject>
    );
}

export default TagSubject;