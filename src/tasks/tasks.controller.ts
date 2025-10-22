/* eslint-disable @typescript-eslint/no-unsafe-return */
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
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
    return this.taskService.findOneTask(id);
  }

  @Post('create')
  createTask(@Body() body: any) {
    console.log(body);
    return this.taskService.create(body);
  }

  @Patch(':id')
  updateTask(@Param('id') id: string, @Body() body: any) {
    return this.taskService.update(id, body);
  }

  @Delete(':id')
  deleteTask(@Param('id') id: string) {
    return this.taskService.delete(id);
  }
}
