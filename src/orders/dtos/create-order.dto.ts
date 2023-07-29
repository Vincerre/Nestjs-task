import {
  IsNotEmpty,
  IsString,
  Length,
  Min,
} from 'class-validator';

export class CreateOrderDTO {
    @IsNotEmpty()
    @IsString()
    productId: string;

    @IsNotEmpty()
    @IsString()
    @Length(4, 20)
    client: string;
    
    @IsNotEmpty()
    @IsString()
    @Length(10, 20)
    address: string;
}