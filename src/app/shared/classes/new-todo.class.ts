import { ITodo } from '../interfaces';

export class NewTodo implements ITodo {
  constructor(
    public title: string,
    public description: string,
    public id: number = 0,
    public done: boolean = false,
    public isDescription: boolean = false
  ) { }
}
