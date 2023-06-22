import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { RentalPeriod } from './schemas/rental-period.schema';
import { FindRentalPeriodArgs } from './dto/find-rental-period.args';

@Injectable()
export class RentalPeriodService {
  constructor(
    @InjectModel(RentalPeriod.name)
    private readonly rentalPeriodModel: Model<RentalPeriod>,
  ) {}

  async findAll(args: FindRentalPeriodArgs): Promise<RentalPeriod[]> {
    const query = {};
    if (args.productId) query['product'] = args.productId;
    if (args.startDate) query['startDate'] = args.startDate;
    return this.rentalPeriodModel.find(query).exec();
  }
}
