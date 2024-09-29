import { IsNotEmpty } from 'class-validator';
import { validationOptionsMsg } from 'src/v1/common/utils/GLOBAL';

export class CategoryDto {
  @IsNotEmpty(validationOptionsMsg('Name cannot be empty'))
  name: string;
}
