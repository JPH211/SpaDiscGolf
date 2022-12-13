import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Course } from '../models/course.model';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  constructor(private http: HttpClient) {}

  createAndStoreCourse(course: Course) {
    return this.http.post(
      'https://spadiscgolf-default-rtdb.firebaseio.com/courses.json',
      course
    );
  }

  getAllCourses(): Observable<Course[]> {
    return this.http
      .get<{ [key: string]: Course }>(
        'https://spadiscgolf-default-rtdb.firebaseio.com/courses.json'
      )
      .pipe(
        map((res) => {
          const result = [];
          for (let key in res) {
            const courseData = res[key];
            result.push(new Course(courseData.name, courseData.holes, key));
          }
          return result;
        })
      );
  }

  deleteCourse() {}

  getCourse(id: string): Observable<Course> {
    return this.http
      .get<Course>(
        `https://spadiscgolf-default-rtdb.firebaseio.com/courses/${id}.json`
      )
      .pipe(
        map((res) => {
          return new Course(res.name, res.holes, id);
        })
      );
  }
}
