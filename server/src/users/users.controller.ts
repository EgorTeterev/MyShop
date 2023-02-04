import { Controller } from '@nestjs/common';
import { Get, Post } from '@nestjs/common/decorators/http/request-mapping.decorator';
import { Body } from '@nestjs/common/decorators/http/route-params.decorator';
import { ApiOperation } from '@nestjs/swagger/dist';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {

  constructor(private userService:UsersService){}

  @ApiOperation({summary:'Создание пользователя'})
  @Post()
  create(@Body() userDto:CreateUserDto){
    return this.userService.createUser(userDto)
  }

  @Get()
  getAll(){
    return this.userService.getAllUsers()}
  

}
