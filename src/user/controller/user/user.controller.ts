import { Body, Controller, Get, HttpException, HttpStatus, Param, ParseBoolPipe, ParseIntPipe, Post, Query, Req, Res, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { userDTO } from 'src/user/DTOs/userdata.dto';
import { AuthGuard } from 'src/user/guard/auth.guard';
import { ValidateCreateUserPipe } from 'src/user/pipe/validate-create-user.pipe';
import { UserService } from 'src/user/service/user/user.service';


@Controller('user')
export class UserController {
    constructor(private userService: UserService) {}
    
    @UseGuards(AuthGuard)
    @Get('')
    getUser() {
        return this.userService.fetchUser();

    }

    @UsePipes(new ValidationPipe())
    @Post('create')
    createUser(@Body(ValidateCreateUserPipe) userData: userDTO ) {
        return this.userService.createUser(userData);
        
    }

    @Get(':id')
    getUserById(@Param('id', ParseIntPipe) id: number) {
        const user = this.userService.fetchUserById(id);
        if(!user)
            throw new HttpException('User not found', HttpStatus.BAD_REQUEST);
    }
}  
 