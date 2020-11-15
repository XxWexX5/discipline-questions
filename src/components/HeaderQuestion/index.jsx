import React from 'react';

import { Link } from 'react-router-dom';

import { WrapperHeaderQuestion } from './styles';

import TagSubject from '../TagSubject';

import IconHome from '../../assets/images/icon-home.svg';

function HeaderQuestion(props) {
    return(
        <WrapperHeaderQuestion className="header" color={ props.color }>
            <TagSubject theme="theme-01" />

            <Link to="/" className="back-home">
                <div className="container-image-home">
                    <img src={ IconHome } alt="Ícone de home" className="image image-home" />
                </div>
            </Link>
        </WrapperHeaderQuestion>
    );
}

export default HeaderQuestion;