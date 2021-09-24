import React, {useState, useEffect} from "react";
import "../App.css"

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

    return questions.length > 0 ? (
            <div>
                {currentIndex >= questions.length ? (
                    <h1>Game ended! Your score is : {score}</h1>
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