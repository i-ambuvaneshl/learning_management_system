package com.examly.springapp.service;

import com.examly.springapp.model.CourseModule;
import com.examly.springapp.repository.CourseModuleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CourseModuleService {

    @Autowired
    private CourseModuleRepository courseModuleRepository;

    public List<CourseModule> getAllCourses() {
        return courseModuleRepository.findAll();
    }

    public CourseModule addCourse(CourseModule course) {
        return courseModuleRepository.save(course);
    }

    public CourseModule enrollStudent(Long id, String student) {
        CourseModule course = courseModuleRepository.findById(id).orElseThrow();
        if (!course.getEnrolledStudents().contains(student)) {
            course.getEnrolledStudents().add(student);
            courseModuleRepository.save(course);
        }
        return course;
    }

    public CourseModule updateProgress(Long id, String student, int progress) {
        CourseModule course = courseModuleRepository.findById(id).orElseThrow();
        course.getProgress().put(student, progress);
        return courseModuleRepository.save(course);
    }

    public List<String> getQuiz(Long id) {
        CourseModule course = courseModuleRepository.findById(id).orElseThrow();
        return course.getQuizQuestions();
    }

    public String submitQuiz(Long id, String student, int score) {
        CourseModule course = courseModuleRepository.findById(id).orElseThrow();
        course.getScores().put(student, score);
        courseModuleRepository.save(course);
        return "Score submitted!";
    }
}
