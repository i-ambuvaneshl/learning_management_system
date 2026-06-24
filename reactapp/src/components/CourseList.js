import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchCourses, enrollInCourse } from '../api';

function CourseList() {
    const [courses, setCourses] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetchCourses().then(res => setCourses(res.data));
    }, []);

    const handleEnroll = async (id) => {
        await enrollInCourse(id, 'john_doe');
        alert('Enrolled successfully!');
    };

    return (
        <div className="course-list">
            <h2>Available Courses</h2>
            {courses.length === 0 && <p>No courses available.</p>}
            {courses.map(course => (
                <div key={course.id} className="course-card">
                    <h3>{course.title}</h3>
                    <p>{course.description}</p>
                    <div className="course-actions">
                        <button onClick={() => handleEnroll(course.id)}>Enroll</button>
                        <button onClick={() => navigate(`/progress/${course.id}`)}>Progress</button>
                        <button onClick={() => navigate(`/quiz/${course.id}`)}>Take Quiz</button>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default CourseList;
