import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { CoursesService } from '../shared/courses.service';

@Component({
  selector: 'app-create-course',
  templateUrl: './create-course.component.html',
  styleUrls: ['./create-course.component.css'],
})
export class CreateCourseComponent implements OnInit {
  form: FormGroup;

  constructor(private courseService: CoursesService) {
    this.form = new FormGroup({
      name: new FormControl(),
      holes: new FormArray([], [Validators.required, Validators.minLength(1)] ),
    });
  }

  ngOnInit(): void {}

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
    this.courseService.createAndStoreCourse(this.form.value).subscribe();
  }

  get holesArray() {
    return this.form.get('holes') as FormArray<FormGroup>;
  }
}
