import { Component } from '@angular/core';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})

export class TasksComponent {

  tasks: any[] = [];
  newTask = '';

  addTask() {

    if (this.newTask) {

      this.tasks.push({
        title: this.newTask,
        completed: false
      });

      this.newTask = '';

    }

  }

  deleteTask(index: number) {
    this.tasks.splice(index, 1);
  }

  toggleTask(task: any) {
    task.completed = !task.completed;
  }

}