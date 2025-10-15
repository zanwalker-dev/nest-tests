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
    return this.taskService.findOneTask();
  }

  @Post('create')
  createTask(@Body() body: object) {
    console.log(body);
    return this.taskService.create(body);
  }

  @Patch(':id')
  updateTask(@Param('id') id: string, @Body() body: any) {
    console.log('ID ', id);
    console.log('body ', body);
    return 'atualizando com patch';
  }

  @Delete(':id')
  deleteTask(@Param('id') id: string) {
    console.log('ID enviado: ', id);

    return 'essa rota deleta uma task';
  }
}
