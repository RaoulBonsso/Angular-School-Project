import { Component } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css'
})
export class CoursesComponent {
  courseName = "Angular Avancé";
  isDisabled = true;
  courseDescription = '';

  startCourse(){
    console.log("Début du cours :", this.courseName);
    this.isDisabled = false;
  }

  courses: string[] = ['Angular', 'React', 'Vue'];


}
