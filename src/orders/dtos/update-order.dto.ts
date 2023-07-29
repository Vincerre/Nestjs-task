import {
    IsNotEmpty,
    IsString,
    Length,
    IsUUID  
} from 'class-validator';
  
  export class UpdateOrderDTO {
      @IsNotEmpty()
      @IsString()
      @IsUUID()
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