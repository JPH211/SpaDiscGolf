import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { CoursesComponent } from './courses/courses.component';
import { CreateCourseComponent } from './create-course/create-course.component';
import { EditCourseComponent } from './edit-course/edit-course.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch:'full'},
  { path: 'home', component: HomeComponent },
  { path: 'courses/create', component: CreateCourseComponent},
  { path: 'courses/:id/edit', component: EditCourseComponent},
  { path: 'courses/:id', component: CourseDetailsComponent},
  { path: 'courses', component: CoursesComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
