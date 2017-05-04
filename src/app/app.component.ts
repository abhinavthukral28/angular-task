import { Component } from '@angular/core';
import { Task } from "./model/task"
@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private tasks = [
    new Task(
      "Get started on laundry",
      false
    ),
    new Task(
      "Brush your teeth",
      false
    )
  ]
}
