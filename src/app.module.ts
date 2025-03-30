import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './product/product';
import { ProductModule } from './product/product.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3307,
      username: 'root',
      password: 'Bl4ckS4bb@th*',
      database: 'product',
      entities: [Product],
      synchronize: false,
    }),
    ProductModule,
  ],
})
export class AppModule {}