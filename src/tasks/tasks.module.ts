import { Module } from '@nestjs/common';
import { TasksController } from './tasks.controller';
import { Tasks } from './tasks';

@Module({
  imports: [],
  controllers: [TasksController],
  providers: [Tasks],
})
export class TasksModule {}
