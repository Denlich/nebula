import { IsNotEmpty, MaxLength, Min, MinLength } from 'class-validator';
import { validationOptionsMsg } from 'src/v1/common/utils/GLOBAL';

export class BookDto {
  @IsNotEmpty(validationOptionsMsg('Title cannot be empty'))
  @MinLength(2, validationOptionsMsg('Title is too short (min: 2)'))
  @MaxLength(50, validationOptionsMsg('Title is too long (max: 50)'))
  title: string;

  @IsNotEmpty(validationOptionsMsg('Price cannot be empty'))
  @Min(0.01, validationOptionsMsg('Price is too low (min: 0.01)'))
  price: number;

  @IsNotEmpty(validationOptionsMsg('Description cannot be empty'))
  @MinLength(10, validationOptionsMsg('Description is too short (min: 10)'))
  @MaxLength(500, validationOptionsMsg('Description is too long (max: 500)'))
  description: string;

  @IsNotEmpty(validationOptionsMsg('Author cannot be empty'))
  authorId: string;

  @IsNotEmpty(validationOptionsMsg('Category cannot be empty'))
  categoryId: string;

  image?: string;
}
