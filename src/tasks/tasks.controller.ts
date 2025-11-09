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
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

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
  createTask(@Body() createTaskDto: CreateTaskDto) {
    console.log(createTaskDto);
    return this.taskService.create(createTaskDto);
  }

  @Patch(':id')
  updateTask(@Param('id') id: string, @Body() updateTaskDto: UpdateTaskDto) {
    return this.taskService.update(id, updateTaskDto);
  }

  @Delete(':id')
  deleteTask(@Param('id') id: string) {
    return this.taskService.delete(id);
  }
}
