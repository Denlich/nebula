import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';
import { validationOptionsMsg } from 'src/v1/common/utils/GLOBAL';

export class CategoryDto {
  @ApiProperty({
    description: "Category's name",
  })
  @IsNotEmpty(validationOptionsMsg('Name cannot be empty'))
  name: string;
}
