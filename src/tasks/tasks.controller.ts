import { Controller, Get } from '@nestjs/common';

@Controller('tasks')
export class TasksController {
  @Get()
  getTasks(): string {
    return 'listando as tasks';
  }

  @Get('test')
  getTasksTest(): string {
    return 'Teste em tasks';
  }
}
