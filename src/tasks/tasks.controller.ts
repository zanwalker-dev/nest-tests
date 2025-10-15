import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
  constructor(private readonly taskService: TasksService) {}

  @Get()
  getTasks() {
    return this.taskService.getTasks();
  }

  @Get('test')
  getTasksTest(): string {
    return 'Teste em tasks';
  }
  @Get(':id')
  getOneTask(@Param('id') id: string) {
    console.log(id);
    return this.taskService.findOneTask();
  }

  @Post()
  createTask(@Body() body: any) {
    console.log(body);
    return 'rota para criar task';
  }
}
