package com.examly.springapp.controller;

import com.examly.springapp.model.CourseModule;
import com.examly.springapp.service.CourseModuleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/courses")
@CrossOrigin(origins = {"http://localhost:8081"})
public class CourseModuleController {

    @Autowired
    private CourseModuleService courseModuleService;

    @GetMapping
    public List<CourseModule> getAllCourses() {
        return courseModuleService.getAllCourses();
    }

    @PostMapping
    public CourseModule addCourse(@RequestBody CourseModule course) {
        return courseModuleService.addCourse(course);
    }

    @PutMapping("/{id}/enroll")
    public CourseModule enrollStudent(@PathVariable Long id, @RequestParam String student) {
        return courseModuleService.enrollStudent(id, student);
    }

    @PutMapping("/{id}/progress")
    public Object updateProgress(@PathVariable Long id,
                                 @RequestParam String student,
                                 @RequestParam int progress) {
        courseModuleService.updateProgress(id, student, progress);
        return Map.of("message", "Progress updated successfully");
    }

    @GetMapping("/{id}/quiz")
    public List<String> getQuiz(@PathVariable Long id) {
        return courseModuleService.getQuiz(id);
    }

    @PostMapping("/{id}/quiz")
    public Object submitQuiz(@PathVariable Long id,
                             @RequestParam String student,
                             @RequestParam int score) {
        String result = courseModuleService.submitQuiz(id, student, score);
        return Map.of("message", result);
    }
}
