import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesComponent } from './courses/courses.component';
import { AboutComponent } from './about/about.component';
import { CourseItemComponent } from './course-item/course-item.component';

const routes: Routes = [
  { path: 'courses', component: CoursesComponent },
  { path: 'about', component: AboutComponent },
  { path: 'course-item', component: CourseItemComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
