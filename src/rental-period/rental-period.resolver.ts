import { Resolver, Query, Args } from '@nestjs/graphql';
import { RentalPeriodService } from './rental-period.service';
import { RentalPeriod } from './schemas/rental-period.schema';
import { FindRentalPeriodArgs } from './dto/find-rental-period.args';

@Resolver(() => RentalPeriod)
export class RentalPeriodResolver {
  constructor(private readonly rentalPeriodService: RentalPeriodService) {}

  @Query(() => [RentalPeriod], { name: 'rentalPeriods' })
  async findAll(
    @Args({ nullable: true })
    findProductsArgs: FindRentalPeriodArgs = null,
  ): Promise<RentalPeriod[]> {
    return this.rentalPeriodService.findAll(findProductsArgs);
  }
}
