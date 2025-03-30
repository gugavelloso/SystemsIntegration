import { ProductService } from './product.service';
import { Product } from './product';
export declare class ProductController {
    private readonly productService;
    constructor(productService: ProductService);
    findAll(): Promise<Product[]>;
    findOne(id: string): Promise<Product>;
    create(productData: Partial<Product>): Promise<Product>;
    update(id: string, productData: Partial<Product>): Promise<Product>;
    remove(id: string): Promise<void>;
}
