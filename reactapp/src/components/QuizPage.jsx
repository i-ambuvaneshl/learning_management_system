import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getQuiz, submitQuiz } from '../api';

function QuizPage() {
    const { id } = useParams();
    const [questions, setQuestions] = useState([]);
    const [answers, setAnswers] = useState({});

    useEffect(() => {
        getQuiz(id).then(res => setQuestions(res.data));
    }, [id]);

    const handleAnswerChange = (index, value) => {
        setAnswers(prev => ({ ...prev, [index]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        let score = 0;
        questions.forEach((q, i) => {
            const parts = q.split('*');
            if (parts[1] && parts[1].trim().toLowerCase() === (answers[i] || '').trim().toLowerCase()) {
                score++;
            }
        });
        const finalScore = questions.length > 0 ? Math.round((score / questions.length) * 100) : 0;
        await submitQuiz(id, 'john_doe', finalScore);
        alert(`Quiz submitted! Your score: ${finalScore}`);
    };

    return (
        <div className="quiz-container">
            <h2>Quiz</h2>
            {questions.length === 0 && <p>No quiz questions available.</p>}
            <form onSubmit={handleSubmit}>
                {questions.map((q, i) => {
                    const question = q.split('*')[0];
                    return (
                        <div key={i} className="quiz-question">
                            <p>{i + 1}. {question}</p>
                            <input
                                type="text"
                                placeholder="Your answer"
                                value={answers[i] || ''}
                                onChange={e => handleAnswerChange(i, e.target.value)}
                            />
                        </div>
                    );
                })}
                {questions.length > 0 && <button type="submit">Submit Quiz</button>}
            </form>
        </div>
    );
}

export default QuizPage;
