import { Component, OnInit } from '@angular/core';
import { Course } from '../models/course.model';
import { FeedService } from '../shared/feed.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  courses: Course[] = [];

  constructor(private feedService: FeedService) { }

  ngOnInit(): void {
  }

}
