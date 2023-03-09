import { Body, Controller, Delete, Get, Inject, Param, Post, Put } from '@nestjs/common';
import { TodosService } from './todos.service';
import { TodoDto } from '../dto/todo-dto';
import { CreateTodoResponse } from '../interfaces/todo';

@Controller('todos')
export class TodosController {

  constructor(
    @Inject(TodosService) private readonly todoService: TodosService,
  ) {
  }

  @Get('/')
  findAll(): TodoDto[] {
    return this.todoService.findAll();
  }

  @Get('/:id')
  findOne(
    @Param('id') id: string): TodoDto {
    return this.todoService.findOne(id);
  }

  @Post('/')
  create(
    @Body() todo: TodoDto,
  ): CreateTodoResponse {
    return this.todoService.create(todo);
  }

  @Put('/:id')
  update(
    @Param('id') id: string,
    @Body() todo: TodoDto
  ): void {
    this.todoService.update(id, todo);
  }

  @Delete('/:id')
  delete(
    @Param('id') id: string
  ): void {
    this.todoService.delete(id);
  }
}
