import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-course-item',
  templateUrl: './course-item.component.html',
  styleUrls: ['./course-item.component.css'] // Corrigez 'styleUrl' en 'styleUrls'
})
export class CourseItemComponent {
  @Input() courseName: string = '';

  @Output() courseSelected = new EventEmitter<string>();

  selectCourse() {
    this.courseSelected.emit();
  }
}
