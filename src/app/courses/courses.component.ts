import { Component, OnInit } from '@angular/core';
import { Course, Hole } from '../models/course.model';
import { CoursesService } from '../shared/courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'],
})
export class CoursesComponent implements OnInit {
  courses?: Course[] = [
  // new Course('Dalhouse', [
  //   new Hole(3, 120),
  //   new Hole(2, 90),
  // ]),
  // new Course('Kebab Town', [
  //   new Hole(3, 120),
  //   new Hole(2, 90),
  //   new Hole(2, 90),
  // ])
  ];

  constructor(private coursesService: CoursesService) {}

  ngOnInit(): void {
    this.coursesService.getAllCourses().subscribe(
      (res) => {
        this.courses = res;
      }
    );
  }

  onDeleteCourse(id: string){
    this.coursesService.deleteCourse(id).subscribe(
      (res) => {
        this.courses = res;
      }
    );

  }

  // initializeData(){
  //   this.coursesService.createAndStoreCourse(this.courses[0]).subscribe();
  //   this.coursesService.createAndStoreCourse(this.courses[1]).subscribe();
  // }
}
