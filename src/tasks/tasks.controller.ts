import { Controller, Get } from '@nestjs/common';

@Controller('/tasks')
export class TasksController {
  @Get('/list')
  getTasksList(): string {
    return 'Aqui a lista de tasks';
  }
}
