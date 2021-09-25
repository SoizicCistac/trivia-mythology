import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import "../App.css"

import Minotaur from "../img/minotaur.svg";
import Hercules from "../img/hercules.svg";
import Olympus from "../img/olympus.svg";

import Questions from "../components/Questions";

function Hard(){

    const [questions, setQuestions] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [showAnswers, setShowAnswers] = useState(false);

    useEffect(()=> {
        fetch("https://opentdb.com/api.php?amount=10&category=20&difficulty=hard")
            .then((resp) => resp.json())
            .then((data)=>{
                const questions = data.results.map((question) =>
                ({
                    ...question,
                    answers: [
                        question.correct_answer,
                        ...question.incorrect_answers,
                    ].sort(() => Math.random() - 0.5 ),
                }))

                setQuestions(questions);
            });
    }, []);

    const handleAnswer = (answer) => {
        
        if (!showAnswers){
            if ( answer === questions[currentIndex].correct_answer){
                setScore(score+1)
            }
        }
        
        setShowAnswers(true)
    } 

    const handleNextQuestion = () => {
        setShowAnswers(false);

        setCurrentIndex(currentIndex+1);
    }

    const finalScore = () => {
        if (score < 5){
            return(
                <div>
                    <h2>Your score is : {score}/10 !</h2>
                    <img className="imgResult" src={Minotaur} alt="Minotaur"/>
                    <p>Too bad, Minotaur beated you... try again to improve your score!</p>
                    <Link to="/">Try again</Link>
                </div>
            )
        } else if (score < 7){
            return(
                <div>
                    <h2>Your score is : {score}/10 !</h2>
                    <img className="imgResult" src={Hercules} alt="Hercules"/>
                    <p>Not that bad, little beetle... But you need to improve a little bit more.... Try again!</p>
                    <Link to="/">Try again</Link>
                </div>
            )
        } else if ( score >= 7){
            return(
                <div>
                    <h2>Your score is : {score}/10 !</h2>
                    <img className="imgResult" src={Olympus} alt="Olympus"/>
                    <p>Wow! No wonder you might be a God/Goddess in another life. You just got your ticket to the Olympus. Congratulations!</p>
                    <Link to="/">Try again</Link>
                </div>
            )
        }
    }

    return questions.length > 0 ? (
            <div>
                {currentIndex >= questions.length ? (
                    <div>
                        {finalScore()}
                    </div>
                ) : (
                <Questions 
                        data={questions[currentIndex]} 
                        showAnswers={showAnswers}
                        handleAnswer={handleAnswer}
                        handleNextQuestion={handleNextQuestion}
                    />
                )}
            </div>
        ) : (
            <h2>Loading...</h2>
        );
}

export default Hard;