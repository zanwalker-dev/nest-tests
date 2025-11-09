import {
  // HttpException,
  // HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Task } from './entities/task.entity';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

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

  findOneTask(id: number) {
    const task = this.tasks.find((task) => task.id === id);

    if (task) return task;

    // throw new HttpException('Tarefa não existe', HttpStatus.NOT_FOUND);
    throw new NotFoundException('Essa tarefa não existe');
  }

  create(createTaskDto: CreateTaskDto) {
    const newId: number = this.tasks.length + 1;
    const newTask: Task = {
      id: newId,
      ...createTaskDto,
      completed: false,
    };
    this.tasks.push(newTask);
    return newTask;
  }

  update(id: string, updateTaskDto: UpdateTaskDto) {
    const taskIndex = this.tasks.findIndex((task) => task.id === Number(id));

    if (taskIndex >= 0) {
      const taskItem = this.tasks[taskIndex];

      this.tasks[taskIndex] = {
        ...taskItem,
        ...updateTaskDto,
      };
      return 'tarefa atualizada';
    }

    throw new NotFoundException('Essa tarefa não existe');
  }

  delete(id: string) {
    const taskIndex = this.tasks.findIndex((task) => task.id === Number(id));

    if (taskIndex < 0) {
      throw new NotFoundException('Essa tarefa não existe');
    }
    this.tasks.splice(taskIndex, 1);
    return `Tarefa excluida`;
  }
}
