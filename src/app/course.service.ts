import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  courses: string[] = ['Angular', 'React', 'Vue'];
  getCourses() {
    console.log(this.courses);
    return this.courses;
  }



  constructor() { }
}
