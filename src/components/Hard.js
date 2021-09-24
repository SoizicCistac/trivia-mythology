import React, {useState, useEffect} from "react";
import "../App.css"

import Questions from "../components/Questions";

function Hard(){

    const [questions, setQuestions] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [gameEnded, setGameEnded] = useState(false);

    useEffect(()=> {
        fetch("https://opentdb.com/api.php?amount=10&category=20&difficulty=hard")
            .then((resp) => resp.json())
            .then((data)=>{
                setQuestions(data.results);
            })
    }, [])

    const handleAnswer = (answer) => {
        const newIndex = currentIndex + 1
        setCurrentIndex(newIndex);

        if ( answer === questions[currentIndex].correct_answer){
            setScore(score+1)
        }
   
        if (newIndex >= questions.length){
            setGameEnded(true)
        }
    } 

    return gameEnded ? (
        <div>
            Your score is {score}/10
        </div>
        ) : questions.length > 0 ? (
            <div>
                <Questions 
                        data={questions[currentIndex]} 
                        handleAnswer={handleAnswer}
                    />
                )
            </div>
        ) : (
            <h2>Loading...</h2>
        );
}

export default Hard;