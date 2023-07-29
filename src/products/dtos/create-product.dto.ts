import { Transform } from 'class-transformer';
import {
  IsInt,
  IsNotEmpty,
  IsString,
  Length,
  Min,
} from 'class-validator';

export class CreateProductDTO {
  @IsNotEmpty()
  @IsString()
  @Length(3, 20)
  name: string;

  @IsNotEmpty()
  @Transform(({ value }) => {
    return Number(value);
  })
  @Min(0)
  @IsInt()
  price: number;

  @IsNotEmpty()
  @IsString()
  description: string;
}