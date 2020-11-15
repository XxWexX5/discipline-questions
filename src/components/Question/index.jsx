import React, { useState } from 'react';

import { WrapperQuestion, FeedbackQuestion } from './styles';

import IconFaceCorrect from '../../assets/images/icon-face-correct.svg';
import IconFaceWrong from '../../assets/images/icon-face-wrong.svg';

import DifficultyRate from '../DifficultyRate';

function Question(props) {
    const [question01, setQuestion01] = useState('');
    const [feedback, setFeedback] = useState('');

    function showFeedback() {
        if(question01 === 'alternative-01') {
            setFeedback('correct');
        }else {
            setFeedback('wrong');
        }
    }

    function checkQuestion(e) {
        e.preventDefault();
    }

    return(
        <WrapperQuestion color={ props.color }>
            <FeedbackQuestion theme={ feedback }>
                <div className="box">
                    <main className="main">
                        <div className="container-image">
                            <img src={ feedback === 'correct' ? IconFaceCorrect : IconFaceWrong } alt="Ícone de face incorreta." class="image" />
                        </div>

                        <p className="text">
                            Você errou!
                        </p>
                    </main>

                    <footer className="footer">
                        <button className="btn btn-next">Continuar</button>
                    </footer>
                </div>
            </FeedbackQuestion>

            <header className="header">
                <p className="text-question">
                    Questão 01
                </p>

                <DifficultyRate color={ props.color } difficult="normal" />
            </header>

            <main className="main">
                <p className="text">
                    Sobre a conhecida Idade dos Metais, na transição entre a Pré-História e a História, é possível afirmar que
                </p>

                <form action="" className="form" onSubmit={ checkQuestion }>
                    <div className="wrapper-input">
                        <input type="radio" id="alternative-01" name="question-01" value="alternative-01" onChange={(e) => setQuestion01(e.target.value)} />
                        <label className={ (question01 === 'alternative-01') ? 'actived alternative' : 'alternative' } htmlFor="alternative-01">não existe ligação entre o uso dos metais e a formação de grandes impérios</label>
                    </div>

                    <div className="wrapper-input">
                        <input type="radio" id="alternative-02" name="question-01" value="alternative-02" onChange={(e) => setQuestion01(e.target.value)} />
                        <label className={ (question01 === 'alternative-02') ? 'actived alternative' : 'alternative' } htmlFor="alternative-02">apenas o bronze pode efetivamente ser apresentado como o primeiro metal utilizado.</label>
                    </div>

                    <div className="wrapper-input">
                        <input type="radio" id="alternative-03" name="question-01" value="alternative-03" onChange={(e) => setQuestion01(e.target.value)} />
                        <label className={ (question01 === 'alternative-03') ? 'actived alternative' : 'alternative' } htmlFor="alternative-03">foi marcada pela utilização do cobre, bronze e ferro, na produção de armas, instrumentos agrícola</label>
                    </div>

                    <div className="wrapper-input">
                        <input type="radio" id="alternative-04" name="question-01" value="alternative-04" onChange={(e) => setQuestion01(e.target.value)} />
                        <label className={ (question01 === 'alternative-04') ? 'actived alternative' : 'alternative' } htmlFor="alternative-04">a vida nômade dos primeiros grupos humanos foi um estímulo para o uso dos metais.</label>
                    </div>

                    <button className="btn-send" type="submit" onClick={ showFeedback }>RESPONDER</button>
                </form>
            </main>
        </WrapperQuestion>
    );
}

export default Question