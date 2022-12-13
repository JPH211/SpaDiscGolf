import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { Course } from '../models/course.model';
import { CoursesService } from '../shared/courses.service';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css'],
})
export class CourseDetailsComponent implements OnInit {
  course?: Course;
  constructor(
    private activatedRoute: ActivatedRoute,
    private coursesService: CoursesService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap
      .pipe(
        switchMap((params: ParamMap) =>
          this.coursesService.getCourse(params.get(`id`)!)
        )
      )
      .subscribe((course) => {
        this.course = course;
      });
  }

  onDeleteCourse() {
    if (!this.course) return;
    this.coursesService.deleteCourse(this.course.id).subscribe((res) => {
      this.router.navigate(['/home']);
    });
  }
}
