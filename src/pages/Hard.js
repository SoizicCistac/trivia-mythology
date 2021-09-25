import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import "../App.css"

import Minotaur from "../img/minotaur.svg";
import Hercules from "../img/hercules.svg";
import Olympus from "../img/olympus.svg";

import Questions from "../components/Questions";
import Footer from "../components/Footer";

function Hard(){

    const [questions, setQuestions] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [showAnswers, setShowAnswers] = useState(false);

    useEffect(()=> { //récupère les données de l'API Open Trivia DB
        fetch("https://opentdb.com/api.php?amount=10&category=20&difficulty=hard")
            .then((resp) => resp.json())
            .then((data)=>{
                const questions = data.results.map((question) =>
                ({
                    ...question,
                    answers: [
                        question.correct_answer,
                        ...question.incorrect_answers,
                    ].sort(() => Math.random() - 0.5 ), //stock la question et les différentes réponses, 
                                                        //les réponses sont stockées en aléatoire pour que la réponse correcte ne soit pas toujours en premier

                }))

                setQuestions(questions); // met à jour la variable questions avec les données récupérées de l'API
            });
    }, []);

    const handleAnswer = (answer) => { // montre la réponse correcte après le choix du joueur, augmente le score si réponse correcte
        
        if (!showAnswers){
            if ( answer === questions[currentIndex].correct_answer){
                setScore(score+1)
            }
        }
        
        setShowAnswers(true)
    } 

    const handleNextQuestion = () => { // remet toutes les réponses en neutre, passe à la question suivante
        setShowAnswers(false);

        setCurrentIndex(currentIndex+1);
    }

    const finalScore = () => { // montre le score final et renvoi à la page de choix du niveau
        if (score < 5){
            return(
                <div className="result">
                    <h2>Your score is : {score}/10 !</h2>
                    <img className="imgResult" src={Minotaur} alt="Minotaur"/>
                    <p>Too bad, Minotaur beated you... try again to improve your score!</p>
                    <Link to="/level">Try again</Link>
                    <Footer/>
                </div>
            )
        } else if (score < 7){
            return(
                <div className="result">
                    <h2>Your score is : {score}/10 !</h2>
                    <img className="imgResult" src={Hercules} alt="Hercules"/>
                    <p>Not that bad, little beetle... But you need to improve a little bit more.... Try again!</p>
                    <Link to="/level">Try again</Link>
                    <Footer/>
                </div>
            )
        } else if ( score >= 7){
            return(
                <div className="result">
                    <h2>Your score is : {score}/10 !</h2>
                    <img className="imgResult" src={Olympus} alt="Olympus"/>
                    <p>Wow! No wonder you might be a God/Goddess in another life. You just got your ticket to the Olympus. Congratulations!</p>
                    <Link to="/level">Try again</Link>
                    <Footer/>
                </div>
            )
        }
    }

    return questions.length > 0 ? (
            <div>
                {currentIndex >= questions.length ? ( // à la fin des questions, montre le score final
                    <div>
                        {finalScore()}
                    </div>
                ) : ( // affiche le quizz
                    <Questions //renvoie au component Questions
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