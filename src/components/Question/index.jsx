import React, { useState, useEffect } from 'react';

import { Link } from "react-router-dom";

import { WrapperQuestion, FeedbackQuestion } from './styles';

import IconFaceCorrect from '../../assets/images/icon-face-correct.svg';
import IconFaceWrong from '../../assets/images/icon-face-wrong.svg';

import DifficultyRate from '../DifficultyRate';

function Question(props) {
    const [question01, setQuestion01] = useState('');
    const [feedback, setFeedback] = useState('');
    const [dataApi, setDataApi] = useState([]);
    const [idQuestion, setIdQuestion] = useState(0);

    useEffect(async () => {
        const response = await fetch('https://opentdb.com/api.php?amount=10&category=23&difficulty=medium&type=multiple');
        const data = await response.json();

        console.log( data );

        return setDataApi(data.results);
    }, []);

    function showFeedback() {
        if(question01 === 'alternative-4') {
            setFeedback('correct');
        }else {
            setFeedback('wrong');
        }
    }

    function checkQuestion(e) {
        e.preventDefault();
    }

    function nextQuestion() {
        setFeedback('');
        setQuestion01('');
        setIdQuestion( idQuestion + 1 );
    }

    return(
        <WrapperQuestion color={ props.color }>
            <FeedbackQuestion theme={ feedback }>
                <div className="box">
                    <main className="main">
                        <div className="container-image">
                            <img src={ feedback === 'correct' ? IconFaceCorrect : IconFaceWrong } alt="Ícone de face incorreta." className="image" />
                        </div>

                        <p className="text">
                            { feedback === 'correct' ? 'Você acertou!' : 'Você errou!' }
                            
                        </p>
                    </main>

                    <footer className="footer">
                        {
                            ( (idQuestion + 1) >= 10 ) ? <Link to="/resultado/theme-01"><button className="btn btn-next">Continuar</button></Link> : <button className="btn btn-next" onClick={nextQuestion}>Continuar</button>
                        }

                        
                    </footer>
                </div>
            </FeedbackQuestion>

            <header className="header">
                <p className="text-question">
                    {`Questão ${ idQuestion + 1 }`}
                </p>

                <DifficultyRate color={ props.color } difficult="normal" />
            </header>

            <main className="main">
                <p className="text">
                    Sobre a conhecida Idade dos Metais, na transição entre a Pré-História e a História, é possível afirmar que
                </p>

                <form action="" className="form" onSubmit={ checkQuestion }>
                    {
                        (dataApi.length > 0) && dataApi[idQuestion].incorrect_answers.map((question, id) => (
                            <div className="wrapper-input" key={id}>
                                <input type="radio" id={`alternative-` + (id + 1)} name={`alternative-` + (idQuestion + 1 )} value={`alternative-` + (id + 1)} onChange={(e) => setQuestion01(e.target.value)} />
                                <label className={ (question01 === `alternative-` + (id + 1)) ? 'actived alternative' : 'alternative' } htmlFor={`alternative-` + (id + 1)}>
                                    { question }
                                </label>
                            </div>
                        ))
                    }

                    <div className="wrapper-input">
                        <input type="radio" id="alternative-4" name={`alternative-` + (idQuestion + 1 )} value="alternative-4"  onChange={(e) => setQuestion01(e.target.value)} />
                        <label className={ (question01 === "alternative-4") ? 'actived alternative' : 'alternative' } htmlFor="alternative-4" >
                            {  (dataApi.length > 0) && dataApi[idQuestion].correct_answer }
                        </label>
                    </div>

                    <button className="btn-send" type="submit" onClick={ showFeedback }>RESPONDER</button>
                </form>
            </main>
        </WrapperQuestion>
    );
}

export default Question