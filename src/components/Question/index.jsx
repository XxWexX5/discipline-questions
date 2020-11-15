import React from 'react';

import { WrapperQuestion } from './styles';

import DifficultyRate from '../DifficultyRate';

function Question() {
    return(
        <WrapperQuestion>
            <header className="header">
                <p className="text-question">
                    Questão 01
                </p>

                <DifficultyRate difficult="normal" />
            </header>

            <main className="main">
                <p className="text">
                    Sobre a conhecida Idade dos Metais, na transição entre a Pré-História e a História, é possível afirmar que
                </p>

                <form action="">
                    <div className="wrapper-input">
                        <input type="radio" id="alternative-01" name="question-01" value="alternative-01" />
                        <label for="alternative-01">não existe ligação entre o uso dos metais e a formação de grandes impérios</label>
                    </div>

                    <button type="submit">RESPONDER</button>
                </form>
            </main>
        </WrapperQuestion>
    );
}

export default Question