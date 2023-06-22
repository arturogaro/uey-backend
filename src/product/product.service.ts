import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Product } from './schemas/product.schema';
import { Model } from 'mongoose';
import { FindProductsArgs } from './dto/find-product.args';

@Injectable()
export class ProductService {
  constructor(
    @InjectModel(Product.name)
    private readonly productModel: Model<Product>,
  ) {}

  async findAll(args: FindProductsArgs): Promise<Product[]> {
    const query = {};
    if (args.id) query['_id'] = args.id;
    if (args.type) query['type'] = args.type;
    return this.productModel.find(query).exec();
  }

  async findOne(id: string): Promise<Product> {
    const product = this.productModel.findById(id).exec();

    if (!product)
      throw new NotFoundException(`Product with id: ${id} not found`);

    return product;
  }
}
