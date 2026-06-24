import React from 'react';
import libraryImg from '../assets/library.jpg';

function Home() {
    return (
        <div className="home-container">
            <img src={libraryImg} alt="Library" className="home-banner" />
            <h1>Welcome to LMS Lite</h1>
            <p>Browse available courses, enroll, track your progress, and take quizzes.</p>
            <p>Use the navigation bar to get started.</p>
        </div>
    );
}

export default Home;
