import axios from 'axios';

const BASE_URL = 'http://localhost:8080/api/courses';

export const fetchCourses = () => axios.get(BASE_URL);

export const addCourse = (course) => axios.post(BASE_URL, course);

export const enrollInCourse = (courseId, student) =>
    axios.put(`${BASE_URL}/${courseId}/enroll?student=${student}`);

export const updateProgress = (courseId, student, progress) =>
    axios.put(`${BASE_URL}/${courseId}/progress?student=${student}&progress=${progress}`);

export const getQuiz = (courseId) => axios.get(`${BASE_URL}/${courseId}/quiz`);

export const submitQuiz = (courseId, student, score) =>
    axios.post(`${BASE_URL}/${courseId}/quiz?student=${student}&score=${score}`);
