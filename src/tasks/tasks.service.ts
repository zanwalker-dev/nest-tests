import { Injectable } from '@nestjs/common';
import { Task } from './entities/task.entity';

@Injectable()
export class TasksService {
  private tasks: Task[] = [];

  getTasks() {
    return [{ id: 1, task: 'comprar pão' }];
  }

  findOneTask() {
    return 'Task especifica';
  }

  create(body: object) {
    return body;
  }
}
