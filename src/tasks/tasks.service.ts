/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
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

  findOneTask(id: string) {
    return this.tasks.find((task) => task.id === Number(id));
  }

  create(body: any) {
    const newId: number = this.tasks.length + 1;
    const newTask: any = {
      id: newId,
      ...body,
    };
    this.tasks.push(newTask);
    return newTask;
  }
}
