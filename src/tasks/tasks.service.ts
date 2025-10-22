/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
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
    const task = this.tasks.find((task) => task.id === Number(id));

    if (task) return task;

    throw new HttpException('Tarefa não existe', HttpStatus.NOT_FOUND);
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

  update(id: string, body: any) {
    const taskIndex = this.tasks.findIndex((task) => task.id === Number(id));

    if (taskIndex >= 0) {
      const taskItem = this.tasks[taskIndex];

      this.tasks[taskIndex] = {
        ...taskItem,
        ...body,
      };
      return 'tarefa atualizada';
    }
  }
}
