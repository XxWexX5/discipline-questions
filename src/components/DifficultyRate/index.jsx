import React from 'react';

import { ReactComponent as IconRate } from '../../assets/images/icon-rate.svg';

import { WrapperDifficultyRate } from './styles';

function DifficultyRate(props) {
    function getTextDifficult(difficult) {
        switch (difficult) {
            case 'easy':
                return 'Fácil'
            case 'medium':
                return 'Médio'
            case 'hard':
                return 'Difícil'
            default:
                return ''
        }
    }

    return(
        <WrapperDifficultyRate difficult={props.difficult} color={ props.color }>
            <div className="container-image">
                <IconRate />
            </div>

            <p className="text">
                { getTextDifficult(props.difficult) }
            </p>
        </WrapperDifficultyRate>
    );
}

export default DifficultyRate;