import { Entity, EntityRepository, Repository } from 'typeorm';
import { Product } from 'src/product/product';

@EntityRepository(Product)
export class ProductRepository extends Repository<Product> {}