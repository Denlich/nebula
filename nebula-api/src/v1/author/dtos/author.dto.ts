import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, MinLength, MaxLength } from 'class-validator';
import { validationOptionsMsg } from 'src/v1/common/utils/GLOBAL';

export class AuthorDto {
  @ApiProperty({
    description: "Author's first name",
  })
  @IsNotEmpty(validationOptionsMsg('First name cannot be empty'))
  @MinLength(2, validationOptionsMsg('First name is too short (min: 2)'))
  @MaxLength(50, validationOptionsMsg('First name is too long (max: 50)'))
  firstName: string;

  @ApiProperty({
    description: "Author's last name",
  })
  @IsNotEmpty(validationOptionsMsg('Last name cannot be empty'))
  @MinLength(2, validationOptionsMsg('Last name is too short (min: 2)'))
  @MaxLength(50, validationOptionsMsg('Last name is too long (max: 50)'))
  lastName: string;

  @ApiProperty({
    description: "Author's biography",
  })
  @IsNotEmpty(validationOptionsMsg('Biography cannot be empty'))
  @MinLength(10, validationOptionsMsg('Biography is too short (min: 10)'))
  @MaxLength(500, validationOptionsMsg('Biography is too long (max: 500)'))
  biography: string;

  @ApiProperty({
    description: "Author's date of birth",
  })
  @IsNotEmpty(validationOptionsMsg('Date of birth cannot be empty'))
  dateOfBirth: Date;

  @ApiProperty({
    description: "Author's date of death",
  })
  dateOfDeath?: Date;

  @ApiProperty({
    description: "Author's avatar",
  })
  avatar?: string;
}
