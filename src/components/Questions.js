import React from "react";
import "../App.css"

const Questions = ({ 
    showAnswers,
    handleAnswer,
    handleNextQuestion, 
    data: {question, correct_answer, answers}}) => {
        
        return( 
    <div> 
        <div>
            <h1 dangerouslySetInnerHTML={{__html: question}}/>
        </div>
        <div className="answers">
            {answers.map(answer => { 
                const bgColor = showAnswers 
                ? answer === correct_answer 
                    ? 'correct' 
                    : 'incorrect' 
                    : 'noanswer';

                return(

                <button
                    className={bgColor}
                    onClick={()=>handleAnswer(answer)}
                    dangerouslySetInnerHTML={{__html: answer}}
                />
            )})}
            {showAnswers && (
                <button 
                    className="next"
                    onClick={()=>handleNextQuestion()}
                >
                    Next question
                </button>
            )}
            
            
        </div>
    </div>
    
)};

export default Questions;