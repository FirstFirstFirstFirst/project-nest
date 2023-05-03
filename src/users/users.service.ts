import { Injectable, NotFoundException } from '@nestjs/common';
import { IUsers } from './interface/users.interface';

@Injectable()
export class UsersService {
  users = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Sarah' },
  ];
  findAll(): IUsers[] {
    return this.users;
  }
  insert(name: string): { message: string } {
    const id = this.users[this.users.length - 1].id + 1;
    const user = { id, name };
    this.users.push(user);
    return { message: 'success' };
  }
  update(id: number, name: string): { message: string } {
    const index = this.users.findIndex((user) => user.id === id);
    if (index === -1) throw new NotFoundException('User is not found');
    this.users[index].name = name;
    return { message: 'Updated successfully!' };
  }
  delete(id: number): { message: string } {
    this.users = this.users.filter((user) => user.id !== id);
    return { message: `Delete id ${id} us successfully!` };
  }
}
