import React from "react";
import "../App.css"

const Questions = ({ 
    showAnswers,
    handleAnswer,
    handleNextQuestion, 
    data: {question, correct_answer, answers}}) => { //récupère les variables depuis les pages Medium, Hard, Easy, AnyDifficulty
        
        return( 
    <div> 
        <div>
            <h1 dangerouslySetInnerHTML={{__html: question}} /* Affiche la question récupérée par l'API *//> 
        </div>
        <div className="answers">
            {answers.map(answer => { // change le className de la réponse selon si réponse correcte ou incorrecte
                const bgColor = showAnswers 
                ? answer === correct_answer 
                    ? 'correct' 
                    : 'incorrect' 
                    : 'noanswer';

                return(

                <button // affiche un bouton par réponse
                    className={bgColor} 
                    onClick={()=>handleAnswer(answer)}
                    dangerouslySetInnerHTML={{__html: answer}}
                />
            )})}
            {showAnswers && (
                <button // bouton pour passer à la question suivante une fois les réponses affichées
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