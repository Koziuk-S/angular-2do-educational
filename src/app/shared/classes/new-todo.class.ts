import { ITodo } from '../interfaces';

export class NewTodo implements ITodo {
  constructor(
    public title: string,
    public description: string,
    public done: boolean = false,
    public isDescription: boolean = false
  ) { }
}
