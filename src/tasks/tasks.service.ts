import { Injectable } from '@nestjs/common';

@Injectable()
export class TasksService {
  getTasks() {
    return [{ id: 1, task: 'comprar pão' }];
  }

  findOneTask() {
    return 'Task especifica';
  }
}
