import { Injectable } from '@nestjs/common';

@Injectable()
export class TasksService {
  private tasks = [];

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
