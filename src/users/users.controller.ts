import { Controller ,Post,Body, UsePipes, ValidationPipe} from '@nestjs/common';
import { UsersService } from './users.service';
import { GenerateUser } from './dtos/generateUser.dto';

@Controller('users')
export class UsersController {
    constructor(private userService: UsersService){}

    @Post()
    @UsePipes(ValidationPipe)
    generateUser(@Body() userData:GenerateUser){
        return this.userService.generateUser(userData);
    }
}
