import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCourses, updateProgress } from '../api';

function ProgressTracker() {
    const { id } = useParams();
    const [course, setCourse] = useState(null);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        fetchCourses().then(res => {
            const found = res.data.find(c => c.id === parseInt(id));
            setCourse(found);
            if (found && found.progress && found.progress['john_doe'] !== undefined) {
                setProgress(found.progress['john_doe']);
            }
        });
    }, [id]);

    const handleUpdate = async () => {
        await updateProgress(id, 'john_doe', progress);
        alert('Progress updated successfully!');
    };

    if (!course) return <p>Loading...</p>;

    return (
        <div className="progress-container">
            <h2>Progress: {course.title}</h2>
            <label>Progress (0-100):</label>
            <input
                type="number"
                min="0"
                max="100"
                value={progress}
                onChange={e => setProgress(e.target.value)}
            />
            <button onClick={handleUpdate}>Update Progress</button>
        </div>
    );
}

export default ProgressTracker;
