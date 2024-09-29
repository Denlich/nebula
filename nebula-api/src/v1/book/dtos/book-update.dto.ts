import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, MinLength, MaxLength, Min } from 'class-validator';
import { validationOptionsMsg } from 'src/v1/common/utils/GLOBAL';

export class BookUpdateDto {
  @ApiProperty({
    description: "Book's title",
  })
  @IsOptional()
  @MinLength(2, validationOptionsMsg('Title is too short (min: 2)'))
  @MaxLength(50, validationOptionsMsg('Title is too long (max: 50)'))
  title?: string;

  @ApiProperty({
    description: "Book's price",
  })
  @IsOptional()
  @Min(0.01, validationOptionsMsg('Price is too low (min: 0.01)'))
  price?: number;

  @ApiProperty({
    description: "Book's description",
  })
  @IsOptional()
  @MinLength(10, validationOptionsMsg('Description is too short (min: 10)'))
  @MaxLength(500, validationOptionsMsg('Description is too long (max: 500)'))
  description?: string;

  @ApiProperty({
    description: "Book's author",
  })
  @IsOptional()
  authorId?: string;

  @ApiProperty({
    description: "Book's category",
  })
  @IsOptional()
  categoryId?: string;

  @ApiProperty({
    description: "Book's image",
  })
  image?: string;
}
