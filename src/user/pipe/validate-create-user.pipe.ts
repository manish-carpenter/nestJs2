import { ArgumentMetadata, HttpException, HttpStatus, Injectable, PipeTransform } from '@nestjs/common';
import { userDTO } from '../DTOs/userdata.dto';

@Injectable()
export class ValidateCreateUserPipe implements PipeTransform {
  transform(value: userDTO, metadata: ArgumentMetadata) {
    console.log('Inside the pipes');
    console.log(value);
    console.log(metadata);

    const parseAgeToInt = parseInt(value.age);

    if(isNaN(parseAgeToInt)){
      console.log(`${value} is not a number`);
      throw new HttpException('Invalid data type for property age, expectected number.', HttpStatus.BAD_REQUEST);
    }
    return { ...value, age: parseAgeToInt };
  }
}
