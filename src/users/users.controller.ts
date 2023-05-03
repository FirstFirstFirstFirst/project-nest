import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDTO, UpdateUserDTO } from './dto/users.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  // CRUD => Create, Read, Update, Delete
  // Read
  @Get()
  fildAll() {
    return this.usersService.findAll();
  }

  //Create { id, name }
  @Post()
  insert(@Body() userBody: CreateUserDTO) {
    return this.usersService.insert(userBody.name);
  }

  //Update
  @Patch('/:id')
  update(@Param('id') id: string, @Body() userBody: UpdateUserDTO) {
    return this.usersService.update(+id, userBody.name);
  }

  //Delete
  @Delete('/:id')
  delete(@Param('id') id: string) {
    return this.usersService.delete(+id);
  }
}
