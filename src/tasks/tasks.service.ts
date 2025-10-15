import { Injectable } from '@nestjs/common';
import { Task } from './entities/task.entity';

@Injectable()
export class TasksService {
  private tasks: Task[] = [
    {
      id: 1,
      name: 'Task example 01',
      description: 'description example 01',
      completed: false,
    },
  ];

  getTasks() {
    return this.tasks;
  }

  findOneTask() {
    return 'Task especifica';
  }

  create(body: object) {
    return body;
  }
}
