import { Component } from '@angular/core';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css'
})
export class CoursesComponent {
  courseName = "Angular Avancé";
  isDisabled = true;
  courseDescription = '';
  courses: string[];

  startCourse(){
    console.log("Début du cours :", this.courseName);
    this.isDisabled = false;
  }
  constructor(private courseService: CourseService) {
    this.courses = this.courseService.getCourses();
  }

  onCourseSelected(courseName: string) {
    console.log('Cours sélectionné:', courseName);
  }

}
