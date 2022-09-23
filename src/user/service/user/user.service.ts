import { Injectable } from '@nestjs/common';
import { CreateUserType } from '../../utils/type';
import { userDTO } from '../../DTOs/userdata.dto';

@Injectable()
export class UserService {
  private users = [
    {
      name: 'Abc',
      email: 'gmail',
    },
    {
      username: 'Abc',
      email: 'gmail',
    },
  ];

  fetchUser() {
    return this.users;
  }

  createUser(user: userDTO) {
    this.users.push(user);
  }

  fetchUserById(id: number) {
    return {id: 1, name: 'asdf', email: 'abc@gmail.com'};
  }


}
