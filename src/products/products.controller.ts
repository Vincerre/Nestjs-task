import { Controller, Get, Post, Delete, Param, Body } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDTO } from './dtos/create-product.dto';

@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}
  @Get('/')
  getAll(): any {
    return this.productsService.getAll();
  }
  @Get('/:id')
  public getById(@Param('id') id: string) {
    return this.productsService.getById(id);
  }
  @Delete('/:id')
  deleteById(@Param('id') id: string) {
    this.productsService.deleteById(id);
    return { success: true };
  }
  @Post('/')
  create(@Body() productData: CreateProductDTO) {
    return this.productsService.create(productData);
  }
}
