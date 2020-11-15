import React from 'react';

import { ReactComponent as IconRate } from '../../assets/images/icon-rate.svg';

import { WrapperDifficultyRate } from './styles';

function DifficultyRate(props) {
    return(
        <WrapperDifficultyRate difficult={props.difficult} >
            <div className="container-image">
                <IconRate />
            </div>

            <p className="text">
                Médio
            </p>
        </WrapperDifficultyRate>
    );
}

export default DifficultyRate;