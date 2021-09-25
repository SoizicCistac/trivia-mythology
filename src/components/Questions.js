import React from "react";
import "../App.css"

import Footer from "./Footer";

const Questions = ({ 
    showAnswers,
    handleAnswer,
    handleNextQuestion, 
    data: {question, correct_answer, answers}}) => { //récupère les variables depuis les pages Medium, Hard, Easy, AnyDifficulty
        
        return( 
    <div> 
        <div className="bodyContainer">
            <div>
                <h1 className="question" dangerouslySetInnerHTML={{__html: question}} /* Affiche la question récupérée par l'API *//> 
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
            </div>
                {showAnswers && (
                    <div className='nextBtnDiv'>
                    <button  // bouton pour passer à la question suivante une fois les réponses affichées
                        className="next"
                        onClick={()=>handleNextQuestion()}
                    >
                        Next question
                    </button>
                    </div>
                )}
        </div>
        <Footer/>  
    </div>
    
)};

export default Questions;