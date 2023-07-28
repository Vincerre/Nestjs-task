import {
    IsNotEmpty,
    IsString,
    Length,
    Min,
  } from 'class-validator';
  
  export class UpdateOrderDTO {
      @IsNotEmpty()
      @IsString()
      @Min(0)
      productId: string;
  
      @IsNotEmpty()
      @IsString()
      @Length(5, 20)
      client: string;
      
      @IsNotEmpty()
      @IsString()
      @Length(10, 20)
      address: string;
  }