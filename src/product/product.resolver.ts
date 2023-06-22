import { Resolver, Query, Args, ID } from '@nestjs/graphql';
import { ProductService } from './product.service';
import { Product } from './schemas/product.schema';
import { FindProductsArgs } from './dto/find-product.args';

@Resolver(() => Product)
export class ProductResolver {
  constructor(private readonly productService: ProductService) {}

  @Query(() => [Product], { name: 'products' })
  async findAll(
    @Args({ nullable: true })
    findProductsArgs: FindProductsArgs = null,
  ): Promise<Product[]> {
    return this.productService.findAll(findProductsArgs);
  }

  @Query(() => Product, { name: 'product' })
  async findOne(@Args('id', { type: () => ID }) id: string): Promise<Product> {
    return this.productService.findOne(id);
  }
}
