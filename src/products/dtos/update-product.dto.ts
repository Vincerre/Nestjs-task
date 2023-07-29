import { Transform } from 'class-transformer';
import { IsInt, IsNotEmpty, IsString, Length, Min } from 'class-validator';

export class UpdateProductDTO {
  @IsNotEmpty()
  @Length(5, 20)
  name: string;

  @IsNotEmpty()
  @Transform(({ value }) => {
    return Number(value);
  })
  @IsInt()
  @Min(0)
  price: number;

  @IsString()
  @IsNotEmpty()
  description: string;
}