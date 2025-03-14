import { Controller ,Post,Body, UsePipes, ValidationPipe,Get,HttpCode, Param} from '@nestjs/common';
import { UsersService } from './users.service';
import { GenerateUser } from './dtos/generateUser.dto';
import { Response } from 'express';

@Controller('users')
export class UsersController {
    constructor(private userService: UsersService){}

    @Post()
    @UsePipes(ValidationPipe)
    @HttpCode(200)
    generateUser(@Body() userData:GenerateUser,res:Response){
        return  this.userService.generateUser(userData);
    }
  
    @Get()
    getAllUsers(res:Response){
        return this.userService.getAllUsers();
    }

    @Get('/:id')
    async getUserById(@Param('id') id: string) {
        const userId = parseInt(id, 10); // ID'yi sayıya çevir
        return this.userService.getUserById(userId);
    }


}
