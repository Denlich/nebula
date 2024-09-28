import { Role } from '@prisma/client';
import { IsNotEmpty, Matches, MaxLength, MinLength } from 'class-validator';
import {
  ENG_REGEX,
  NUM_REGEX,
  validationOptionsMsg,
} from 'src/v1/common/utils/GLOBAL';

export class UserDto {
  @IsNotEmpty(validationOptionsMsg('Username cannot be empty'))
  @Matches(
    new RegExp('^[' + ENG_REGEX + NUM_REGEX + '_' + ']{2,40}$'),
    validationOptionsMsg(
      'Username is not correct (a-zA-Z0-9_), or too short (min: 2), or too long (max: 40)',
    ),
  )
  username: string;

  @IsNotEmpty(validationOptionsMsg('First name cannot be empty'))
  @MinLength(2, validationOptionsMsg('First name is too short (min: 2)'))
  @MaxLength(50, validationOptionsMsg('First name is too long (max: 50)'))
  firstName: string;

  @IsNotEmpty(validationOptionsMsg('Last name cannot be empty'))
  @MinLength(2, validationOptionsMsg('Last name is too short (min: 2)'))
  @MaxLength(50, validationOptionsMsg('Last name is too long (max: 50)'))
  lastName: string;

  @MinLength(8, validationOptionsMsg('Password is too short (min: 8)'))
  @MaxLength(50, validationOptionsMsg('Password is too long (max: 50)'))
  @Matches(
    /^(?=.*[A-Za-z])(?=.*\d).+$/,
    validationOptionsMsg(
      'The password must include at least 1 digit and 1 letter',
    ),
  )
  @IsNotEmpty(validationOptionsMsg('Password cannot be empty'))
  password: string;

  avatar?: string;

  role?: Role;
}
