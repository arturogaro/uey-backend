import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { faker } from '@faker-js/faker';
import {
  Product,
  ProductType,
  RentType,
} from 'src/product/schemas/product.schema';
import { RentalPeriod } from 'src/rental-period/schemas/rental-period.schema';

@Injectable()
export class ProductSeeder {
  constructor(
    @InjectModel(Product.name)
    private readonly productModel: Model<Product>,
    @InjectModel(RentalPeriod.name)
    private readonly rentalPeriodModel: Model<RentalPeriod>,
  ) {}

  async seed() {
    const productsCount = await this.productModel.countDocuments();

    if (productsCount === 0) {
      const promises = Array(100)
        .fill(null)
        .map(async (_, i) => {
          console.log('Creating product...', i);
          const product = new this.productModel();
          const productType = faker.helpers.arrayElement([
            ProductType.SIMPLE,
            ProductType.RENTABLE,
            ProductType.SPACE,
          ]) as ProductType;
          product.name = faker.commerce.productName();
          product.slug = faker.helpers.slugify(product.name);
          product.seller = faker.company.name();
          product.imageUrl = faker.image.url();
          product.price = parseInt(faker.commerce.price());
          product.type = productType;
          if (productType === ProductType.RENTABLE) {
            product.rentType = faker.helpers.arrayElement([
              RentType.PER_HOUR,
              RentType.PER_NIGHT,
            ]) as RentType;
          }
          if (productType === ProductType.SPACE) {
            product.latitude = faker.location.latitude();
            product.longitude = faker.location.longitude();
          }
          if (productType === ProductType.SIMPLE) {
            product.stock = faker.number.int({ max: 10 });
          }

          product.save();

          if (
            productType === ProductType.RENTABLE ||
            productType === ProductType.SPACE
          ) {
            const rentalPeriod = new this.rentalPeriodModel();
            rentalPeriod.product = product.id;
            const startDate = faker.date.soon();
            const endDate = new Date(
              startDate.setDate(startDate.getDate() + 1),
            );
            rentalPeriod.startDate = startDate;
            rentalPeriod.endDate = endDate;
            await rentalPeriod.save();
          }
        });

      await Promise.all(promises);
      console.log('Product seed data added');
    } else {
      console.log('Product seed data already added');
    }
  }
}
