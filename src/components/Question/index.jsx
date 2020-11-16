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
    const [difficult, setDifficult] = useState('medium');

    function getDiscipline(theme) {
        switch(theme) {
            case 'theme-01':
                return 23;
            case 'theme-02':
                return 22;
            case 'theme-03':
                return 20;
            case 'theme-04':
                return 21;
            case 'theme-05':
                return 24;
            case 'theme-06':
                return 9;
            default:
                return ''
        }
    } 

    useEffect(async () => {
        const response = await fetch(`https://opentdb.com/api.php?amount=10&category=${ getDiscipline(props.theme) }&difficulty=${ difficult }&type=multiple`);
        const data = await response.json();

        localStorage.setItem("correct", 0);
        localStorage.setItem("wrong", 0);
        localStorage.setItem("easy-correct", 0);
        localStorage.setItem("easy-wrong", 0);
        localStorage.setItem("medium-correct", 0);
        localStorage.setItem("medium-wrong", 0);
        localStorage.setItem("hard-correct", 0);
        localStorage.setItem("hard-wrong", 0);
        localStorage.setItem("penultimate", '');
        localStorage.setItem("last", '');

        return setDataApi(data.results);
    }, [ difficult ]);

    function showFeedback() {
        if(question01 === 'alternative-4') {
            controllingAnswersCorrect();

            localStorage.setItem("penultimate", localStorage.getItem("last"));
            localStorage.setItem("last", 1);

            return setFeedback('correct');
        }else {
            controllingAnswersWrong();

            localStorage.setItem("penultimate", localStorage.getItem("last"));
            localStorage.setItem("last", 0);
            
            return setFeedback('wrong');
        }
    }

    function changeDifficult() {
        if(parseInt(localStorage.getItem("last")) === 0 && parseInt(localStorage.getItem("penultimate")) === 0) {
            switch (difficult) {
                case 'hard':
                    return setDifficult('medium')
                case 'medium':
                    return setDifficult('easy')
                case 'easy':
                    return setDifficult('easy')
            }
        }

        if(parseInt(localStorage.getItem("last")) === 1 && parseInt(localStorage.getItem("penultimate")) === 1) {
            switch (difficult) {
                case 'easy':
                    return setDifficult('medium')
                case 'medium':
                    return setDifficult('hard')
                case 'hard':
                    return setDifficult('hard')
            }
        }
    }

    function checkQuestion(e) {
        e.preventDefault();
    }

    function nextQuestion() {
        setFeedback('');
        setQuestion01(0);
        setIdQuestion( idQuestion + 1 );
        changeDifficult();
    }

    function controllingAnswersCorrect() {
        localStorage.setItem("correct", parseInt(localStorage.getItem("correct")) + 1);

        switch(difficult) {
            case 'easy':
                return localStorage.setItem("easy-correct", parseInt(localStorage.getItem("easy-correct")) + 1);
            case 'medium':
                return localStorage.setItem("medium-correct", parseInt(localStorage.getItem("medium-correct")) + 1);
            case 'hard':
                return localStorage.setItem("hard-correct", parseInt(localStorage.getItem("hard-correct")) + 1);
            default:
                return ''
        }
    }

    function controllingAnswersWrong() {
        localStorage.setItem("wrong", parseInt(localStorage.getItem("wrong")) + 1);

        switch(difficult) {
            case 'easy':
                return localStorage.setItem("easy-wrong", parseInt(localStorage.getItem("easy-wrong")) + 1);
            case 'medium':
                return localStorage.setItem("medium-wrong", parseInt(localStorage.getItem("medium-wrong")) + 1);
            case 'hard':
                return localStorage.setItem("hard-wrong", parseInt(localStorage.getItem("hard-wrong")) + 1);
            default:
                return ''
            
        }
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
                            ( (idQuestion + 1) >= 10 ) ? <Link to={`/resultado/${ props.theme }`}><button className="btn btn-next">Continuar</button></Link> : <button className="btn btn-next" onClick={nextQuestion}>Continuar</button>
                        }
                    </footer>
                </div>
            </FeedbackQuestion>

            <header className="header">
                <p className="text-question">
                    {`Questão ${ idQuestion + 1 }`}
                </p>

                <DifficultyRate color={ props.color } difficult={ difficult } />
            </header>

            <main className="main">
                <p className="text">
                    { (dataApi.length > 0) && dataApi[idQuestion].question }
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