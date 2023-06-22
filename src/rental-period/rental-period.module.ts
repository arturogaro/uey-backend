import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import {
  RentalPeriod,
  RentalPeriodSchema,
} from './schemas/rental-period.schema';
import { RentalPeriodResolver } from './rental-period.resolver';
import { RentalPeriodService } from './rental-period.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: RentalPeriod.name, schema: RentalPeriodSchema },
    ]),
  ],
  providers: [RentalPeriodResolver, RentalPeriodService],
})
export class RentalPeriodModule {}
