import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductSeeder } from './seeder';
import { Product, ProductSchema } from 'src/product/schemas/product.schema';
import {
  RentalPeriod,
  RentalPeriodSchema,
} from 'src/rental-period/schemas/rental-period.schema';

@Module({
  providers: [ProductSeeder],
  imports: [
    MongooseModule.forFeature([{ name: Product.name, schema: ProductSchema }]),
    MongooseModule.forFeature([
      { name: RentalPeriod.name, schema: RentalPeriodSchema },
    ]),
  ],
})
export class SeederModule {}
