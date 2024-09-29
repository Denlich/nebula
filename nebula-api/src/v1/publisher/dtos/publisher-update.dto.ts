import { IsNotEmpty, MinLength, MaxLength, IsOptional } from 'class-validator';
import { validationOptionsMsg } from 'src/v1/common/utils/GLOBAL';

export class PublisherUpdateDto {
  @IsOptional()
  @IsNotEmpty(validationOptionsMsg('First name cannot be empty'))
  @MinLength(2, validationOptionsMsg('First name is too short (min: 2)'))
  @MaxLength(50, validationOptionsMsg('First name is too long (max: 50)'))
  name?: string;

  @IsOptional()
  @IsNotEmpty(validationOptionsMsg('Biography cannot be empty'))
  @MinLength(10, validationOptionsMsg('Biography is too short (min: 10)'))
  @MaxLength(500, validationOptionsMsg('Biography is too long (max: 500)'))
  biography?: string;

  @IsOptional()
  avatar?: string;
}
