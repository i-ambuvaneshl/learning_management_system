import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Home from './components/Home.jsx';
import CourseList from './components/CourseList.jsx';
import CourseForm from './components/CourseForm.jsx';
import ProgressTracker from './components/Progress Tracker.jsx';
import QuizPage from './components/QuizPage.jsx';
import Footer from './components/Footer.jsx';
import './App.css';

function App() {
    return (
        <Router>
            <Navbar />
            <div className="main-content">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/courses" element={<CourseList />} />
                    <Route path="/add" element={<CourseForm />} />
                    <Route path="/progress/:id" element={<ProgressTracker />} />
                    <Route path="/quiz/:id" element={<QuizPage />} />
                </Routes>
            </div>
            <Footer />
        </Router>
    );
}

export default App;
