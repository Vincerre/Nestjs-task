import {
  IsNotEmpty,
  IsString,
  Length,
  IsUUID
} from 'class-validator';

export class CreateOrderDTO {
    @IsNotEmpty()
    @IsString()
    @IsUUID()
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