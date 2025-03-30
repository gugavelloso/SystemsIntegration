import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { ProductService } from './product.service';
import { Product } from './product';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  async findAll(): Promise<Product[]> {
    return this.productService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Product> {
    return this.productService.findOne(+id);
  }

  @Post()
  async create(@Body() productData: Partial<Product>): Promise<Product> {
    return this.productService.create(productData);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() productData: Partial<Product>,
  ): Promise<Product> {
    return this.productService.update(+id, productData);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<void> {
    return this.productService.remove(+id);
  }
}
