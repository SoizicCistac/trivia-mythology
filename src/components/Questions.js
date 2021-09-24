import React from "react";
import "../App.css"

const Button = ({answer, className}) => (
    <button className={className}>{answer}</button>
)

const Questions = ({ 
    handleAnswer, data: {question, correct_answer, incorrect_answers}}) => {
        const shuffledAnswers = [correct_answer, ...incorrect_answers].sort(() => Math.random() - 0.5);

        return( 
    <div> 
        <div>
            <h1 dangerouslySetInnerHTML={{__html: question}}/>
        </div>
        <div className="answers">
            {shuffledAnswers.map(answer => (
                <button
                    onClick={()=>handleAnswer(answer)}
                    dangerouslySetInnerHTML={{__html: answer}}
                />
            ))}
            
        </div>
    </div>
    
)};

export default Questions;