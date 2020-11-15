import React from 'react';

import { useParams } from "react-router-dom";

import HeaderQuestion from '../../components/HeaderQuestion';
import Question from '../../components/Question';

import { WrapperAlternative } from './styles';



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
        <WrapperAlternative>
            <HeaderQuestion color={ getColorTheme(theme) } theme={ theme } />

            <div className="container">
                <Question color={ getColorTheme(theme) } />
            </div>

        </WrapperAlternative>
    );
}

export default Alternative;