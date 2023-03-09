import { Injectable } from '@nestjs/common';
import { TodoDto } from '../dto/todo-dto';
import { CreateTodoResponse } from '../interfaces/todo';

@Injectable()
export class TodosService {
  private todos: TodoDto[] = [];

  findAll(): TodoDto[] {
    return this.todos;
  }

  findOne(id: string): TodoDto {
    return this.todos.find(item => item.id === id);
  }

  create(todo: TodoDto): CreateTodoResponse {
    if (
      todo.description.length < 3
      ||
      todo.description.length > 55
      ||
      todo.description === ''
    ) {
      return {
        isSuccess: false,
        message: 'Task cannot be empty, shorter than 3 characters and later than 55 characters',
      };
    } else {
      this.todos.push(todo);
      return {
        isSuccess: true,
      };
    }
  }

  update(id: string, todo: TodoDto): void {
    const index = this.todos.findIndex(item => item.id === id);
    this.todos[index] = todo;
  }

  delete(id: string): void {
    this.todos.filter(item => item.id !== id);
  }
}
