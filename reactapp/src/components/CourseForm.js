import React, { useState } from 'react';
import { addCourse } from '../api';

function CourseForm() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [quizInput, setQuizInput] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const quiz = quizInput
            .split('\n')
            .map(q => q.trim())
            .filter(q => q.includes('*'));

        await addCourse({ title, description, quizQuestions: quiz });
        alert('Course added successfully!');
        setTitle('');
        setDescription('');
        setQuizInput('');
    };

    return (
        <div className="form-container">
            <h2>Add New Course</h2>
            <form onSubmit={handleSubmit}>
                <label>Course Title</label>
                <input
                    type="text"
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                    placeholder="Course Title"
                    required
                />
                <label>Description</label>
                <textarea
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                    placeholder="Course Description"
                    required
                />
                <label>Quiz Questions (format: question*answer, one per line)</label>
                <textarea
                    value={quizInput}
                    onChange={e => setQuizInput(e.target.value)}
                    placeholder="What is JVM?*Java Virtual Machine"
                    rows={5}
                />
                <button type="submit">Add Course</button>
            </form>
        </div>
    );
}

export default CourseForm;
