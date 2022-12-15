import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Course } from '../models/course.model';
import { CoursesService } from '../shared/courses.service';

@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.css'],
})
export class EditCourseComponent implements OnInit {
  form: FormGroup;
  id: string = '';
  name?: string;

  constructor(
    private courseService: CoursesService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.form = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      holes: new FormArray(
        [],
        [Validators.required, Validators.minLength(environment.minHoles)]
      ),
    });
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap
      .pipe(
        switchMap((params: ParamMap) =>
          this.courseService.getCourse(params.get(`id`)!)
        )
      )
      .subscribe((course) => {
        this.form = new FormGroup({
          name: new FormControl(course.name, [Validators.required]),
          holes: new FormArray(
            [],
            [Validators.required, Validators.minLength(environment.minHoles)]
          ),
        });
        for (const hole of course.holes) {
          const newHole = new FormGroup({
            par: new FormControl(hole.par, [
              Validators.min(1),
              Validators.required,
            ]),
            yards: new FormControl(hole.yards, [
              Validators.min(environment.minYards),
              Validators.required,
            ]),
          });
          this.holesArray.push(newHole);
        }
        this.id = course.id;
        this.name = course.name;
      });
  }
  onAddNewHole() {
    const newHole = new FormGroup({
      par: new FormControl(null, [Validators.min(1), Validators.required]),
      yards: new FormControl(null, [Validators.min(10), Validators.required]),
    });
    this.holesArray.push(newHole);
  }

  onDeleteHole(i: number) {
    this.holesArray.removeAt(i);
  }

  onSubmit() {
    this.courseService.updateCourse(this.id, this.form.value).subscribe(() => {
      // this.router.navigate(['/courses', this.id]);
      this.router.navigate(['/home']);
    });
  }

  get holesArray() {
    return this.form.get('holes') as FormArray<FormGroup>;
  }
}
